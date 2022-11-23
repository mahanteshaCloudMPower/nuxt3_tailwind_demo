<template>
  <div class="mt-10">
    <div class="flex flex-1 justify-center py-2 px-2">
      <div class="flex border-2 border-black rounded-lg p-2">
        <svg
          class="w-6 h-6 mt-2"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
          ></path>
        </svg>
        <Datepicker
          class="rounded-none border-none focus:border-none"
          v-model="picked"
        />
      </div>
    </div>
    <div class="w-full mt-5 flex justify-center">
      <p>{{ picked }}</p>
    </div>
  </div>
</template>

<script setup>
import Datepicker from "vue3-datepicker";
import { ref } from "vue";
const picked = ref(new Date());

onMounted(() => {
  console.log("picked", picked);
});

onUpdated(() => {
  console.log("picked", picked.value);
});
// onMounted(() => {
//   el.value // <div>
// })
</script>



<style scoped>
[type="text"] {
  border-radius: 11px;
}
textarea:focus,
input:focus {
  outline: none;
}
</style>