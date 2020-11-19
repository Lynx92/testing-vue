<template>
  <div class="home">
    <div class="header">
      <img alt="Vue logo" src="../assets/vue-logo.png" />
      <img alt="Jest logo" src="../assets/jest-logo.png" />
    </div>
    <ClickEvent />
    <ValidationForm />
    <Data />
    <PropsData text="Hola!" />
    <Axios />
  </div>
</template>

<script>
import ClickEvent from "@/components/ClickEvent.vue";
import ValidationForm from "@/components/ValidationForm.vue";
import Data from "@/components/Data.vue";
import PropsData from "@/components/PropsData.vue";
import Axios from "@/components/Axios.vue";

export default {
  name: "Home",
  components: {
    ClickEvent,
    ValidationForm,
    Data,
    PropsData,
    Axios,
  },
};
</script>

<style scoped>
img {
  width: 200px;
  height: 200px;
}

.header {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
