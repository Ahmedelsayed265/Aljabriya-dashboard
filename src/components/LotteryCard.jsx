import { Link } from "react-router-dom";

export default function LotteryCard() {
  return (
    <div className="lottery_card">
      <div className="img">
        <img src="/public/assets/images/sportClub.png" alt="slide1" />
        <div className="timer">
          <div className="block">
            <div className="d-flex gap-2">
              <div className="box">0</div>
              <div className="box">0</div>
            </div>
            <span>ثواني</span>
          </div>
          <span className="center">:</span>
          <div className="block">
            <div className="d-flex gap-2">
              <div className="box">0</div>
              <div className="box">0</div>
            </div>
            <span>دقائق</span>
          </div>
          <span className="center">:</span>
          <div className="block">
            <div className="d-flex gap-2">
              <div className="box">0</div>
              <div className="box">0</div>
            </div>
            <span>ساعات</span>
          </div>
        </div>
      </div>
      <div className="content">
        <h4>نوادي رياضية</h4>
        <p>
          <img src="/public/assets/images/users.svg" alt="users" />
          عدد المسجلين بالقرعة حتى الآن: ٢٥٠
        </p>
        <p>
          <img src="/public/assets/images/calendar.svg" alt="calender" />
          آخر موعد للتسجيل: ٢٠ / ٦ / ٢٠٢٤
        </p>
      </div>
      <Link className="view_lottery" to="/">
        عرض القرعة
      </Link>
    </div>
  );
}
