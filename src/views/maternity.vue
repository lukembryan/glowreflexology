<template>
  <div class="content">
    <div class="title">
      <h1>maternity reflexology</h1>
    </div>
    <h3>Maternity reflexology is an area of reflexology aimed specifically at couples during <strong>pregnancy and postnatal</strong> periods. Reflexology can be hugely benefitial at these times - research has shown that women who have regular reflexology treatments during pregnancy can shorten the duration of labour, and those having regular treatments may require less pain-relief during the course of delivery*.</h3>
    <img class="image" src="/src/assets/images/beach-clouds.jpg" alt="Pregnancy/maternity reflexology" />
    <div class="box">
      <div>
        <p>*A research study showed reflexology in pregnancy significantly reduced pain during labour and reduced the length of the first stage (Valiani M et al - 2010 “Reviewing the effect of Reflexology on pain and outcomes of the labour of primiparous women” Iranian Journal of Nursing and Midwifery Research. 15 (Dec) p302-310)</p>
        <p>An earlier study showed first-time mums who received 10 reflexology treatments prior to birth had average labour times of five to six hours.  It was noted the group treated with reflexology needed far less pain relief during labour too.  (G. Motha and J. McGrath - 1992 “The effects of reflexology on labour outcome”)</p>
      </div>
    </div>
    <div class="body-copy">
      <h4>Pregnancy</h4>
      <h5>1-15 weeks</h5>
      <p>While reflexology can do no harm, it is best to let nature take its course and reflexologists tend not to treat during this time.</p>
      <h5>16-36 weeks</h5>
      <p>A lovely relaxing treatment is recommended, with a focus on helping to ease any pregnancy aches and pains such as acidity, digestive issues, heartburn, constipation, hip and back pain, sciatica, bleeding gums, insomnia and many more. Treatments last roughly an hour (including consultation).</p>
      <h5>37 weeks+</h5>
      <p>At this point we add to the above treatment with techniques to help prime you for a natural labour. Treatments last up to 1.5 hours (including consultation).</p>
      <h4>Postnatal</h4>
      <p>Reflexology is a lovely treat in the weeks following birth, and can encourage hormonal rebalance, relax you and therefore increase the production of breast milk, boost the immune system, lift your mood and regulate your sleep patterns.  Treatments last roughly an hour (including consultation) and it is fine to have your new baby with you if that’s what you need.</p>
    </div>
  </div>
</template>

<script>
import beachImg from '../assets/images/beach-clouds.jpg';

export default {
  data () {
    return {}
  }
}
</script>

<style scoped lang="less">
@import '../assets/css/less/responsive.less';

.content {
  grid-auto-flow: column;
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
    margin: 0;
    .screen-xs-max({
      grid-column: 1/9;
      grid-row: 3/4;
    });
  }
  > .image {}
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
    > h4 {
      margin-top: 0;
    }
    .screen-xs-max({
      grid-column: 1/9;
      grid-row: 5/6;
    });
  }
}
</style>
