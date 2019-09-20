import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';

import { store } from './store';

import Home from './views/home.vue';
import AboutReflexology from './views/about-reflexology.vue';
import WhatToExpect from './views/what-to-expect.vue';
import Maternity from './views/maternity.vue';
import PricingOffers from './views/pricing-offers.vue';
import AboutMe from './views/about-me.vue';
import Contact from './views/contact.vue';
import DataProtectionPolicy from './views/data-protection-policy.vue';
import CodeOfEthics from './views/code-of-ethics.vue';

Vue.use(VueRouter);

// title = 50 characters
// description = 155 characters

const routes = [
  { path: '/', component: Home, meta: {
    title: 'Mobile reflexology in Horsham and surrounding areas',
    metaTags: [
      { property: 'og:type', content: 'website' },
      { property: 'og:title', content: 'Mobile reflexology in Horsham and surrounding areas' },
      { name: 'description', content: '' },
      { property: 'og:description', content: '' },
      { property: 'og:url', content: 'https://glowreflexology.co.uk' },
      { property: 'og:site_name', content: 'glow reflexology' },
      { property: 'og:locale', content: 'en_GB' }
    ]
  }},
  { path: '/about-reflexology', component: AboutReflexology, meta: {
    title: 'about reflexology - glow reflexology',
    metaTags: [
      { property: 'og:type', content: 'website' },
      { property: 'og:title', content: 'about reflexology - glow reflexology' },
      { name: 'description', content: '' },
      { property: 'og:description', content: '' },
      { property: 'og:url', content: 'https://glowreflexology.co.uk/about-reflexology' },
      { property: 'og:site_name', content: 'glow reflexology' },
      { property: 'og:locale', content: 'en_GB' }
    ]
  }},
  { path: '/what-to-expect', component: WhatToExpect, meta: {
    title: 'what to expect - glow reflexology',
    metaTags: [
      { property: 'og:type', content: 'website' },
      { property: 'og:title', content: 'what to expect - glow reflexology' },
      { name: 'description', content: '' },
      { property: 'og:description', content: '' },
      { property: 'og:url', content: 'https://glowreflexology.co.uk/what-to-expect' },
      { property: 'og:site_name', content: 'glow reflexology' },
      { property: 'og:locale', content: 'en_GB' }
    ]
  }},
  { path: '/maternity', component: Maternity, meta: {
    title: 'maternity - glow reflexology',
    metaTags: [
      { property: 'og:type', content: 'website' },
      { property: 'og:title', content: 'maternity - glow reflexology' },
      { name: 'description', content: '' },
      { property: 'og:description', content: '' },
      { property: 'og:url', content: 'https://glowreflexology.co.uk/maternity' },
      { property: 'og:site_name', content: 'glow reflexology' },
      { property: 'og:locale', content: 'en_GB' }
    ]
  }},
  { path: '/pricing-offers', component: PricingOffers, meta: {
    title: 'pricing & offers - glow reflexology',
    metaTags: [
      { property: 'og:type', content: 'website' },
      { property: 'og:title', content: 'pricing & offers - glow reflexology' },
      { name: 'description', content: '' },
      { property: 'og:description', content: '' },
      { property: 'og:url', content: 'https://glowreflexology.co.uk/pricing-offers' },
      { property: 'og:site_name', content: 'glow reflexology' },
      { property: 'og:locale', content: 'en_GB' }
    ]
  }},
  { path: '/about-me', component: AboutMe, meta: {
    title: 'about me - glow reflexology',
    metaTags: [
      { property: 'og:type', content: 'website' },
      { property: 'og:title', content: 'about me - glow reflexology' },
      { name: 'description', content: '' },
      { property: 'og:description', content: '' },
      { property: 'og:url', content: 'https://glowreflexology.co.uk/about-me' },
      { property: 'og:site_name', content: 'glow reflexology' },
      { property: 'og:locale', content: 'en_GB' }
    ]
  }},
  { path: '/contact', component: Contact, meta: {
    title: 'contact - glow reflexology',
    metaTags: [
      { property: 'og:type', content: 'website' },
      { property: 'og:title', content: 'contact - glow reflexology' },
      { name: 'description', content: '' },
      { property: 'og:description', content: '' },
      { property: 'og:url', content: 'https://glowreflexology.co.uk/contact' },
      { property: 'og:site_name', content: 'glow reflexology' },
      { property: 'og:locale', content: 'en_GB' }
    ]
  }},
  { path: '/data-protection-policy', component: DataProtectionPolicy, meta: {
    title: 'data protection policy - glow reflexology',
    metaTags: [
      { name: 'robots', content: 'noindex, nofollow' }
    ]
  }},
  { path: '/code-of-ethics', component: CodeOfEthics, meta: {
    title: 'code of ethics - glow reflexology',
    metaTags: [
      { name: 'robots', content: 'noindex, nofollow' }
    ]
  }}
];

export const router = new VueRouter({
  routes,
  mode: 'history'
});

var processForSEO = function(to, from, next){
  // This goes through the matched routes from last to first, finding the closest route with a title.
  // eg. if we have /some/deep/nested/route and /some, /deep, and /nested have titles, nested's will be chosen.
  const nearestWithTitle = to.matched.slice().reverse().find(r => r.meta && r.meta.title);

  // Find the nearest route element with meta tags.
  const nearestWithMeta = to.matched.slice().reverse().find(r => r.meta && r.meta.metaTags);
  const previousNearestWithMeta = from.matched.slice().reverse().find(r => r.meta && r.meta.metaTags);

  // If a route with a title was found, set the document (page) title to that value.
  if(nearestWithTitle) document.title = nearestWithTitle.meta.title;

  // Remove any stale meta tags from the document using the key attribute we set below.
  Array.from(document.querySelectorAll('[data-vue-router-controlled]')).map(el => el.parentNode.removeChild(el));

  // Skip rendering meta tags if there are none.
  if(!nearestWithMeta) return next();

  // Turn the meta tag definitions into actual elements in the head.
  nearestWithMeta.meta.metaTags.map(tagDef => {
    const tag = document.createElement('meta');

    Object.keys(tagDef).forEach(key => {
      tag.setAttribute(key, tagDef[key]);
    });

    // We use this to track which meta tags we create, so we don't interfere with other ones.
    tag.setAttribute('data-vue-router-controlled', '');

    return tag;
  })
  // Add the meta tags to the document head.
  .forEach(tag => document.head.appendChild(tag));

  next();
};

// This callback runs before every route change, including on page load.
router.beforeEach((to, from, next) => {
  processForSEO(to, from, next);
});

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
  mounted () {
    var that = this;

    document.dispatchEvent(new Event('render-event'));
  }
});
