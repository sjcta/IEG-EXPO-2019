<template>
    <v-toolbar app dark tabs fixed color='pink'>
        <v-btn flat @click="back">
          <v-icon large>chevron_left</v-icon>返回
        </v-btn>
        <v-toolbar-title class="title text-uppercase">
          <span class="text-xs-center"><slot></slot></span>
        </v-toolbar-title>
        <v-btn flat>
          <v-icon>more_vert</v-icon>
        </v-btn>
        <slot name="extension"></slot>
    </v-toolbar>
</template>

<style scoped>

.v-toolbar {
  padding: 0;
}
  .v-btn {
    padding: 0;
  }
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
    back () { this.$router.back(-1) }
  }
}
</script>
