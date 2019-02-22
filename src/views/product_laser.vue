<template>
  <div>
    <headerBar>激光机</headerBar>

    <v-content>
      
      <v-container fluid>

            <v-card flat>
              <v-card-title primary-title>
                <h2 class="display-2">激光机 <span>LM-C300系列</span></h2>
              </v-card-title>
              <v-card-text>

                <v-img :src="require(`@/assets/images/products/laser/laser_p1.jpg`)">
                    <v-layout slot="placeholder" fill-height align-center justify-center ma-0>
                      <v-progress-circular indeterminate color="grey"></v-progress-circular>
                    </v-layout>
                </v-img>

                <ul class="mb-4 mt-4 list-style-sq">
                  <li>配备高速、高清的数码振镜。（仅限高端机型）</li>
                  <li>编码器使用时，可自动检测印字对象是静止状态或移动状态。</li>
                  <li>设计安全符合IEC60825标准。<br />装有激光发射信号灯，激光发射状态一目了然。</li>
                  <li>适宜使用环境的保护构造：IP54。</li>
                  <li>丰富的日历功能。</li>
                  <li>配备合成编码。</li>
                  <li>配备自动快门。</li>
                  <li>配备紧急停机开关。</li>
                  <li>配备使用于玻璃和透明物的点阵。</li>
                </ul>

                <v-layout row wrap class="mb-4">
                  <v-flex xs12 class="imgList">
                    <v-img :src="require(`@/assets/images/products/laser/laser_p2.jpg`)"></v-img>
                    点阵
                  </v-flex>
                  <v-flex xs6 class="imgList">
                    <v-img :src="require(`@/assets/images/products/laser/laser_p3.jpg`)"></v-img>
                    在化妆品外盒上印字
                  </v-flex>
                  <v-flex xs6 class="imgList">
                    <v-img :src="require(`@/assets/images/products/laser/laser_p4.jpg`)"></v-img>
                    在瓶子、玻璃表面印字
                  </v-flex>
                  <v-flex xs6 class="imgList">
                    <v-img :src="require(`@/assets/images/products/laser/laser_p5.jpg`)"></v-img>
                    在光滑的电子主板上印字
                  </v-flex>
                  <v-flex xs6 class="imgList">
                    <v-img :src="require(`@/assets/images/products/laser/laser_p6.jpg`)"></v-img>
                    在CD·DVD等光盘上印字
                  </v-flex>
                </v-layout>

              </v-card-text>
            </v-card>

          <v-container fluid>
              <v-btn depressed block dark large href="http://www.hitachi-iec.cn/ch/product/print/jg/index.html" :color="$store.state.mainColor">
              <span class="text-capitalize">了解更多</span>
              </v-btn>
          </v-container>
      </v-container>
    </v-content>
  </div>
</template>

<style>
.imgList {
  font-size: 83%;
}
h2 span {
  font-size: 50%;
}
</style>

<script>
import headerBar from "../components/headerBar.vue";

export default {
  components: {
    headerBar
  },
  data () {
    return {
    }
  },
  computed: {
  },
  methods: {
  }
};
</script>