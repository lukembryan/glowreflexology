<template>
  <div class="content">
    <div class="title">
      <h1>about me</h1>
    </div>
    <div class="body-copy">
      <p>After years spent working in London and Melbourne in jobs that often left me
        feeling frazzled and unable to sleep, and turning to reflexology in my first pregnancy -
        I was overwhelmed by the effect it had on me. I felt able to sleep much more deeply than
        I had in ages. It affected me so much that I hatched a plan. I started studying and
        practicing after I had my second baby, qualified with a Level 3 Diploma in Reflexology
        from Brighton Holistics and became a member of the Federation of Holistic Therapists and
        Association of Reflexologists. I have also become a member of the Complementary &amp;
        Natural Healthcare Council (CNHC) which means that if you have a private healthcare plan,
        you should be able to claim for the cost of the treatment.</p>
      <p>I live in Horsham with my husband, two young boys and fur baby. These guys have taught me the importance of self-care - you can’t pour from an empty cup!  I am married to an Aussie, and we are normally planning our next big (or little) trip.  I love a festival, beach, music, yoga and running. Being in nature makes me happy.</p>
      <p style="margin-top: 50px; text-align: center;">
        <img class="image em-sig" src="/src/assets/images/em-sig.png" alt="Emily Bryan, MAR MFHT Reflexologist" />
      </p>
    </div>
    <div class="images">
      <img class="image" src="/src/assets/images/excellence-in-reflexology-logo.png" alt="Association of Reflexologists" />
      <img class="image" src="/src/assets/images/fht_psa_logo_member.jpg" alt="Federation of Holistic Therapists" />
    </div>
    <img class="image" src="/src/assets/images/about-me.jpg" alt="Mobile reflexologist, Horsham" />
  </div>
</template>

<script>
import aboutMeImg from '../assets/images/about-me.jpg';
import excellenceImg from '../assets/images/excellence-in-reflexology-logo.png';
import FHTImg from '../assets/images/fht_psa_logo_member.jpg';
import emSigImg from '../assets/images/em-sig.png';

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
      height: calc(46vw/3);
      width: calc(120vw/3);
      margin: 0 auto;
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
      &:nth-child(1){
        grid-column: 1/2;
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
  > .image {}
}
</style>
