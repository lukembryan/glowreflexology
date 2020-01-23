<template>
  <div class="content">
    <div class="title">
      <h1>blog</h1>
    </div>
    <div class="body-copy">
      <router-link :to="post.route" :style="{'background-image': 'url(/src/assets/images/' + post.image + ')'}" class="post" v-for="post in posts" v-bind:key="index">
        <div class="date">{{post.date}}</div>
        <div class="post-title">{{post.title}}</div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      posts: [
        {
          title: 'benefits of postnatal reflexology',
          date: '23rd of January 2020',
          image: 'canal-walk-with-newborn.jpg',
          route: '/blog/benefits-of-postnatal-reflexology'
        },
        {
          title: 'how to...avoid festive fatigue',
          date: '18th of December 2019',
          image: 'festivities.jpg',
          route: '/blog/how-to-avoid-festive-fatigue'
        },
        {
          title: 'how to...get more sleep',
          date: '10th of November 2019',
          image: 'sleep.jpg',
          route: '/blog/how-to-get-more-sleep'
        }
      ]
    }
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
    });
  }
  > .body-copy {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;
    grid-column: 2/8;
    .screen-xs-max({
      grid-template-columns: 100%;
      grid-column: 1/9;
    });
    > .post {
      position: relative;
      width: 100%;
      height: 50vh;
      background-color: #ccc;
      background-size: cover;
      > .post-title {
        position: absolute;
        bottom: 20px;
        left: 20px;
        right: 20px;
        text-align: center;
        color: #fff;
        padding: 8px 15px 10px;
        font-size: 1.2em;
        background-color: #000000aa;
        line-height: 1.2;
      }
      > .date {
        position: absolute;
        top: 20px;
        right: 20px;
        color: #fff;
        padding: 6px 10px 8px;
        font-size: 0.8em;
        background-color: #00000080;
        line-height: 1;
      }
    }
  }
}
</style>
