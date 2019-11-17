<template>
  <div class="home content">
    <div class="logo stacked">
    	<span class="glow pacifico">glow</span>
    	<span class="reflexology lato">reflexology</span>
    </div>
    <div class="body-copy">
    	<h1 class="home lato">find your glow with reflexology</h1>
    	<router-link to="/contact"><span class="link">enquire here</span></router-link>
    </div>
    <div class="summary">
      <p>Operating on a mobile basis within a 10 mile radius of Horsham.</p>
      <p>Member of the Federation of Holistic Therapists and Association of Reflexologists.</p>
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
