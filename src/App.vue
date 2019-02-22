<template>
  <v-app>
    <transition name="door-anim">
      <v-content id="pop" v-if="doorState">
        <v-container fluid fill-height>

          <div id="logo"></div>

          <v-layout align-center justify-center id="text" class="text-xs-center white--text pa-0">

            <div class="blockBG text-xs-center">
                <h1 class="headline">日立产机系统(中国)<br />有限公司</h1>
                
                <p class="title">出展第100届<br />全国糖酒商品交易会</p>

                <h3>2019年3月21日～23日</h3>
                <p>中国，成都</p>

                <v-btn block dark large @click="openDoor" :color="$store.state.mainColor">点击进入<br/>v0.4.2</v-btn>
                
            </div>

          </v-layout>

        </v-container>


      </v-content>
    </transition>

    <transition name="router-anim">
        <router-view></router-view>
    </transition>
    
    <v-footer class="pa-3" light>
      <v-flex text-xs-center>© Hitachi, Ltd. 1994, 2019. All rights reserved.</v-flex>
    </v-footer>
  </v-app>
</template>

<style>

  .door-anim-enter-active {
    animation: zoom .5s;
  }
  .door-anim-leave-active {
    animation: zoom .5s;
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
  @keyframes zoom {
    from {
      opacity: 1;
    }

    100% {
      opacity: 0;
      transform: scale3d(1.5, 1.5, 1.5);
    }
  }
  body {
    padding-bottom: constant(safe-area-inset-bottom);
    padding-bottom: env(safe-area-inset-bottom);
  }
  .fixed {
    position: fixed;
  }
  
  footer {
    border-top: 1px solid #eee;
  }

  .blockBG {
    width: 100%;
    padding: 50px 20px;
    background-color: rgba(0, 0, 0, .5);
  }
  .blockBG p {
    line-height: 2;
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
    background: #000 url('assets/images/intro.jpg') no-repeat top center;
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
    border-bottom: 2px solid #FFF;
    margin-bottom: 30px;
    line-height: 2;
  }
  #pop p.corp {
    border-bottom: 2px solid #ef0227;
    font-size: 140%;
    font-weight: 900;
    line-height: 2;
  }

.theme--light.application {
  background-color: #FFF;
}
h2 span {
  color: #999;
  font-size: 50%;
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
