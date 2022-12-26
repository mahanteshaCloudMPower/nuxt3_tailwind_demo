<template>
  <div>
    {{ storeData.message }}
    {{ storeData.responseData }}
  </div>
</template>
<script setup>
import { useCounterstore } from "~/stores/counter";

const storeData = ref(0);
storeData.value = useCounterstore();
</script>