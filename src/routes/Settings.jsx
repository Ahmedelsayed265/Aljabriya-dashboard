import PageHeader from "../components/PageHeader";

export default function Settings() {
  return (
    <section className="settings">
      <div className="container">
        <div className="row">
          <PageHeader
            base="الاعدادات"
            path={[{ name: "إعدادات الحساب", path: "/account-settings" }]}
          />
          <div className="col-12 p-2"></div>
        </div>
      </div>
    </section>
  );
}
