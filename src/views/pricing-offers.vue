<template>
  <div class="content">
    <div class="title">
      <h1>pricing &amp; offers</h1>
    </div>
    <div class="body-copy">
      <h3>Home visit in Horsham and surrounding areas</h3>
      <p>1 hour foot reflexology treatment (inc. consultation) - <span class="bold">£35</span></p>
      <p>1.5 hour pre-conception or late pregnancy (37+ weeks) foot reflexology treatment (inc. consultation) - <span class="bold">£50</span></p>
      <h3>Special offers</h3>
      <p><span class="bold">"Give it a go":</span><br />£5 off your first treatment</p>
      <p><span class="bold">“Recommend a friend”:</span><br />If you are an existing client and you put a friend or family member in touch, both you and your friend can enjoy £10 off a treatment.</p>
      <p><span class="bold">Loyalty scheme:</span><br />Enjoy your 6th treatment for free</p>
      <h3>Cancellations</h3>
      <p>While it is appreciated that emergencies can crop up at any time, glow reflexology is a small business so have to reserve the right to charge for the appointment if it is cancelled with less than 24 hours notice.</p>
    </div>
    <img class="image" src="/src/assets/images/yoga.jpg" alt="Yoga with a view" />
  </div>
</template>

<script>
import yogaImg from '../assets/images/yoga.jpg';

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
  > .body-copy {
    grid-column: 2/5;
    grid-row: 2/3;
    .screen-xs-max({
      grid-column: 1/9;
      grid-row: 3/4;
    });
  }
  > .image {}
}
</style>
