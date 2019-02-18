<template>
  <div>
    <headerBar v-on:childLang="$emit('changeLang')">{{ $vuetify.t('$vuetify.index.panelList') }}</headerBar>

    <v-content id="panelList">
      <transition name="list-anim">
      <v-container fluid v-show="activeBtn == 'list'" class="mb-9">
        <v-list
          two-line
          subheader
          v-for="(part,index) in panelParts"
          :key="'part'+index"
          class="elevation-3 mb-4"
        >
          <h3 class="text-xs-center" :class="part.color">{{ $vuetify.t(part.title) }}</h3>

          <div class="segment" v-for="(segm,index) in part.segment" :key="'seg'+index">
            <h4 class="grey--text darken-3">{{ $vuetify.t(segm.title) }}</h4>

            <v-list-tile
              v-for="(item,index) in segm.panels"
              @click="showMap(getPanelInfo(item).id)"
              :key="'theme'+index"
            >
              <v-list-tile-action>
                <span class="key">{{ getPanelInfo(item).id }}</span>
              </v-list-tile-action>

              <v-list-tile-content>
                <v-layout align-start justify-start column fill-height>
                  <div class="theme">{{ $vuetify.t(getPanelInfo(item).title) }}</div>
                  <!-- <div>
                    <span
                      class="charge grey--text"
                    >[{{ getPanelInfo(item).dept }}] {{ $vuetify.t(getPanelInfo(item).charge) }}</span>
                  </div> -->
                </v-layout>
              </v-list-tile-content>

              <v-list-tile-action>
                <v-icon color="grey lighten-1">chevron_right</v-icon>
              </v-list-tile-action>
            </v-list-tile>
          </div>
        </v-list>
      </v-container>
      </transition>

      <transition name="map-anim" v-on:enter="enter">
      <v-container fluid v-show="activeBtn!='list'" >
        <div id="map" class="elevation-3">
          <v-layout>
            <v-flex xs12 class="bg">
              <div class="flexBox first">
                <div class="groupA">
                  <span
                    v-for="(i,index) in blocks.groupA"
                    :key="'a' + index"
                    class="areaB"
                    :refs="i"
                    :class="{active: i==aniBlock?true:false}"
                  >{{ i }}</span>
                </div>
                <div class="groupB">
                  <span
                    v-for="(i,index) in blocks.groupB"
                    :key="'b' + index"
                    class="areaA"
                    :refs="i"
                    :class="{active: i==aniBlock?true:false}"
                  >{{ i }}</span>
                </div>
              </div>
              <div class="flexBox bottom" v-for="(i,index) in blocks.groupC" :key="'c' + index">
                <div>
                  <span
                    class="areaA"
                    :refs="i"
                    :class="{active: i==aniBlock?true:false}"
                  >{{ i }}</span>
                </div>
              </div>
              <div class="flexBox">
                <div class="groupC">
                  <span
                    v-for="(i,index) in blocks.groupD"
                    :key="'d' + index"
                    class="areaB"
                    :refs="i"
                    :class="{active: i==aniBlock?true:false}"
                  >{{ i }}</span>
                </div>
                <div class="groupD">
                  <span
                    v-for="(i,index) in blocks.groupE"
                    :key="'e' + index"
                    class="areaC"
                    :refs="i"
                    :class="{active: i==aniBlock?true:false}"
                  >{{ i }}</span>
                </div>
                <div>
                  <span class="none">&nbsp;</span>
                  <span
                    class="areaA"
                    refs="A-01"
                    :class="{'active': `A-01`==aniBlock ? true:false}"
                  >A-01</span>
                </div>
              </div>
              <div class="flexBox last">
                <div class="groupNone">
                  <span>&nbsp;</span>
                  <span class="block" v-for="i in 3" :key="'block'+i">&nbsp;</span>
                  <span v-for="i in 6" :key="'gray'+i">&nbsp;</span>
                </div>
              </div>
            </v-flex>
          </v-layout>
        </div>
      </v-container>
      </transition>

    </v-content>

    <v-bottom-nav :active.sync="activeBtn" :value="true" color="blue" fixed>
      <v-btn dark flat value="list">
        <span>LIST</span>
        <v-icon>list</v-icon>
      </v-btn>

      <v-btn dark flat value="map">
        <span>MAP</span>
        <v-icon>map</v-icon>
      </v-btn>
    </v-bottom-nav>
  </div>
</template>

<style scoped>
.container {
  position: absolute;
  margin-bottom: 50px;
}
#panelList {
  font-size: 90%;
  margin-bottom: 55px;
}
#panelList h3 {
  height: 40px;
  line-height: 40px;
  font-size: 15px;
  color: #fff;
}
#panelList h4 {
  padding: 15px 0 10px;
  margin-left: 16px;
  border-bottom: 1px solid #ccc;
}

#panelList .v-list__tile {
  padding: 8px 0;
  display: flex;
  align-items: flex-start;
  height: auto;
  min-height: auto;
}
#panelList .v-list__tile__action {
  min-width: 40px;
  padding: 6px 0 0;
  align-items: flex-start;
}
#panelList .key {
  font-size: 11px;
  padding-top: 2px;
}
#panelList .theme {
  display: block;
  font-size: 13px;
  line-height: 1.4;
  padding: 8px 0 0;
}
#panelList .charge {
  padding: 0;
  font-size: 12px;
}

#map {
  padding: 20px;
  background-color: #fff;
}
#map .layout .bg {
  display: flex;
  align-items: stretch;
  padding-left: 10px;
  background-color: #eee;
}
#map .flexBox {
  display: flex;
  width: 17%;
  flex-direction: column;
  align-items: flex-start;
  text-align: center;
  padding: 10px 0;
}
#map .flexBox div {
  width: 100%;
}
#map .flexBox.bottom {
  align-items: flex-end;
  align-content: flex-end;
}
#map .flexBox span {
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 35px;
  margin-bottom: 1px;
  margin-right: 1px;
  opacity: 0.7;
}

#map .flexBox .groupA,
#map .flexBox .groupB,
#map .flexBox .groupC {
  display: flex;
  flex-direction: column;
}
.areaA {
  color: #fff;
  background-color: #886e69;
}
.areaB {
  background-color: #fea477;
}
.areaC {
  color: #fff;
  background-color: #d45246;
}
#map div.bottom {
  align-self: flex-end;
}
#map span.active {
  opacity: 1;
  animation: twinkling 1s infinite ease-in-out;
  -webkit-animation: twinkling 1s infinite ease-in-out;
}

#map .flexBox.last {
  width: 15%;
  padding: 0 0 0 10px;
}

#map .flexBox.last span {
  background-color: #fff;
  margin: 0;
  opacity: 1;
}
#map .flexBox.last span.block {
  background-color: #eee;
  border: 1px solid #eee;
  margin: 0;
}
.list-anim-enter-active {
  animation: leftEnter .3s;
  -webkit-animation: leftEnter .3s; 
  z-index:2;
}
.list-anim-leave-active {
  animation: leftLeave .3s;
  -webkit-animation: leftLeave .3s;
}
.map-anim-enter-active {
  animation: rightEnter .3s;
  -webkit-animation: rightEnter .3s;
  z-index:2;
}
.map-anim-leave-active {
  animation: rightLeave .3s;
  -webkit-animation: rightLeave .3s;
}
@keyframes leftEnter {
  from {
    transform: translate(-5%,0);
    opacity: 0;
  }
  to {
    transform: translate(0);
    opacity: 1;
  }
}
@keyframes leftLeave {
  from {
    transform: translate(0);
    opacity: 1;
  }
  to {
    transform: translate(-100%,0);
    opacity: .5;
  }
}
@keyframes rightEnter {
  from {
    transform: translate(5%,0);
    opacity: 0;
  }
  to {
    transform: translate(0);
    opacity: 1;
  }
}
@keyframes rightLeave {
  from {
    transform: translate(0);
    opacity: 1;
  }
  to {
    transform: translate(100%,0);
    opacity: .5;
  }
}

@-webkit-keyframes twinkling {
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0.4;
    font-size: 120%;
    background-color: red;
  }
  100% {
    opacity: 1;
  }
}
@keyframes twinkling {
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0.4;
    font-size: 120%;
    color: red;
    background-color: white;
  }
  100% {
    opacity: 1;
  }
}
</style>

<script>
import headerBar from "../components/headerBar.vue";

export default {
  name: "panelList",
  components: {
    headerBar
  },
  data() {
    return {
      activeBtn: "list",
      aniBlock: "",
      blocks: {
        groupA: ["B-05", "B-04", "B-03", "B-02", "B-01"],
        groupB: ["A-11", "A-10", "A-09", "A-08", "A-07", "A-06","A-05"],
        groupC: ["A-04", "A-03", "A-02"],
        groupD: ["B-06", "B-07", "B-08", "B-09", "B-10", "B-11", "B-12", "B-13"],
        groupE: ["C-01", "C-02"]
      },
      timer: ""
    };
  },

  computed: {
    panelParts() {
      return this.$store.state.panelParts;
    }
  },
  methods: {
    getPanelInfo(pid) {
      return this.$store.getters.getPanelById(pid);
    },
    showMap(id) {
      this.activeBtn = "map";
      this.aniBlock = id;
      //this.clearBlock();
    },
    enter(el) {
      this.$vuetify.goTo(0);
      clearInterval(this.timer);
      this.clearBlock();
    },
    clearBlock() {
      this.timer = setInterval(() => {
        this.aniBlock = "";
        clearInterval(this.timer);
      }, 6000);
    }
  }
};
</script>
