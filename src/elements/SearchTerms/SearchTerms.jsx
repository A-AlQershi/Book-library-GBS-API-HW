import styles from "./SearchTerms.module.css";
import { googleBooksCategories } from "../../utils/googleBooksCategories";
import { memo } from "react";

const SearchTerms = ({ setSearchQuery, setCategory }) => {

  function handleSearchChange(event) {
    setSearchQuery(event.target.value);
  }
  function handleCategoryChange(event) {
    setCategory(event.target.value);
  }

  return (
    <div className={styles.searchTerms}>
      <h3>What are you looking for?</h3>
      <br />
      <label htmlFor="search">Search</label>
      <input
        type="text"
        id="search"
        name="search"
        onChange={handleSearchChange}
      />
      <br />
      <label htmlFor="categories">Category</label>
      <select id="categories" name="categories" onChange={handleCategoryChange}>
        <option value=""></option>
        {googleBooksCategories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
};

export default memo(SearchTerms);
