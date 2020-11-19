<template>
  <div>
    <h1 id="myText" v-text="text" />
  </div>
</template>

<script>
export default {
  name: "Data",
  data: () => ({
    text: "Soy un mono",
  }),
};
</script>

<style scoped>
div {
  background-color: rgba(127, 255, 212, 0.6);
}
</style>