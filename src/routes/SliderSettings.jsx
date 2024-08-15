import PageHeader from "../components/PageHeader";

export default function SliderSettings() {
  return (
    <section className="settings">
      <div className="container">
        <div className="row">
          <PageHeader
            base="الاعدادات"
            path={[{ name: "السلايدر", path: "/slider-settings" }]}
          />
          <div className="col-12 p-2"></div>
        </div>
      </div>
    </section>
  );
}
