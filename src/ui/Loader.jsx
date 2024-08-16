import fav from "../assets/images/logo.svg";
export default function Loader() {
  return (
    <div className="loader">
      <img src={fav} alt="fav" />
      <span></span>
    </div>
  );
}
