<template>
  <div>
    <h1 id="myText" v-text="text" />
  </div>
</template>

<script>
export default {
  name: "PropsData",
  props: { text: String },
};
</script>

<style scoped>
div {
  background-color: rgba(249, 255, 127, 0.6);
}
</style>