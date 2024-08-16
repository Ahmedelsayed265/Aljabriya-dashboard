import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { errorHandle } from "../../utils/helpers";
import { axiosInstance } from "../../utils/axiosInstance";
import CheckField from "../../ui/CheckField";
import { useQueryClient } from "@tanstack/react-query";

export default function RulesForm({ formData, setFormData, setForm }) {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await axiosInstance.post("/addLottery", formData, {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      });
      if (res.data.data) {
        toast.success("تم تسجيل القرعة بنجاح");
        navigate("/lotteries");
        queryClient.invalidateQueries(["lotteries"]);
      } else {
        toast.error("حدث خطأ ما");
      }
    } catch (error) {
      console.log(error);
      toast.error(errorHandle(error, "حدث خطأ ما"));
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className="form_ui" onSubmit={handleSubmit}>
      <div className="row m-0">
        <div className="col-lg-6 col-12 p-2">
          <CheckField
            name="العمر (اجباري)"
            id="age"
            checked={formData.age === 1 ? true : false}
            onChange={(e) =>
              setFormData((prev) => ({
                ...prev,
                age: e.target.checked ? 1 : 0
              }))
            }
          />
        </div>
        <div className="col-lg-6 col-12 p-2">
          <CheckField
            name="رقم العضوية (اجباري)"
            id="box_id"
            checked={formData.box_id === 1 ? true : false}
            onChange={(e) =>
              setFormData((prev) => ({
                ...prev,
                box_id: e.target.checked ? 1 : 0
              }))
            }
          />
        </div>
        <div className="col-lg-6 col-12 p-2">
          <CheckField
            name="النوع (اجباري)"
            id="sex"
            checked={formData.sex === 1 ? true : false}
            onChange={(e) =>
              setFormData((prev) => ({
                ...prev,
                sex: e.target.checked ? 1 : 0
              }))
            }
          />
        </div>
        <div className="col-12 p-2 mt-3 d-flex justify-content-end">
          <div className="d-flex gap-3">
            <button className="prev" onClick={() => setForm("media")}>
              السابق
            </button>
            <button
              className="next"
              style={{ opacity: loading ? 0.7 : 1 }}
              disabled={loading}
              type="submit"
            >
              حفظ <i className={loading ? "fa-solid fa-spinner fa-spin" : ""} />
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}
