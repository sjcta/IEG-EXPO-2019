<template>
  <div>
    <headerBar>喷码机</headerBar>

    <v-content id="productList">
      <v-container fluid class="group">
        <v-list dense>
          <v-list-tile ripple @click="showProduct('ux/0')">
            <v-list-tile-content>
              <h2>UX系列</h2>
            </v-list-tile-content>
            <v-list-tile-action>
              <v-icon :color="$store.state.mainColor">arrow_forward_ios</v-icon>
            </v-list-tile-action>
          </v-list-tile>
        </v-list>

        <v-layout row>
            <v-flex xs4 v-for="(i,index) in productUX" :key="index">
                <v-card flat @click="showProduct('ux/'+index)">
                    <v-img :src="require(`@/assets/images/products/printer/${i}.jpg`)" aspect-ratio="1">
                      <v-layout slot="placeholder" fill-height align-center justify-center ma-0>
                        <v-progress-circular indeterminate color="grey"></v-progress-circular>
                      </v-layout>
                    </v-img>
                    <v-card-text class="text-xs-center">
                      <v-btn block flat>{{i}}<v-icon :color="$store.state.mainColor" small dark>arrow_forward_ios</v-icon></v-btn>
                    </v-card-text>
                </v-card>
            </v-flex>
        </v-layout>
      </v-container>

      <v-container fluid>
        <v-list dense>
          <v-list-tile ripple @click="showProduct('g')">
            <v-list-tile-content>
              <h2>G系列</h2>
            </v-list-tile-content>
            <v-list-tile-action>
              <v-icon :color="$store.state.mainColor">arrow_forward_ios</v-icon>
            </v-list-tile-action>
          </v-list-tile>
        </v-list>

        <v-layout row>
            <v-flex xs4>
                <v-card flat @click="showProduct('g')">
                    <v-img :src="require('@/assets/images/products/printer/g.png')"></v-img>
                    <v-card-text class="text-xs-center">
                      <v-btn block flat>G系列<v-icon :color="$store.state.mainColor" small dark>arrow_forward_ios</v-icon></v-btn>
                    </v-card-text>
                </v-card>
            </v-flex>
        </v-layout>
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
.v-card__actions {
  background-color: #FFF;
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
      productUX: ['UX-D160S','UX-D860S','UX-D110S']
    }
  },
  computed: {
  },
  methods: {
    showProduct (prd) {

      this.$router.push('/product/printer/' + prd + '/')
    }
  }
};
</script>