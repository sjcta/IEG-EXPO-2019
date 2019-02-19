<template>
  <div>
    <v-toolbar app dark color="pink">
      <v-layout align-center justify-space-between row>
          <v-toolbar-title class="title text-uppercase" absolute>
            <span @click="$emit('closeDoor')">{{ $vuetify.t('$vuetify.header.title') }}</span>
          </v-toolbar-title>
      </v-layout>

    </v-toolbar>

    <v-content id="indexPage">
      <v-container fluid>
        <v-flex xs12 sm6 offset-sm3>
          <v-card>
            <v-card-title>
              <div>
                <h3>日立产机系统出展<br />第100届全国糖酒商品交易会</h3>
                <div class="disc">
                  <p>日立产机系统，秉承日立制作所创业者的“和”、“诚”、“开拓者精神”，100多年来，不断地钻研、磨练，制造工厂所需要的基础设备。</p>
                  <p>2019年3月，日立产机出展成都糖酒会，带来了喷码机和空压机，为广大中国客户提供技术先进、性能可靠的设备，为客户的事业进步，为中国的社会发展做出贡献。
        日立产机有志于成为中国客户“最值得信任的供应商”。</p>
                </div>
              </div>
            </v-card-title>
          </v-card>
        </v-flex>
      </v-container>


      <v-container fluid>
        <div id="buttonList">
          <v-layout row>
            <v-flex xs12>
                <v-btn block dark large to="/product" color="pink lighten-1">
                  <v-icon left>star</v-icon>
                  <span class="text-capitalize">出展产品</span>
                </v-btn>
              <v-btn block dark large to="/info" color="pink lighten-1">
                <v-icon left>map</v-icon>
                <span class="text-capitalize">展位信息</span>
              </v-btn>
              <v-btn block outline large to="/qa" color="pink">
                <v-icon left>contact_support</v-icon>
                <span class="text-capitalize">问卷调查</span>
              </v-btn>
            </v-flex>
          </v-layout>
        </div>
      </v-container>

      <v-container fluid>
        <v-list>
          <v-subheader>信息一览</v-subheader>

          <v-list-tile avatar ripple>
            <v-list-tile-avatar>
              <v-icon left>star</v-icon>
            </v-list-tile-avatar>
            <v-list-tile-content>
              <v-list-tile-title>出展产品</v-list-tile-title>
            </v-list-tile-content>
            <v-list-tile-action>
              <v-icon left>arrow_forward_ios</v-icon>
            </v-list-tile-action>
          </v-list-tile>

          <v-list-tile avatar ripple>
            <v-list-tile-avatar>
              <v-icon>map</v-icon>
            </v-list-tile-avatar>
            <v-list-tile-content>
              <v-list-tile-title>展位信息</v-list-tile-title>
            </v-list-tile-content>
            <v-list-tile-action>
              <v-icon>arrow_forward_ios</v-icon>
            </v-list-tile-action>
          </v-list-tile>

          <v-list-tile avatar ripple>
            <v-list-tile-avatar>
              <v-icon>contact_support</v-icon>
            </v-list-tile-avatar>
            <v-list-tile-content>
              <v-list-tile-title>问卷调查</v-list-tile-title>
            </v-list-tile-content>
            <v-list-tile-action>
              <v-icon left>arrow_forward_ios</v-icon>
            </v-list-tile-action>
          </v-list-tile>
        </v-list>

      </v-container>
    </v-content>

    <v-footer class="pa-3" light>
      <v-flex text-xs-center>© Hitachi, Ltd. 1994, 2019. All rights reserved.</v-flex>
    </v-footer>
  </div>
</template>

<style scoped>
div.disc {
  padding: 20px 0 0;
}
</style>

<script>

export default {
  name: "indexPage",
  mounted(){
  },
  methods: {
  }
};
</script>