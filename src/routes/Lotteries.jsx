import { Link } from "react-router-dom";
import LotteriesTable from "../components/LotteriesTable";
import PageHeader from "../components/PageHeader";

export default function Lotteries() {
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
                    <img src="/assets/images/search.svg" alt="searchIcon" />
                    <input type="text" placeholder="ابحث عن قرعة" />
                  </div>
                  <Link to="/lotteries/add-lottery">
                    <img src="/assets/images/plus.svg" alt="filterIcon" />
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
              <LotteriesTable />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
