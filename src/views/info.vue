<template>
  <div>
    <headerBar>展位信息</headerBar>

    <v-content id="info">
      <v-container fluid>
          <h1>第100届全国糖酒商品交易会<br />展馆示意图</h1>

          <v-layout row wrap class="mb-4 mt-4">
               <v-flex xs12 class="mb-4">
                    <v-img :src="require(`@/assets/images/info/map1.jpg`)"></v-img>
               </v-flex>
               <v-flex xs6 offset-xs3>
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