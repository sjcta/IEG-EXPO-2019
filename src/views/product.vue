<template>
  <div>
    <headerBar>出展产品</headerBar>

    <v-content id="productList">

      <v-container fluid>
        <v-list>
          <v-subheader>出展产品一览</v-subheader>

          <v-list-tile ripple @click="showProduct('/product/printer/')">
            <v-list-tile-content>
              <h2>喷码机</h2>
            </v-list-tile-content>
            <v-list-tile-action>
              <v-icon :color="$store.state.mainColor">arrow_forward_ios</v-icon>
            </v-list-tile-action>
          </v-list-tile>
        </v-list>
        
        <v-list>
          <v-list-tile ripple @click="showProduct('/product/detecter/')">
            <v-list-tile-content>
              <h2>检测机</h2>
            </v-list-tile-content>
            <v-list-tile-action>
              <v-icon :color="$store.state.mainColor">arrow_forward_ios</v-icon>
            </v-list-tile-action>
          </v-list-tile>
        </v-list>
        
        <v-list>
          <v-list-tile ripple @click="showProduct('/product/laser/')">
            <v-list-tile-content>
              <h2>激光机</h2>
            </v-list-tile-content>
            <v-list-tile-action>
              <v-icon :color="$store.state.mainColor">arrow_forward_ios</v-icon>
            </v-list-tile-action>
          </v-list-tile>
        </v-list>
        
        <v-list>
          <v-list-tile ripple @click="showProduct('/product/ac/')">
            <v-list-tile-content>
              <h2>空压机</h2>
            </v-list-tile-content>
            <v-list-tile-action>
              <v-icon :color="$store.state.mainColor">arrow_forward_ios</v-icon>
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
    showProduct (prd) {

      this.$router.push(prd)
    }
  }
};
</script>