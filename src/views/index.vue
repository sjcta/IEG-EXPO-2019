<template>
  <div>
    <v-toolbar app dark :color="$store.state.mainColor">
      <v-layout align-center justify-space-between row>
          <v-toolbar-title class=" text-uppercase text-xs-center">
            <span class="text-xs-center">日立产机系统（中国）出展信息</span>
          </v-toolbar-title>
      </v-layout>

    </v-toolbar>

    <v-content id="indexPage">
      <v-container fluid>
        <v-flex xs12 sm6 offset-sm3>
          <v-card :color="$store.state.mainColor + ' lighten-5'">
            <v-card-title>
              <div>
                <h2>日立产机系统出展<br />第100届全国糖酒商品交易会</h2>
                <div class="disc">
                  <p>日立产机系统，秉承日立制作所创业者的“和”、“诚”、“开拓者精神”，100多年来，不断地钻研、磨练，制造工厂所需要的基础设备。</p>
                  <p>2019年3月，日立产机出展成都糖酒会，带来了喷码机和空压机，为广大中国客户提供技术先进、性能可靠的设备，为客户的事业进步，为中国的社会发展做出贡献。
        日立产机有志于成为中国客户“最值得信任的供应商”。</p>
                </div>
              </div>
            </v-card-title>
          </v-card>
        </v-flex>
        

        
        <v-list>
          <v-subheader class="px-0">导览信息</v-subheader>
          <div id="buttonList">
            <v-layout row>
              <v-flex xs12 sm6>
                  <v-btn block dark large to="/product" :color="$store.state.mainColor + ' lighten-1'">
                    <v-icon left>star</v-icon>
                    <span class="text-capitalize">出展产品</span>
                  </v-btn>
                <v-btn block dark large to="/info" :color="$store.state.mainColor + ' lighten-1'">
                  <v-icon left>map</v-icon>
                  <span class="text-capitalize">展位信息</span>
                </v-btn>
                <v-btn block dark large to="/contact" :color="$store.state.mainColor + ' lighten-1'">
                  <v-icon left>phone</v-icon>
                  <span class="text-capitalize">联系我们</span>
                </v-btn>
                <v-btn block outline large to="/qa" :color="$store.state.mainColor" v-if="isQA">
                  <v-icon left>contact_support</v-icon>
                  <span class="text-capitalize">问卷调查</span>
                </v-btn>
              </v-flex>
            </v-layout>
          </div>
        </v-list>

      </v-container>
    </v-content>

  </div>
</template>

<style scoped>
div.disc {
  padding: 20px 0 0;
}
.v-toolbar__title {
  display: block;
  width: 100%;
  text-align: center;
}
</style>

<script>

export default {
  name: "indexPage",
  data () {
    return {
      isQA: false
    }
  }
};
</script>