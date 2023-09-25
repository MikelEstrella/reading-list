import React, { useEffect, useState } from "react";
import Book from "./Book";
import Footer from "./Footer";
// import image1 from "../Images/It Ends With Us.jpg";
// import image2 from "../Images/Lessons in Chemistry.jpg";
// import image3 from "../Images/Remarkably Bright Creatures.jpg";
// import image4 from "../Images/The Five-Star Weekend.jpg";
import classes from "./BookList.module.css";

// const books = [
//   {
//     id: "01",
//     image: image1,
//     title: "It Ends With Us",
//     description: "Every girl needs an Atlas!",
//     author: "Colleen Hoover",
//   },
//   {
//     id: "02",
//     image: image2,
//     title: "Lessons in Chemistry",
//     author: "Bonnie Garmus",
//     description: "Every girl needs an Atlas!",
//   },
//   {
//     id: "03",
//     image: image3,
//     title: "Remarkably Bright Creatures",
//     author: "Shelby Van Pelt",
//     description: "Every girl needs an Atlas!",
//   },
//   {
//     id: "04",
//     image: image4,
//     title: "The Five-Star Weekend",
//     author: "Elin Hilderbrand",
//     description: "Every girl needs an Atlas!",
//   },
// ];

// for CRA applications
const KEY = process.env.REACT_APP_API_KEY;

const BookList = () => {
  const [books, setBooks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(
          "https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=" +
            KEY,
          {
            method: "GET",
            headers: { Accept: "application/json" },
          }
        );

        if (!response.ok) {
          setIsError(true);
          setIsLoading(false);
          return;
        }

        const data = await response.json();
        // const results = data.results;
        // const books = {
        //   rank: results.rank,
        // };
        setBooks(data.results.books);
      } catch (error) {
        console.log(error.message);
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  const Loader = () => {
    return <h2>Loading...</h2>;
  };

  const ErrorMessage = () => {
    return (
      <div>
        <h2>
          <p>Something went wrong!</p>
          <p>
            <span>😢 A book a day keeps you healthy, wealthy, and wise.</span>
          </p>
        </h2>
      </div>
    );
  };

  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    return <ErrorMessage />;
  }

  return (
    <>
      <div className={classes.booklist}>
        {!isLoading &&
          !isError &&
          books.map((book) => (
            <Book
              key={book.rank}
              id={book.rank}
              weeks={book.weeks_on_list}
              url={book.amazon_product_url}
              image={book.book_image}
              title={book.title}
              description={book.description}
              author={book.author}
            />
          ))}
      </div>
      <div>{!isLoading && !isError && <Footer />}</div>
    </>
  );
};

export default BookList;
