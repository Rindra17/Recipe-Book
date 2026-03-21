import { useState } from "react";
import recipes from "./data/recipes.json";
import styles from "./App.module.css";
import RecipeList from "./components/RecipeList/RecipeList.jsx";
import SearchBar from "./components/SearchBar/SearchBar.jsx";

export default function App() {
  const [orderedRecipes, setOrderedRecipes] = useState(recipes);

  function handleToggleOrder() {
    setOrderedRecipes((prev) => [...prev].reverse());
  }

  const [searchText, setSearchText] = useState("");

  const filteredRecipe = orderedRecipes.filter((r) =>
    r.name.toLowerCase().includes(searchText.toLocaleLowerCase()),
  );

  return (
    <div className={styles.app}>
      <header className={styles.header}>
        <div className={styles.headerRow}>
          <h1 className={styles.title}>Recipe Book</h1>
          <button
            type="button"
            className={styles.toggle}
            onClick={handleToggleOrder}
          >
            Reverse order
          </button>
        </div>
      </header>

      <main className={styles.main}>
        <SearchBar searchText={searchText} setSearchText={setSearchText} />
        <RecipeList recipes={filteredRecipe} />
      </main>
    </div>
  );
}
