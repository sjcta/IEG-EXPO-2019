<template>
  <div>
    <headerBar>{{currentPrd}}</headerBar>

    <v-content id="productList">
      
      <v-tabs fixed-tabs slider-color="pink" color="pink lighten-5" v-model="tabs">
          <v-tab v-for="(i,index) in products" :key="index" :href="`#tab-${index}`">{{i}}</v-tab>
      </v-tabs>
      
      <v-container fluid>

        <v-tabs-items v-model="tabs">
          <v-tab-item key='0' value="tab-0">
            <v-card flat>
              <v-card-title primary-title>
                <h2 class="display-2">{{products[0]}}</h2>
              </v-card-title>
              <v-card-text>
                <h3 class="headline mb-4">日立独创的“溶剂低消耗系统”，显著降低客户的运行成本</h3>
                <p>
                墨盒式设计，墨水及溶剂更换更方便，避免脏手和墨水遗漏。<br>
                日立先进技术制造的“溶剂低消耗系统”通过对墨水回路和设备温度的控制，有效减少耗材挥发，在控制耗材用量方面处于业内顶尖地位。
                </p>
                <v-img contain :src="require('../assets/images/products/ux-d160s_p1.png')" class="mb-3"></v-img>

                <p class="caption">* 和日立现有的设备相比，在相同条件下，UX-B和UX-D的溶剂挥发量减少30% （墨水：1067K，温度：20℃）</p>
              </v-card-text>
            </v-card>
          </v-tab-item>
          <v-tab-item key='1' value="tab-1">
            <v-card flat>
              <v-card-title primary-title>
                <h2>{{products[1]}}</h2>
              </v-card-title>
              <v-card-text>
                <h3>日立独创的“溶剂低消耗系统”，显著降低客户的运行成本</h3>
                <p>
                墨盒式设计，墨水及溶剂更换更方便，避免脏手和墨水遗漏<br>
                日立先进技术制造的“溶剂低消耗系统”通过对墨水回路和设备温度的控制，有效减少耗材挥发，在控制耗材用量方面处于业内顶尖地位。
                </p>
              </v-card-text>
            </v-card>
          </v-tab-item>
          <v-tab-item key='2' value="tab-2">
            <v-card flat>
              <v-card-title primary-title>
                <h2>{{products[2]}}</h2>
              </v-card-title>
              <v-card-text>

                <h3>日立独创的“溶剂低消耗系统”，显著降低客户的运行成本</h3>
                <p>
                墨盒式设计，墨水及溶剂更换更方便，避免脏手和墨水遗漏<br>
                日立先进技术制造的“溶剂低消耗系统”通过对墨水回路和设备温度的控制，有效减少耗材挥发，在控制耗材用量方面处于业内顶尖地位。
                </p>
              </v-card-text>
            </v-card>
          </v-tab-item>
        </v-tabs-items>
      </v-container>
    </v-content>
  </div>
</template>

<style scoped>
.v-card {
    margin: 20px 0;
}
.v-image {
    padding: 5px;
    background-size: 60%;
}
.v-list{
    border-bottom: 1px solid #ccc;
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
        tabs: null,
        currentPrd: "UX-D160S",
        products: ['UX-D160S','UX-D860S','UX-D110S']
    }
  },
  computed: {
  },
  methods: {
  }
};
</script>