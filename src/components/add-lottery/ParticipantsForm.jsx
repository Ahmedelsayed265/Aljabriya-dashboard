import { useParams } from "react-router-dom";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import useGetLotteryUsers from "../../hooks/useGetLotteryUsers";
import PaginationNumbers from "./../../ui/PaginationNumbers";
import DataLoader from "./../../ui/DataLoader";

export default function ParticipantsForm({ setForm }) {
  const { id } = useParams();
  const { data: users, isLoading } = useGetLotteryUsers(id);

  const statusTemplate = (rowData) => {
    return (
      <img
        src={`${
          rowData.does_he_comply_with_the_conditions
            ? "/assets/images/check.svg"
            : "/assets/images/cross.svg"
        }`}
        alt=""
      />
    );
  };

  const categoryTemplate = (rowData) => {
    return <span>{rowData.category.title}</span>;
  };

  return (
    <form className="form_ui">
      <div className="row m-0">
        <div className="col-12 p-2">
          {isLoading ? (
            <DataLoader />
          ) : users && users?.length > 0 ? (
            <>
              <div className="table-container">
                <DataTable value={users}>
                  <Column field="id" header="ID" />
                  <Column field="full_name" header="الاسم" />
                  <Column field="mobile" header="رقم الموبايل" />
                  <Column field="national_id" header="الرقم المدني" />
                  <Column field="national_id" header="الرقم المدني" />
                  <Column field="box_id" header="رقم الصندوق" />
                  <Column body={categoryTemplate} header="التصنيف" />
                  <Column field="age" header="السن" />
                  <Column body={statusTemplate} header="مطابق للشروط" />
                  <Column />
                </DataTable>
              </div>
              {users?.count > 10 && <PaginationNumbers count={users?.count} />}
            </>
          ) : (
            <div className="no-data">لا يوجد مشتركين حتى الان</div>
          )}
        </div>
        <div className="col-12 p-2 mt-3 d-flex justify-content-end">
          <div className="d-flex gap-3">
            <button
              type="button"
              className="prev"
              onClick={() => setForm("rules")}
            >
              السابق
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}
