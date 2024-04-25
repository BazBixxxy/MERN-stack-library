import React, { useEffect, useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import axios from "axios";
import { baseURL } from "../utilities/constant";
import { toast } from "react-toastify";
import Media from "react-media";

const EditPage = () => {
  const books = useLoaderData();
  const navigate = useNavigate();
  // console.log(books);

  const [title, setTitle] = useState(books.title);
  const [author, setAuthor] = useState(books.author);
  const [number, setNumber] = useState(books.pages);
  const [description, setDescription] = useState(books.description);
  const [checkbox, setCheckbox] = useState(true);

  const updateBook = (e) => {
    e.preventDefault();
    axios
      .put(`${baseURL}/books/${books._id}`, {
        title: title,
        author: author,
        pages: number,
        description: description,
        read: true,
      })
      .then((res) => {
        // console.log(res.data);
        setTitle("");
        setAuthor("");
        setNumber("");
        setDescription("");
        navigate("/library");
        toast.success("Book successfully updated");
      });
  };

  const queries = {
    small: "(max-width: 480px)",
  };

  return (
    <Media query={queries.small}>
      {(matches) =>
        matches ? (
          <section className="add">
            <h1>Edit Book</h1>
            <form className="form-small" onSubmit={updateBook}>
              <div>
                <label htmlFor="title">Title</label>
                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  maxLength={40}
                  required
                />
              </div>
              <div>
                <label htmlFor="author">Author</label>
                <input
                  type="text"
                  value={author}
                  onChange={(e) => setAuthor(e.target.value)}
                  required
                />
              </div>
              <div>
                <label htmlFor="page">Number of Pages</label>
                <input
                  type="number"
                  value={number}
                  onChange={(e) => setNumber(e.target.value)}
                  required
                />
              </div>
              <div>
                <label htmlFor="description">Description</label>
                <textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  required
                  maxLength={335}
                ></textarea>
              </div>
              <button type="submit">Submit</button>
            </form>
          </section>
        ) : (
          <section className="add">
            <h1>Edit Book</h1>
            <form onSubmit={updateBook}>
              <div>
                <label htmlFor="title">Title</label>
                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  maxLength={40}
                  required
                />
              </div>
              <div>
                <label htmlFor="author">Author</label>
                <input
                  type="text"
                  value={author}
                  onChange={(e) => setAuthor(e.target.value)}
                  required
                />
              </div>
              <div>
                <label htmlFor="page">Number of Pages</label>
                <input
                  type="number"
                  value={number}
                  onChange={(e) => setNumber(e.target.value)}
                  required
                />
              </div>
              <div>
                <label htmlFor="description">Description</label>
                <textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  required
                  maxLength={335}
                ></textarea>
              </div>
              <div>
                <input
                  type="checkbox"
                  value={checkbox}
                  onChange={(e) => setCheckbox(e.target.value)}
                />
                <label htmlFor="checkbox">Read</label>
              </div>
              <button type="submit">Submit</button>
            </form>
          </section>
        )
      }
    </Media>
  );

  return (
    <section className="add">
      <h1>Edit Book</h1>
      <form onSubmit={updateBook}>
        <div>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="author">Author</label>
          <input
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="page">Number of Pages</label>
          <input
            type="number"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="description">Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>
        <div>
          <input
            type="checkbox"
            value={checkbox}
            onChange={(e) => setCheckbox(e.target.value)}
          />
          <label htmlFor="checkbox">Read</label>
        </div>
        <button type="submit">Submit Edit</button>
      </form>
    </section>
  );
};

export default EditPage;
