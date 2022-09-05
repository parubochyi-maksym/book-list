import React from "react";
import "./newBook.css";
import { useState } from "react";

const initialBookValue = {
  title: "",
  author: "",
  category: "",
  isbn: "",
};

export default function NewBook() {
  const [bookData, setBookData] = useState(initialBookValue);
  const [books, setBooks] = useState([]);
  const [editableBookData, setEditableBookData] = useState({
    isEdit: false,
    bookIndex: null,
  });

  const handleDeleteClick = (index) => {
    setBooks(books.filter((book, bookIndex) => bookIndex !== index));
  };

  const handleEditClick = (data, index) => {
    setBookData(data);
    setEditableBookData({
      isEdit: true,
      bookIndex: index,
    });
  };

  const isFilledFields =
    bookData.title && bookData.author && bookData.category && bookData.isbn;

  const handleSubmitBook = (e) => {
    e.preventDefault();

    if (isFilledFields) {
      if (editableBookData.isEdit) {
        const editedData = books;
        editedData.splice(editableBookData.bookIndex, 1, bookData);

        setBooks(editedData);
        setEditableBookData({
          isEdit: false,
          index: null,
        });
      } else {
        setBooks((prevState) => [...prevState, bookData]);
      }

      setBookData(initialBookValue);
    }
  };

  return (
    <div className="newBook">
      <form className="newBookDescriptionForm" onSubmit={handleSubmitBook}>
        <label className="newBookDescriptionFormTitle">Book title</label>
        <input
          className="newBookDescriptionFormInput"
          name="book"
          type="text"
          value={bookData.title}
          onChange={(e) =>
            setBookData((prevState) => ({
              ...prevState,
              title: e.target.value,
            }))
          }
          required
        />
        <label className="newBookDescriptionFormTitle">Author name</label>
        <input
          className="newBookDescriptionFormInput"
          name="author"
          type="text"
          value={bookData.author}
          onChange={(e) =>
            setBookData((prevState) => ({
              ...prevState,
              author: e.target.value,
            }))
          }
          required
        />
        <label className="newBookDescriptionFormTitle">Category</label>
        <input
          className="newBookDescriptionFormInput"
          name="category"
          type="text"
          value={bookData.category}
          onChange={(e) =>
            setBookData((prevState) => ({
              ...prevState,
              category: e.target.value,
            }))
          }
          required
        />
        <label className="newBookDescriptionFormTitle">ISBN</label>
        <input
          className="newBookDescriptionFormInput"
          name="isbn"
          type="number"
          value={bookData.isbn}
          onChange={(e) =>
            setBookData((prevState) => ({
              ...prevState,
              isbn: e.target.value,
            }))
          }
          required
        />
        <div className="newBookDescriptionFormButton">
          <button type="submit" className="newBookButton">
            Add Book
          </button>
        </div>
      </form>

      <div className="bookList">
        <table className="bookListTable">
          <thead className="bookListTableHead">
            <tr className="bookListTableRow">
              <th className="bookListTableTitle">Book</th>
              <th className="bookListTableTitle">Author</th>
              <th className="bookListTableTitle">Category</th>
              <th className="bookListTableTitle">ISBN</th>
              <th className="bookListTableTitle">Actions</th>
            </tr>
          </thead>
          <tbody className="bookListTableBody">
            {books.map((book, index) => (
              <React.Fragment key={index}>
                <tr className="bookListTableRow">
                  <td className="bookListTableData">{book.title}</td>
                  <td className="bookListTableData">{book.author}</td>
                  <td className="bookListTableData">{book.category}</td>
                  <td className="bookListTableData">{book.isbn}</td>
                  <td className="bookListTableData">
                    <div className="bookListTableButtonWrapper">
                      <button
                        className="bookListTableButtonEdit"
                        onClick={() => handleEditClick(book, index)}
                      >
                        Edit
                      </button>
                      <button
                        className="bookListTableButtonDelete"
                        onClick={() => handleDeleteClick(index)}
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
