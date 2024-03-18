import React, { useEffect, useState } from "react";
import "./Table.css";
import EditModelForm from "../../../Cointainer/EditModelForm/EditModelForm";

const Table = ({ data, get_alldata }) => {
  const [modelShow, setModelShow] = useState(false);
  const [modelData, setModelData] = useState();

  useEffect(() => {
    modelShow
      ? (document.getElementById("body").style.overflowY = "hidden")
      : (document.getElementById("body").style.overflowY = "scroll");
  }, [modelShow]);

  var maxValue = 0;
  var maxValueIndex = 0;
  data?.forEach((item, idx) => {
    const lengths = Object.keys(item).length;
    if (lengths > maxValue) {
      maxValue = lengths;
      maxValueIndex = idx;
    }
  });
  const table_head = data?.find((_, index) => index === maxValueIndex);

  const handleClick = (data) => {
    setModelData(data);
    setModelShow(true);
  };

  const handleClose = () => {
    setModelShow(false);
    get_alldata();
  };

  return (
    <div>
      <table class="table" id="products">
        <thead>
          <tr>
            {Object.keys(table_head).map((heading) => {
              return <th>{heading}</th>;
            })}
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {data.map((rowdata) => {
            return (
              <tr>
                {Object.keys(table_head)?.map((head) => {
                  return <td>{!rowdata[head] ? "NIll" : rowdata[head]}</td>;
                })}

                <td>
                  <button
                    className="products_edit_btn"
                    onClick={() => {
                      handleClick(rowdata);
                    }}
                  >
                    <a href="#root">Edit</a>
                  </button>
                </td>
                <td>
                  <button
                    className="products_delete_btn"
                    // onClick={() => {
                    //   handleClick(rowdata.SNo);
                    // }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      {modelShow && (
        <EditModelForm handleClose={handleClose} modelData={modelData} />
      )}
    </div>
  );
};

export default Table;
