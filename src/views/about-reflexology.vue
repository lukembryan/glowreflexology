<template>
  <div class="content">
    <div class="title">
      <h1>about reflexology</h1>
    </div>
    <h3>The ancient practice of foot reflexology was developed from the premise that there are over 7,000 reflex points in the feet that can be mapped to different parts of the body.</h3>
    <img class="image" src="/src/assets/images/barefoot-close-up.jpg" alt="Foot reflexology" />
    <div class="body-copy">
      <p>Applying pressure to these reflexes is deeply relaxing which in turn can provide the optimal state for your body to heal.</p>
      <p>Reflexologists treat people as a whole rather than specific conditions/symptoms. We support people living with illnesses, rather than treat their illnesses.</p>
      <p>Too much stress and tension over a prolonged period of time can have such a detrimental effect on your health and wellbeing.  Reflexology is fantastic at promoting :</p>
      <ul class="bold">
        <li>Relaxation</li>
        <li>Release of tension</li>
        <li>Improved sleep</li>
        <li>Improved mood</li>
        <li>Increased wellbeing</li>
      </ul>
      <p>While reflexology is a complimentary therapy, it is recognised by the NHS. It works very well alongside conventional medicine but should never replace it. If you have any health concerns, always consult your GP first.</p>
      <p>Please check out my social media for relevant articles and research as well as reviews of glow reflexology: <a href="https://www.facebook.com/glowwithreflexology" target="_blank" style="margin: 0 5px;"><i class="fab fa-facebook-square"></i></a> <a href="https://www.instagram.com/glowreflexology" target="_blank"><i class="fab fa-instagram"></i></a></p>
    </div>
  </div>
</template>

<script>
import barefootImg from '../assets/images/barefoot-close-up.jpg';

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
    margin: 0;
    .screen-xs-max({
      grid-column: 1/9;
      grid-row: 3/4;
    });
  }
  > .image {
    object-position: left bottom;
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
</style>
