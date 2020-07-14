<template>
  <div class="container">
    <h1>Tworzenie przepisu</h1>

    <form @submit.prevent="onSubmit">
      <div class="mb-3">
        <label for="name" class="form-label">Nazwa</label>
        <input
          class="form-control"
          id="name"
          required
          v-model="form.name"
          placeholder="Nazwa przepisu"
        />
      </div>

      <div class="mb-3">
        <label for="description" class="form-label">Opis</label>
        <textarea
          id="description"
          class="form-control"
          rows="3"
          v-model="form.description"
          placeholder="Opis"
        />
      </div>

      <ingredients v-model="form.ingredients" />
      <button type="submit" class="w-100 mt-5 btn btn-primary">Dodaj</button>
    </form>
  </div>
</template>

<script>
import Ingredients from "@/components/recipes/Ingredients";
import { recipeForm as form } from "@/utils/recipes/form";
export default {
  components: {
    Ingredients,
  },
  data() {
    return {
      form: { ...form },
    };
  },
  methods: {
    onSubmit() {
      console.log("onSubmit", this.form);
    },
  },
};
</script>

<style></style>
