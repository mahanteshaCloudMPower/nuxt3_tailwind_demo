
<template>
  <div>
    <div class="chat-notification">
      <div class="chat-notification-logo-wrapper">
        <img
          class="chat-notification-logo"
          src="/img/logo.svg"
          alt="ChitChat Logo"
        />
      </div>
      <div class="chat-notification-content">
        <h4 class="chat-notification-title">ChitChat</h4>
        <p class="chat-notification-message">You have a new message!</p>
      </div>
    </div>
  </div>
</template>
<script setup>
const names = [
  { name: "mahi", age: 27 },
  { name: "mahi2", age: 26 },
  { name: "mahi3", age: 25 },
];
const names2 = [
  { name: "nave", age: 27 },
  { name: "nave2", age: 26 },
  { name: "nave3", age: 25 },
];
// const spread = [
//   { name: "mahi", age: 27 },
//   { name: "mahi2", age: 26 },
//   ...names,
//   ...names2,
// ];
// const spread = [
//   { name: "mahi", age: 27 },
//   { name: "mahi2", age: 26 },
//   ...new Set(names),
// ];
// console.log(spread);
// var uniq = [...new Set(spread.map(({ name }) => name))].map((e) =>
//   spread.find(({ name }) => name == e)
// );
// var uniq = [...new Set(spread.map(({ name }) => name))].map((e) => {
//   spread.find(({ name }) => name == e);
// });

// step 1
// first uniq elements sort
// ['mahi', 'mahi2', 'mahi3']
// step 2
// map to find the object which is match to the array

// var uniq1 = [...new Set(spread.map(({ name }) => name))].map((e) =>
//   spread.find(({ name }) => name == e)
// );
// console.log(uniq1);

// const listOfTags = [
//   { id: 1, label: "Hello", color: "red", sorting: 0 },
//   { id: 2, label: "World", color: "green", sorting: 1 },
//   { id: 3, label: "Hello", color: "blue", sorting: 4 },
//   { id: 4, label: "Sunshine", color: "yellow", sorting: 5 },
//   { id: 5, label: "Hello", color: "red", sorting: 6 },
// ];

// console.log(listOfTags);
// const unique = [];

// listOfTags.map((x) =>
//   unique.filter((a) => a.label == x.label && a.color == x.color).length > 0
//     ? null
//     : unique.push(x)
// );

// remove the first object if the object is redendent
var test = [
  {
    id: 1,
    PlaceRef: "*00011",
    Component: "BATH",
    SubLocCode: "BAT",
    BarCode: "",
  },
  {
    id: 2,
    PlaceRef: "*00022",
    Component: "BAXI10R",
    SubLocCode: "KIT",
    BarCode: "",
  },
  {
    id: 1,
    PlaceRef: "*00011",
    Component: "BATH",
    SubLocCode: "BAkT",
    BarCode: "",
  },
  {
    id: 3,
    PlaceRef: "*00011",
    Component: "ANR190",
    SubLocCode: "B1",
    BarCode: "",
  },
];

console.log([...new Map(test.map((item) => [item.id, item])).values()]);

// console.log(unique);
</script>

<style>
.chat-notification {
  display: flex;
  max-width: 24rem;
  margin: 0 auto;
  padding: 1.5rem;
  border-radius: 0.5rem;
  background-color: #fff;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
    0 10px 10px -5px rgba(0, 0, 0, 0.04);
}
.chat-notification-logo-wrapper {
  flex-shrink: 0;
}
.chat-notification-logo {
  height: 3rem;
  width: 3rem;
}
.chat-notification-content {
  margin-left: 1.5rem;
  padding-top: 0.25rem;
}
.chat-notification-title {
  color: #1a202c;
  font-size: 1.25rem;
  line-height: 1.25;
}
.chat-notification-message {
  color: #718096;
  font-size: 1rem;
  line-height: 1.5;
}
</style>