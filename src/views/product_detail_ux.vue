<template>
  <div>
    <headerBar>UX系列</headerBar>

    <v-content id="productList">
      
      <v-container fluid>
        <v-tabs grow fixed-tabs slider-color="pink" v-model="tabs">
            <v-tab v-for="(i,index) in products" :key="index" :href="`#tab-${index}`" active-class="active">{{i}}</v-tab>
        </v-tabs>

        <v-tabs-items v-model="tabs">
          <v-tab-item key='0' value="tab-0">
            <v-card flat>
              <v-card-title primary-title>
                <h2 class="display-2">{{products[0]}}</h2>
              </v-card-title>
              <v-card-text>
                <v-img :src="require('@/assets/images/products/UX-D160S.png')"></v-img>

                <h3 class="headline mb-4">日立独创的“溶剂低消耗系统”，显著降低客户的运行成本</h3>
                <p>
                墨盒式设计，墨水及溶剂更换更方便，避免脏手和墨水遗漏。<br>
                日立先进技术制造的“溶剂低消耗系统”通过对墨水回路和设备温度的控制，有效减少耗材挥发，在控制耗材用量方面处于业内顶尖地位。
                </p>
                <v-img :src="require('@/assets/images/products/ux-d160s_p1.png')" class="mb-3" contain></v-img>

                <p class="caption mb-3">* 和日立现有的设备相比，在相同条件下，UX-B和UX-D的溶剂挥发量减少30% （墨水：1067K，温度：20℃）</p>

                <v-container>
                  <v-img :src="require('@/assets/images/products/ux-d160s_p2.png')" class="mb-3" contain></v-img>
                </v-container>

                <v-container>
                  <v-btn depressed block dark large href="http://www.hitachi.com.cn" :color="$store.state.mainColor">
                    <span class="text-capitalize">了解更多</span>
                  </v-btn>
                </v-container>
              </v-card-text>
            </v-card>
          </v-tab-item>
          <v-tab-item key='1' value="tab-1">
            <v-card flat>
              <v-card-title primary-title>
                <h2 class="display-2">{{products[1]}}</h2>
              </v-card-title>
              <v-card-text>
                <v-img :src="require('@/assets/images/products/UX-D860S.png')"></v-img>
                
                <h3 class="headline mb-4">高速，多行喷印（最多8行）、最大64点阵，90°旋转喷印（竖向喷印），满足不同喷印需求</h3>
                
                <ul class="mb-4 list-style-sq">
                  <li>可同时喷印行数达到8行。日立独有的喷印调节方式，即使多行印刷也可以确保清晰美观</li>
                  <li>单个喷头32点阵，最大可达64点阵印刷。适用于钢板建材上的大文字印刷，并可对文字标识等进行自由编辑。</li>
                  <li>喷印方向可进行90°旋转调节，最多可喷印12文字。</li>
                  <li>搭载双喷嘴，将印刷速度提高一倍*1。</li>
                </ul>

                <p class="caption mb-3">*1 和我司单喷嘴机型（UX-D660J）对比</p>

                <v-container>
                  <v-img :src="require('@/assets/images/products/ux-d860s_p1.png')" class="mb-3" contain></v-img>
                </v-container>
                
                <v-container>
                  <v-btn depressed block dark large href="http://www.hitachi.com.cn" :color="$store.state.mainColor">
                    <span class="text-capitalize">了解更多</span>
                  </v-btn>
                </v-container>
              </v-card-text>
            </v-card>
          </v-tab-item>
          <v-tab-item key='2' value="tab-2">
            <v-card flat>
              <v-card-title primary-title>
                <h2 class="display-2">{{products[2]}}</h2>
              </v-card-title>
              <v-card-text>
                <v-img :src="require('@/assets/images/products/UX-D110S.png')"></v-img>
                
                <ul class="mb-4 list-style-sq">
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
                  <v-flex xs6 class="imgList">
                    <v-img :src="require(`@/assets/images/products/ux-d110s_p1.jpg`)"></v-img>
                    在化妆品外盒上印字
                  </v-flex>
                  <v-flex xs6 class="imgList">
                    <v-img :src="require(`@/assets/images/products/ux-d110s_p2.jpg`)"></v-img>
                    在瓶子、玻璃表面印字
                  </v-flex>
                  <v-flex xs6 class="imgList">
                    <v-img :src="require(`@/assets/images/products/ux-d110s_p3.jpg`)"></v-img>
                    在光滑的电子主板上印字
                  </v-flex>
                  <v-flex xs6 class="imgList">
                    <v-img :src="require(`@/assets/images/products/ux-d110s_p4.jpg`)"></v-img>
                    在CD·DVD等光盘上印字
                  </v-flex>
                  <v-flex xs6 class="imgList">
                    <v-img :src="require(`@/assets/images/products/ux-d110s_p5.jpg`)"></v-img>
                  </v-flex>
                  <v-flex xs6 class="imgList">
                    <v-img :src="require(`@/assets/images/products/ux-d110s_p6.jpg`)"></v-img>
                  </v-flex>
                </v-layout>
                
                <v-container>
                  <v-btn depressed block dark large href="http://www.hitachi.com.cn" :color="$store.state.mainColor">
                    <span class="text-capitalize">了解更多</span>
                  </v-btn>
                </v-container>

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