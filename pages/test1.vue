<template>
  <div class="amy"></div>
</template>
<style scoped>
.amy {
  border: 10px solid pink;
  border-radius: 50%;
  border-top: 16px solid white;
  border-bottom: 16px solid black;
  width: 120px;
  height: 120px;
  /* animation: rotate 20s linear infinite; */
}
@keyframes rotate {
  10% {
    transform: rotate(90deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
<script setup>
// onMounted(() => {
//   var a = 10;
//   for (let index = 0; index < 3; index++) {
//     console.log("index", a);
//     var a = 20;
//     console.log("index", a);
//   }
//   // console.log(" OutSideindex", index);
// });

let users = [
  { userName: "john", email: "john@gmail.com", age: 22 },
  { userName: "jane", email: "jane@gmail.com", age: 25 },
  { userName: "adam", email: "adam@gmail.com", age: 24 },
  { userName: "radf", email: "radf@gmail.com", age: 23 },
];
// function chackName(username) {
//   const findIndexDataIndex = users.findIndex((element) => {
//     if (element.userName == username) {
//       element.age = "27";
//       return element;
//     }
//   });

//   console.log("user", findIndexDataIndex);
//   // console.log("users", users);
//   let filter = users.splice(findIndexDataIndex, 1, {
//     userName: "mahi",
//     email: "mahi@gmail.com",
//     age: "27",
//   });
//   console.log("filter", filter);
//   return filter;
// }
// let getIndex = chackName("adam");
// console.log("usersoutside", users);

// slice
//  select and return selected elements form the array it dont change existing array

// splice
// select and delete and add the elements to the array
//  select and delete delete using
// Array.splice(startIndex,upto_delete_number, add_new_value)

// find
// Array.find((elements)=>{if(condition){ return value}})

//map function
// let returndata = users.map((ele, index) => {
//   console.log("ele", index, ele);
// });

// reduce
// function reduceFun() {
//   let reducedData = users.reduce((accum, currentValue) => {
//     if (currentValue.age > 10) {
//       accum["userName"] = currentValue.userName;
//       accum["email"] = currentValue.email;
//       accum["age"] = currentValue.age + 2;
//       return accum;
//     }
//   }, []);
//   // return reducedData;

//   console.log("reducedData", reducedData);
// }
// let mapReturnData = users.map(reduceFun);
// console.log("reducedData", reducedData);

// filter methods

let filterRetunData = users.filter((ele, index, array) => {
  // console.log(ele, index);
});

let mapReturnData = users.map((ele, index, array) => {
  // console.log(ele, index, array);
});
let filterData = users.filter((ele, index, array) => {
  // console.log(index, array, ele);
});
</script>