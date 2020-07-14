<template>
  <div class="content">
    <div class="title">
      <h1>reproductive</h1>
    </div>
    <h3>Try a more natural and holistic approach to improving your reproductive health, and in turn, ability to conceive.</h3>
    <img class="image" src="/src/assets/images/reproductive.jpg" alt="Reproductive" />
    <div class="body-copy">
      <h5>reproductive health</h5>
      <p>Reflexology sessions can be tailored to help with specific reproductive system conditions, e.g. menopause, endometriosis, PCOS, heavy or irregular periods, PMS etc.</p>
      <h5>pre-conception</h5>
      <p>Trying for a baby can be stressful, and it's a time when it's more important than ever to relax so that your body can fight off infection and ill health and you can maximise your chances of conception.</p>
      <p>If you have been trying to conceive for a while and are not sure why it hasn't happened yet, or you or your partner have a health issue that is contributing to the delay, then reflexology can really help to reduce symptoms and bring your body back to it's optimal state for conception.</p>
      <h5>your treatment plan</h5>
      <p>All reproductive reflexology treatments begin with an in-depth consultation session and from there we develop a personalised treatment plan. It is ideal to have weekly treatments (for women, in line with different weeks of their cycle). Treatments may not last as long as a traditional reflexology session but you benefit from additional advice and preparation in between treatments. I am also likely to advise on close monitoring of cycles, lifestyle tweaks to help improve your chances of conception, and in some instances hand-reflexology points to work on yourself in between appointments.</p>
    </div>
  </div>
</template>

<script>
import reproductiveImg from '../assets/images/reproductive.jpg';

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
    object-position: center center;
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
