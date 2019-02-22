<template>
  <div>
    <headerBar>UX系列</headerBar>

    <v-content id="productList">
      
      <v-container fluid>
        <v-tabs grow fixed-tabs :slider-color="$store.state.mainColor" v-model="tabs">
            <v-tab v-for="(i,index) in products" :key="index" :href="`#tab-${index}`" active-class="active">{{i}}</v-tab>
        </v-tabs>

        <v-tabs-items v-model="tabs">
          <v-tab-item key='0' value="tab-0">
            <v-card flat>
              <v-card-title primary-title>
                <h2 class="display-2">{{products[0]}}</h2>
              </v-card-title>
              <v-card-text>
                <v-img :src="require('@/assets/images/products/printer/UX-D160S.png')">
                    <v-layout slot="placeholder" fill-height align-center justify-center ma-0>
                      <v-progress-circular indeterminate color="grey"></v-progress-circular>
                    </v-layout>
                </v-img>

                <h3 class="headline mb-4">日立独创的<br />“溶剂低消耗系统”，<br />显著降低客户的运行成本</h3>
                <p>
                墨盒式设计，墨水及溶剂更换更方便，避免脏手和墨水遗漏。<br><br>
                日立先进技术制造的“溶剂低消耗系统”通过对墨水回路和设备温度的控制，有效减少耗材挥发，在控制耗材用量方面处于业内顶尖地位。
                </p>
                <v-img :src="require('@/assets/images/products/printer/ux-d160s_p1.png')" class="my-4" contain></v-img>

                <p class="caption my-5">* 和日立现有的设备相比，在相同条件下，UX-B和UX-D的溶剂挥发量减少30% （墨水：1067K，温度：20℃）</p>

                <v-btn depressed block dark large href="http://www.hitachi-iec.cn/ch/product/print/ux/index.html" :color="$store.state.mainColor">
                  <span class="text-capitalize">了解更多</span>
                </v-btn>
              </v-card-text>
            </v-card>
          </v-tab-item>
          <v-tab-item key='1' value="tab-1">
            <v-card flat>
              <v-card-title primary-title>
                <h2 class="display-2">{{products[1]}}</h2>
              </v-card-title>
              <v-card-text>
                
                <v-img :src="require('@/assets/images/products/printer/UX-D860S.png')">
                    <v-layout slot="placeholder" fill-height align-center justify-center ma-0>
                      <v-progress-circular indeterminate color="grey"></v-progress-circular>
                    </v-layout>
                </v-img>

                <h3 class="headline mb-4">高速，多行喷印 (最多8行)、<br />最大64点阵，<br />90°旋转喷印 (竖向喷印)，<br />满足不同喷印需求</h3>
                
                <ul class="mb-4 list-style-sq">
                  <li>可同时喷印行数达到8行。日立独有的喷印调节方式，即使多行印刷也可以确保清晰美观</li>
                  <li>单个喷头32点阵，最大可达64点阵印刷。适用于钢板建材上的大文字印刷，并可对文字标识等进行自由编辑。</li>
                  <li>喷印方向可进行90°旋转调节，最多可喷印12文字。</li>
                  <li>搭载双喷嘴，将印刷速度提高一倍*1。</li>
                </ul>

                <p class="caption mb-3">*1 和我司单喷嘴机型（UX-D660J）对比</p>

                <v-container class="px-0">
                  <v-img :src="require('@/assets/images/products/printer/ux-d860s_p1.png')" class="mb-3" contain></v-img>
                </v-container>
                
                <v-btn depressed block dark large href="http://www.hitachi-iec.cn/ch/product/print/ux/uxspz/index.html" :color="$store.state.mainColor">
                  <span class="text-capitalize">了解更多</span>
                </v-btn>
              </v-card-text>
            </v-card>
          </v-tab-item>
          <v-tab-item key='2' value="tab-2">
            <v-card flat>
              <v-card-title primary-title>
                <h2 class="display-2">{{products[2]}}</h2>
              </v-card-title>
              <v-card-text>
                
                <v-img :src="require('@/assets/images/products/printer/UX-D110S.png')">
                    <v-layout slot="placeholder" fill-height align-center justify-center ma-0>
                      <v-progress-circular indeterminate color="grey"></v-progress-circular>
                    </v-layout>
                </v-img>

                <v-container class="px-0">
                  <h3>微字机</h3>
                  <p>适用于电子、汽车零部件等行业</p>

                  <v-layout row>
                    <v-flex xs5>
                      <v-img :src="require('@/assets/images/products/printer/ux-d110s_p1.jpg')">
                          <v-layout slot="placeholder" fill-height align-center justify-center ma-0>
                            <v-progress-circular indeterminate color="grey"></v-progress-circular>
                          </v-layout>
                      </v-img>
                    </v-flex>
                    <v-flex xs6 offset-xs1>
                      <v-img :src="require('@/assets/images/products/printer/ux-d110s_p2.jpg')">
                          <v-layout slot="placeholder" fill-height align-center justify-center ma-0>
                            <v-progress-circular indeterminate color="grey"></v-progress-circular>
                          </v-layout>
                      </v-img>
                    </v-flex>
                  </v-layout>
                </v-container>

                <v-container class="px-0">
                  <h3>高速机</h3>
                  <p>适用于高速生产线等</p>

                  <v-layout row>
                    <v-flex xs5>
                      <v-img :src="require('@/assets/images/products/printer/ux-d110s_p3.jpg')">
                          <v-layout slot="placeholder" fill-height align-center justify-center ma-0>
                            <v-progress-circular indeterminate color="grey"></v-progress-circular>
                          </v-layout>
                      </v-img>
                    </v-flex>
                    <v-flex xs6 offset-xs1>
                      <v-img :src="require('@/assets/images/products/printer/ux-d110s_p4.jpg')">
                          <v-layout slot="placeholder" fill-height align-center justify-center ma-0>
                            <v-progress-circular indeterminate color="grey"></v-progress-circular>
                          </v-layout>
                      </v-img>
                    </v-flex>
                  </v-layout>
                </v-container>

                <v-container class="px-0 mb-4">
                  <h3>大字机</h3>
                  <p>适用于纸箱、木材、建材等行业</p>

                  <v-layout row>
                    <v-flex xs5>
                      <v-img :src="require('@/assets/images/products/printer/ux-d110s_p5.jpg')">
                          <v-layout slot="placeholder" fill-height align-center justify-center ma-0>
                            <v-progress-circular indeterminate color="grey"></v-progress-circular>
                          </v-layout>
                      </v-img>
                    </v-flex>
                    <v-flex xs6 offset-xs1>
                      <v-img :src="require('@/assets/images/products/printer/ux-d110s_p6.jpg')">
                          <v-layout slot="placeholder" fill-height align-center justify-center ma-0>
                            <v-progress-circular indeterminate color="grey"></v-progress-circular>
                          </v-layout>
                      </v-img>
                    </v-flex>
                  </v-layout>
                </v-container>

                <v-btn depressed block dark large href="http://www.hitachi-iec.cn/ch/product/print/ux/uxykj/index.html" :color="$store.state.mainColor">
                  <span class="text-capitalize">了解更多</span>
                </v-btn>
              </v-card-text>
            </v-card>
          </v-tab-item>
        </v-tabs-items>
      </v-container>
    </v-content>
  </div>
</template>

<style>
.list-style-sq {
  list-style-type: square;
}
.imgList {
  padding: 5px;
  line-height: 2;
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
        tabs: "tab-" + this.$route.params.id,
        products: ['UX-D160S','UX-D860S','UX-D110S']
    }
  },
  computed: {
  },
  methods: {
  }
};
</script>