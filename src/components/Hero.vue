<template>
  <section class="hero">
    <img
      id="toggleTheme"
      class="theme-btn"
      :src="themeIcon"
      alt="theme icon"
      @click="switchTheme"
    />
    <div class="hero-pic">
      <div class="inner-circle"></div>
      <img src="../assets/Admin.png" alt="Me" />
    </div>
    <div class="hero-info">
      <h1>Vecheslav Eremeev</h1>
      <h2>Frontend Developer</h2>
      <div class="logo-container">
        <a href="https://github.com/Vecheslav-Eremeev" target="_blank"
          ><img :src="githubLogo" alt="github logo"
        /></a>
        <!-- <a href="https://linkedin.com/"
          ><img :src="linkedinLogo" alt="linkedin logo"
        /></a> -->
        <a href="mailto:vecheslav-eremeev@yandex.ru"
          ><img :src="emailLogo" alt="email logo"
        /></a>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { lightLogos, darkLogos } from "../utils/lightDarkTheme";

const githubLogo = ref(lightLogos.github);
const linkedinLogo = ref(lightLogos.linkedin);
const emailLogo = ref(lightLogos.email);
const themeIcon = ref(lightLogos.theme);

function setTheme(isDark) {
  githubLogo.value = isDark ? darkLogos.github : lightLogos.github;
  linkedinLogo.value = isDark ? darkLogos.linkedin : lightLogos.linkedin;
  emailLogo.value = isDark ? darkLogos.email : lightLogos.email;
  themeIcon.value = isDark ? darkLogos.theme : lightLogos.theme;
}

function switchTheme() {
  const isDark = document.body.classList.toggle("dark-theme");
  localStorage.setItem("isDark", isDark);

  setTheme(isDark);
}

onMounted(() => {
  const isDark = localStorage.getItem("isDark") === "true";
  document.body.classList.toggle("dark-theme", isDark);
  setTheme(isDark);
});
</script>
