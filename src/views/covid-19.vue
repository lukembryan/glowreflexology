<template>
  <div class="content">
    <div class="title">
      <h1>COVID-19: safely re-opening my practice</h1>
    </div>
    <div class="body-copy">
      <p>I am closely following the guidance of my professional body the Association of Reflexologists to ensure the safety of my clients during the Coronavirus pandemic.  With this in mind, there will need to be some changes to the way appointments are carried out.  I strongly believe that none of these changes will reduce the benefits received from a treatment, after all, clients tend to be dosing in a relaxed state with their eyes closed so will not be thinking about the fact I will be wearing a mask!</p>
      <p>Here is a summary of the changes:</p>
      <ul>
        <li>I will call you beforehand to undertake a risk assessment to ensure that it’s safe to go ahead with the treatment (checking whether you are showing any Covid symptoms and you are not extremely vulnerable or shielding)</li>
        <li>I will put disposable couch roll down before putting my bag, music etc. on your floor</li>
        <li>I will wear a fresh mask for the entire duration I am with you (and would prefer you to as well, if not a mask then any face covering is fine e.g. a scarf).  If both parties wear a face covering it reduces the risk of the virus spreading by 98%</li>
        <li>I will wear fresh gloves while I set up until I get started - and use hand sanitiser (60% alcohol) before and after the treatment.  Fresh gloves will be put on as soon as the treatment is finished</li>
        <li>As was always the case, I will use fresh linen for each client.  I use removable and washable covers on both my weighted blanket and eye pillows (but will add a tissue for extra protection).  If you would prefer, you can provide your own eye pillow, sheet and blanket</li>
        <li>My reclining chair will be wiped down with antibacterial wipes between each client</li>
        <li>I will no longer accept cash but SumUp or online payments are fine</li>
      </ul>
      <p>If you would like any further information, please see the attached Association of Reflexology Covid-19 Secure Workplace Policy which I will be adhering to.</p>
      <p><a href="/AoR-Covid-19-Policy-for-MOBILE-Therapists.pdf" target="_blank">Association of Reflexology Covid-19 Secure Workplace Policy</a></p>
      <img class="image" src="/src/assets/images/aor-covid.png" alt="AoR COVID-19" />
    </div>
    <img class="image" src="/src/assets/images/covid-19-supplies.jpg" alt="COVID-19 supplies" />
  </div>
</template>

<script>
import covidSupplies from '../assets/images/covid-19-supplies.jpg';
import aorCovid from '../assets/images/aor-covid.png';

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
    font-size: 0.5em;
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
  > .image {
    height: auto;
  }
}
</style>
