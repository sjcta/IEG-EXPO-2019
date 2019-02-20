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
                <v-card flat @click="showProduct(0)">
                    <v-img :src="require('@/assets/images/products/UX-D160S.png')"></v-img>
                    <v-card-text class="text-xs-center">
                      <v-btn block flat>UX-D160S<v-icon color="pink" small dark>arrow_forward_ios</v-icon></v-btn>
                    </v-card-text>
                </v-card>
            </v-flex>
            <v-flex xs4>
                <v-card flat @click="showProduct(1)">
                    <v-img :src="require('@/assets/images/products/UX-D860S.png')"></v-img>
                    <v-card-text class="text-xs-center">
                      <v-btn block flat>UX-D860S<v-icon color="pink" small dark>arrow_forward_ios</v-icon></v-btn>
                    </v-card-text>
                </v-card>
            </v-flex>
            <v-flex xs4>
                <v-card flat @click="showProduct(2)">
                    <v-img :src="require('@/assets/images/products/UX-D110S.png')"></v-img>
                    <v-card-text class="text-xs-center">
                      <v-btn block flat>UX-D110S<v-icon color="pink" small dark>arrow_forward_ios</v-icon></v-btn>
                    </v-card-text>
                </v-card>
            </v-flex>
        </v-layout>
      </v-container>

      <v-container fluid>
        <v-list dense>
          <v-list-tile ripple>
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
    showProduct (id) {
      this.$router.push('/product/detail/' + id)
    }
  }
};
</script>