import { defineStore } from "pinia";
export const useCounterstore = defineStore("counter", {
  state: () => {
    return { message: "hello mahi", responseData: [] };
  },
  actions: {
    changeMessage(msg) {
      this.message = msg;
    },
    responseFun(data) {
      this.responseData = [];
      this.responseData.push(data);
    },
  },
});
