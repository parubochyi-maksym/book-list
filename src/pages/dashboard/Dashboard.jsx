import React from "react";
import BookDescription from "../../components/bookList/BookList";
import "./dashboard.css";
import { Link } from "react-router-dom";

export default function Dashboard() {
  return (
    <div className="dashboard">
      <div className="dashboardTitle">
        <h1 className="dashboardTitleText">
          <span className="dashboardTitleBook">Book</span>{" "}
          <span className="dashboardTitleList">List</span>
        </h1>
      </div>
      <BookDescription />
      <div className="dashboardBookButton">
        <Link className="link" to="/addbook">
          <button className="dashboardAddBookButton">Add Book</button>
        </Link>
      </div>
    </div>
  );
}
