<template>
  <div>
    <Hero />
    <Experience />
    <Contact />
    <PortfolioSkills />
    <router-view></router-view>
    <TheFooter />
  </div>
</template>

<script setup>
import TheFooter from "../../components/TheFooter.vue";
import Hero from "../../components/Hero.vue";
import Experience from "../../components/Experience.vue";
import Contact from "../../components/Contact.vue";
import PortfolioSkills from "../../components/PortfolioSkills.vue";
</script>
