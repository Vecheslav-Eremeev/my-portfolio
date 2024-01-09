<template>
  <section class="portfolio-skills">
    <div class="btn-bg">
      <button
        class="btn-2"
        :class="routes.path == '/' ? 'active-btn' : ''"
        id="portfolio-btn"
        @click="router.push('/')"
      >
        Portfolio
      </button>
      <button
        class="btn-2"
        id="skills-btn"
        :class="routes.path == '/skills' ? 'active-btn' : ''"
        @click="router.push('/skills')"
      >
        Skills
      </button>
    </div>
  </section>
</template>

<script setup>
import { useRouter, useRoute } from "vue-router";

const router = useRouter();
const routes = useRoute();
</script>
