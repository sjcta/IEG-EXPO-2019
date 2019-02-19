<template>
  <div>
    <headerBar>{{currentPrd}}</headerBar>

    <v-content id="productList">
      
      <v-tabs fixed-tabs slider-color="pink" color="pink lighten-5" v-model="tabs">
          <v-tab v-for="(i,index) in products" :key="index" :href="`#tab-${index}`">{{i.name}}</v-tab>
      </v-tabs>
      
      <v-container fluid>

        <v-tabs-items v-model="tabs">
          <v-tab-item v-for="(i,index) in products" :key='index' :value="`tab-${index}`">
            <v-card flat>
              <h2>{{i.name}}</h2>
              <v-card-text>{{i.text}}</v-card-text>
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
        products: [
          {
            name: 'UX-D160S',
            text: 'abc'
          },{
            name: 'UX-D860S',
            text: 'abcdef'
          },{
            name: 'UX-D110S',
            text: '123123123'
          }
        ]
    }
  },
  computed: {
  },
  methods: {
  }
};
</script>