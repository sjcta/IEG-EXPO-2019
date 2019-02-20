<template>
    <v-toolbar app dark tabs fixed :color='$store.state.mainColor'>
        <v-btn right flat @click="back">
          <v-icon>arrow_back_ios</v-icon>
        </v-btn>
        <v-toolbar-title class="title text-uppercase">
          <span class="text-xs-center"><slot></slot></span>
        </v-toolbar-title>

        <v-btn left flat @click="home">
          <v-icon>home</v-icon>
        </v-btn>
        <slot name="extension"></slot>
    </v-toolbar>
</template>

<style scoped>
.title {
  width: 100%;
  text-align: center;
  margin-left: 0;
}
</style>

<script>
export default {
  data () {
    return {
    }
  },
  methods: {
    back () { this.$router.back(-1) },
    home () { this.$router.push('/') }
  }
}
</script>
