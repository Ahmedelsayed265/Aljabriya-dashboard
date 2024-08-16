import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import PageHeader from "../components/PageHeader";
import DaysSliderFilter from "../components/DaysSliderFilter";
import LotteriesSlider from "../components/LotteriesSlider";
import Pagination from "../ui/Pagination";

export default function Home() {
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
    <section className="home">
      <div className="container">
        <div className="row">
          <PageHeader />
          <div className="col-12 p-2">
            <div className="inner_card">
              <div className="header">
                <h1>القرعات الفعالة</h1>
                <form className="search_form">
                  <div className="input_field">
                    <img src="/assets/images/search.svg" alt="searchIcon" />
                    <input type="text" placeholder="ابحث عن قرعة" />
                  </div>
                  <button>
                    <img src="/assets/images/filter.svg" alt="filterIcon" />
                    تصفية
                  </button>
                </form>
              </div>

              <DaysSliderFilter />

              <LotteriesSlider />
              <div className="lotteries-pagination" />

              <div className="header">
                <h1>جميع القرعات</h1>
                <form className="search_form">
                  <div className="input_field">
                    <img src="/assets/images/search.svg" alt="searchIcon" />
                    <input type="text" placeholder="ابحث عن قرعة" />
                  </div>
                  <button>
                    <img src="/assets/images/filter.svg" alt="filterIcon" />
                    تصفية
                  </button>
                </form>
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
