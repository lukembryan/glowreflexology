<template>
  <div id="site-template">
    <div class="responsive-test" v-if="dev">
      <span>tiny</span>
      <span>xxs</span>
      <span>xs</span>
      <span>sm</span>
      <span>md</span>
      <span>lg</span>
      <span>xl</span>
    </div>
    <header class="compact" v-bind:class="$route.path == '/' ? 'home' : $route.path.substring(1)">
      <router-link to="/">
        <div class="logo" v-if="$route.path != '/'">
          <span class="glow pacifico">glow</span>
          <span class="reflexology lato">reflexology</span>
        </div>
      </router-link>
      <ul class="menu">
        <li class="link" v-bind:class="{'link-dark': $route.path != '/' && !showMenu, 'active': $route.path == option.path, 'fadeIn': showMenu, 'fadeOut': !showMenu}" v-for="option in options">
          <router-link :to="option.path">{{option.label}}</router-link>
        </li>
      </ul>
      <ul class="menu menu-responsive fade show-with-menu">
        <li class="link" v-bind:class="{'active': $route.path == option.path}" v-for="option in options">
          <router-link :to="option.path">{{option.label}}</router-link>
        </li>
      </ul>
      <i class="fas fa-bars show-with-menu" v-bind:class="{'link-dark': $route.path != '/'}" onclick="toggleMenu(true)"></i>
      <i class="fas fa-times fade show-with-menu" onclick="toggleMenu(false)"></i>
      <div class="overlay fade show-with-menu"></div>
      <footer class="fade show-with-menu">
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
    </header>
    <div id="template" v-bind:class="$route.path == '/' ? 'home' : $route.path.substring(1)">
      <router-view></router-view>
    </div>
    <footer class="show-with-menu" :class="$route.path == '/' ? 'home' : $route.path.substring(1)">
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
  </div>
</template>

<script>
import { router } from "./main.js";

export default {
  name: 'site-template',
  data: function() {
    return {
      dev: window.location.host == 'localhost:8080' ? true : false,
      showMenu: false,
      options: [
        {
          label: 'Reflexology',
          path: '/about-reflexology'
        },
        {
          label: 'Maternity',
          path: '/maternity'
        },
        {
          label: 'What to expect',
          path: '/what-to-expect'
        },
        {
          label: 'Pricing',
          path: '/pricing-offers'
        },
        {
          label: 'About me',
          path: '/about-me'
        },
        {
          label: 'Contact',
          path: '/contact'
        },
      ]
    }
  },
  computed: {},
  methods: {
    toggleMenu: function(){
      var elements = document.getElementById('site-template').getElementsByClassName('show-with-menu');
      for(var i=0; i < elements.length; i++){
        elements[i].classList.toggle('fade');
      }
    }
  },
  watch: {
    $route (to, from){
      document.getElementById('template').scrollTo(0, 0);
      this.showMenu = false;
    }
  },
  created: function(){
    window.toggleMenu = this.toggleMenu;
  }
}
</script>

<style lang="less">

html, body {
  height: 100%;
}

body {
  color: @light-yellow-tint;
  font-size: 16px;
  font-family: 'Lato', sans-serif;
  font-weight: 300;
  &.about-me {
    > a {
      position: fixed;
      display: block;
      right: 30px;
      top: 130px;
    }
  }
  > a {
    display: none;
  }
  &.home {
    header {
      > .logo {
        display: none;
      }
      &.compact {
        > .logo {
          display: block;
        }
      }
    }
  }
}

a, .link {
  color: darken(@orange, 10%);
  cursor: pointer;
  font-weight: 300;
  &:hover, &:focus {
    text-decoration: none;
    color: @orange;
  }
}
.link-dark {
  color: @brown;
  &:hover, &:focus {
    color: lighten(@brown, 10%);
  }
}

button.btn {
  color: darken(@light-yellow, 10%);
  background-color: transparent;
  border: 1px solid darken(@light-yellow, 10%);
  transition: 0.3s ease-in-out;
  &:hover, &:focus {
    color: @light-yellow;
    background-color: transparent;
    border: 1px solid @light-yellow;
  }
}

h1 {
  font-family: 'Pacifico', cursive;
  line-height: 0.7;
  font-size: 3em;
}

h2 {
  line-height: 1.2;
  font-size: 2em;
}

h3 {
  line-height: 1.2;
  font-size: 1.5em;
  margin-bottom: 20px;
}

h4 {
  font-size: 1.2em;
  font-weight: 300;
  margin: 30px 0 20px;
}

h5 {
  font-size: 1.1em;
  font-weight: 300;
  margin: 20px 0 15px;
}

p {
  margin: 0 0 20px;
}

.bold {
  font-weight: 700;
}

.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 0;
  &.fade {
    pointer-events: none;
  }
}

.logo {
  display: inline-block;
  position: relative;
  font-size: 3em;
  line-height: 0.5em;
  cursor: pointer;
  transition: 0.3s ease-in-out;
  .screen-tiny({
    font-size: 2.5em;
  });
  &.stacked {
    text-align: right;
    > span {
      display: block;
      &.glow {
        font-size: 2.5em;
        color: @orange;
      }
      &.reflexology {
        font-size: 0.6em;
        line-height: 2.3em;
        margin: 1.2em 0 0 .8em;
        color: @light-yellow;
      }
    }
  }
  > span {
    &.glow {
      color: @orange;
      vertical-align: top;
    }
    &.reflexology {
      color: @brown-grey;
      font-size: .85em;
      font-weight: 100;
      vertical-align: top;
      line-height: 0.75em;
      margin-left: 0.1em;
    }
  }
}

.pacifico {
  font-family: 'Pacifico', cursive;
}

.lato {
  font-family: 'Lato', sans-serif;
  font-weight: 300;
}

header {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  position: fixed;
  top: 0;
  background-color: rgba(255, 255, 255, 1);
  width: 100%;
  padding: 30px 30px 0;
  z-index: 2;
  transition: 0.3s ease-in-out;
  &.home {
    background-color: transparent;
  }
  &.compact {
    padding: 15px 30px;
    > a {
      grid-column: 1/3;
      .screen-md-min({
        grid-column: 1/2;
      });
      > .logo {
        font-size: 1.5em;
        .screen-md-min({
          font-size: 2.5em;
        });
        line-height: 0.85em;
        align-self: center;
        > span.reflexology {
          line-height: 1.1em;
          font-weight: 300;
        }
      }
    }
    i.fa-bars, i.fa-times {
      font-size: 1.5em;
      line-height: 1em;
      cursor: pointer;
    }
  }
  > a {
    .screen-sm-max({
      grid-column: 1/4;
    });
  }
  > footer {
    display: block;
    width: 100%;
    padding: 30px;
    text-align: right;
    background-color: transparent;
    &:not('.home'){
      color: @brown-grey;
    }
    &.home {
      background-color: rgba(0, 0, 0, 0.7);
    }
    > .social {

    }
    > .links {
      text-align: right;
      padding: 10px 0 13px;
      > span {
        display: block;
        &:nth-child(1){
          margin-right: 0;
        }
      }
    }
    a {
      color: inherit;
    }
  }
}

footer {
  display: grid;
  grid-template-columns: 1fr 1fr;
  z-index: 2;
  .screen-sm-max({
    display: none;
  });
  .screen-xs({
    grid-template-columns: 1fr 3fr;
  });
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 10px 30px;
  background-color: rgba(255, 255, 255, 1);
  > .social {
    grid-column: 1/2;
    .screen-xxs-max({
      grid-column: 1/3;
    });
    font-size: 2em;
    > span {
      &:nth-child(1){
        margin-right: 10px;
      }
    }
  }
  > .links {
    grid-column: 2/3;
    .screen-xxs-max({
      grid-column: 1/3;
      text-align: left;
      padding: 10px 0;
    });
    align-self: end;
    text-align: right;
    padding: 10px 10px 13px;
    > span {
      &:nth-child(1){
        margin-right: 20px;
      }
    }
  }
  &:not('.home'){
    color: @brown-grey;
  }
  &.home {
    background-color: rgba(0, 0, 0, 0.7);
  }
  a {
    color: inherit;
  }
}

ul {
  &.menu {
    grid-column: 2/4;
    margin: 0;
    padding: 0;
    text-transform: lowercase;
    list-style: none;
    font-size: 1.1em;
    justify-self: end;
    align-self: center;
    z-index: 1;
    .screen-sm-max({
      display: none;
    });
    &.menu-responsive {
      display: block;
      position: fixed;
      top: 80px;
      right: 20px;
      &.fade {
        display: none;
      }
      > li {
        display: block;
        text-align: right;
        font-size: 1.5em;
        .screen-sm-max({
          line-height: 1.7em;
        });
        &.active, &:hover {
          border-top: 1px solid transparent;
          border-bottom: 1px solid transparent;
          background-color: transparent;
        }
        &.active {
          a {
            color: lighten(@orange, 20%);
          }
        }
      }
    }
    > li {
      display: inline-block;
      font-weight: 300;
      line-height: 2.5;
      cursor: pointer;
      border-top: 1px solid transparent;
      border-bottom: 1px solid transparent;
      transition: 0.3s ease-in-out;
      &.active, &:hover {
        border-top: 1px solid;
        border-bottom: 1px solid;
        background-color: rgba(255, 255, 255, 0.1);
      }
      > a {
        padding: 10px;
      }
    }
  }
}

i.fa-bars, i.fa-times {
  position: fixed;
  right: 30px;
  grid-column: 2/4;
  font-size: 1.7em;
  align-self: center;
  justify-self: end;
  line-height: 1.5em;
  cursor: pointer;
  z-index: 1;
  .screen-tiny({
    line-height: 1.2em;
  });
  .screen-md-min({
    display: none;
  });
}

.logo {
  grid-column: 1/2;
}

.content {
  position: absolute;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-auto-rows: min-content;
  grid-gap: 50px 30px;
  padding: 9% 30px 100px;
  .screen-xxs-max({
    padding: 30px;
  });
  width: 100%;
  font-size: 1.2em;
  &.home {
    padding: 0 30px 30px;
    > .logo {
      grid-column: 1/4;
      justify-self: start;
      align-self: start;
      text-align: center;
      .screen-xs-max({
        grid-column: 1/9;
        justify-self: center;
        align-self: center;
      });
    }
    > .body-copy {
      grid-column: 4/9;
      text-align: right;
      .screen-xs-max({
        grid-column: 1/9;
        text-align: center;
      });
      > h2 {
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
    > .bg {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-image: url('assets/images/bg.jpg');
      background-size: cover;
      z-index: -1;
    }
  }
  &.about-reflexology {
    > .title {
      grid-column: 2/8;
      grid-row: 1/2;
      .screen-xs-max({
        grid-column: 1/9;
        grid-row: 2/3;
      });
    }
    > h3 {
      grid-column: 2/5;
      grid-row: 2/3;
      margin: 0;
      .screen-xs-max({
        grid-column: 1/9;
        grid-row: 3/4;
      });
    }
    > .image {
      grid-column: 5/8;
      grid-row: 2/5;
      .screen-xs-max({
        grid-column: 1/9;
        grid-row: 1/2;
      });
      background-image: url(assets/images/barefoot-close-up.jpg);
      background-position: bottom right;
    }
    > .body-copy {
      grid-column: 2/5;
      grid-row: 3/4;
      .screen-xs-max({
        grid-column: 1/9;
        grid-row: 4/5;
      });
      > ul {
        padding-left: 20px;
        margin: 20px 0;
      }
    }
  }
  &.maternity {
    grid-auto-flow: column;
    > .title {
      grid-column: 2/8;
      grid-row: 1/2;
      .screen-xs-max({
        grid-column: 1/9;
        grid-row: 2/3;
      });
    }
    > h3 {
      grid-column: 2/5;
      margin: 0;
      .screen-xs-max({
        grid-column: 1/9;
        grid-row: 3/4;
      });
    }
    > .image {
      grid-column: 5/8;
      grid-row: 2/3;
      .screen-xs-max({
        grid-column: 1/9;
        grid-row: 1/2;
      });
      background-image: url(assets/images/beach-clouds.jpg);
      background-position: center right;
    }
    > .box {
      grid-column: 5/8;
      grid-row: 3/5;
      .screen-xs-max({
        grid-column: 1/9;
        grid-row: 4/5;
      });
      > div {
        font-size: 0.8em;
        padding: 15px;
        border: 1px solid #ccc;
      }
    }
    > .body-copy {
      grid-column: 2/5;
      > h4 {
        margin-top: 0;
      }
      .screen-xs-max({
        grid-column: 1/9;
        grid-row: 5/6;
      });
    }
  }
  &.contact {
    > .title {
      grid-column: 3/7;
      .screen-xs-max({
        grid-column: 1/9;
      });
    }
    > .details {
      grid-column: 3/7;
      .screen-xs-max({
        grid-column: 1/9;
      });
    }
    > .body-copy {
      grid-column: 3/7;
      .screen-xs-max({
        grid-column: 1/9;
      });
    }
  }
  &.what-to-expect {
    > .title {
      grid-column: 2/8;
      grid-row: 1/2;
      .screen-xs-max({
        grid-column: 1/9;
        grid-row: 2/3;
      });
    }
    > h3 {
      grid-column: 2/5;
      grid-row: 2/3;
      .screen-xs-max({
        grid-column: 1/9;
        grid-row: 3/4;
      });
      margin: 0;
    }
    > .image {
      grid-column: 5/8;
      grid-row: 2/4;
      .screen-xs-max({
        grid-column: 1/9;
        grid-row: 1/2;
      });
      background-image: url(assets/images/towels-candles.jpg);
      background-position: bottom right;
    }
    > .body-copy {
      grid-column: 2/5;
      grid-row: 3/4;
      .screen-xs-max({
        grid-column: 1/9;
        grid-row: 4/5;
      });
    }
  }
  &.pricing-offers {
    > .title {
      grid-column: 2/8;
      grid-row: 1/2;
      .screen-xs-max({
        grid-column: 1/9;
        grid-row: 2/3;
      });
    }
    > .body-copy {
      grid-column: 2/5;
      grid-row: 2/3;
      .screen-xs-max({
        grid-column: 1/9;
        grid-row: 3/4;
      });
    }
    > .image {
      grid-column: 5/8;
      grid-row: 2/4;
      .screen-xs-max({
        grid-column: 1/9;
        grid-row: 1/2;
      });
      background-image: url(assets/images/yoga.jpg);
      background-position: bottom right;
    }
  }
  &.not-found {
    > .title {
      grid-column: 2/8;
    }
    > h3 {
      grid-column: 2/8;
    }
    > .body-copy {
      grid-column: 2/8;
    }
  }
  &.about-me {
    > .title {
      grid-column: 2/8;
      .screen-xs-max({
        grid-column: 1/9;
        grid-row: 2/3;
      });
    }
    > .body-copy {
      grid-column: 2/5;
      .screen-xs-max({
        grid-column: 1/9;
        grid-row: 3/4;
      });
      .em-sig {
        background-image: url(assets/images/em-sig.png);
        background-position: center center;
        height: calc(46vw/3);
        width: calc(120vw/3);
        margin: 0 auto;
        background-size: 80%;
        background-repeat: no-repeat;
        .screen-sm-min({
          height: calc(20vw/3);
          width: calc(51vw/3);
        });
      }
    }
    > .images {
      display: grid;
      grid-template-columns: 1fr 3fr;
      grid-column: 2/8;
      grid-gap: 30px;
      .screen-xs-max({
        grid-column: 1/9;
      });
      > .image {
        width: 100%;
        border: none;
        height: calc(100vw/3);
        background-size: 80%;
        background-repeat: no-repeat;
        background-position: center center;
        &:nth-child(1){
          grid-column: 1/2;
          background-image: url(assets/images/excellence-in-reflexology-logo.png);
          background-position: center center;
          .screen-xxs-max({
            grid-column: 1/3;
          });
          .screen-sm-min({
            height: calc(51vw/3);
          });
          .screen-xs-max({
            height: calc(65vw/3);
          });
          .screen-xxs-max({
            width: calc(100vw/3);
            height: calc(100vw/3);
            margin: 0 auto;
            grid-column: 1/3;
          });
        }
        &:nth-child(2){
          grid-column: 2/3;
          background-image: url(assets/images/fht_psa_logo_member.jpg);
          .screen-sm-min({
            height: calc(50vw/3);
          });
          .screen-xs-max({
            height: calc(70vw/3);
          });
          .screen-xxs-max({
            height: calc(90vw/3);
            grid-column: 1/3;
          });
        }
      }
    }
    > .image {
      grid-column: 5/8;
      grid-row: 2/3;
      background-image: url(assets/images/about-me.jpg);
      background-position: bottom center;
      .screen-xs-max({
        grid-column: 1/9;
        grid-row: 1/2;
      });
    }
  }
  > .title {
    grid-column: 2/8;
    > h2 {
      margin: 0;
      font-size: 4em;
      font-weight: 300;
      line-height: 0.7em;
      .screen-sm-max({
        font-size: 3em;
        line-height: 0.7em;
      });
      .screen-xxs-max({
        font-size: 2em;
        line-height: 0.7em;
      });
    }
    > h3 {
      grid-column: 2/3;
      grid-row: 1/2;
      margin: 0;
      font-size: 1.5em;
      font-weight: 300;
      .screen-xxs-max({
        font-size: 1.2em;
      });
    }
  }
  > h3 {
    grid-column: 2/8;
  }
  .image {
    width: 100%;
    height: calc(100vw/3);
    .screen-xs-max({
      height: calc(150vw/3);
    });
    background-size: cover;
    &:after {
      content: "";
      display: block;
      padding-bottom: 100%;
    }
  }
  > .body-copy {
    grid-column: 2/8;
  }
}

#template {
  padding-top: 90px;
  position: fixed;
  top: 0;
  left: 0;
  overflow: scroll;
  width: 100%;
  bottom: 0;
  background-size: cover;
  transition: all 0.3s ease-in-out;
  &::-webkit-scrollbar {
    display: none;
  }
  &.home {
    background-color: darken(@brown-grey, 0%);
  }
  &:not(.home){
    color: darken(@brown-grey, 0%);;
    background-color: #fff;
  }
  &.about-reflexology {
  }
  &.what-to-expect {
  }
  &.pricing-offers {
  }
  &.about-me {
  }
  &.contact {
  }
}

.responsive-test {
  position: fixed;
  top: 5px;
  left: 5px;
  background-color: white;
  color: black;
  z-index: 3;
  > span {
    display: none;
    padding: 3px 5px;
    font-size: 0.8em;
    &:nth-child(1){ .screen-tiny({ display: block; }); }
    &:nth-child(2){ .screen-xxs({ display: block; }); }
    &:nth-child(3){ .screen-xs({ display: block; }); }
    &:nth-child(4){ .screen-sm({ display: block; }); }
    &:nth-child(5){ .screen-md({ display: block; }); }
    &:nth-child(6){ .screen-lg({ display: block; }); }
    &:nth-child(7){ .screen-xl({ display: block; }); }
  }
}

/* PALETTE */
@light-yellow-tint: #fff9e1;
@light-yellow: #f8edc1;
@light-yellow-shadow: #b7b193;
@light-yellow-grey: #d3cac1;

@yellow-tint: #fff4c5;
@yellow: #f4e38c;
@yellow-shadow: #b4aa6a;
@yellow-grey: #a59b92;

@orange-tint: #f9d2a2;
@orange: #f1b669;
@orange-shadow: #b3884e;
@orange-grey: #7f746a;

@light-brown-tint: #cc9e87;
@light-brown: #b87d5c;
@light-brown-shadow: #885c43;
@light-brown-grey: #594e40;

@brown-tint: #aa7b68;
@brown: #8b5c47;
@brown-shadow: #603f2e;
@brown-grey: #332d25;
/* PALETTE */

/* RESPONSIVE */
@screen-xxs: 400px;
@screen-xxs-min: @screen-xxs;

@screen-xs: 576px;
@screen-xs-min: @screen-xs;

@screen-sm: 768px;
@screen-sm-min: @screen-sm;

@screen-md: 992px;
@screen-md-min: @screen-md;

@screen-lg: 1200px;
@screen-lg-min: @screen-lg;

@screen-xl: 1600px;
@screen-xl-min: @screen-xl;

@screen-tiny-max: ( @screen-xxs-min - 1 );
@screen-xxs-max: ( @screen-xs-min - 1 );
@screen-xs-max: ( @screen-sm-min - 1 );
@screen-sm-max: ( @screen-md-min - 1 );
@screen-md-max: ( @screen-lg-min - 1 );
@screen-lg-max: ( @screen-xl-min - 1 );

/* =============================================================================
   Media queries for different screen sizes
   ========================================================================== */

// tiny only
.screen-tiny(@rules) {
  @media (max-width: @screen-tiny-max) { @rules(); }
}

// xxs and larger
.screen-xxs-min(@rules) {
  @media (min-width: @screen-xxs-min) { @rules(); }
}

// xxs only
.screen-xxs(@rules) {
  @media (min-width: @screen-xxs-min) and (max-width: @screen-xxs-max) { @rules(); }
}

// xxs and smaller
.screen-xxs-max(@rules) {
  @media (max-width: @screen-xxs-max) { @rules(); }
}

// xs and larger
.screen-xs-min(@rules) {
  @media (min-width: @screen-xs-min) { @rules(); }
}

// xs only
.screen-xs(@rules) {
  @media (min-width: @screen-xs-min) and (max-width: @screen-xs-max) { @rules(); }
}

// xs and smaller
.screen-xs-max(@rules) {
  @media (max-width: @screen-xs-max) { @rules(); }
}

// sm and larger
.screen-sm-min(@rules) {
  @media (min-width: @screen-sm-min) { @rules(); }
}

// sm only
.screen-sm(@rules) {
  @media (min-width: @screen-sm-min) and (max-width: @screen-sm-max) { @rules(); }
}

// sm and smaller
.screen-sm-max(@rules) {
  @media (max-width: @screen-sm-max) { @rules(); }
}

// md and larger
.screen-md-min(@rules) {
  @media (min-width: @screen-md-min) { @rules(); }
}

// md only
.screen-md(@rules) {
  @media (min-width: @screen-md-min) and (max-width: @screen-md-max) { @rules(); }
}

// md and smaller
.screen-md-max(@rules) {
  @media (max-width: @screen-md-max) { @rules(); }
}

// lg and larger
.screen-lg-min(@rules) {
  @media (min-width: @screen-lg-min) { @rules(); }
}

// lg only
.screen-lg(@rules) {
  @media (min-width: @screen-lg-min) and (max-width: @screen-lg-max) { @rules(); }
}

// lg and smaller
.screen-lg-max(@rules) {
  @media (max-width: @screen-lg-max) { @rules(); }
}

// xl and larger
.screen-xl(@rules) {
  @media (min-width: @screen-xl-min) { @rules(); }
}
/* RESPONSIVE */
</style>
