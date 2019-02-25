<template>
  <div>
    <headerBar>联系我们</headerBar>

    <v-content id="contact">
      <v-container fluid>
          <h2 class="mb-4">联络窗口</h2>

          <v-layout row wrap class="mb-4">
            <v-flex xs12>
                <v-card  :color="$store.state.mainColor + ' lighten-5'">
                <v-card-title primary-title>
                    <div>
                    <div class="headline mb-3">徐 少栋</div>
                    <h3>日立产机系统（中国）有限公司</h3>
                    
                    <p>中国 上海市 茂名南路205号 瑞金大厦2201室</p>
                    <ul>
                        <li>
                            <a href="tel:02154892378" class="text-lowercase text-sm-left">
                                <v-icon small left>phone</v-icon>  (86)-21-5489-2378 转 7018
                            </a>
                        </li>
                        
                        <li>
                            <v-icon small left>print</v-icon>  (86)-21-3356-5070
                        </li>
                        <li>
                            <a href="mailto:sdxu@hitachi-iec.cn" class="text-lowercase text-sm-left">
                               <v-icon small left>mail</v-icon> sdxu@hitachi-iec.cn
                            </a>
                        </li>
                    </ul>
                    </div>
                </v-card-title>
                </v-card>
            </v-flex>
          </v-layout>
      </v-container>
    </v-content>
  </div>
</template>

<style scoped>
#contact ul {
    padding: 0;
}
#contact ul li {
    margin-bottom: 5px;
    list-style: none;
}
#contact ul li a {
    text-decoration: none;
    line-height: 1.4;
    color: #333;
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