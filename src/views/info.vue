<template>
  <div>
    <headerBar>展位信息</headerBar>

    <v-content id="info">
      <v-container fluid>
          <h2 class="mb-4">第100届全国糖酒商品交易会展馆<br />日立产机系统展台示意图</h2>

          <h3>中国西部国际博览城<br/>
          四川省成都市天府新区福州路东段88号
          </h3>

          <v-layout row wrap class="mb-4 mt-4">
               <h3>2号馆</h3>
               <v-flex xs12 class="mb-4 mt-4">
                    <v-img :src="require(`@/assets/images/info/map1.jpg`)"></v-img>
               </v-flex>

               
               <h3>日立产机系统展台位置：D-049T</h3>
               <v-flex xs6 offset-xs3 class="mb-4 mt-4">
                    <v-img :src="require(`@/assets/images/info/map2.png`)"></v-img>
               </v-flex>
          </v-layout>
      </v-container>
    </v-content>
  </div>
</template>

<style scoped>
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