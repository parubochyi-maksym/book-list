import React from "react";
import NewBook from "../../components/newBook/NewBook";
import { Link } from "react-router-dom";
import "./addBook.css";

export default function AddBook() {
  return (
    <div className="addBook">
      <div className="addBookTitle">
        <h1 className="addBookTitleText">
          <span className="addBookTitleNew">New</span>{" "}
          <span className="addBookTitleBook">Book</span>
        </h1>
      </div>
      <NewBook />
      <div className="dashboardButton">
        <Link to="/">
          <button className="dashboardButtonLink">Dashboard</button>
        </Link>
      </div>
    </div>
  );
}
