<template>
  <div class="mx-auto max-w-full sm:px-6 lg:px-8">
    <div class="flex flex-1 mt-10 justify-center px-2 lg:ml-6">
      <div>
        <h1 class="text-2xl font-semibold text-gray-900">Enter User Details</h1>
      </div>
    </div>
    <div class="flex flex-1 justify-start px-2 lg:ml-6">
      <form id="validate" action="javascript:void(0);">
        <label for="userName" class="block text-sm font-medium text-gray-700"
          >User Name*</label
        >
        <input
          type="text"
          name="userName"
          v-model="userName"
          id="userName"
          autocomplete="userName"
          class="
            bg-gray-50
            border border-gray-300
            text-gray-900 text-sm
            rounded-lg
            focus:ring-blue-500 focus:border-blue-500
            block
            w-full
            p-2.5
            dark:bg-gray-700
            dark:border-gray-600
            dark:placeholder-gray-400
            dark:text-white
            dark:focus:ring-blue-500
            dark:focus:border-blue-500
          "
          required
        />

        <label for="titleName" class="block text-sm font-medium text-gray-700"
          >Title*</label
        >
        <input
          type="text"
          name="titleName"
          id="titleName"
          autocomplete="titleName"
          class="
            bg-gray-50
            border border-gray-300
            text-gray-900 text-sm
            rounded-lg
            focus:ring-blue-500 focus:border-blue-500
            block
            w-full
            p-2.5
            dark:bg-gray-700
            dark:border-gray-600
            dark:placeholder-gray-400
            dark:text-white
            dark:focus:ring-blue-500
            dark:focus:border-blue-500
          "
          required
        />

        <label for="emailId" class="block text-sm font-medium text-gray-700"
          >Email Id*</label
        >
        <input
          v-model="emailId"
          type="email"
          name="emailId"
          id="emailId"
          autocomplete="emailId"
          class="
            bg-gray-50
            border border-gray-300
            text-gray-900 text-sm
            rounded-lg
            focus:ring-blue-500 focus:border-blue-500
            block
            w-full
            p-2.5
            dark:bg-gray-700
            dark:border-gray-600
            dark:placeholder-gray-400
            dark:text-white
            dark:focus:ring-blue-500
            dark:focus:border-blue-500
          "
          required
        />

        <label for="passwd" class="block text-sm font-medium text-gray-700"
          >Role*</label
        >

        <input
          type="text"
          name="role"
          id="role"
          autocomplete="role"
          class="
            bg-gray-50
            border border-gray-300
            text-gray-900 text-sm
            rounded-lg
            focus:ring-blue-500 focus:border-blue-500
            block
            w-full
            p-2.5
            dark:bg-gray-700
            dark:border-gray-600
            dark:placeholder-gray-400
            dark:text-white
            dark:focus:ring-blue-500
            dark:focus:border-blue-500
          "
          required
        />
        <div class="flex justify-between mt-2">
          <button
            id="submitBtn"
            @click="formSubmit($event, 'validate')"
            type="submit"
            value="Save"
            class="
              focus:outline-none
              text-white
              bg-purple-700
              hover:bg-purple-800
              focus:ring-4 focus:ring-purple-300
              font-medium
              rounded-lg
              text-sm
              px-5
              py-2.5
              mb-2
              dark:bg-purple-600
              dark:hover:bg-purple-700
              dark:focus:ring-purple-900
            "
          >
            Save
          </button>
          <button
            @click="clearForm($event, 'validate')"
            type="clear"
            class="
              focus:outline-none
              text-white
              bg-purple-700
              hover:bg-purple-800
              focus:ring-4 focus:ring-purple-300
              font-medium
              rounded-lg
              text-sm
              px-5
              py-2.5
              mb-2
              dark:bg-purple-600
              dark:hover:bg-purple-700
              dark:focus:ring-purple-900
            "
          >
            clear
          </button>
          <button @click="myFunction()" id="myButton" value="Open Curtain">
            Open Curtain
          </button>
        </div>
      </form>
    </div>
    <div class="px-4 mt-5 sm:px-6 lg:px-8">
      <div class="sm:flex sm:items-center">
        <div class="sm:flex-auto">
          <h1 class="text-xl font-semibold text-gray-900">Users</h1>
          <p class="mt-2 text-sm text-gray-700">
            A list of all the users in your account including their name, title,
            email and role.
          </p>
        </div>
      </div>
      <div class="mt-8 flex flex-col">
        <div class="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div
            class="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8"
          >
            <div
              class="
                overflow-hidden
                shadow
                ring-1 ring-black ring-opacity-5
                md:rounded-lg
              "
            >
              <table class="min-w-full divide-y divide-gray-300">
                <thead class="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      class="
                        py-3.5
                        pl-4
                        pr-3
                        text-left text-sm
                        font-semibold
                        text-gray-900
                        sm:pl-6
                      "
                    >
                      Name
                    </th>
                    <th
                      scope="col"
                      class="
                        px-3
                        py-3.5
                        text-left text-sm
                        font-semibold
                        text-gray-900
                      "
                    >
                      Title
                    </th>
                    <th
                      scope="col"
                      class="
                        px-3
                        py-3.5
                        text-left text-sm
                        font-semibold
                        text-gray-900
                      "
                    >
                      Email
                    </th>
                    <th
                      scope="col"
                      class="
                        px-3
                        py-3.5
                        text-left text-sm
                        font-semibold
                        text-gray-900
                      "
                    >
                      Role
                    </th>
                    <th scope="col" class="relative py-3.5 pl-3 pr-4 sm:pr-6">
                      <span class="sr-only">Edit</span>
                    </th>
                  </tr>
                </thead>
                <tbody
                  v-if="tbodyLoad"
                  id="tbody"
                  class="divide-y divide-gray-200 bg-white"
                >
                  <tr
                    id="trow"
                    v-for="(person, index) in people"
                    :key="person.email"
                  >
                    <td
                      class="
                        whitespace-nowrap
                        py-4
                        pl-4
                        pr-3
                        text-sm
                        font-medium
                        text-gray-900
                        sm:pl-6
                      "
                    >
                      {{ person.userName }}
                    </td>
                    <td
                      class="whitespace-nowrap px-3 py-4 text-sm text-gray-500"
                    >
                      {{ person.titleName }}
                    </td>
                    <td
                      class="whitespace-nowrap px-3 py-4 text-sm text-gray-500"
                    >
                      {{ person.emailId }}
                    </td>
                    <td
                      class="whitespace-nowrap px-3 py-4 text-sm text-gray-500"
                    >
                      {{ person.role }}
                    </td>
                    <td
                      class="
                        relative
                        whitespace-nowrap
                        py-4
                        pl-3
                        pr-4
                        text-right text-sm
                        font-medium
                        sm:pr-6
                      "
                    >
                      <button
                        class="text-indigo-600 hover:text-indigo-900"
                        @click="editUser(person, index)"
                      >
                        Edit
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
const people = ref([]);
people.value = [
  {
    userName: "Lindsay Walton",
    titleName: "Front-end Developer",
    emailId: "lindsay.walton@example.com",
    role: "Member",
  },
  // More people...
];
let tbodyLoad = ref(true);
let checkArray = false;
let userName = ref("");
let emailId = ref("");
let password = ref("");

function myFunction() {
  var btn = document.getElementById("myButton");

  if (btn.value == "Open Curtain") {
    btn.value = "Close Curtain";
    btn.innerHTML = "Close Curtain";
  } else {
    btn.value = "Open Curtain";
    btn.innerHTML = "Open Curtain";
  }
}

function formSubmit(e, form) {
  var btn = document.getElementById("submitBtn");
  if (btn.value == "Save") {
    let elements = document.getElementById(form).elements;

    let obj = {};
    let obj_collection = {};
    for (let i = 0; i < elements.length; i++) {
      // console.log(elements.item(i));
      let item = elements.item(i);
      // console.log(item, "ghhhhhhhhhhhhhhhhhj");
      if (item.name !== "") {
        obj[item.name] = item.value;
      }
    }

    for (const key in obj) {
      if (obj[key] != "") {
        checkArray = true;
        obj_collection[key] = obj[key];
        console.log(key, obj[key]);
      } else {
        checkArray = false;
      }
    }

    if (checkArray) {
      // let user1 = document.getElementById("userName").value;
      // user1.value = "";
      // let user2 = document.getElementById("titleName").value;
      // user2.value = "";
      // let user3 = document.getElementById("emailId").value;
      // user3.value = "";
      // let user4 = document.getElementById("role").value;
      // user4.value = "";
      tbodyLoad.value = false;
      console.log(obj_collection);
      people.value.push(obj_collection);

      // const removeDuplicates = (array, key) => {
      //   return array.reduce((arr, item) => {
      //     const removed = arr.filter((i) => i[key] !== item[key]);
      //     return [...removed, item];
      //   }, []);
      // };
      // people.value = removeDuplicates(people.value, "userName");
      // console.log(
      //   "%c mess",
      //   "color:red",
      //   removeDuplicates(people.value, "userName")
      // );
      //
      console.log(people);
      tbodyLoad.value = true;
    }
  } else {
    let elements = document.getElementById(form).elements;

    let obj = {};
    let obj_collection = {};
    for (let i = 0; i < elements.length; i++) {
      // console.log(elements.item(i));
      let item = elements.item(i);
      // console.log(item, "ghhhhhhhhhhhhhhhhhj");
      if (item.name !== "") {
        obj[item.name] = item.value;
      }
    }

    for (const key in obj) {
      if (obj[key] != "") {
        checkArray = true;
        obj_collection[key] = obj[key];
        console.log(key, obj[key]);
      } else {
        checkArray = false;
      }
    }

    if (checkArray) {
      // let user1 = document.getElementById("userName").value;
      // user1.value = "";
      // let user2 = document.getElementById("titleName").value;
      // user2.value = "";
      // let user3 = document.getElementById("emailId").value;
      // user3.value = "";
      // let user4 = document.getElementById("role").value;
      // user4.value = "";
      tbodyLoad.value = false;
      console.log(obj_collection);
      people.value.push(obj_collection);

      // const removeDuplicates = (array, key) => {
      //   return array.reduce((arr, item) => {
      //     const removed = arr.filter((i) => i[key] !== item[key]);
      //     return [...removed, item];
      //   }, []);
      // };
      // people.value = removeDuplicates(people.value, "userName");
      // console.log(
      //   "%c mess",
      //   "color:red",
      //   removeDuplicates(people.value, "userName")
      // );
      //
      console.log(people);
      tbodyLoad.value = true;
    }
    btn.value = "Save";
    btn.innerHTML = "Save";
    function getUniqueListBy(arr, key) {
      return [...new Map(arr.map((item) => [item[key], item])).values()];
    }

    people.value = getUniqueListBy(people.value, "userName");
    console.log("arr1", people.value);
  }
}
function clearForm() {
  document.getElementById("validate").reset();

  console.log("validate");
  let user1 = document.getElementById("userName").value;
  user1 = "";
  console.log("user1", user1);
  let user2 = document.getElementById("titleName").value;
  user2 = "";
  let user3 = document.getElementById("emailId").value;
  user3 = "";
  let user4 = document.getElementById("role").value;
  user4 = "";
}

function editUser(user, index) {
  var btn = document.getElementById("submitBtn");
  if (btn.value == "Save") {
    btn.value = "Edit";
    btn.innerHTML = "Edit";
  } else {
    btn.value = "Save";
    btn.innerHTML = "Save";
  }
  let userData = JSON.parse(JSON.stringify(user));
  console.log(userData, index);

  // let userName = document.getElementById("userName");
  if (userData) {
    // userName.innerHTML = userData.userName;
    document.getElementById("userName").value = userData.userName;
    document.getElementById("titleName").value = userData.titleName;
    document.getElementById("emailId").value = userData.emailId;
    document.getElementById("role").value = userData.role;
    // console.log(userData.userName);
    // userName.value = userData.userName;
    // titleName.value = userData.titleName;
    // emailId.value = userData.emailId;
    // role.value = userData.role;
    // people.value.splice(index, 1);
  }
  //
}
</script>