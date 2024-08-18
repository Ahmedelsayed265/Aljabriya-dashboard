import { useState, useEffect } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { toast } from "react-toastify";
import { axiosInstance } from "../utils/axiosInstance";
import { errorHandle } from "../utils/helpers";
import PageHeader from "../components/PageHeader";

export default function Investors() {
  const [investors, setInvestors] = useState([]);
  const [loading, setLoading] = useState(false);
  const [file, setFile] = useState(null);

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
        setInvestors(res.data.investors);
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
  }, [file]);

  const editTemplate = () => {
    return (
      <button disabled={loading}>
        <img src="/assets/images/edit.svg" alt="edit" />
      </button>
    );
  };

  const deleteTemplate = () => {
    return (
      <button disabled={loading}>
        <img src="/assets/images/delete.svg" alt="delete" />
      </button>
    );
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
              <div className="header">
                <h1>بيانات المساهمين</h1>
                <form className="search_form">
                  <div className="input_field">
                    <img src="/assets/images/search.svg" alt="searchIcon" />
                    <input type="text" placeholder="البحث" disabled={loading} />
                  </div>
                  {investors.length > 0 && (
                    <button type="button" disabled={loading}>
                      <label
                        htmlFor="file"
                        style={{ cursor: loading ? "not-allowed" : "pointer" }}
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
              {investors.length > 0 ? (
                <>
                  <div className="table-container">
                    <DataTable value={investors}>
                      <Column field="index" header="م" />
                      <Column field="name" header="الاسم" />
                      <Column field="mobile" header="رقم الموبايل" />
                      <Column field="national_id" header="الرقم المدني" />
                      <Column field="box_number" header="رقم الصندوق" />
                      <Column field="age" header="السن" />
                      <Column field="gender" header="النوع" />
                      <Column body={editTemplate} />
                      <Column body={deleteTemplate} />
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
                      style={{ cursor: loading ? "not-allowed" : "pointer" }}
                    >
                      <img src="/assets/images/download.svg" alt="filterIcon" />{" "}
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
