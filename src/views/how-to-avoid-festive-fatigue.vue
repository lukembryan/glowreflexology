<template>
  <div class="content">
    <div class="subtitle">
      <h1>blog</h1>
      <p>18th of December 2019</p>
    </div>
    <div class="title">
      <h2>how to...avoid festive fatigue</h2>
    </div>
    <h3>A list of my top tips to get you through the challenges &amp; stress of the festive season.</h3>
    <img class="image" src="/src/assets/images/festivities.jpg" alt="Festive celebrations" />
    <div class="body-copy">
      <p>I bloody love Christmas. But in the past I have taken it to the extreme. I've done it all:</p>
      <ul>
        <li>In my twenties I spent ALL my money on partying and presents so I tried to live off the office supply of mince pies - for a whole week. Needless to say I felt awful and put on a stone that year</li>
        <li>I am known for taking it too far at work Christmas parties because: free bar. I then spend the rest of the Christmas period in a spiral of shame about the things I have done. It's probably for the best that I now work in a team of one</li>
        <li>I've fallen asleep before the Christmas lunch</li>
        <li>I've not made it out on New Year's Eve because I peaked too soon the night before</li>
        <li>When pregnant I cried because I couldn't fit the potatoes in the oven. I wanted to cancel Christmas</li>
        <li>This list could go on and on...</li>
      </ul>
      <p>But seriously, Christmas can be really stressful. The financial and social pressure can take its toll, not to mention the physical impact of all the lovely food and drink. Also if you are feeling lonely or that you are not quite living up to the image of the perfect family portrayed so heavily in the media at this time, these feelings can be really exacerbated at Christmas.</p>
      <p>Reflecting on this led me to thinking about coping mechanisms for getting through the festive period in one piece. I'm not convinced I will make it through the festive period in one piece, and I may have to refer back to this list a lot. But regardless, here are my top tips:</p>
      <ol>
        <li><strong>Create boundaries when it comes to spending</strong> on presents. It's good to agree budgets with family members or better yet, give favours instead or no presents at all. I am so lucky that my husbands' family have agreed to no presents</li>
        <li><strong>Small children don't need you to spend much on them</strong>. My two year old is going to be over the moon with his second hand Little Tikes Car and charity shop goodies. He will not be using them for long so there is no point spending too much</li>
        <li>If you have young ones, <strong>make use of having the extra people</strong> around to cuddle, hold, play with them so you can get stuff done or have a sit down</li>
        <li>Try to <strong>create boundaries when it comes to your children</strong> - I realise this is easier said than done. Sometimes visitors may not see the importance of your child having a nap at a certain time, not eating particular foods, or receiving toys you'd rather they didn't... This can be a big source of stress for parents so perhaps let people know if you have any strong feelings before the day. Don't be afraid to put your foot down if it's important, people should respect this</li>
        <li>Enjoy yourself but <strong>make the most of the food at parties rather than just the drink</strong> (this is a tough one for me!), and try to alternate an alcoholic drink with water. Your future self will thank you for this</li>
        <li><strong>Nap whenever possible</strong>. Every time the opportunity arises to close those eyes - do it!</li>
        <li><strong>Manage expectations</strong>. Hosting Christmas can be really full on but it's easier if you can let go of the idea of being perfect. I have lots of family coming on Christmas Eve and have already warned them that I will be making use of the new Lidl in town and getting easy things to bung in the oven. If I then actually manage to make something from scratch, they will be pleasantly surprised</li>
        <li><strong>Split the Christmas dinner</strong> so all the pressure is not just on one person. All the adults at our Christmas lunch will either be preparing a dish in advance or cooking one on the day</li>
        <li>On Christmas day, try and <strong>get out of the house</strong> for a walk or a trip to the pub. It's so good to get some air, allow the kids to burn off some energy and spread some festive cheer</li>
        <li><strong>Don't feel guilty</strong> about indulging on the big day. It's one day of pure indulgence and January will be awash with pressure to get healthy. Just enjoy it in the knowledge that you will balance it out later</li>
        <li><strong>Don't forget you!</strong> Buy yourself something for yourself that you really want. I will have a present "To Emily, Love Emily" under my tree - at least I am guaranteed to like it</li>
        <li><strong>Book in some "me time"</strong> to help with the overwhelm.  I can help with this - glow reflexology comes to you, both daytime and evening appointments are available so the amount of time taken out of your day is reduced.  This may even help prevent that “Christmas Cold” hitting you.  I am also working between Christmas and New Year should you need a recovery treatment</li>
      </ol>
    </div>
  </div>
</template>

<script>
import festivitiesImg from '../assets/images/festivities.jpg';

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
    object-position: left top;
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
