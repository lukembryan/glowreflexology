<template>
  <footer v-bind:class="{'home': $route.path == '/', 'fadeIn': state.scrolledBottom, 'fadeOut': !state.scrolledBottom}" class="animated">
    <div class="social">
      <span class="link">
        <a href="https://www.facebook.com/glowwithreflexology" target="_blank">
          <i class="fab fa-facebook-square"></i>
        </a>
      </span>
      <span class="link">
        <a href="https://www.instagram.com/glowwithreflexology" target="_blank">
          <i class="fab fa-instagram"></i>
        </a>
      </span>
    </div>
    <div class="links">
      <span class="link">
        <router-link to="data-protection-policy">data protection policy</router-link>
      </span>
      <span class="link">
        <router-link to="code-of-ethics">code of ethics</router-link>
      </span>
    </div>
  </footer>
</template>

<script>
import { router } from "./main.js";
import { store } from "./store.js";

export default {
  data: function() {
    return {
      state: store.state
    }
  }
};
</script>

<style></style>
