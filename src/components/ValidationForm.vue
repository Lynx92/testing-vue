<template>
  <div>
    <input
      id="name"
      v-model="name"
      type="text"
      name="name"
      placeholder="Your Name"
    />
    <span id="nameErr" v-text="'Name is required'" v-if="nameValidation" />
    <input
      id="age"
      v-model="age"
      type="number"
      name="age"
      min="0"
      placeholder="Your Age"
    />
    <span id="ageErr" v-text="'Age is required'" v-if="ageValidation" />
  </div>
</template>

<script>
export default {
  name: "ValidationForm",
  data: () => ({
    name: null,
    age: null,
  }),

  computed: {
    nameValidation() {
      return this.name === null;
    },

    ageValidation() {
      return this.age === null;
    },
  },
};
</script>

<style scoped>
div {
  padding: 0.2rem 0;
  background-color: rgba(148, 127, 255, 0.6);
}

input {
  margin: 0 0.5rem;
}

span {
  color: red;
}
</style>