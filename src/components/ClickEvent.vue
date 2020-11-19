<template>
  <div>
    <button id="myBtn" v-text="textBtn" @click="addMoney" />
    <p id="myCounter" v-text="`${counter} €`" />
  </div>
</template>

<script>
export default {
  name: "ClickEvent",
  data: () => ({
    textBtn: "Boton",
    counter: 0,
  }),

  methods: {
    addMoney() {
      this.counter += 10;
    },
  },
};
</script>

<style scoped>
div {
  background-color: rgba(255, 0, 0, 0.6);
}
</style>