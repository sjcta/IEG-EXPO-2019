<template>
  <div>
    <headerBar>G系列</headerBar>

    <v-content>
      
      <v-container fluid>

            <v-card flat>
              <v-card-title primary-title>
                <h2 class="display-2">G系列</h2>
              </v-card-title>
              <v-card-text>
                <v-container>
                  <v-img :src="require('@/assets/images/products/printer/g.png')" class="mb-3" contain aspect-ratio=1>
                      <v-layout slot="placeholder" fill-height align-center justify-center ma-0>
                        <v-progress-circular indeterminate color="grey"></v-progress-circular>
                      </v-layout>
                  </v-img>
                </v-container>

                <h3 class="headline mb-4">采用墨盒式墨水和溶剂，<br />操作方便，节能环保。</h3>
                <p>墨盒式设计，墨水及溶剂更换更方便，避免脏手和墨水溢漏</p>
                

                <v-layout row wrap class="mb-4">
                  <v-flex xs12 class="imgList">
                    <v-img :src="require(`@/assets/images/products/printer/g_p1.jpg`)"></v-img>
                    墨水和溶剂的墨盒式设计，更换方便不脏手。新增纠错功能（报警），更换墨水和溶剂时须确认号码。防止人为错误，提高工作效率。
                  </v-flex>
                  <v-flex xs12 class="imgList">
                    <v-img :src="require(`@/assets/images/products/printer/g_p2.jpg`)"></v-img>
                    “用户友好”模式，触摸屏上墨水、溶剂直接用图标显示，并指示余量及合适的更换时间。
                  </v-flex>
                  <v-flex xs12 class="imgList">
                    <v-img :src="require(`@/assets/images/products/printer/g_p3.jpg`)"></v-img>
                    墨盒式墨水和溶剂可使用至最后一滴，不浪费。
                  </v-flex>
                </v-layout>


                <v-btn depressed block dark large href="http://www.hitachi-iec.cn/ch/product/print/g/index.html" :color="$store.state.mainColor">
                  <span class="text-capitalize">了解更多</span>
                </v-btn>
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