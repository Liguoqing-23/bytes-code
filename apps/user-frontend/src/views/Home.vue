<script setup>
import { storeToRefs } from "pinia";
import mainStore from "../store/store.index";

const store = mainStore();
const { helloWorld } = storeToRefs(store);

console.log(helloWorld.value);
</script>

<template>
  <div>
    <h1>Home</h1>
    <p>This is a home page</p>
    <router-link to="/about">About</router-link>
  </div>
</template>
