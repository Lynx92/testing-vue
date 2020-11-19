<template>
  <div>
    <button id="btn" v-text="'Axios'" @click="getIpsum" />
    <p id="ipsum" v-text="fetched" v-if="fetched" />
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Axios",
  data: () => ({
    fetched: null,
  }),

  methods: {
    async getIpsum() {
      try {
        const res = await axios.get(
          "https://baconipsum.com/api/?type=meat-and-filler"
        );
        this.fetched = res.data[0];
      } catch (error) {
        this.fetched = "Error";
      }
    },
  },
};
</script>

<style lang="scss" scoped>
div {
  background-color: aqua;
  padding: 0.2rem;
}
</style>