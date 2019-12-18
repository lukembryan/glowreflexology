<template>
  <div class="content">
    <div class="subtitle">
      <h1>blog</h1>
      <p>10th of November 2019</p>
    </div>
    <div class="title">
      <h2>how to...get more sleep</h2>
    </div>
    <h3>We all know that a lack of sleep can make our days much harder than they would otherwise be.</h3>
    <img class="image" src="/src/assets/images/sleep.jpg" alt="Tired person sleeping on the sofa" />
    <div class="body-copy">
      <p>Personally, I get clumsy, tearful and snappy so it affects the poor people I share my life with too. When you sleep, your hormones rebalance so not sleeping can make you all out of whack - it affects your stress hormones, how hungry you feel, your insulin levels... long-term insomnia can have more serious impact - cardiovascular disease, depression (need I go on!) This is why it needs addressing if it is becoming a problem.</p>
      <p>I found it fairly easy to jot down a list of tips to help with sleeplessness. This is because I've been through it (and then some!) It got bad when I worked in busy jobs in London and Melbourne, I would average about 4 hours’ sleep a night as I found it so hard to switch off. Then when pregnant, it got worse - I would go for longer spells of just not sleeping at all, which I know is common (due to hormonal changes and not being able to get comfortable). I struggle to sleep when I go away, which means holidays aren’t always as relaxing as they should be. Now I have two young boys who often have me up at night - but I manage to get back to sleep fairly easily so it isn’t too much of a problem (most of the time). I hope if you are suffering, some of these tips will be of help to you:</p>
      <ul>
        <li><strong>Dark:</strong> make your room nice and dark with blackout blinds or even easier, sleep with an eye mask.</li>
        <li><strong>Bath:</strong> a lovely magnesium salt bath before bed can help to relax your muscles.</li>
        <li><strong>Apps:</strong> apps such as Headspace or Calm have sleep stories that can help your mind switch off, and normally incorporate some breathing exercises to release tension.</li>
        <li><strong>Snack:</strong> bananas and figs are great for promoting sleep as they contain the natural muscle relaxants magnesium and potassium and can be made into a smoothie for an evening snack.  Avoid spicy or very large meals before bedtime as digestion can distract from falling asleep.</li>
        <li><strong>Avoid liquid:</strong> avoid too much liquid so that you are not distrubed by toilet visits.</li>
        <li><strong>Active:</strong> be active and get plenty of fresh air during the day, but stop working/ exercising/ doing at least an hour before bed time so that your body and mind have time to wind down.</li>
        <li><strong>Weighted blanket:</strong> this can be very beneficial if you have anxiety or insomnia, the pressure is calming and it feels like you are getting a big hug.</li>
        <li><strong>Routine:</strong> try to have a regular bedtime and waking time so that your body and mind grow to expect it.</li>
        <li><strong>Avoid screen time:</strong> try to stop screen time at least half an hour before bedtime as the blue light can trick your body into thinking it’s daytime, and also it makes you alert when you are meant to be getting sleepy.</li>
        <li><strong>Avoid alcohol:</strong> while you may fall asleep more quickly, it’s not the beneficial REM sleep and more frequent toilet visits mean it’s more difficult to stay asleep.</li>
        <li><strong>Stop trying:</strong> it sounds strange but if you haven’t been able to get to sleep for a while, then stop trying.  Sometimes it can get quite stressful if you are fixating on the fact that you are not sleeping, I would panic thinking I hadn’t slept yet and I had to get up in X number of hours.  Give into it and get up, do something different - maybe something calming to take your mind off it like reading a book.  After a while you are likely to start feeling sleepier so you can go back to bed and give it another go.</li>
        <li><strong>Change of scene:</strong> sometimes beds just don’t work.  I try all sorts of positions in mine, upside down, diagonal (my poor husband)!  And sometimes I resort to our cheap Ikea sofa bed which works a treat!  I don’t know what it is, but it just seems to work for me.  So if you need to, do consider a change of scene.</li>
        <li><strong>Brain dump:</strong> if you have lists of things to remember running through your mind, or you feel overwhelmed by what you have on the following day, then get up and write a list of what it is that you need to remember so that your mind can relax.</li>
        <li><strong>Avoid caffeine:</strong> stop drinking caffeine after lunch, it’s surprising what an effect this can have.</li>
        <li><strong>Reflexology:</strong> I never sleep as deeply as after a reflexology treatment (and for a few days after).  Glow reflexology offers evening appointments in the comfort of your own home.  I often treat people who have had a bath and are in their pyjamas ready to get an early night after their treatment.</li>
      </ul>
      <p>It's worth saying that while these tips have all helped me at one time or another, if there is something major in your life that is causing the sleeplessness (an insane job, worry about your relationship, health etc.) then taking steps to address the underlying problem will eventually help more than anything else.</p>
    </div>
  </div>
</template>

<script>
import sleepImg from '../assets/images/sleep.jpg';

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
  > .image {
    grid-row: 3/5;
    object-position: left bottom;
    .screen-xs-max({
      grid-row: 2/3;
    });
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
