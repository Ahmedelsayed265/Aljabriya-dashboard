import { handleChange } from "../../utils/helpers";
import FromToInput from "../../ui/FromToInput";
import InputField from "../../ui/InputField";
import Categories from "./Categories";
import imgPlaceholder from "../../assets/images/img.svg";
import upload from "../../assets/images/upload.svg";

export default function DetailsForm({
  formData,
  setForm,
  setFormData,
  categoriesInitial
}) {
  return (
    <form className="form_ui">
      <div className="row m-0">
        <div className="col-lg-6 col-12 p-2">
          <InputField
            label="اسم القرعة"
            placeholder="أدخل اسم القرعة"
            id="name"
            name="name"
            type="text"
            value={formData.name}
            onChange={(e) => handleChange(e, setFormData)}
          />
        </div>
        <div className="col-lg-6 col-12 p-2">
          <InputField
            label="رابط البث المباشر"
            placeholder="أدخل رابط البث المباشر"
            id="live"
            name="live"
            type="url"
            value={formData.live}
            onChange={(e) => handleChange(e, setFormData)}
          />
        </div>
        <div className="col-lg-6 col-12 p-2">
          <div className="input-field">
            <label>السن</label>
            <div className="d-flex gap-2">
              <FromToInput
                id="age_from"
                name="age_from"
                placeholder="١٨"
                type="number"
                label="من"
                value={formData.age_from}
                onChange={(e) => handleChange(e, setFormData)}
              />
              <FromToInput
                id="age_from"
                name="age_from"
                type="number"
                placeholder="٦٠"
                label="الي"
                value={formData.age_from}
                onChange={(e) => handleChange(e, setFormData)}
              />
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-12 p-2">
          <InputField
            label="اخر موعد للتسجيل"
            id="last_register_date"
            name="last_register_date"
            type="date"
            value={formData.last_register_date}
            onChange={(e) => handleChange(e, setFormData)}
          />
        </div>
        <div className="col-12 p-2">
          <Categories
            categoriesInitial={categoriesInitial}
            formData={formData}
            setFormData={setFormData}
          />
        </div>
        <div className="col-12 p-2">
          <InputField
            label="الوصف"
            placeholder="أدخل الوصف"
            id="description"
            name="description"
            as="textarea"
            value={formData.description}
            onChange={(e) => handleChange(e, setFormData)}
          />
        </div>
        <div className="col-12 p-2">
          <InputField
            label="الشروط والاحكام"
            placeholder="أدخل الشروط والاحكام"
            id="terms_and_conditions"
            name="terms_and_conditions"
            as="textarea"
            value={formData.terms_and_conditions}
            onChange={(e) => handleChange(e, setFormData)}
          />
        </div>
        <div className="col-12 p-2 mt-2">
          <h3 className="title">إضافة صورة رئيسية</h3>
          <div className="img_field">
            <div className="img">
              <img src={imgPlaceholder} alt="Main" />
            </div>
            <label htmlFor="main_image" className="upload">
              <input
                type="file"
                name="main_image"
                id="main_image"
                accept="image/*"
                multiple={false}
                onChange={(e) => handleChange(e, setFormData)}
              />
              <div className="content">
                <img src={upload} alt="upload" />
                <p>رفع صورة</p>
              </div>
            </label>
          </div>
        </div>
        <div className="col-12 p-2 mt-3 d-flex justify-content-end">
          <button className="next" onClick={() => setForm("media")}>
            التالي
          </button>
        </div>
      </div>
    </form>
  );
}
