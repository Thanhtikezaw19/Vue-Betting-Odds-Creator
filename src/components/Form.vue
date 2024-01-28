<!-- src/components/Form.vue -->

<template>
  <div class="container">
    <div class="input-div"><label>Time: <input v-model="time" class="input"/></label></div>
    <div class="input-div"><label>Team: <input v-model="team" class="input"/></label></div>
    <div class="input-div"><label>Body: <input v-model="body" class="input"/></label></div>
    <div class="input-div"><label>Goals: <input v-model="goals" class="input"/></label></div>
    <button class="btn" @click="submitData">Add</button>
  </div>
</template>

<script>
import { useStore } from '../store/index';

export default {
  data() {
    return {
      time: '',
      team: '',
      body: '',
      goals: '',
    };
  },
  methods: {
    submitData() {
      useStore().addTableRow({
        time: this.time,
        team: this.team,
        body: this.body,
        goals: this.goals,
      });

      // Clear form fields after submission
      this.time = '';
      this.team = '';
      this.body = '';
      this.goals = '';
    },
  },
};
</script>

<style scoped>
/* Add your styles here */
.container {
  width: 100%;
  text-align: center;
  background-color: bisque;
  padding-top: 10px;
  text-align: center;
}

.input {
  padding: 5px 20px;
}

.input-div {
  margin-top: 10px;
}

.btn {
  margin-top: 10px;
  text-align: right;
}

label {
  font-size: 20px;
  font-weight: bold;
}

.btn {
  padding: 10px 40px;
  background-color: cornflowerblue;
  color: white;
  border-radius: 5px;
}
</style>
