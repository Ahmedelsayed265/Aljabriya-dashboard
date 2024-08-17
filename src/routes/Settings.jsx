import { useState } from "react";
import PageHeader from "../components/PageHeader";

export default function Settings() {
  const [formData, setFormData] = useState({
    image: ""
  });
  return (
    <section className="settings">
      <div className="container">
        <div className="row">
          <PageHeader
            base="الاعدادات"
            path={[{ name: "إعدادات الحساب", path: "/account-settings" }]}
          />
          <div className="col-12 p-2">
            <div className="inner_card">
              <div className="header">
                <h1>إعدادات الحساب</h1>
              </div>
              <form className="from_ui account_form">
                <div className="row">
                  <div className="col-12 p-2">
                    <div className="col-12 p-2 mt-2">
                      <h3 className="title">إضافة صورة رئيسية</h3>
                      <div className="img_field">
                        <div className="img">
                          {formData.image === "" ? (
                            <span className="icon">
                              <img src="/assets/images/img.svg" alt="Main" />
                            </span>
                          ) : (
                            <img
                              src={
                                formData?.image?.type?.startsWith("image/")
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
                              setFormData({
                                ...formData,
                                image: e.target.files[0]
                              })
                            }
                          />
                          <div className="content">
                            <img src="/assets/images/upload.svg" alt="upload" />
                            <p>رفع صورة</p>
                          </div>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
