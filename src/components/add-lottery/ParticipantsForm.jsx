export default function ParticipantsForm({ setForm }) {
  return (
    <form className="form_ui">
      <div className="row m-0">
        <div className="col-12 p-2 mt-3 d-flex justify-content-end">
          <div className="d-flex gap-3">
            <button className="prev" onClick={() => setForm("details")}>
              السابق
            </button>
            <button className="next">حفظ</button>
          </div>
        </div>
      </div>
    </form>
  );
}
