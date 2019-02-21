<template>
  <div>
    <headerBar>出展产品</headerBar>

    <v-content id="productList">

      <v-container fluid>
        <v-subheader>出展产品一览</v-subheader>
        <v-list v-for="(i,index) in navList" :key="index">

          <v-list-tile ripple avatar @click="showProduct(`${i.link}`)">
            <v-list-tile-avatar>
                <img v-if="i.avatar" :src="require(`@/assets/images/products${i.avatar}`)">
            </v-list-tile-avatar>
            <v-list-tile-content>
              <h2>{{i.title}}</h2>
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
.v-avatar img {
  border-radius: 0;
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
      navList: [
        {
          title: '喷码机',
          link: '/product/printer/',
          avatar: '/printer/printer_s.png'
        },{
          title: '检测机',
          link: '/product/detecter/',
          avatar: '/detecter/detecter_s.png'
        },{
          title: '激光机',
          link: '/product/laser/',
          avatar: '/laser/laser_s.png'
        },{
          title: '空压机',
          link: '/product/ac/',
          avatar: '/ac/ac_s.png'
        }
      ]
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