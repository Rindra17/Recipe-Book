import styles from "./RecipeCard.module.css";

export default function RecipeCard({ recipe, isFavorite, onToggleFavorite }) {
  return (
    <article className={`${styles.card} ${isFavorite ? styles.pinned : ""}`}>
      <img className={styles.image} src={recipe.image} alt="" />
      <div className={styles.body}>
        <h2 className={styles.name}>{recipe.name}</h2>
        <span className={styles.badge}>{recipe.category}</span>
        <p className={styles.duration}>{recipe.duration} min</p>
        <button
          type="button"
          className={styles.pin}
          onClick={() => onToggleFavorite(recipe.id)}
        >
          {isFavorite ? "❤️" : "🤍"}
        </button>
      </div>
    </article>
  );
}
