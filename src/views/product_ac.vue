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


                <v-container>
                  <v-img :src="require('@/assets/images/products/ac/ac_main.png')" class="mb-3" contain>
                    <v-layout slot="placeholder" fill-height align-center justify-center ma-0>
                      <v-progress-circular indeterminate color="grey"></v-progress-circular>
                    </v-layout>
                  </v-img>
                </v-container>

              </v-card-text>
            </v-card>
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