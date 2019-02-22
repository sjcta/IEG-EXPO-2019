<template>
  <div>
    <headerBar>检测机</headerBar>

    <v-content>
      
      <v-container fluid>

            <v-card flat>
              <v-card-title primary-title>
                <h2 class="display-2">检测机 <span>MC-20S</span></h2>
              </v-card-title>
              <v-card-text>

                <v-container>
                  <v-img :src="require('@/assets/images/products/detecter/detecter_p1.jpg')" class="mb-3" contain>
                    <v-layout slot="placeholder" fill-height align-center justify-center ma-0>
                      <v-progress-circular indeterminate color="grey"></v-progress-circular>
                    </v-layout>
                  </v-img>
                </v-container>

                <ul class="mb-4 list-style-sq">
                  <li>采用特有的校对检测方式，与标识设备相匹配</li>
                  <li>采用彩色摄像头，提高印字检测的灵活性</li>
                  <li>采用专门的白色LED闪光灯照明，控制电源内置（*仅限配备照明灯的机型）</li>
                  <li>显示调节焦距、亮度的设定最佳值</li>
                  <li>参数设定采用2进制，显示彩色滤镜设定最佳值</li>
                </ul>


                <v-container>
                  <v-img :src="require('@/assets/images/products/detecter/detecter_p2.png')" class="mb-3" contain></v-img>
                </v-container>

                <v-container class="px-0">
                  <v-btn depressed block dark large href="http://www.hitachi-iec.cn/ch/product/print/pd/mc/index.html" :color="$store.state.mainColor">
                    <span class="text-capitalize">了解更多</span>
                  </v-btn>
                </v-container>
              </v-card-text>
            </v-card>
      </v-container>
    </v-content>
  </div>
</template>

<style>
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