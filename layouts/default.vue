<template>
  <!--
    This example requires updating your template:

    ```
    <html class="h-full bg-gray-100">
    <body class="h-full">
    ```
  -->
  <div class="min-h-full">
    <Disclosure as="nav" class="bg-white shadow-sm" v-slot="{ open }">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="flex h-16 justify-between">
          <div class="flex">
            <div class="flex flex-shrink-0 items-center">
              <img
                class="block h-8 w-auto lg:hidden"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                alt="Your Company"
              />
              <img
                class="hidden h-8 w-auto lg:block"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                alt="Your Company"
              />
            </div>
            <divid
              id="navigate"
              class="hidden sm:-my-px sm:ml-6 sm:flex sm:space-x-8"
            >
              <a
                v-for="item in navigation"
                :key="item.name"
                :class="[
                  item.current
                    ? 'border-indigo-500 text-gray-900'
                    : 'border-transparent text-gray-500 hover:text-pink-700 hover:border-gray-300',
                  'inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium',
                ]"
                :aria-current="item.current ? 'page' : undefined"
              >
                <NuxtLink
                  :to="item.path"
                  class="n-link-base"
                  @click="chengeChanges(item)"
                  >{{ item.name }}</NuxtLink
                >
              </a>
            </divid>
          </div>
        </div>
      </div>

      <DisclosurePanel class="sm:hidden">
        <div class="space-y-1 pt-2 pb-3">
          <DisclosureButton
            v-for="item in navigation"
            :key="item.name"
            as="a"
            class="changeFoucs"
            :class="[
              item.current
                ? 'bg-pink-50 border-pink-500 text-pnk-700'
                : 'border-transparent text-pink-600 hover:bg-pink-50 hover:border-pink-300 hover:text-pink-800',
              'block pl-3 pr-4 py-2 border-l-4 text-base font-medium',
            ]"
            :aria-current="item.current ? 'page' : undefined"
          >
            <NuxtLink :to="item.path">
              {{ item.name }}
            </NuxtLink>
          </DisclosureButton>
        </div>
      </DisclosurePanel>
    </Disclosure>

    <div class="">
      <header>
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1
            class="
              text-3xl
              font-bold
              leading-tight
              tracking-tight
              text-gray-900
            "
          ></h1>
        </div>
      </header>
      <main>
        <div class="mx-auto max-w-7xl sm:px-6 lg:px-8">
          <!-- Replace with your content -->
          <div>
            <slot />
          </div>
          <!-- /End replace -->
        </div>
      </main>
    </div>
  </div>
</template>

<script setup>
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/vue";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/vue/24/outline";

const user = {
  name: "Tom Cook",
  email: "tom@example.com",
  imageUrl:
    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
};
const navigation = [
  { name: "Home", path: "/", current: true },
  { name: "ComingSoon", path: "/comingSoon", current: false },
  { name: "VueReactive", path: "/reactive", current: false },
  // { name: "Calendar", path: "/test", current: false },
  // { name: "test1", path: "/test1", current: false },
];
function chengeChanges(item) {
  console.log("item", item);
  for (let i = 0; i < navigation.length; i++) {
    if (navigation[i].name === item.name) {
      navigation[i].current = true;
    } else {
      navigation[i].current = false;
    }
  }
}
</script>
<style scoped>
.changeFoucs {
  background-color: aqua;
}
</style>