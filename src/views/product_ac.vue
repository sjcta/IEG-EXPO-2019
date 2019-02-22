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

                <h3 class="headline mb-4">IPC控制 (终端压力预测控制)</h3>

                <p>根据用气量预测到终端的压力，降低低负载运行时压缩机的出口压力，减少电力消耗。</p>

                <p class="text-xs-right"><v-chip color="primary" text-color="white" small>
                  日本专利号：JP4425768
                </v-chip></p>
                

                <h3 class="headline mt-4">充实的IT通信功能</h3>

                <v-container class="px-0">
                  <h4 class="subheading font-weight-bold grey lighten-4 pa-1 mb-2">数据可记录到USB存储器上</h4>

                  <ul class="grey--text text--darken-1">
                    <li>请客户自行准备5.5cm以下的USB存储器。</li>
                    <li>每天的运行数据量约为400KB（参考值）。</li>
                  </ul>
                </v-container>

                <v-container class="px-0 pt-0">
                  <h4 class="subheading font-weight-bold grey lighten-4 pa-1 my-2">经由 Bluetooth<sup>&copy;</sup> 的网络服务器功能</h4>

                  <ul class="grey--text text--darken-1">
                    <li>Bluetooth<sup>&copy;</sup> 及USB加密狗由客户自备。</li>
                    <li>对应部分的设定变更项目。</li>
                  </ul>

                </v-container>

                <v-container class="px-0 pt-0">
                  <h4 class="subheading font-weight-bold grey lighten-4 pa-1 my-2">Modbus<sup>&copy;</sup> 通信对应</h4>
                  <p>标准配置支持串列通信的Modbus<sup>&copy;</sup>/RTU。</p>
                  <ul class="grey--text text--darken-1">
                    <li>Modbus<sup>&copy;</sup>/TCP的通信支持为选件。</li>
                  </ul>
                </v-container>

                
                <p class="caption my-3">* Bluetooth 是美国Bluetooth SIG,Inc. 的注册商标。<br />
* Modbus 是Schneider Automation Inc. 的注册商标。</p>

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