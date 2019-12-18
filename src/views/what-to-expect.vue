<template>
  <div class="content">
    <div class="title">
      <h1>what to expect</h1>
    </div>
    <h3>I operate on a mobile basis within a 10 mile radius of Horsham.</h3>
    <img class="image" src="/src/assets/images/towels-candles.jpg" alt="Treatment room brought to you" />
    <div class="body-copy">
      <p><strong>Relax in the comfort of your own home - Horsham and surrounding areas.</strong></p>
      <p>If you live a bit further afield, do get in touch to discuss requirements as I will travel further for a small extra charge to cover petrol and time.</p>
      <p>Everything required is provided (chair, towels, music etc.). We just need a quiet space so that you can really relax.</p>
      <p> For home visits, a choice of scented reflexology balm and music is available as everyone relaxes differently. An optional scented eye pillow or weighted blanket are on hand to maximise relaxation.</p>
      <p>The session starts with a consultation which helps me to understand any past or current health or lifestyle issues so that the treatment can be tailored to you, to ensure you get the most out of the session.</p>
      <p>Clients are encouraged to wear comfy clothes during a treatment to enable maximum relaxation (pyjamas are totally fine!)  You only need to remove your socks and shoes, and wear trousers that are able to be rolled up a bit with ease.</p>
      <p>I start with a warm up massage then undertake a full treatment which involves a range of different pressure techniques on your feet and lower legs with a level of pressure that suits you. I then finish with a warm down massage.  During this time feel free to completely zone out, fall asleep - snoring is a good sign that it is working!</p>
      <p><strong>The treatment + consultation lasts approximately 1 hour.</strong></p>
      <p><strong>For pre-conception or late pregnancy treatments (37+ weeks) allow up to 1.5 hours.</strong></p>
    </div>
  </div>
</template>

<script>
import towelsCandlesImg from '../assets/images/towels-candles.jpg';

export default {
  data () {
    return {}
  }
}
</script>

<style scoped lang="less">
@import '../assets/css/less/responsive.less';

.content {
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
  > .image {}
  > .body-copy {
    grid-column: 2/5;
    grid-row: 3/4;
    .screen-xs-max({
      grid-column: 1/9;
      grid-row: 4/5;
    });
  }
}
</style>
