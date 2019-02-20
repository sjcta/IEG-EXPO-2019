<template>
  <div>
    <headerBar>空压机</headerBar>

    <v-content>
      
      <v-container fluid>

            <v-card flat>
              <v-card-title primary-title>
                <h2 class="display-2">空压机</h2>
              </v-card-title>
              <v-card-text>
working...
              </v-card-text>
            </v-card>

        <v-container>
            <v-btn depressed block dark large href="http://www.hitachi.com.cn" :color="$store.state.mainColor">
            <span class="text-capitalize">了解更多</span>
            </v-btn>
        </v-container>
      </v-container>
    </v-content>
  </div>
</template>

<style>
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