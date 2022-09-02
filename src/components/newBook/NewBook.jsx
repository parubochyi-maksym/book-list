import React from "react";
import "./newBook.css";

export default function NewBook() {
  return (
    <div className="newBook">
      <form className="newBookDescriptionForm">
        <label className="newBookDescriptionFormTitle">Book title</label>
        <input className="newBookDescriptionFormInput" name="book" type="text" required />
        <label className="newBookDescriptionFormTitle">Author name</label>
        <input className="newBookDescriptionFormInput" name="author" type="text" required />
        <label className="newBookDescriptionFormTitle">Category</label>
        <input className="newBookDescriptionFormInput" name="category" type="text" required />
        <label className="newBookDescriptionFormTitle">ISBN</label>
        <input className="newBookDescriptionFormInput" name="isbn" type="number" required />
        <div className="newBookDescriptionFormButton">
          <button type="submit" className="newBookButton">
            Add Book
          </button>
        </div>
      </form>
    </div>
  );
}
