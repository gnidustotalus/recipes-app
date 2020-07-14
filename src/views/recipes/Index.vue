<template>
  <div class="container">
    <router-link :to="{ name: 'recipes-create' }">Utwórz przepis </router-link>

    <h1>Lista przepisów</h1>
    <recipes :recipes="recipes" />
  </div>
</template>

<script>
import Recipes from "@/components/recipes/Recipes";
export default {
  components: {
    Recipes,
  },
  data() {
    return {
      recipes: [
        {
          id: 1,
          name: "Ciasto na pizze",
          description:
            "Sed eros ex, lacinia pretium varius ut, volutpat id urna. Suspendisse potenti. Nam et finibus arcu. Praesent id cursus purus, vel sollicitudin risus. Nullam a magna id orci consectetur elementum. Etiam et dui porta, rhoncus dui ac, consequat ante. Proin congue suscipit ullamcorper. Phasellus vitae ex at ex cursus aliquam. Praesent faucibus ante sed posuere hendrerit.",
          ingredients: [
            {
              name: "drożdze",
              quantity: 25,
              unit: "g",
            },
            {
              name: "ciepła woda",
              quantity: 150,
              unit: "ml",
            },
            {
              name: "maką pszenna",
              quantity: 250,
              unit: "g",
            },
            {
              name: "sól",
              quantity: 1,
              unit: "łyżeczka",
            },
            {
              name: "oliwa",
              quantity: 1,
              unit: "łyżeczka",
            },
          ],
        },
      ],
    };
  },
};
</script>

<style></style>
