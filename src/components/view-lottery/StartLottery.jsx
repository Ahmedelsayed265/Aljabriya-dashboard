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
      </div>
    </>
  );
}
