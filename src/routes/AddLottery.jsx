import { useState } from "react";
import PageHeader from "../components/PageHeader";
import DetailsForm from "../components/add-lottery/DetailsForm";
import MediaForm from "../components/add-lottery/MediaForm";
import RulesForm from "../components/add-lottery/RulesForm";
import ParticipantsForm from "../components/add-lottery/ParticipantsForm";

const stepsAr = {
  details: "إضافة تفاصيل  القرعة",
  media: "إضافة صور السلايدر",
  rules: "إضافة قواعد القرعة",
  participants: "قائمة المشاركين"
};

export default function AddLottery() {
  const categoriesInitial = {
    name: "",
    count: ""
  };
  const [form, setForm] = useState("details");
  const [formData, setFormData] = useState({
    name: "",
    live: "",
    age_from: "",
    age_to: "",
    last_register_date: "",
    categories: [categoriesInitial],
    main_image: "",
    images: [],
    rules: []
  });

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
          <div className="col-12 p-2">
            <div className="inner_card">
              <div className="wizard_tabs">
                {["details", "media", "rules", "participants"].map(
                  (fo, index) => {
                    return (
                      <div
                        key={index}
                        className={`tab ${form === fo ? "active" : ""}`}
                        onClick={() => setForm(fo)}
                      >
                        <div className="circle_icon">
                          <span />
                        </div>
                        <h6>{stepsAr[fo]}</h6>
                      </div>
                    );
                  }
                )}
              </div>
              {form === "details" && (
                <DetailsForm
                  formData={formData}
                  setForm={setForm}
                  setFormData={setFormData}
                  categoriesInitial={categoriesInitial}
                />
              )}
              {form === "media" && (
                <MediaForm
                  formData={formData}
                  setForm={setForm}
                  setFormData={setFormData}
                />
              )}
              {form === "rules" && (
                <RulesForm
                  formData={formData}
                  setForm={setForm}
                  setFormData={setFormData}
                />
              )}
              {form === "participants" && (
                <ParticipantsForm
                  formData={formData}
                  setForm={setForm}
                  setFormData={setFormData}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
