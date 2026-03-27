import styles from "./Favorites.module.css";

export default function FavoritesFilter({
  showOnlyFavs,
  setShowOnlyFavs,
  favoriteCount,
}) {
  return (
    <div className={styles.container}>
      <button
        type="button"
        className={`${styles.toggleBtn} ${showOnlyFavs ? styles.active : ""}`}
        onClick={() => setShowOnlyFavs(!showOnlyFavs)}
      >
        <span>
          {showOnlyFavs ? "❤️ Showing Favorites" : "🤍 Show Favorites"}
        </span>
        <span className={styles.badge}>{favoriteCount}</span>
      </button>
    </div>
  );
}
