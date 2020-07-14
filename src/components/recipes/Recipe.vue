<template>
  <div class="recipe">
    <h2>
      {{ recipe.name }}
    </h2>

    <div class="recipe__desc">
      {{ recipe.description }}
    </div>

    <div class="recipe__ing">
      <span>Składniki:</span>
      <ul>
        <li
          v-for="(ing, index) in recipe.ingredients"
          :key="`${ing.name}${index}`"
        >
          {{ ing.name }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    recipe: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.recipe {
  width: 50%;
  border: 1px solid gray;
  padding: 10px;
}

.recipe__desc {
  padding: 10px;
  font-size: 14px;
}

.recipe__ing > ul li {
  text-align: left;
}

.recipe__ing > span {
  padding-left: 20px;
  display: block;
  text-align: left;
  font-weight: 600;
}
</style>
