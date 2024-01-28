<!-- src/components/Table.vue -->

<template>
  <div class="container">
    <div class="center-content">
      <div class="table-div">
        <table>
          <thead>
            <tr class="table-row">
              <th>Time</th>
              <th>Team</th>
              <th>Body</th>
              <th>Goals</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(row, index) in tableData" :key="index">
              <td>{{ row.time }}</td>
              <td>{{ row.team }}</td>
              <td class="body">{{ row.body }}</td>
              <td class="goal">{{ row.goals }}</td>
              <td>
                <button @click="deleteRow(index)">Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
    </div>
    </div>

    <div class="btns">
      <button class="img" @click="downloadImage">Download as Image</button>
      <button @click="downloadPDF">Download as PDF</button></div>
    </div>
</template>

<script>
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { useStore } from '../store/index';
export default {
  computed: {
    tableData() {
      return useStore().tableData;
    },
  },
  methods: {
    deleteRow(index) {
      useStore().deleteTableRow(index);
    },
    async downloadImage() {
      const table = this.$el.querySelector("table");
      const lastCells = table.querySelectorAll("tr td:last-child");
      const lastHeads = table.querySelectorAll("tr th:last-child");
      lastHeads.forEach(cell =>cell.remove())
      lastCells.forEach(cell => cell.remove());
      const canvas = await html2canvas(table);
      const imgData = canvas.toDataURL("image/png");

      const link = document.createElement("a");
      link.href = imgData;
      link.download = "table_image.png";
      link.click();
    },
    downloadPDF() {
      const pdf = new jsPDF();
      pdf.autoTable({ html: "table" });
      pdf.save("table_pdf.pdf");
    },
  },
};
</script>

<style scoped>
/* Add your styles here */
.container {
  /*display: flex;*/
  padding-top: 20px;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 100vh;
  background-color: bisque;
}

table {
  text-align: center;
}

table-row {
  text-align: center;
}

.center-content {
  text-align: center;
  /*margin: 0 auto;*/
  width: 40%;
  margin-left: 38%;
}

table, tr, th, td {
  border: 2px solid black;
  border-collapse: collapse;
}

th,td {
  padding: 5px 15px;
}

th {
  background-color: yellow;
}

.btns {
  margin-top: 30px;
}

.img {
  margin-right: 10px;
}

.body {
  color: dodgerblue;
}

.goal {
  color: green;
}

tbody tr td {
  background-color: white;
  font-weight: bold;
}
</style>
