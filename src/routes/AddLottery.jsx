import PageHeader from "./../assets/components/PageHeader";

export default function AddLottery() {
  return (
    <section className="add-lottery">
      <div className="container">
        <div className="row">
          <PageHeader
            path={[
              { name: "قائمة القرعات", path: "/lotteries" },
              { name: "اضافة قرعة", path: "/add-lottery" }
            ]}
          />
        </div>
      </div>
    </section>
  );
}
