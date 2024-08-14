import PageHeader from "../components/PageHeader";

export default function Investors() {
  return (
    <section className="investors">
      <div className="container">
        <div className="row">
          <PageHeader
            path={[{ name: "بيانات المساهمين", path: "/investors" }]}
          />
        </div>
      </div>
    </section>
  );
}
