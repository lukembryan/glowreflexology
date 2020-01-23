<template>
  <div class="content">
    <div class="subtitle">
      <h1>blog</h1>
      <p>23rd of January 2020</p>
    </div>
    <div class="title">
      <h2>benefits of postnatal reflexology</h2>
    </div>
    <h3>You often hear about the benefits of reflexology in helping people to conceive, and again during pregnancy, but not much is said about how it can help in the postnatal period - this is because the needs of new mums are so often overlooked.</h3>
    <div class="image-container">
      <img class="image" src="/src/assets/images/canal-walk-with-newborn.jpg" alt="Canal walk with newborn baby" />
      <p>Photo is me a week into motherhood on our first walk. I remember the stress of trying to get the buggy set up right and feeling really self-conscious, and like an imposter, or a little girl pushing a toy pram!  It does take a lot of getting used to!</p>
    </div>
    <div class="body-copy">
      <p>After making it through pregnancy and giving birth, the focus tends to be on the baby. This is at a time when a new mum needs support the most. Becoming a mum for the first time is a shock to the system no matter how prepared you are. You are expected to learn how to look after a tiny little human while surviving on no sleep with almost always some element of physical recovery. There is also the pressure to breastfeed and stress over whether it is working or not, and the changes to your body due to this. This is not to mention the huge fluctuations in hormones at this time, which go on for months before settling down.  It also feels like there is so much to be anxious about when caring for tiny ones! I strongly believe more should be done to encourage new mums to take time to recover. It’s something that used to happen more but in our current society, doesn’t seem to be emphasised enough.</p>
      <p>This is where reflexology can be hugely beneficial. It gives new mums an hour just to be, to lie down and even have a nap while receiving the benefits of a treatment.</p>
      <p>The reflexology treatment itself brings a deep sense of relaxation; and the more relaxed new mums are, the better the let-down of milk, meaning reflexology can be beneficial when trying to establish breastfeeding.  Clients also report that reflexology can help to re-balance hormones, boost their immune system and help to regulate sleep patterns that might have gone awry. Another huge benefit of reflexology over other therapies is that new mums don’t have to expose their recovering bodies - just their feet and lower legs.</li></p>
      <p>There are also more practical benefits to mobile reflexology treatments:</p>
      <ul>
        <li>Seeing clients in their own home means there is no need to disturb a sleeping baby to travel, and no stress about packing everything required.</li>
        <li>I bring a reclining chair and everything else required for a treatment. This type of chair enables comfortable breastfeeding or cuddling of little babies during the treatment.  But reflexology can be delivered pretty much anywhere, so if you are more comfortable in bed or on the sofa, this is no problem at all.</li>
        <li>From experience, babies often stay asleep during the treatments as they enjoy the relaxing music and ambience created - but if they don’t, then it’s fine to pause the treatment while you make a bottle, change a nappy, whatever is needed.</li>
      </ul>
      <p>Taking regular time out like this will encourage both physical and emotional healing, hopefully helping to lower chances of postnatal depression or burnout developing. If you are a new mum and you feel hesitant about treating yourself to reflexology, then please remember that it’s so much easier to look after a baby if you feel stronger and relaxed.  You are doing it for your baby and your family, not only yourself.</p>
    </div>
  </div>
</template>

<script>
import canalWalkImg from '../assets/images/canal-walk-with-newborn.jpg';

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
