export const ingredientForm = {
  name: null,
  quantity: null,
  unit: null,
};

export const recipeForm = {
  name: null,
  description: null,
  ingredients: [{ ...ingredientForm }],
};
