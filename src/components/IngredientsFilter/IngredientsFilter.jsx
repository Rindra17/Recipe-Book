import styles from "./IngredientsFilter.module.css";
import { useMemo } from "react";

export default function IngredientsFilter({
  recipes,
  selectedIngredients,
  setSelectedIngredients,
}) {
  const allIngredients = useMemo(() => {
    return [...new Set(recipes.flatMap((r) => r.ingredients))].sort();
  }, [recipes]);

  const handleCheckboxChange = (ingredient) => {
    if (selectedIngredients.includes(ingredient)) {
      setSelectedIngredients(
        selectedIngredients.filter((i) => i != ingredient),
      );
    } else {
      setSelectedIngredients([...selectedIngredients, ingredient]);
    }
  };

  return (
    <div>
      <h2 className={styles.h2}>Filter by ingredients</h2>
      <form className={styles.form}>
        {allIngredients.map((ingredient) => (
          <label key={ingredient}>
            <input
              type="checkbox"
              value={ingredient}
              checked={selectedIngredients.includes(ingredient)}
              onChange={() => handleCheckboxChange(ingredient)}
            />
            {ingredient}
          </label>
        ))}
      </form>
    </div>
  );
}
