<template>
  <div class="content">
    <div class="title">
      <h1>contact</h1>
    </div>
    <div class="details">
      <div><strong>Landline</strong><span class="pull-right"><a href="tel:01403256259">01403 256259</a></span></div>
      <div><strong>Mobile</strong><span class="pull-right"><a href="tel:07706279102">07706 279102</a></span></div>
      <div><strong>Email</strong><span class="pull-right"><a href="mailto:emily@glowreflexology.co.uk">emily@glowreflexology.co.uk</a></span></div>
      <div><strong>Facebook</strong><a class="pull-right" href="https://www.facebook.com/glowwithreflexology/">@glowwithreflexology</a></div>
      <div><strong>Instagram</strong><a class="pull-right" href="https://www.instagram.com/glowwithreflexology/">@glowwithreflexology</a></div>
    </div>
    <div class="body-copy">
      <p>To make a booking, an enquiry, or just to find out a bit more about reflexology, please feel free to get in touch by any of the methods above.</p>
      <p>I am very interested in working at <strong>festivals or corporate wellness days</strong> etc., please don’t hesitate to get in touch for a chat.</p>
      <h3>availability</h3>
      <div class="table-responsive">
        <table class="table">
          <thead>
            <tr>
              <th>Days</th>
              <th>Times</th>
              <th>Where</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Mon</td>
              <td>N/A</td>
              <td>-</td>
            </tr>
            <tr>
              <td>Tue</td>
              <td>N/A</td>
              <td>-</td>
            </tr>
            <tr>
              <td>Wed</td>
              <td>9:30am - 2:30pm<hr>6:30pm - 9:00pm</td>
              <td>Home visits</td>
            </tr>
            <tr>
              <td>Thu</td>
              <td>6:30pm - 9:00pm</td>
              <td>Home visits</td>
            </tr>
            <tr>
              <td>Fri</td>
              <td>9:30am - 2:30pm<hr>6:30pm - 9:00pm</td>
              <td>Home visits</td>
            </tr>
            <tr>
              <td>Sat</td>
              <td>9:00am - 1:00pm</td>
              <td>Home visits</td>
            </tr>
            <tr>
              <td>Sun</td>
              <td>N/A</td>
              <td>-</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
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
    grid-column: 3/7;
    .screen-xs-max({
      grid-column: 1/9;
    });
  }
  > .details {
    grid-column: 3/7;
    .screen-xs-max({
      grid-column: 1/9;
    });
  }
  > .body-copy {
    grid-column: 3/7;
    .screen-xs-max({
      grid-column: 1/9;
    });
  }
  hr {
    margin: 5px 0;
  }
}
</style>
