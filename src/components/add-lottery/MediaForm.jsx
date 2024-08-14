import upload from "../../assets/images/upload-gray.svg";
import noData from "../../assets/images/noData.svg";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { handleChange } from "../../utils/helpers";

export default function MediaForm({ formData, setFormData, setForm }) {
  return (
    <form className="form_ui">
      <div className="row m-0">
        <div className="col-12 p-2">
          <label className="images_upload_field">
            <input
              type="file"
              name="images"
              id="images"
              multiple
              onChange={(e) => handleChange(e, setFormData)}
            />
            <div className="content">
              <div className="icon">
                <img src={upload} alt="upload" />
              </div>
              <h6>اضغط لإرفاق الملفات</h6>
              <p>SVG, PNG, JPG or GIF (max. 800x400px)</p>
            </div>
          </label>
        </div>
        {formData.images.length === 0 ? (
          <div className="col-12 p-2">
            <div className="empty_data">
              <img src={noData} alt="no-data" />
              <h5>لم تقم باضافة صور</h5>
            </div>
          </div>
        ) : (
          <div className="col-12 p-2">
            <div className="table-container">
              <DataTable value="">
                <Column field="index" header="م" />
                <Column field="name" header="الصورة" />
                <Column field="" header="" />
              </DataTable>
            </div>
          </div>
        )}

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
