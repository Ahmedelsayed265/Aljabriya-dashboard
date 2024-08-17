import PageHeader from "../components/PageHeader";
import DaysSliderFilter from "../components/DaysSliderFilter";
import LotteriesSlider from "../components/LotteriesSlider";
import LotteriesTable from "../components/LotteriesTable";
import useGetLotteries from "../hooks/useGetLotteries";
import DataLoader from "../ui/DataLoader";

export default function Home() {
  const { data: lotteries, isLoading } = useGetLotteries();
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
              {isLoading ? (
                <DataLoader />
              ) : (
                <LotteriesSlider lotteries={lotteries} />
              )}
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
              <LotteriesTable />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
