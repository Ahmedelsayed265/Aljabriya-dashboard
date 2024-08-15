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
  categoriesInitial,
}) {
  return (
    <form className="form_ui">
      <div className="row m-0">
        <div className="col-lg-6 col-12 p-2">
          <InputField
            label="اسم القرعة"
            placeholder="أدخل اسم القرعة"
            id="title"
            name="title"
            type="text"
            required
            value={formData.title}
            onChange={(e) => handleChange(e, setFormData)}
          />
        </div>
        <div className="col-lg-6 col-12 p-2">
          <InputField
            label="رابط البث المباشر"
            placeholder="أدخل رابط البث المباشر"
            id="live_link"
            name="live_link"
            type="url"
            value={formData.live_link}
            onChange={(e) => handleChange(e, setFormData)}
          />
        </div>
        <div className="col-lg-6 col-12 p-2">
          <div className="input-field">
            <label>السن</label>
            <div className="d-flex gap-2">
              <FromToInput
                id="from_age"
                name="from_age"
                placeholder="١٨"
                type="number"
                label="من"
                value={formData.from_age}
                onChange={(e) => handleChange(e, setFormData)}
              />
              <FromToInput
                id="to_age"
                name="to_age"
                type="number"
                placeholder="٦٠"
                label="الي"
                value={formData.to_age}
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
            id="policy"
            name="policy"
            as="textarea"
            value={formData.policy}
            onChange={(e) => handleChange(e, setFormData)}
          />
        </div>
        <div className="col-12 p-2 mt-2">
          <h3 className="title">إضافة صورة رئيسية</h3>
          <div className="img_field">
            <div className="img">
              {formData.image === "" ? (
                <span className="icon">
                  <img src={imgPlaceholder} alt="Main" />
                </span>
              ) : (
                <img
                  src={
                    formData.image.type.startsWith("image/")
                      ? URL.createObjectURL(formData.image)
                      : formData.image
                  }
                  alt="Main"
                />
              )}
            </div>
            <label htmlFor="image" className="upload">
              <input
                type="file"
                name="image"
                id="image"
                accept="image/*"
                multiple={false}
                onChange={(e) =>
                  setFormData({ ...formData, image: e.target.files[0] })
                }
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
