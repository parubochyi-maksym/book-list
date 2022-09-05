import React from "react";
import "./bookList.css";

export default function BookList() {
  return (
    <div className="bookList">
      <table className="bookListTable">
        <thead className="bookListTableHead">
          <tr className="bookListTableRow">
            <th className="bookListTableTitle">Book</th>
            <th className="bookListTableTitle">Author</th>
            <th className="bookListTableTitle">Category</th>
            <th className="bookListTableTitle">ISBN</th>
          </tr>
        </thead>
        <tbody className="bookListTableBody">
          <tr className="bookListTableRow">
            <td className="bookListTableData">The Shining</td>
            <td className="bookListTableData">Stephen King</td>
            <td className="bookListTableData">Horror</td>
            <td className="bookListTableData">8.4</td>
          </tr>
          <tr className="bookListTableRow">
            <td className="bookListTableData">Harry Potter</td>
            <td className="bookListTableData">Joanne Rowling</td>
            <td className="bookListTableData">Fantasy</td>
            <td className="bookListTableData">8.1</td>
          </tr>
          <tr className="bookListTableRow">
            <td className="bookListTableData">Killing Floor</td>
            <td className="bookListTableData">Lee Child</td>
            <td className="bookListTableData">Detective</td>
            <td className="bookListTableData">8.7</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
