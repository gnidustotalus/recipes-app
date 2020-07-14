<template>
  <div class="container mb-3">
    <div class="row align-items-center">
      <div class="col-sm">
        <input
          class="form-control"
          id="name"
          v-model="ingredient.name"
          placeholder="Nazwa"
        />
      </div>
      <div class="col-sm">
        <input
          class="form-control"
          id="quantity"
          v-model="ingredient.quantity"
          placeholder="Ilość"
        />
      </div>
      <div class="col-sm">
        <input
          class="form-control"
          id="unit"
          v-model="ingredient.unit"
          placeholder="Jednostka"
        />
      </div>

      <button @click.prevent="remove" class="col-sm-1 btn btn-danger">
        -
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: Object,
      required: true,
    },
    index: {
      type: Number,
      required: true,
    },
  },
  computed: {
    ingredient: {
      get() {
        return this.value;
      },
      set(value) {
        this.$emit("input", value);
      },
    },
  },
  methods: {
    remove() {
      this.$emit("remove", this.index);
    },
  },
};
</script>

<style scoped></style>
