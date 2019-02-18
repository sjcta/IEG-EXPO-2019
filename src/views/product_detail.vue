<template>
  <div>
    <headerBar>{{currentPrd}}</headerBar>

    <v-content id="productList">
        <v-tabs fixed-tabs slider-color="pink" color="pink lighten-5">
            <v-tab @click="currentPrd='UX-D160S'">UX-D160S</v-tab>
            <v-tab @click="currentPrd='UX-D860S'">UX-D860S</v-tab>
            <v-tab @click="currentPrd='UX-D110S'">UX-D110S</v-tab>
        </v-tabs>

      <v-container fluid class="group">
        <v-list dense>
          <v-list-tile ripple>
            <v-list-tile-content>
              <h2>UX-D160S</h2>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>

        <v-layout row>
            <v-flex xs4>
                <v-card flat>
                    <v-img :src="require('../assets/images/products/UX-D160S.png')"></v-img>
                    <v-card-text class="text-xs-center">UX-D160S</v-card-text>
                </v-card>
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
        currentPrd: "UX-D160S"
    }
  },
  computed: {
  },
  methods: {
  }
};
</script>