import styles from "./Content.module.css";
import SearchTerms from "../SearchTerms/SearchTerms";
import BookList from "../BookList/BookList";
import { useState } from "react";
import { ErrorBoundary } from "react-error-boundary";
import Fallback, { logError } from "/src/elements/Fallback/Fallback";

function Content() {
  const [searchQuery, setSearchQuery] = useState("");
  const [category, setCategory] = useState("");

  return (
    <div className={styles.content}>
      <ErrorBoundary FallbackComponent={Fallback} onError={logError}>
        <SearchTerms
          setSearchQuery={setSearchQuery}
          setCategory={setCategory}
        />
      </ErrorBoundary>
      <ErrorBoundary FallbackComponent={Fallback} onError={logError}>
        <BookList searchQuery={searchQuery} category={category} />
      </ErrorBoundary>
    </div>
  );
}

export default Content;
