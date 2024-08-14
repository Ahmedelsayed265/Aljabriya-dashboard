import homeIcon from "../assets/images/home-line.svg";
import arrow from "../assets/images/arrow-left.svg";
import { Link } from "react-router-dom";
import { Fragment } from "react";

function PageHeader({ path = [] }) {
  return (
    <div className="col-12 p-2">
      <div className="page_header">
        <div className="home">
          <div className="icon">
            <img src={homeIcon} alt="homeIcon" />
          </div>
          {path.length === 0 ? (
            <h6 className="active" to="/">
              الرئيسية
            </h6>
          ) : (
            <Link to="/">الرئيسية</Link>
          )}
        </div>
        {path.map((item, index) => {
          return (
            <Fragment key={index}>
              <img src={arrow} alt="arrow" />
              {index === path.length - 1 ? (
                <h6 className="active" to={item.path}>
                  {item.name}
                </h6>
              ) : (
                <Link to={item.path}>{item.name}</Link>
              )}
            </Fragment>
          );
        })}
      </div>
    </div>
  );
}

export default PageHeader;
