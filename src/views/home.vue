<template>
  <div class="content">
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

<style scoped lang="less">
@import '../assets/css/less/responsive.less';

.content {
  padding: 0 30px 30px;
  > .logo {
    grid-column: 1/4;
    justify-self: start;
    align-self: start;
    text-align: center;
    cursor: default;
    .screen-xs-max({
      grid-column: 1/9;
      justify-self: center;
      align-self: center;
    });
  }
  > .body-copy {
    grid-column: 4/9;
    grid-row: 1/3;
    text-align: right;
    .screen-xs-max({
      grid-column: 1/9;
      grid-row: 2/3;
      text-align: center;
    });
    > h1 {
      font-weight: 100;
      font-size: 5em;
      padding: 5%;
      .screen-sm-max({ font-size: 3.3em; });
      .screen-xxs-max({ font-size: 2em; });
      .screen-md({ font-size: 4.5em; });
    }
    .link {
      width: auto;
      margin: 5%;
      font-size: 1.3em;
      font-weight: 700;
      text-transform: uppercase;
      text-shadow: #333 0px 0px 20px;
    }
  }
  .summary {
    grid-row: 2/3;
    grid-column: 1/4;
    font-size: 1.2em;
    text-align: left;
    font-weight: 100;
    .screen-xs-max({
      grid-row: 3/4;
      grid-column: 2/8;
      text-align: center;
    });
  }
  > .bg {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url('../assets/images/bg.jpg');
    background-size: cover;
    z-index: -1;
  }
}
</style>
