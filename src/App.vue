<template>
  <div id="app">
    <div class="app-container"><Form /></div>
    <div class="app-container"><Table /></div>
  </div>
</template>

<script>
import Form from "./components/Form.vue";
import Table from "./components/Table.vue";

export default {
  components: {
    Form,
    Table,
  },
};
</script>

<style>
/* Add your styles here */
.app-container {
  text-align: center;
}

#app {
  text-align: center;
}
</style>
