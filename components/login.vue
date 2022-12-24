<!--
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
-->
<template>
  <div class="flex min-h-full flex-col justify-center py-12 sm:px-6 lg:px-8">
    <div class="sm:mx-auto sm:w-full sm:max-w-md">
      <h2
        class="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900"
      >
        Sign in to your account
      </h2>
    </div>

    <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
      <div class="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
        <div
          v-if="_error"
          class="
            justify-center
            bg-red-500
            text
            white
            justify-item-ceneter
            border-xl
            rounded-xl
          "
        >
          <p class="flex justify-center uppercase">{{ _error }}</p>
        </div>
        <form class="space-y-6" @submit.prevent="onSubmit()">
          <div>
            <label for="email" class="block text-sm font-medium text-gray-700"
              >Email address</label
            >
            <div class="mt-1">
              <input
                id="email"
                name="email"
                v-model="form.email"
                type="email"
                autocomplete="email"
                required=""
                class="
                  block
                  w-full
                  appearance-none
                  rounded-md
                  border border-gray-300
                  px-3
                  py-2
                  placeholder-gray-400
                  shadow-sm
                  focus:border-indigo-500
                  focus:outline-none
                  focus:ring-indigo-500
                  sm:text-sm
                "
              />
            </div>
          </div>

          <div>
            <label
              for="password"
              class="block text-sm font-medium text-gray-700"
              >Password</label
            >
            <div class="mt-1">
              <input
                id="password"
                name="password"
                type="password"
                v-model="form.password"
                autocomplete="current-password"
                required=""
                class="
                  block
                  w-full
                  appearance-none
                  rounded-md
                  border border-gray-300
                  px-3
                  py-2
                  placeholder-gray-400
                  shadow-sm
                  focus:border-indigo-500
                  focus:outline-none
                  focus:ring-indigo-500
                  sm:text-sm
                "
              />
            </div>
          </div>

          <div class="flex items-center justify-between">
            <div class="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                class="
                  h-4
                  w-4
                  rounded
                  border-gray-300
                  text-indigo-600
                  focus:ring-indigo-500
                "
              />
              <label for="remember-me" class="ml-2 block text-sm text-gray-900"
                >Remember me</label
              >
            </div>

            <div class="text-sm">
              <a
                href="#"
                class="font-medium text-indigo-600 hover:text-indigo-500"
                >Forgot your password?</a
              >
            </div>
          </div>

          <div>
            <button
              type="submit"
              class="
                flex
                w-full
                justify-center
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
            >
              <span v-if="isLoading"> Loading....</span>
              <span v-else> Sign in</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script setup>
const auth = useAuth();
const url = "https://reqres.in/api/login";
const isLoading = ref(null);
const _error = ref(null);
const form = reactive({
  email: "michael.lawson@reqres.in",
  password: "password",
});
async function onSubmit() {
  if (isLoading.value) return;
  isLoading.value = true;
  const { data, error } = await useFetch(url, {
    method: "post",
    body: form,
  });
  isLoading.value = false;

  if (error.value) {
    _error.value = error.value.data.error;

    console.log("data", data, error.value.data.error);
  } else {
    auth.value.isAuthenticated = true;

    navigateTo("/home");
  }
}
</script>