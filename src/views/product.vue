<template>
  <div>
    <headerBar>出展产品</headerBar>

    <v-content id="productList">
      <v-container fluid class="group">
        <v-list dense>
          <v-list-tile ripple>
            <v-list-tile-content>
              <h2>UX系列</h2>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>

        <v-layout row>
            <v-flex xs4>
              <router-link to="/product/detail">
                <v-card flat>
                    <v-img :src="require('../assets/images/products/UX-D160S.png')"></v-img>
                    <v-card-text class="text-xs-center">UX-D160S</v-card-text>
                </v-card>
              </router-link>
            </v-flex>
            <v-flex xs4>
                <v-card flat>
                    <v-img :src="require('../assets/images/products/UX-D860S.png')"></v-img>
                    <v-card-text class="text-xs-center">UX-D860S</v-card-text>
                </v-card>
            </v-flex>
            <v-flex xs4>
                <v-card flat>
                    <v-img :src="require('../assets/images/products/UX-D110S.png')"></v-img>
                    <v-card-text class="text-xs-center">UX-D110S</v-card-text>
                </v-card>
            </v-flex>
        </v-layout>
      </v-container>

      <v-container fluid>
        <v-list dense>
          <v-list-tile ripple @click="">
            <v-list-tile-content>
              <h2>G系列</h2>
            </v-list-tile-content>
            <v-list-tile-action>
              <v-icon>arrow_forward_ios</v-icon>
            </v-list-tile-action>
          </v-list-tile>
        </v-list>

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
    }
  },
  computed: {
  },
  methods: {

  }
};
</script>