

<template>
  <div>
    <vue-tailwind-datepicker :formatter="formatter" v-model="dateValue" />
  </div>
</template>


<script setup>
import { ref } from "vue";
import _ from "lodash";
import VueTailwindDatepicker from "vue-tailwind-datepicker";

var users = [
  { user: "barney", active: true },
  { user: "fred", active: false },
  { user: "pebbles", active: false },
];

let data = _.dropRightWhile(users, function (o) {
  return !o.active;
});
console.log("data", data);
// => objects for ['barney']

const dateValue = ref([]);
const formatter = ref({
  date: "DD MMM YYYY",
  month: "MMM",
});
</script>
