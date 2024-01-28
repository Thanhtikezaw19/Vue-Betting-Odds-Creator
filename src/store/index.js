// src/store/index.js
import { defineStore } from 'pinia';

//const pinia = createPinia();

export const useStore = defineStore({
  id: 'main',
  state: () => ({
    tableData: [],
  }),
  actions: {
    addTableRow(data) {
      this.tableData.push(data);
    },
    deleteTableRow(index) {
      this.tableData.splice(index, 1);
    },
  },
});
