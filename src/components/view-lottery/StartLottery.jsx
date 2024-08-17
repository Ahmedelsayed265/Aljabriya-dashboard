export default function StartLottery({ lottery }) {
  return (
    <>
      <div className="lottery_info">
        <h3>{lottery?.title}</h3>
        <ul>
          <li>
            <img src="/assets/images/calendar.svg" alt="calender" />
            اخر موعد للتسجيل: {lottery?.to_date}
          </li>
          <li>
            <img src="/assets/images/users.svg" alt="users" />
            عدد المسجلين بالقرعة حتى الآن: {lottery?.usersCount}
          </li>
        </ul>
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
            <input type="radio" id="finished_lotteries" name="lotteries" />
            <div className="content">
              <h3>القرعات المنتهية</h3>
            </div>
          </label>
        </div>
      </div>
    </>
  );
}
