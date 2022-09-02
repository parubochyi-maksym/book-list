import React from "react";
import "./bookDescription.css";

export default function BookDescription() {
  return (
    <div className="bookDescription">
      <table className="bookDescriptionTable">
        <thead className="bookDescriptionTableHead">
          <tr className="bookDescriptionTableRow">
            <th className="bookDescriptionTableTitle">Book</th>
            <th className="bookDescriptionTableTitle">Author</th>
            <th className="bookDescriptionTableTitle">Category</th>
            <th className="bookDescriptionTableTitle">ISBN</th>
            <th className="bookDescriptionTableTitle">Actions</th>
          </tr>
        </thead>
        <tbody className="bookDescriptionTableBody">
          <tr className="bookDescriptionTableRow">
            <td className="bookDescriptionTableData">Book title</td>
            <td className="bookDescriptionTableData">Author name</td>
            <td className="bookDescriptionTableData">Category</td>
            <td className="bookDescriptionTableData">7.4</td>
            <td className="bookDescriptionTableData">
              <div className="bookDescriptionTableButtonWrapper">
                <button className="bookDescriptionTableButtonEdit">Edit</button>
                <button className="bookDescriptionTableButtonDelete">
                  Delete
                </button>
              </div>
            </td>
          </tr>
          <tr className="bookDescriptionTableRow">
            <td className="bookDescriptionTableData">Book title</td>
            <td className="bookDescriptionTableData">Author name</td>
            <td className="bookDescriptionTableData">Category</td>
            <td className="bookDescriptionTableData">7.4</td>
            <td className="bookDescriptionTableData">
              <div className="bookDescriptionTableButtonWrapper">
                <button className="bookDescriptionTableButtonEdit">Edit</button>
                <button className="bookDescriptionTableButtonDelete">
                  Delete
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
