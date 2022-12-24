<template>
  <div class="flex min-h-full flex-col justify-center py-12 sm:px-6 lg:px-8">
    <div class="sm:mx-auto sm:w-full sm:max-w-md">
      <p>Are You sure logout</p>
    </div>
    <div class="sm:mx-auto sm:w-full sm:max-w-md">
      <button
        class="
          justify-between
          rounded-md
          border border-transparent
          bg-indigo-600
          py-2
          px-4
          m-2
          text-sm
          font-medium
          text-white
          shadow-sm
          hover:bg-indigo-700
          focus:outline-none
          focus:ring-2
          focus:ring-indigo-500
          focus:ring-offset-2
        "
        @click="noFunction()"
      >
        Cancel
      </button>
      <button
        class="
          rounded-md
          border border-transparent
          bg-indigo-600
          py-2
          px-4
          text-sm
          font-medium
          text-white
          shadow-sm
          hover:bg-indigo-700
          focus:outline-none
          focus:ring-2
          focus:ring-indigo-500
          focus:ring-offset-2
        "
        @click="yesFunction()"
      >
        Yes
      </button>
    </div>
  </div>
</template>
<script setup>
// console.log("")
const auth = useAuth();
function yesFunction() {
  auth.value.isAuthenticated = false;
  navigateTo("/");
  console.log("auth.value.isAuthenticated", auth.value.isAuthenticated);
}
function noFunction() {
  console.log("cancel logout");
}
</script>