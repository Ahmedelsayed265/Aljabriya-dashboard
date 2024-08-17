import { DataTable } from "primereact/datatable";
import PageHeader from "../components/PageHeader";
import useGetSlider from "../hooks/useGetSlider";
import DataLoader from "../ui/DataLoader";
import { Column } from "primereact/column";

export default function SliderSettings() {
  const { data: slider, isLoading } = useGetSlider();

  const imageTemplate = (rowData) => {
    return (
      <div className="row_img">
        <img
          src={
            rowData.type?.startsWith("image/")
              ? URL.createObjectURL(rowData)
              : rowData
          }
          alt={rowData.name || rowData}
        />
        <h6>{rowData.name || ""}</h6>
      </div>
    );
  };

  function truncate(inputString) {
    let truncateStringResult;
    if (inputString.length > 20) {
      truncateStringResult = inputString.substring(0, 20) + "...";
    } else {
      truncateStringResult = inputString;
    }
    return truncateStringResult;
  }

  const statusTemplate = (rowData) => {
    console.log(rowData.status);

    const status = rowData.status === "1" ? "مفعل" : "غير مفعل";
    return (
      <span
        className={rowData.status === "1" ? "status-Started" : "status-Ended"}
      >
        {status}
      </span>
    );
  };

  const descriptionTemplate = (rowData) => {
    return (
      <div className="description">
        <p>{truncate(rowData.description)}</p>
      </div>
    );
  };

  return (
    <section className="settings">
      <div className="container">
        <div className="row">
          <PageHeader
            base="الاعدادات"
            path={[{ name: "السلايدر", path: "/slider-settings" }]}
          />
          <div className="col-12 p-2">
            <div className="inner_card">
              <div className="header">
                <h1>السلايدر</h1>
                <div className="search_form">
                  <button>
                    <img src="/assets/images/plus.svg" alt="filterIcon" />
                    اضافة اسلايد
                  </button>
                </div>
              </div>
              {isLoading ? (
                <DataLoader />
              ) : (
                <>
                  <div className="table-container">
                    <DataTable value={slider}>
                      <Column field="id" header="ID" />
                      <Column
                        field="image"
                        body={imageTemplate}
                        header="الصورة"
                      />
                      <Column field="title" header="النص" />
                      <Column
                        field="description"
                        body={descriptionTemplate}
                        header="الوصف"
                      />
                      <Column
                        field="status"
                        body={statusTemplate}
                        header="الحالة"
                      />
                    </DataTable>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
