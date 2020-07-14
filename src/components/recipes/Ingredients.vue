<template>
  <div>
    <div class="d-flex mb-4 align-items-center">
      <h3 class="mr-3">Składniki:</h3>
      <button
        @click.prevent="add"
        title="Dodaj nowy składnik"
        class="btn btn-success"
      >
        +
      </button>
    </div>

    <ingredient
      v-for="(ing, index) in ingredients"
      :key="index"
      v-model="ingredients[index]"
      :index="index"
      @remove="remove"
    />
  </div>
</template>

<script>
import { ingredientForm as defaultIngredient } from "@/utils/recipes/form";
import Ingredient from "@/components/recipes/Ingredient";
export default {
  props: {
    value: {
      type: Array,
      required: true,
    },
  },
  components: {
    Ingredient,
  },
  computed: {
    ingredients: {
      get() {
        return this.value;
      },
      set(value) {
        this.$emit("input", value);
      },
    },
  },
  methods: {
    add() {
      this.ingredients.push({ ...defaultIngredient });
    },
    remove(index) {
      if (this.ingredients.length > 1) {
        this.ingredients.splice(index, 1);
      }
    },
  },
};
</script>

<style scoped></style>
