<template>
  <div class="content">
    <div class="subtitle">
      <h1>blog</h1>
      <p>27th of January 2021</p>
    </div>
    <div class="title">
      <h2>newsletter January 2021</h2>
    </div>
    <h3>A very very belated happy new year to all of my lovely clients and contacts.</h3>
    <div class="image-container">
      <img class="image" src="/src/assets/images/hand-reflexology-for-sleep.jpg" alt="Hand reflexology for sleep" />
    </div>
    <div class="body-copy">
      <p>It's been so long since I have sent a newsletter. Obviously it's been an insane year with a lot of stop-starting and trying to keep on top of Government guidelines - communication has fallen by the wayside! I hope you are all keeping safe and as well as possible.</p>
      <p>It's been very uncertain times for everyone, and self-employed therapists like myself have at times not known whether they were coming or going. I really didn't know what to expect after the first lockdown, but reassuringly I was busier than ever. People are recognising the importance of self-care at a time when they are working under difficult conditions and facing high levels of anxiety. I feel hopeful that there will be a strong place for reflexology once restrictions are lifted.</p>
      <p>For me, 2020 wasn’t all bad!</p>
      <ul>
        <li>I undertook further study in the incredible Reprofexology course, during which I learnt about the reproductive system in depth, fertility and assisted conception. I can now undertake specific protocols targeted at different complaints, to help regulate cycles, and to stimulate, balance or sedate different hormones for both men and women. A huge amount of work went into this and I am eagerly waiting to hear whether I passed - please keep your fingers crossed!</li>
        <li>During the first lockdown I managed to take my offering online - explaining hand reflexology techniques via video call. I hope to do this with those in need during this current lockdown too.</li>
        <li>I started work with Surrey Hills Physiotherapy at the beautiful Barn at Denbies Wine Estate.</li>
        <li>I moved house and started work on converting my summer house into a treatment room so that I can provide a bit more luxury (I will still offer mobile treatments).  I am trying to source as much as possible second hand so as to be as eco as I can, as well as bearing in mind Covid hygiene measures.</li>
      </ul>
      <p>I am sure you have been inundated with self-care tips, so I will try and keep these short and unique! These are just a few things that have been helping me through these winter months:</p>
      <ol>
        <li>Working this reflex point can help to relax and to improve sleep. I have marked a point on this hand which is very powerful - the Solar Plexus reflex. Use your thumb to put pressure on this point and rotate around 6 times, on both hands. You will find the more you do it, the more calming it is, it has a cumulative effect.</li>
        <li>I have discovered Yin or Restorative Yoga. I have stopped punishing myself with weights or running as a default. Life is hard enough at the moment. Sometimes you just need to give your body a treat, and this style of yoga does just that. Yoga with Adriene is so good, free, and on YouTube (see <a href="https://youtu.be/RQyX48NtDrQ" target="_blank">here</a>). It's definitely worth a try.</li>
        <li>Vitamin D is so hard to come by naturally at this time of year so it's important to take a supplement - it can really boost your immunity. I recommend a high quality brand such as Solgar or Lamberts.</li>
      </ol>
      <p>Sadly I am not open for business just now but as soon as I am able I will update my social media and website. As a thank you for making it to the end of my newsletter I will be offering 10% off for one treatment if you mention the special code "and breathe".</p>
      <p>Stay safe friends, I hope to see you soon.</p>
      <p>Love, Emily x</p>
    </div>
  </div>
</template>

<script>
import hand from '../assets/images/hand-reflexology-for-sleep.jpg';

export default {
  data () {
    return {}
  }
}
</script>

<style scoped lang="less">
@import '../assets/css/less/responsive.less';

.content {
  > .subtitle {
    grid-column: 2/8;
    grid-row: 1/2;
    .screen-xs-max({
      grid-column: 1/9;
    });
    > h1 {
      margin: 0;
    }
    > p {
      margin-bottom: 0;
    }
  }
  > .title {
    grid-column: 2/8;
    grid-row: 2/3;
    .screen-xs-max({
      grid-column: 1/9;
      grid-row: 3/4;
    });
    > h2 {
      font-size: 2.2em;
    }
  }
  > h3 {
    grid-column: 2/5;
    grid-row: 3/4;
    margin: 0;
    .screen-xs-max({
      grid-column: 1/9;
      grid-row: 4/5;
    });
  }
  > .image-container {
    grid-row: 3/5;
    grid-column: 5/9;
    .screen-xs-max({
      grid-row: 2/3;
      grid-column: 1/9;
    });
    > .image {
      width: 100%;
      object-position: center center;
    }
    > p {
      margin-top: 20px;
      font-size: 0.9em;
    }
  }
  > .body-copy {
    grid-column: 2/5;
    grid-row: 4/5;
    .screen-xs-max({
      grid-column: 1/9;
      grid-row: 5/6;
    });
    > ul {
      padding-left: 20px;
      margin: 20px 0;
    }
  }
}
</style>
