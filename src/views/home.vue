<template>
  <div class="content">
    <div class="logo stacked">
    	<span class="glow pacifico">glow</span>
    	<span class="reflexology lato">reflexology</span>
    </div>
    <div class="body-copy">
      <router-link to="/contact"><span class="link">enquire here</span></router-link>
    	<h1 class="home lato">find your glow with reflexology</h1>
      <div class="summary">
        <p>Operating on a mobile basis<br>within a 10 mile radius of Horsham.</p>
        <p>Member of the <a href="https://www.aor.org.uk/" style="padding: 5px 8px; background-color: #ffffff2e; line-height: 1.8;" class="link-dark" target="_blank">Association of Reflexologists</a></p>
      </div>
    </div>
    <div class="latest-updates">
      <h3>latest updates</h3>
      <div v-for="(update, index) in updates" :key="index">
        <router-link :to="update.path" v-if="update.path.indexOf('/') === 0">
          <div :class="'alert ' + update.type" role="alert">
            <span class="badge">{{update.date}}</span> {{update.text}}
          </div>
        </router-link>
        <a :href="update.path" target="_blank" v-if="update.path.indexOf('http') === 0">
          <div :class="'alert ' + update.type" role="alert">
            <span class="badge">{{update.date}}</span> {{update.text}}
          </div>
        </a>
      </div>
    </div>
    <div class="bg"></div>
  </div>
</template>

<script>
import { store } from "../store.js";

export default {
  data () {
    return {
      updates: [
        {
          type: 'alert-primary',
          path: '/contact',
          date: '25 Oct 2020',
          text: 'Increased availability - now working weekday mornings'
        },
        {
          type: 'alert-secondary',
          path: 'https://www.surreyhillsphysiotherapy.co.uk/',
          date: '12 Jul 2020',
          text: 'I am so excited to be working with Surrey Hills Physiotherapy (SHP) at their beautiful new venture "The Barn" @ Denbies Wine Estate'
        }
      ]
    }
  },
  created: function(){
    store.state.scrolledBottom = true;
  }
}
</script>

<style scoped lang="less">
@import '../assets/css/less/responsive.less';
@import '../assets/css/less/palette.less';

.content {
  padding: 0 30px 8%;
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
    margin-top: 40px;
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
      .screen-md({ font-size: 4em; });
    }
    .link {
      width: auto;
      margin: 5%;
      font-size: 1.3em;
      font-weight: 700;
      text-transform: uppercase;
      text-shadow: #333 0px 0px 20px;
    }
    .summary {
      font-size: 1.2em;
      text-align: right;
      font-weight: 100;
      margin: 5%;
      .screen-xs-max({
        text-align: center;
      });
    }
  }
  .latest-updates {
    grid-row: 2;
    grid-column: 1/4;
    width: auto;
    padding: 0 5%;
    text-align: left;
    .screen-xs-max({
      grid-row: 4/5;
      grid-column: 2/8;
      text-align: center;
    });
    .alert {
      position: relative;
      font-weight: 400;
      text-align: left;
      padding: 15px 15px;
      margin-bottom: 20px;
      font-size: 0.7em;
      border-radius: 0;
      .screen-xs-max({
        font-size: 0.9em;
      });
      &.alert-primary {
        color: darken(@brown, 40%);
        background-color: fade(@orange, 50%);
        border: 1px solid @brown;
      }
      &.alert-secondary {
        color: darken(@brown, 40%);
        background-color: fade(#fff, 20%);
        border: 1px solid darken(@brown, 20%);
      }
      > .badge {
        border-radius: 0;
        position: absolute;
        right: 10px;
        top: -10px;
        color: darken(@brown, 40%);
        background-color: fade(#fff, 80%);
      }
    }
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
