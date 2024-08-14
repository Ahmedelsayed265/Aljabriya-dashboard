import { DataTable } from "primereact/datatable";
import PageHeader from "../components/PageHeader";
import plusIcon from "../assets/images/plus.svg";
import searchIcon from "../assets/images/search.svg";
import { Column } from "primereact/column";
import { Link } from "react-router-dom";
import Pagination from "../ui/Pagination";

export default function Lotteries() {
  const lotteries = [
    {
      index: "1",
      name: "قرعة النوادي الرياضية",
      id: "١٢٣٥٦٧",
      description: "هذا النص يمكن...",
      category: "أوكسجين",
      no_of_clients: "300",
      status: "مجدولة",
      last_visit: "١٥ / ١ / ٢٠٢٤"
    },
    {
      index: "2",
      name: "قرعة النوادي الرياضية",
      id: "١٢٣٥٦٧",
      description: "هذا النص يمكن...",
      category: "أوكسجين",
      no_of_clients: "300",
      status: "انتهت",
      last_visit: "١٥ / ١ / ٢٠٢٤"
    },
    {
      index: "3",
      name: "قرعة النوادي الرياضية",
      id: "١٢٣٥٦٧",
      description: "هذا النص يمكن...",
      category: "أوكسجين",
      no_of_clients: "300",
      status: "بدأت",
      last_visit: "١٥ / ١ / ٢٠٢٤"
    },
    {
      index: "4",
      name: "قرعة النوادي الرياضية",
      id: "١٢٣٥٦٧",
      description: "هذا النص يمكن...",
      category: "أوكسجين",
      no_of_clients: "300",
      status: "انتهت",
      last_visit: "١٥ / ١ / ٢٠٢٤"
    },
    {
      index: "5",
      name: "قرعة النوادي الرياضية",
      id: "١٢٣٥٦٧",
      description: "هذا النص يمكن...",
      category: "أوكسجين",
      no_of_clients: "300",
      status: "مجدولة",
      last_visit: "١٥ / ١ / ٢٠٢٤"
    },
    {
      index: "6",
      name: "قرعة النوادي الرياضية",
      id: "١٢٣٥٦٧",
      description: "هذا النص يمكن...",
      category: "أوكسجين",
      no_of_clients: "300",
      status: "انتهت",
      last_visit: "١٥ / ١ / ٢٠٢٤"
    }
  ];

  const statusTemplate = (rowData) => {
    const status = rowData.status;
    let className = "";
    if (status === "مجدولة") {
      className = "status-Scheduled";
    } else if (status === "بدأت") {
      className = "status-Started";
    } else {
      className = "status-Ended";
    }
    return <span className={className}>{rowData.status}</span>;
  };

  return (
    <section className="lotteries">
      <div className="container">
        <div className="row">
          <PageHeader path={[{ name: "قائمة القرعات", path: "/lotteries" }]} />
          <div className="col-12 p-2">
            <div className="inner_card">
              <div className="header">
                <h1>جميع القرعات</h1>
                <form className="search_form">
                  <div className="input_field">
                    <img src={searchIcon} alt="searchIcon" />
                    <input type="text" placeholder="ابحث عن قرعة" />
                  </div>
                  <Link to="/lotteries/add-lottery">
                    <img src={plusIcon} alt="filterIcon" />
                    إضافة قرعة
                  </Link>
                </form>
              </div>

              <div className="lotteries_type">
                <label htmlFor="active_lotteries">
                  <input
                    defaultChecked
                    type="radio"
                    id="active_lotteries"
                    name="lotteries"
                  />
                  <div className="content">
                    <h3>القرعات الفعالة</h3>
                  </div>
                </label>
                <label htmlFor="finished_lotteries">
                  <input
                    type="radio"
                    id="finished_lotteries"
                    name="lotteries"
                  />
                  <div className="content">
                    <h3>القرعات المنتهية</h3>
                  </div>
                </label>
              </div>

              <div className="table-container">
                <DataTable value={lotteries}>
                  <Column field="index" header="م" />
                  <Column field="name" header="الاسم" />
                  <Column field="id" header="ID" />
                  <Column field="description" header="الوصف" />
                  <Column field="category" header="التصنيف" />
                  <Column field="no_of_clients" header="عدد المسجلين" />
                  <Column
                    field="status"
                    body={statusTemplate}
                    header="الحالة"
                  />
                  <Column field="last_visit" header="اخر موعد للتسجيل" />
                  <Column field="" header="" />
                </DataTable>
              </div>

              <Pagination count={30} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
