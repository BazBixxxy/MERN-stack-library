import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import "../styles/home.css";
import axios from "axios";
import { baseURL } from "../utilities/constant";
import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import Spinner from "../components/Spinner";
import { toast } from "react-toastify";

const HomePage = () => {
  const [updateUI, setUpdateUI] = useState(false);
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showMore, setShowMore] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchBooks = async () => {
      setLoading(true);
      setShowMore(false);
      try {
        const res = await axios.get(`${baseURL}/books`);
        if (res.data.length > 7) setShowMore(true);
        else setShowMore(false);
        setBooks(res.data);
      } catch (error) {
        console.log(error);
        toast.error("internal server error");
      } finally {
        setLoading(false);
      }
    };
    fetchBooks();
  }, [updateUI]);

  const showMoreClick = async () => {
    const numberOfBooks = books.length;
    const startIndex = numberOfBooks;
    const urlParams = new URLSearchParams(location.search);
    urlParams.set("startIndex", startIndex);
    const searchQuery = urlParams.toString();
    const res = await axios.get(`${baseURL}/books/?${searchQuery}`);
    if (res.data.length < 8) setShowMore(false);

    setBooks([...books, ...res.data]);
  };

  return (
    <>
      {loading ? (
        <Spinner loading={loading} />
      ) : (
        <section className="home">
          {books.map((book) => (
            <Card
              key={book._id}
              id={book._id}
              title={book.title}
              author={book.author}
              pages={book.pages}
              description={book.description}
              setUpdateUI={setUpdateUI}
            />
          ))}
        </section>
      )}
      {showMore && (
        <button className="show-more-button" onClick={showMoreClick}>
          show more
        </button>
      )}
    </>
  );
};

const bookLoader = async ({ params }) => {
  const res = await fetch(`${baseURL}/books/${params.id}`);
  const data = await res.json();
  console.log(data);
  return data;
};

// export default HomePage;
export { HomePage as default, bookLoader };
