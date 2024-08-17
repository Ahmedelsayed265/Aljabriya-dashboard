import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import PageHeader from "../components/PageHeader";

export default function Investors() {
  const investors = [
    {
      index: "1",
      name: "محمد عبدالله",
      mobile: "0123456789",
      national_id: "1234567890",
      box_number: "1234567890",
      age: "25",
      gender: "male"
    },
    {
      index: "2",
      name: "محمد عبدالله",
      mobile: "0123456789",
      national_id: "1234567890",
      box_number: "1234567890",
      age: "25",
      gender: "male"
    },
    {
      index: "3",
      name: "محمد عبدالله",
      mobile: "0123456789",
      national_id: "1234567890",
      box_number: "1234567890",
      age: "25",
      gender: "male"
    },
    {
      index: "4",
      name: "محمد عبدالله",
      mobile: "0123456789",
      national_id: "1234567890",
      box_number: "1234567890",
      age: "25",
      gender: "male"
    },
    {
      index: "5",
      name: "محمد عبدالله",
      mobile: "0123456789",
      national_id: "1234567890",
      box_number: "1234567890",
      age: "25",
      gender: "male"
    },
    {
      index: "6",
      name: "محمد عبدالله",
      mobile: "0123456789",
      national_id: "1234567890",
      box_number: "1234567890",
      age: "25",
      gender: "male"
    },
    {
      index: "7",
      name: "محمد عبدالله",
      mobile: "0123456789",
      national_id: "1234567890",
      box_number: "1234567890",
      age: "25",
      gender: "male"
    }
  ];
  const editTemplate = () => {
    return (
      <button>
        <img src="/assets/images/edit.svg" alt="edit" />
      </button>
    );
  };
  const deleteTemplate = () => {
    return (
      <button>
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
                    <img
                      src="/assets/images/search.svg"
                      alt="searchIcon"
                    />
                    <input type="text" placeholder="البحث" />
                  </div>
                  {investors.length > 0 && (
                    <button>
                      <img
                        src="/assets/images/download.svg"
                        alt="filterIcon"
                      />
                      استيراد البيانات
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
                  <button>
                    <img
                      src="/assets/images/download.svg"
                      alt="filterIcon"
                    />
                    استيراد البيانات
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
