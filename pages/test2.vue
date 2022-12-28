<template>
  <div>
    {{ storeData.message }}
    {{ storeData.responseData[0] }}
  </div>
  <div class="min-w-full">
    <table id="sortMe" class="table min-w-full  border-collapse sm:border-separate    border border-slate-400 ...">
  <thead>
    <tr>
      <th class="border border-slate-300">Id </th>
      <th class="border border-slate-300">Title </th>
      <th class="border border-slate-300" >Price </th>
    </tr>
  </thead>
  <tbody>
    <tr  v-for="data in storeData.responseData[0]">
      <td class="border border-slate-300  text-center...">{{ data.id    }}</td>
      <td class="border border-slate-300  text-center...">{{ data.title}}</td>
      <td class="border border-slate-300  text-center...">{{ data.price}}</td>
    </tr>
  </tbody>
</table>
</div>
</template>
<script setup>
import { useCounterstore } from "~/stores/counter";

const storeData = ref(0);
storeData.value = useCounterstore();
const table =ref('')
const headers=ref('')
// Query the table
table.value = document.getElementById("sortMe");

// Query the headers
 headers.value = document.getElementsByTagName("th");

// Loop over the headers
[].forEach.call(headers, function (header, index) {
    header.addEventListener('click', function () {
        // This function will sort the column
        sortColumn(index);
    });
});


// function sortTable(n) {
//   let table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = ref(0);
//   table = document.getElementById("myTable");
//   switching = true;
//   //Set the sorting direction to ascending:
//   dir = "asc"; 
//   /*Make a loop that will continue until
//   no switching has been done:*/
//   while (switching) {
//     //start by saying: no switching is done:
//     switching = false;
//     rows = table.rows;
//     /*Loop through all table rows (except the
//     first, which contains table headers):*/
//     for (i = 1; i < (rows.length - 1); i++) {
//       //start by saying there should be no switching:
//       shouldSwitch = false;
//       /*Get the two elements you want to compare,
//       one from current row and one from the next:*/
//       x = rows[i].getElementsByTagName("TD")[n];
//       y = rows[i + 1].getElementsByTagName("TD")[n];
//       /*check if the two rows should switch place,
//       based on the direction, asc or desc:*/
//       if (dir == "asc") {
//         if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
//           //if so, mark as a switch and break the loop:
//           shouldSwitch= true;
//           break;
//         }
//       } else if (dir == "desc") {
//         if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
//           //if so, mark as a switch and break the loop:
//           shouldSwitch = true;
//           break;
//         }
//       }
//     }
//     if (shouldSwitch) {
//       /*If a switch has been marked, make the switch
//       and mark that a switch has been done:*/
//       rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
//       switching = true;
//       //Each time a switch is done, increase this count by 1:
//       switchcount ++;      
//     } else {
//       /*If no switching has been done AND the direction is "asc",
//       set the direction to "desc" and run the while loop again.*/
//       if (switchcount == 0 && dir == "asc") {
//         dir = "desc";
//         switching = true;
//       }
//     }
//   }
// }
</script>

