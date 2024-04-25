import React from "react";
import "../styles/card.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { baseURL } from "../utilities/constant";
import { toast } from "react-toastify";

const Card = ({ id, title, author, pages, description, setUpdateUI }) => {
  const deleteBook = () => {
    const confirm = window.confirm(
      "Are you sure you want to delete this book?"
    );
    if (!confirm) return;
    axios.delete(`${baseURL}/books/${id}`);
    setUpdateUI((prevState) => !prevState);
    toast.error(`${title} deleted from library`);
  };

  return (
    <div className="card">
      <div className="title">
        <h3>{title}</h3>
      </div>
      <div className="author">
        <div>Author:</div>
        <div>{author}</div>
      </div>
      <div className="pages">
        <div>Pages:</div>
        <div>{pages} pages</div>
      </div>
      <div className="description">
        <div>Description</div>
        <div className="desc-area">{description}</div>
      </div>
      <div className="button-area">
        <Link to={`/edit/${id}`}>
          <button
            // onClick={() => updateMode(id, title, author, pages, description)}
            className="edit"
          >
            Edit
          </button>
        </Link>
        <button className="delete" onClick={deleteBook}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default Card;
