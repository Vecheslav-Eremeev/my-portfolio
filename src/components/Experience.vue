<template>
  <section class="experience">
    <h2>
      <b>{{ frontrndYears }}</b
      ><br />Years<br />Frontend
    </h2>
    <h2>
      <b>{{ backendYears }}</b
      ><br />Years<br />Backend
    </h2>
  </section>
</template>

<script setup>
import { ref } from "vue";

const frontrndYears = ref(2);
const backendYears = ref(3);
</script>
