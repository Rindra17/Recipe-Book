import styles from "./SearchBar.module.css";

export default function SearchBar({ searchText, setSearchText }) {
  const handleChange = (e) => {
    setSearchText(e.target.value.toLowerCase());
  };

  return (
    <div>
      <form className={styles.form}>
        <label>Search by name</label>
        <input
          type="text"
          className={styles.input}
          placeholder="eg: Carbonara"
          value={searchText}
          onChange={handleChange}
        />
      </form>
    </div>
  );
}
