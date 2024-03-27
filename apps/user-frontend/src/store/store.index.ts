import { defineStore } from "pinia";
const mainStore = defineStore("main", {
  state: () => {
    return {
      helloWorld: "Hello Pinia!",
    };
  },
  getters: {},
  actions: {},
});

export default mainStore;
