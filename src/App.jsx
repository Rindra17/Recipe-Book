import { useEffect, useState } from "react";
import recipes from "./data/recipes.json";
import styles from "./App.module.css";
import RecipeList from "./components/RecipeList/RecipeList.jsx";
import SearchBar from "./components/SearchBar/SearchBar.jsx";
import IngredientsFilter from "./components/IngredientsFilter/IngredientsFilter.jsx";
import FavoritesFilter from "./components/Favorites/Favorites.jsx";

export default function App() {
  const [orderedRecipes, setOrderedRecipes] = useState(recipes);
  const [searchText, setSearchText] = useState("");
  const [selectedIngredients, setSelectedIngredients] = useState([]);
  const [favorites, setFavorites] = useState(() => {
    const saved = localStorage.getItem("recipe-favs");
    return saved ? JSON.parse(saved) : [];
  });
  const [showOnlyFavs, setShowOnlyFavs] = useState(false);

  useEffect(() => {
    localStorage.setItem("recipe-favs", JSON.stringify(favorites));
  }, [favorites]);

  const toggleFavorite = (id) => {
    setFavorites((r) =>
      r.includes(id) ? r.filter((favId) => favId !== id) : [...r, id],
    );
  };

  function handleToggleOrder() {
    setOrderedRecipes((prev) => [...prev].reverse());
  }

  const filteredRecipe = orderedRecipes.filter((r) => {
    const matchesSearch = r.name
      .toLocaleLowerCase()
      .includes(searchText.toLocaleLowerCase());

    const matchesIngredients =
      selectedIngredients.length == 0 ||
      selectedIngredients.some((ing) => r.ingredients.includes(ing));

    const matchesFavs = showOnlyFavs ? favorites.includes(r.id) : true;

    return matchesSearch && matchesIngredients && matchesFavs;
  });

  return (
    <div className={styles.app}>
      <header className={styles.header}>
        <div className={styles.headerRow}>
          <h1 className={styles.title}>Recipe Book</h1>
          <div className={styles.buttons}>
            <button
              type="button"
              className={styles.toggle}
              onClick={handleToggleOrder}
            >
              Reverse order
            </button>
            <FavoritesFilter
              showOnlyFavs={showOnlyFavs}
              setShowOnlyFavs={setShowOnlyFavs}
              favoriteCount={favorites.length}
            />
          </div>
        </div>
      </header>

      <main className={styles.main}>
        <div className={styles.filter}>
          <SearchBar searchText={searchText} setSearchText={setSearchText} />
          <IngredientsFilter
            recipes={recipes}
            selectedIngredients={selectedIngredients}
            setSelectedIngredients={setSelectedIngredients}
          />
        </div>
        <RecipeList
          recipes={filteredRecipe}
          favorites={favorites}
          onToggleFavorite={toggleFavorite}
        />
      </main>
    </div>
  );
}
