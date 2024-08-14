import CheckField from "../../ui/CheckField";

export default function RulesForm({ formData, setFormData, setForm }) {
  const rules = [
    { id: 1, name: "العمر (اجباري)" },
    { id: 2, name: "النوع (اجباري)" },
    { id: 3, name: "المحافظة (اجباري)" },
    { id: 4, name: "المدينة (اجباري)" }
  ];

  const handleChange = (e, rule) => {
    const checked = e.target.checked;
    if (checked) {
      setFormData({
        ...formData,
        rules: [...formData.rules, rule]
      });
    } else {
      const filteredRules = formData.rules.filter((r) => r.id !== rule.id);
      setFormData({ ...formData, rules: filteredRules });
    }
  };

  return (
    <form className="form_ui">
      <div className="row m-0">
        {rules.map((r) => (
          <div className="col-lg-6 col-12 p-2" key={r.id}>
            <CheckField
              name={r.name}
              id={r.id}
              checked={formData.rules.includes(r.id)}
              onChange={(e) => handleChange(e, r.id)}
            />
          </div>
        ))}

        <div className="col-12 p-2 mt-3 d-flex justify-content-end">
          <div className="d-flex gap-3">
            <button className="prev" onClick={() => setForm("details")}>
              السابق
            </button>
            <button className="next" onClick={() => setForm("rules")}>
              التالي
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}
