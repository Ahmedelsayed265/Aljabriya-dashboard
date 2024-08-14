import InputField from "../../ui/InputField";
import plus from "../../assets/images/plus.svg";
import deleteIcon from "../../assets/images/delete.svg";

export default function Categories({
  formData,
  setFormData,
  categoriesInitial
}) {
  const handleChange = (e, index) => {
    const { name, value } = e.target;
    const updatedCategoriesList = [...formData.categories];
    updatedCategoriesList[index] = {
      ...updatedCategoriesList[index],
      [name]: value
    };
    setFormData((prev) => ({
      ...prev,
      categories: updatedCategoriesList
    }));
  };

  const handleAddRow = () => {
    const updatedCategoriesList = [
      ...formData.categories,
      { ...categoriesInitial }
    ];
    setFormData((prev) => ({
      ...prev,
      categories: updatedCategoriesList
    }));
  };

  const handleDeleteRow = (index) => {
    const updatedCategoriesList = formData?.categories?.filter(
      (_, i) => i !== index
    );
    setFormData((prev) => ({
      ...prev,
      categories: updatedCategoriesList
    }));
  };

  return (
    <div className="categories">
      <h6>التصنيف</h6>
      {formData?.categories?.map((item, index) => (
        <div className="select_addon_row" key={index}>
          <InputField
            placeholder="أدخل اسم التصنيف"
            id={`category-name-${index}`}
            name="name"
            type="text"
            value={item.name}
            onChange={(e) => handleChange(e, index)}
          />
          <InputField
            id={`category-count-${index}`}
            placeholder="العدد"
            type="number"
            name="count"
            value={item.count}
            onChange={(e) => handleChange(e, index)}
          />
          {index === 0 ? (
            <button onClick={handleAddRow} type="button">
              <img src={plus} alt="add icon" />
            </button>
          ) : (
            <button
              onClick={() => handleDeleteRow(index)}
              className="delete"
              type="button"
            >
              <img src={deleteIcon} alt="delete icon" />
            </button>
          )}
        </div>
      ))}
    </div>
  );
}
