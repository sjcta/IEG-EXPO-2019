<template>
  <v-app>
    <transition name="door-anim">
      <v-content id="pop" v-if="doorState">
        <v-container fluid fill-height>

          <div id="logo"></div>

          <v-layout align-center justify-center id="text" class="text-xs-center white--text">
            <p class="corp text-xs-center">第100届<br />全国糖酒商品交易会</p>
            <div class="headline">
                <h1 class="text-xs-center">日立产机系统（中国）有限公司</h1>
                <span>出展信息</span>
            </div>

            <div class="date">
              <h3>2019年3月21日～23日</h3>
              <span>中国，成都</span>
            </div>

            <div>
              <v-btn depressed small @click="openDoor" color="primary">Enter v0.2.9</v-btn>
            </div>
          </v-layout>

        </v-container>

      </v-content>
    </transition>

    <transition name="router-anim">
        <router-view></router-view>
    </transition>
  </v-app>
</template>

<style>

  .door-anim-enter-active {
    animation: dropDown .5s;
  }
  .door-anim-leave-active {
    animation: goOut .5s;
  }
  .router-anim-enter-active {
    animation: fadeIn .5s;
    animation-delay: 0s;
  }
  .router-anim-leave-active {
    animation: fadeOut .3s;
  }
  @keyframes dropDown {
    from {
      transform: translate(0,100%);
      opacity: 1;
    }
    to {
      transform: translate(0);
      opacity: 1;
    }
  }
  @keyframes goOut {
    from {
      transform: translate(0);
      opacity: 1;
    }
    to {
      transform: translate(0,100%);
      opacity: 0;
    }
  }
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  @keyframes fadeOut {
    from {
      opacity: 1
    }
    to {
      opacity: 0;
    }
  }
  @keyframes moveIn {
    from {
      transform: translate(-50%, 0);
      opacity: 0;
    }
    to {
      transform: translate(0);
      opacity: 1;
    }
  }
  @keyframes moveOut {
    from {
      transform: translate(0);
      opacity: 1
    }
    to {
      transform: translate(50%, 0);
      opacity: 0;
    }
  }
  body {
    padding-bottom: constant(safe-area-inset-bottom);
    padding-bottom: env(safe-area-inset-bottom);
  }
  .fixed {
    position: fixed;

  }
  .theme--light.application:before {
    content: ' ';
    position: fixed;
    z-index: -1;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: #fff;
  }
  .theme--light.application {
    background: none;
  }
  footer {
    border-top: 1px solid #eee;
  }
   .v-toolbar {
     z-index: 99;
   }
  .v-toolbar > .title {
    font-size: 18px;
  }
  .v-toolbar button {
    min-width: 60px;
    padding: 5px;
  }

  #pop {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: #000 url('assets/bg-01.png') no-repeat top center;
    background-size: cover;
    z-index: 999;
  }
  #pop .container {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
  #pop #logo {
    position: absolute;
    display: block;
    top: 50px;
    right: 50px;
    width: 120px;
    height: 50px;
    background:url('assets/logo.png') no-repeat right top;
    background-size: 100%;
  }
  #pop #text {
    display: flex;
    flex-direction: column;
    padding: 0 35px;
  }
  #pop #text p {
    width: 100%;
  }
  #pop #text .headline {
    width: 100%;
    border-bottom: 2px solid #ef0227;
    margin-bottom: 30px;
  }
  #pop #text .headline h1 {
    font-size: 110%;
    line-height: 1;
  }
  #pop #text .headline span {
    font-size: 50%;
  }
  #pop p.corp {
    border-bottom: 2px solid #ef0227;
    font-size: 140%;
    font-weight: 900;
    line-height: 2;
  }
  #pop #text .location,
  #pop #text .date {
    width: 90%;
    font-size: 90%;
    margin-bottom: 20px;
  }
  #pop #text .location h3 {
    border-bottom: 2px solid #FFF;
    margin-bottom: 5px;
    line-height: 2;
  }
  #pop #text .location span {
    line-height: 1.5;
  }
  #buttons {
    position: absolute;
    display: flex;
    bottom: 50px;
    left:0;
    right: 0;
    justify-content: center;
  }
  .disperse {
    text-align: justify;
    text-justify: distribute-all-lines;
    text-align-last: justify;
  }
</style>

<script>
export default {
  name: 'App',
  components: {
  },
  data () {
    return {
    }
  },
  created () { 
  },
  watch: {
    '$route':function(to,from){
                this.$vuetify.goTo(0);
            }
  },
  mounted () {
    console.log(this.$store.state.showDoor)
  },
  computed: {
    doorState() {
      return this.$store.state.showDoor
    }
  },
  methods: {
    openDoor () {
      this.$store.state.showDoor = false;
    }
  }
}
</script>
