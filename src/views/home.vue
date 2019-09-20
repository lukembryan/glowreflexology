<template>
  <div class="home content">
    <div class="logo stacked">
    	<span class="glow pacifico">glow</span>
    	<span class="reflexology lato">reflexology</span>
    </div>
    <div class="body-copy">
    	<h2 class="home lato">find your glow with reflexology</h2>
    	<router-link to="/contact"><span class="link">enquire here</span></router-link>
    </div>
    <div class="bg"></div>
  </div>
</template>

<script>
import { store } from "../store.js";

export default {
  data () {
    return {}
  },
  created: function(){
    store.state.scrolledBottom = true;
  }
}
</script>

<style></style>
