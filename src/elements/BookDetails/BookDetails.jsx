import styles from "./BookDetails.module.css";
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import languageDecoder from "../../utils/languageDecoder";
import errorImage from "../../assets/error.png";
import loadingImage from "../../assets/loading.gif";

function BookDetails() {
  const { id } = useParams();
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);
  const [errorFetch, setErrorFetch] = useState(false);

  // console.log("Book ID: ", id);
  console.log(`https://www.googleapis.com/books/v1/volumes/${id}`);
  // console.log(book.accessInfo.webReaderLink.replace(/&hl=&source=gbs_api$/, ""))

  useEffect(() => {
    setLoading(true);
    setErrorFetch(false);
    fetch(`https://www.googleapis.com/books/v1/volumes/${id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setBook(data);
        setLoading(false);
        setErrorFetch(false);
      })
      .catch((error) => {
        setErrorFetch(true);
        setLoading(false);
        console.error("Error fetching data: ", error);
      });
  }, [id]);

  if (loading) {
    return (
      <div className={styles.noBook}>
        <p className={styles.noBookMessage}>Fetching Knowledge ...</p>
        <img src={loadingImage} alt="loading" />
      </div>
    );
  } else if (errorFetch) {
    return (
      <div className={styles.noBook}>
        <p className={styles.noBookMessage}>NETWORK ERROR!</p>
        <img src={errorImage} alt="NETWORK ERROR!" />
      </div>
    );
  } else {
    return (
      <div className={styles.bookDetails}>
        <div className={styles.preview}>
          <img
            className={styles.image}
            src={`https://play.google.com/books/publisher/content/images/frontcover/${id}?fife=w2000-h2000`}
            alt="No preview available!"
          />
          {book.volumeInfo.industryIdentifiers &&
            book.volumeInfo.industryIdentifiers.map((identifier) => (
              <p key={identifier.identifier} className={styles.isbn}>
                <span>{identifier.type}:</span> {identifier.identifier}
              </p>
            ))}
          {book.accessInfo.webReaderLink && (
            <a
              href={book.accessInfo.webReaderLink}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.sample}
            >
              Read sample{" "}
              <svg
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                <polyline points="15 3 21 3 21 9"></polyline>
                <line x1="10" y1="14" x2="21" y2="3"></line>
              </svg>
            </a>
          )}
        </div>
        <div className={styles.info}>
          <h1 className={styles.title}>
            {!book.volumeInfo.title ? "N/A" : book.volumeInfo.title}
          </h1>
          <h3>
            <span>By </span>
            {!book.volumeInfo.authors
              ? "N/A"
              : book.volumeInfo.authors.join(", ")}
          </h3>
          <br />
          <p>
            <span>- Subtitle: </span>
            {!book.volumeInfo.subtitle ? "N/A" : book.volumeInfo.subtitle}
          </p>
          <p>
            <span>- Publication date: </span>
            {!book.volumeInfo.publishedDate
              ? "N/A"
              : book.volumeInfo.publishedDate}
          </p>
          <p>
            <span>- Published by: </span>
            {!book.volumeInfo.publisher ? "N/A" : book.volumeInfo.publisher}
          </p>
          <p>
            <span>- Pages: </span>
            {!book.volumeInfo.pageCount ? "N/A" : book.volumeInfo.pageCount}
          </p>
          <p>
            <span>- Categories: </span>
            {!book.volumeInfo.categories
              ? "N/A"
              : book.volumeInfo.categories.join(", ")}
          </p>
          <p>
            <span>- Language: </span>
            {!book.volumeInfo.language
              ? "N/A"
              : languageDecoder(book.volumeInfo.language)}
          </p>
        </div>
      </div>
    );
  }
}

export default BookDetails;
