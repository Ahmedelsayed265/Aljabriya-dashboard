import { useState, useEffect } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { toast } from "react-toastify";
import { axiosInstance } from "../utils/axiosInstance";
import { errorHandle } from "../utils/helpers";
import { useSearchParams } from "react-router-dom";
import { useQueryClient } from "@tanstack/react-query";
import PageHeader from "../components/PageHeader";
import useGetImpotedUsers from "../hooks/useGetImpotedUsers";
import DataLoader from "../ui/DataLoader";

export default function Investors() {
  const queryClient = useQueryClient();
  const [loading, setLoading] = useState(false);
  const [file, setFile] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const search = searchParams.get("search");
  const [searchValue, setSearchValue] = useState(search || "");
  const { data: investors, isLoading } = useGetImpotedUsers();

  useEffect(() => {
    setSearchValue(search || "");
  }, [search]);

  const handleImportInvestors = async (selectedFile) => {
    if (!selectedFile) {
      toast.error("الرجاء اختيار ملف للتحميل");
      return;
    }
    setLoading(true);

    const formData = new FormData();
    formData.append("file", selectedFile);

    try {
      const res = await axiosInstance.post("/import", formData, {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      });
      if (res.data.status === 200) {
        queryClient.invalidateQueries({ queryKey: ["imported-users"] });
        toast.success("تم تحميل المساهمين بنجاح");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      toast.error(errorHandle(error, "حدث خطأ ما ، الرجاء المحاولة مرة أخرى"));
    } finally {
      setLoading(false);
      setFile(null);
    }
  };

  useEffect(() => {
    if (file) {
      handleImportInvestors(file);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [file]);

  // const editTemplate = () => {
  //   return (
  //     <button disabled={loading}>
  //       <img src="/assets/images/edit.svg" alt="edit" />
  //     </button>
  //   );
  // };

  // const deleteTemplate = () => {
  //   return (
  //     <button disabled={loading}>
  //       <img src="/assets/images/delete.svg" alt="delete" />
  //     </button>
  //   );
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchParams({ search: e.target[0].value });
  };

  return (
    <section className="investors">
      <div className="container">
        <div className="row">
          <PageHeader
            path={[{ name: "بيانات المساهمين", path: "/investors" }]}
          />
          <div className="col-12 p-2">
            <div className="inner_card">
              {isLoading ? (
                <DataLoader />
              ) : (
                <>
                  <div className="header">
                    <h1>بيانات المساهمين</h1>
                    <form className="search_form" onSubmit={handleSubmit}>
                      <div className="input_field">
                        <img src="/assets/images/search.svg" alt="searchIcon" />
                        <input
                          type="text"
                          placeholder="البحث"
                          value={searchValue}
                          onChange={(e) => setSearchValue(e.target.value)}
                        />
                      </div>
                      {investors?.length > 0 && (
                        <button type="button" disabled={loading}>
                          <label
                            htmlFor="file"
                            style={{
                              cursor: loading ? "not-allowed" : "pointer"
                            }}
                          >
                            <img
                              src="/assets/images/download.svg"
                              alt="filterIcon"
                            />{" "}
                            {loading ? "جار التحميل..." : "استيراد البيانات"}
                          </label>
                          <input
                            accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
                            type="file"
                            name="file"
                            id="file"
                            onChange={(e) => setFile(e.target.files[0])}
                            style={{ display: "none" }}
                            disabled={loading}
                          />
                        </button>
                      )}
                    </form>
                  </div>
                  {investors?.length > 0 ? (
                    <>
                      <div className="table-container">
                        <DataTable value={investors}>
                          <Column field="id" header="م" />
                          <Column field="full_name" header="الاسم" />
                          <Column field="mobile" header="رقم الموبايل" />
                          <Column field="national_id" header="الرقم المدني" />
                          <Column field="box_id" header="رقم الصندوق" />
                          {/* <Column body={editTemplate} />
                          <Column body={deleteTemplate} /> */}
                        </DataTable>
                      </div>
                    </>
                  ) : (
                    <div className="empty_data">
                      <img src="/assets/images/empty.svg" alt="no-data" />
                      <p>قم الان باستيراد بيانات المساهمين من ملف الاكسل</p>
                      <button
                        type="button"
                        disabled={loading}
                        style={{ opacity: loading ? 0.7 : 1 }}
                      >
                        <label
                          htmlFor="file"
                          style={{
                            cursor: loading ? "not-allowed" : "pointer"
                          }}
                        >
                          <img
                            src="/assets/images/download.svg"
                            alt="filterIcon"
                          />{" "}
                          {loading ? "جار التحميل..." : "استيراد البيانات"}
                        </label>
                        <input
                          accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
                          type="file"
                          name="file"
                          id="file"
                          onChange={(e) => setFile(e.target.files[0])}
                          style={{ display: "none" }}
                          disabled={loading}
                        />
                      </button>
                    </div>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
