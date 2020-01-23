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
import Blog from './views/blog.vue';
import HowToGetMoreSleep from './views/how-to-get-more-sleep.vue';
import HowToAvoidFestiveFatigue from './views/how-to-avoid-festive-fatigue.vue';
import BenefitsOfPostnatalReflexology from './views/benefits-of-postnatal-reflexology.vue';

Vue.use(VueRouter);

// title = 50 characters
// description = 155 characters

const routes = [
  { path: '/', component: Home, meta: {
    title: 'Mobile reflexology in Horsham and surrounding areas',
    metaTags: [
      { property: 'og:type', content: 'website' },
      { property: 'og:title', content: 'Mobile reflexology in Horsham and surrounding areas' },
      { name: 'description', content: 'Find your glow. Book a treatment with a MAR, FHT and CNHC fully insured reflexologist. Pre-conception and pregnancy treatments available.' },
      { property: 'og:description', content: 'Find your glow. Book a treatment with a MAR, FHT and CNHC fully insured reflexologist.  Pre-conception and pregnancy treatments available.' },
      { property: 'og:url', content: 'https://glowreflexology.co.uk' },
      { property: 'og:site_name', content: 'glow reflexology' },
      { property: 'og:locale', content: 'en_GB' }
    ]
  }},
  { path: '/about-reflexology', component: AboutReflexology, meta: {
    title: 'About reflexology',
    metaTags: [
      { property: 'og:type', content: 'website' },
      { property: 'og:title', content: 'About reflexology' },
      { name: 'description', content: 'The ancient practice of reflexology was developed from the premise that there are reflexes in your feet that correspond with different parts of your body.' },
      { property: 'og:description', content: 'The ancient practice of reflexology was developed from the premise that there are reflexes in your feet that correspond with different parts of your body.' },
      { property: 'og:url', content: 'https://glowreflexology.co.uk/about-reflexology' },
      { property: 'og:site_name', content: 'glow reflexology' },
      { property: 'og:locale', content: 'en_GB' }
    ]
  }},
  { path: '/what-to-expect', component: WhatToExpect, meta: {
    title: 'What to expect from a reflexology treatment',
    metaTags: [
      { property: 'og:type', content: 'website' },
      { property: 'og:title', content: 'What to expect from a reflexology treatment' },
      { name: 'description', content: 'I operate on a mobile basis within a 10 mile radius of Horsham.' },
      { property: 'og:description', content: 'I operate on a mobile basis within a 10 mile radius of Horsham.' },
      { property: 'og:url', content: 'https://glowreflexology.co.uk/what-to-expect' },
      { property: 'og:site_name', content: 'glow reflexology' },
      { property: 'og:locale', content: 'en_GB' }
    ]
  }},
  { path: '/maternity', component: Maternity, meta: {
    title: 'Maternity reflexology',
    metaTags: [
      { property: 'og:type', content: 'website' },
      { property: 'og:title', content: 'Maternity reflexology' },
      { name: 'description', content: 'Maternity reflexology is an area of reflexology aimed specifically at couples during pre-conception, pregnancy and postnatal periods.' },
      { property: 'og:description', content: 'Maternity reflexology is an area of reflexology aimed specifically at couples during pre-conception, pregnancy and postnatal periods.' },
      { property: 'og:url', content: 'https://glowreflexology.co.uk/maternity' },
      { property: 'og:site_name', content: 'glow reflexology' },
      { property: 'og:locale', content: 'en_GB' }
    ]
  }},
  { path: '/pricing-offers', component: PricingOffers, meta: {
    title: 'Pricing & offers',
    metaTags: [
      { property: 'og:type', content: 'website' },
      { property: 'og:title', content: 'Pricing & offers' },
      { name: 'description', content: 'Home visit in Horsham and surrounding areas, £35' },
      { property: 'og:description', content: 'Home visit in Horsham and surrounding areas, £35' },
      { property: 'og:url', content: 'https://glowreflexology.co.uk/pricing-offers' },
      { property: 'og:site_name', content: 'glow reflexology' },
      { property: 'og:locale', content: 'en_GB' }
    ]
  }},
  { path: '/about-me', component: AboutMe, meta: {
    title: 'About me',
    metaTags: [
      { name: 'robots', content: 'noindex, nofollow' }
    ]
  }},
  { path: '/contact', component: Contact, meta: {
    title: 'Contact glow reflexology',
    metaTags: [
      { property: 'og:type', content: 'website' },
      { property: 'og:title', content: 'Contact glow reflexology' },
      { name: 'description', content: 'To make a booking, an enquiry, or just to find out a bit more about reflexology, please feel free to get in touch.' },
      { property: 'og:description', content: 'To make a booking, an enquiry, or just to find out a bit more about reflexology, please feel free to get in touch.' },
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
  }},
  { path: '/blog', component: Blog, meta: {
    title: 'blog - glow reflexology',
    metaTags: [
      { name: 'robots', content: 'noindex, nofollow' }
    ]
  }},
  { path: '/blog/how-to-get-more-sleep', component: HowToGetMoreSleep, meta: {
    title: 'How to...get more sleep',
    metaTags: [
      { property: 'og:type', content: 'website' },
      { property: 'og:title', content: 'How to...get more sleep' },
      { name: 'description', content: 'We all know that a lack of sleep can make our days much harder than they would otherwise be.' },
      { property: 'og:description', content: 'We all know that a lack of sleep can make our days much harder than they would otherwise be.' },
      { property: 'og:url', content: 'https://glowreflexology.co.uk/blog/how-to-get-more-sleep' },
      { property: 'og:site_name', content: 'glow reflexology' },
      { property: 'og:locale', content: 'en_GB' }
    ]
  }},
  { path: '/blog/how-to-avoid-festive-fatigue', component: HowToAvoidFestiveFatigue, meta: {
    title: 'How to...avoid festive fatigue',
    metaTags: [
      { property: 'og:type', content: 'website' },
      { property: 'og:title', content: 'How to...avoid festive fatigue' },
      { name: 'description', content: 'A list of my top tips to get you through the challenges & stress of the festive season.' },
      { property: 'og:description', content: 'A list of my top tips to get you through the challenges & stress of the festive season.' },
      { property: 'og:url', content: 'https://glowreflexology.co.uk/blog/how-to-avoid-festive-fatigue' },
      { property: 'og:site_name', content: 'glow reflexology' },
      { property: 'og:locale', content: 'en_GB' }
    ]
  }},
  { path: '/blog/benefits-of-postnatal-reflexology', component: BenefitsOfPostnatalReflexology, meta: {
    title: 'Benefits of postnatal reflexology',
    metaTags: [
      { property: 'og:type', content: 'website' },
      { property: 'og:title', content: 'Benefits of postnatal reflexology' },
      { name: 'description', content: 'Reflexology helps encourage recovery at a time when new mums are often overlooked.' },
      { property: 'og:description', content: 'Reflexology helps encourage recovery at a time when new mums are often overlooked.' },
      { property: 'og:url', content: 'https://glowreflexology.co.uk/blog/benefits-of-postnatal-reflexology' },
      { property: 'og:site_name', content: 'glow reflexology' },
      { property: 'og:locale', content: 'en_GB' }
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
