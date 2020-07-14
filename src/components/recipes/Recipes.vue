<template>
  <div class="recipes">
    <recipe v-for="recipe in recipes" :key="recipe.id" :recipe="recipe" />
  </div>
</template>

<script>
import Recipe from "@/components/recipes/Recipe";
export default {
  props: {
    recipes: {
      type: Array,
      required: true,
    },
  },
  components: {
    Recipe,
  },
};
</script>

<style scoped>
.recipes {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
</style>
