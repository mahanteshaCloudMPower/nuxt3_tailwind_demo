<template>
  <div>
    <div class="amy"></div>
    <button class="border-radius py-2 px-2 bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 ...">
  Save changes
</button>
  </div>
 
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
import axios from "axios"
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



// // start using XMLHttpRequest call
// // Before ES 6 comes out, the only way to make an HTTP request in JavaScript was XMLHttpRequest. 
// // It is a built-in browser object that allows us to make HTTP requests in JavaScript.
// let request =new XMLHttpRequest();
// request.open("GET","https://jsonplaceholder.typicode.com/users");
// request.send();
// request.onload=()=>{
//   console.log("request",request);
//   if (request.status===200) {
//     console.log(JSON.parse(request.response));
//   } else {
//     console.log(request.status,request,statusText);
//   }
// }

// // By default we receive the response in the string format, we need to parse into JSON.

// // XMLHttpRequest was deprecated in ES 6 by the introduction of fetch.
// //  But still, we are using XMLHttpRequest when we need to work with old browsers and don’t want polyfills.
// //end using XMLHttpRequest call



// fetch
// Fetch
// Fetch allows you to make an HTTP request in a similar manner as XMLHttpRequest but with a straightforward interface by using promises.
//  It’s not supported by old browsers (can be polyfilled), but very well supported among the modern ones. We can make an API call by using fetch in two ways.



// old methods
// let resData=await fetch("https://jsonplaceholder.typicode.com/users").then(response=>console.log(response.json())).then(users=>console.log(users)).catch(error=>console.log("error",error))
// console.log("resData", JSON.parse(resData));
// console.log("resData", JSON.stringify(resData));
// console.log("resData", JSON.parse(JSON.stringify(resData)));
// console.log("resData", JSON.stringify(JSON.parse(resData)));

// // new methods
// async function getUsers(params) {
//   let response=await fetch("https://jsonplaceholder.typicode.com/users");
//   let resdata=await response.json();
  
//   return resdata
// }
// let UserResponseData=getUsers().then(data=>{return data})
// // let  respDatta=getUsers()
// console.log("UserResponseData",UserResponseData ,  JSON.stringify(UserResponseData));




// // // end fetch  call



// start axios  api call

// let data=await axios.get("https://jsonplaceholder.typicode.com/users")
//         .then(response => {
//           console.log(response.data);
//           return response.data
//         })
//         .catch(error => console.error(error));
//         console.log("data",data.length);


axios.get("https://api.npms.io/v2/invalid-url")
    .then(response => console.log( response.data.total))
    .catch(error => {
      console.error("There was an error!", error);
    });
// end axios call 



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

// let filterRetunData = users.filter((ele, index, array) => {
//   // console.log(ele, index);
// });

// let mapReturnData = users.map((ele, index, array) => {
//   // console.log(ele, index, array);
// });
// let filterData = users.filter((ele, index, array) => {
  // console.log(index, array, ele);
// });
</script>
