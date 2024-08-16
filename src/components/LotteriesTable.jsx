import { useState } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Link } from "react-router-dom";
import { Dropdown } from "react-bootstrap";
import Pagination from "../ui/Pagination";
import DataLoader from "../ui/DataLoader";
import useGetLotteries from "../hooks/useGetLotteries";
import ConfirmDeleteModal from "../ui/ConfirmDeleteModal";

export default function LotteriesTable() {
  const { data: lotteries, isLoading } = useGetLotteries(true);
  const [row, setRow] = useState(null);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  function truncate(inputString) {
    let truncateStringResult;
    if (inputString.length > 20) {
      truncateStringResult = inputString.substring(0, 20) + "...";
    } else {
      truncateStringResult = inputString;
    }
    return truncateStringResult;
  }

  const statusTemplate = (rowData) => {
    const toDate = new Date(rowData.to_date);
    const fromDate = new Date(rowData.from_date);
    const now = new Date();

    let status = "";
    let className = "";

    if (fromDate > now) {
      status = "مجدولة";
      className = "status-Scheduled";
    } else if (toDate >= now) {
      status = "بدأت";
      className = "status-Started";
    } else {
      status = "انتهت";
      className = "status-Ended";
    }

    return <span className={className}>{status}</span>;
  };

  const descriptionTemplate = (rowData) => {
    return (
      <div className="description">
        <p>{truncate(rowData.description)}</p>
      </div>
    );
  };

  const categoryTemplate = (rowData) => {
    return (
      <div className="category">
        <p>
          {rowData?.categories?.map((item, index) =>
            index < rowData.categories.length - 1
              ? item?.title + ", "
              : item?.title
          )}
        </p>
      </div>
    );
  };

  const actionsTemplate = (rowData) => {
    return (
      <div className="actions">
        <Dropdown>
          <Dropdown.Toggle>
            <img src="/assets/images/vertical-dots.svg" alt="dots" />
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item>
              <Link to={`/lotteries/edit-lottery/${rowData.id}`}>
                <img src="/assets/images/edit.svg" alt="edit" />
                تعديل القرعة
              </Link>
            </Dropdown.Item>
            <Dropdown.Item>
              <button
                onClick={() => {
                  setRow(rowData);
                  setShowDeleteModal(true);
                }}
              >
                <img src="/assets/images/delete.svg" alt="delete" />
                حذف القرعة
              </button>
            </Dropdown.Item>
            <Dropdown.Item>
              <Link to={`/lotteries/choose-winner/${rowData.id}`}>
                <img src="/assets/images/winner.svg" alt="view" />
                اختيار الفائز
              </Link>
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    );
  };

  return (
    <>
      {isLoading ? (
        <DataLoader />
      ) : (
        <>
          <div className="table-container">
            <DataTable value={lotteries.data}>
              <Column field="id" header="ID" />
              <Column field="title" header="الاسم" />
              <Column body={descriptionTemplate} header="الوصف" />
              <Column body={categoryTemplate} header="التصنيف" />
              <Column field="users" header="عدد المسجلين" />
              <Column body={statusTemplate} header="الحالة" />
              <Column field="to_date" header="اخر موعد للتسجيل" />
              <Column body={actionsTemplate} />
            </DataTable>
          </div>
          {lotteries?.count > 10 && <Pagination count={lotteries?.count} />}
        </>
      )}
      <ConfirmDeleteModal
        showDeleteModal={showDeleteModal}
        setShowDeleteModal={setShowDeleteModal}
        deletionTarget={row?.title}
        onConfirm={() => {}}
        loading={false}
      />
    </>
  );
}
