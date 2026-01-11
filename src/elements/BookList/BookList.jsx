import styles from "./BookList.module.css";
import { useEffect, useState } from "react";
import { Link } from "react-router";
import stringShortener from "/src/utils/stringShortener";

const BookList = ({ searchQuery, category }) => {
  const [books, setBooks] = useState([]);
  const [pages, setPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [elementsPerPage, setElementsPerPage] = useState(4);
  const [loading, setLoading] = useState(false);
  const [errorFetch, setErrorFetch] = useState(false);

  function handlePrev() {
    setCurrentPage((prevPage) => prevPage - 1);
  }
  function handleNext() {
    setCurrentPage((prevPage) => prevPage + 1);
  }
  function handleSelectChange(e) {
    setElementsPerPage(Number(e.target.value));
    setPages(Math.ceil(books.length / e.target.value));
    setCurrentPage(1);
  }

  useEffect(() => {
    let categoryParam = "";

    if (category) {
      categoryParam = "+subject:" + category;
    }

    let url = `https://www.googleapis.com/books/v1/volumes?q=${searchQuery}${categoryParam}&maxResults=40`;

    if (searchQuery) {
      setLoading(true);
      setErrorFetch(false);
      fetch(url)
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.json();
        })
        .then((data) => {
          const items = data.items || [];
          setBooks(items);
          setCurrentPage(1);
          setPages(Math.ceil(items.length / elementsPerPage));
          setLoading(false);
          setErrorFetch(false);
        })
        .catch((error) => {
          setErrorFetch(true);
          setLoading(false);
          console.error("Error fetching data: ", error);
        });
    }
  }, [searchQuery, category]);

  // console.log("Pages = ", pages);
  // console.log("Elements per page = ", elementsPerPage);

  if (searchQuery && loading) {
    return (
      <div className={styles.shelfNoContent}>
        <p className={styles.shelfMessage}>Fetching Knowledge ...</p>
        <img src="/src/assets/loading.gif" alt="loading" />
      </div>
    );
  } else if (errorFetch) {
    return (
      <div className={styles.shelfNoContent}>
        <p className={styles.shelfMessage}>NETWORK ERROR!</p>
        <img src="/src/assets/error.png" alt="NETWORK ERROR!" />
      </div>
    );
  } else if (searchQuery && books.length === 0) {
    return (
      <div className={styles.shelfNoContent}>
        <p className={styles.shelfMessage}>No results found!</p>
        <img src="/src/assets/no-result.png" alt="no results found" />
      </div>
    );
  } else if (!searchQuery) {
    return (
      <div className={styles.shelfNoContent}>
        <p className={styles.shelfMessage}>Try searching for a book</p>
        <img src="/src/assets/search.svg" alt="search for a book" />
      </div>
    );
  } else {
    return (
      <div className={styles.bookList}>
        <div className={styles.pagination}>
          <button onClick={handlePrev} disabled={currentPage === 1}>
            prev
          </button>
          <p>Page: {currentPage}</p>
          <button onClick={handleNext} disabled={currentPage === pages}>
            next
          </button>
        </div>
        <div className={styles.elementsPerPage}>
          <select
            name="elements"
            id="elements"
            defaultValue="4"
            onChange={handleSelectChange}
          >
            <option value="4">4</option>
            <option value="8">8</option>
            <option value="12">12</option>
            <option value="16">16</option>
          </select>
          <p style={{ fontSize: "medium" }}>elements per page</p>
        </div>
        <div className={styles.shelf}>
          {books
            .slice(
              (currentPage - 1) * elementsPerPage,
              currentPage * elementsPerPage
            )
            .map((book) => (
              <div key={book.id} className={styles.book}>
                <Link
                  to={`/book/${book.id}`}
                  target="_blank"
                  key={book.id}
                  rel="noopener noreferrer"
                >
                  <img
                    className={styles.thumbnail}
                    src={`https://play.google.com/books/publisher/content/images/frontcover/${book.id}?fife=w2000-h2000`}
                    alt="No preview available!"
                  />
                </Link>
                <div className={styles.bookDetails}>
                  <p
                    title={
                      !book.volumeInfo.title ? "N/A" : book.volumeInfo.title
                    }
                  >
                    <span>Title:</span>{" "}
                    {!book.volumeInfo.title
                      ? "N/A"
                      : stringShortener(book.volumeInfo.title)}
                  </p>
                  <p
                    title={
                      !book.volumeInfo.authors
                        ? "N/A"
                        : book.volumeInfo.authors.join(", ")
                    }
                  >
                    <span>
                      Author{book?.volumeInfo?.authors?.length > 1 ? "s" : ""}:
                    </span>{" "}
                    {!book.volumeInfo.authors
                      ? "N/A"
                      : stringShortener(book.volumeInfo.authors.join(", "))}
                  </p>
                </div>
              </div>
            ))}
        </div>
      </div>
    );
  }
};

export default BookList;
