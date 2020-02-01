<template>
  <div class="content">
    <div class="title">
      <h1>pricing &amp; offers</h1>
    </div>
    <img class="image" src="/src/assets/images/yoga.jpg" alt="Yoga with a view" />
    <div class="box">
      <div>
        <h3>"Mummy to be" reflexology package:</h3>
        <h4>Duration varies - <strong>£170</strong></h4>
        <p>This package includes:</p>
        <ul>
          <li>4 x 1 hour reflexology treatments to be used between weeks 16 and 36</li>
          <li>1 x 1.5 hour late pregnancy treatment to be used from weeks 37+</li>
          <li>1 x 1 hour post-natal reflexology treatment to be used within the fourth trimester</li>
        </ul>
        <p>Separately these treatments would cost £225 so this package represents a £55 saving.  This would make a lovely gift for a mummy to be.</p>
      </div>
    </div>
    <div class="body-copy">
      <h3>Home visit in Horsham and surrounding areas</h3>
      <p>1 hour foot reflexology treatment (inc. consultation) - <span class="bold">£35</span></p>
      <p>1 hour 10-15 minute stress melting foot and hand reflexology treatment (including consultation) - <span class="bold">£40</span></p>
      <p>1.5 hour pre-conception or late pregnancy (37+ weeks) foot reflexology treatment (inc. consultation) - <span class="bold">£50</span></p>
      <h3>Offers</h3>
      <p><span class="bold">“Recommend a friend”:</span><br />If you are an existing client and you put a friend or family member in touch, both you and your friend can enjoy £5 off a treatment.</p>
      <p><span class="bold">Loyalty scheme:</span><br />Enjoy your 6th treatment for free</p>
      <h3>Cancellations</h3>
      <p>While it is appreciated that emergencies can crop up at any time, glow reflexology is a small business so have to reserve the right to charge for the appointment if it is cancelled with less than 24 hours notice.</p>
    </div>
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
    grid-row: 2/4;
    .screen-xs-max({
      grid-column: 1/9;
      grid-row: 3/4;
    });
  }
  > .image {
    grid-row: 2/3;
    .screen-xs-max({
      grid-row: 1/2;
    });
  }
}
</style>
