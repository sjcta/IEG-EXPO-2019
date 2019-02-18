<template>
  <div>
    <headerBar v-on:childLang = "$emit('changeLang')">{{ $vuetify.t('$vuetify.index.agenda') }}</headerBar>

    <v-content id="agendaPage">
      <v-container fluid>
        <v-list dense class="elevation-5">
          <div class="line"></div>

          <div class="agendaPart">
            <div class="timeFrom">
              <p>9:30~</p>
            </div>
            <div class="contents grey lighten-3 text-xs-center align-center">
              <p v-html="$vuetify.t('$vuetify.agenda.steps.start')"></p>
            </div>
          </div>
          <div class="agendaPart">
            <div class="timeFrom">
              <p>10:00~</p>
            </div>
            <div class="btn lighten-4 align-center">
              <v-btn block color="blue" outline to="/panel"><span v-html="$vuetify.t('$vuetify.agenda.steps.poster')"></span><v-icon right>chevron_right</v-icon></v-btn>
            </div>
          </div>
          <div class="agendaPart">
            <div class="timeFrom">
              <p>12:00~</p>
            </div>
            <div class="contents grey lighten-3 text-xs-center align-center">
              <p v-html="$vuetify.t('$vuetify.agenda.steps.lunch')"></p>
            </div>
          </div>


          <!-- <div v-for="(item, index) in agendaA" :key="'partA' + index" class="agendaPart">
            <div class="timeFrom">
              <p>{{ item.time }}</p>
            </div>

            <div class="contents" :class="item.class">
              <p v-html="$vuetify.t(item.theme)"></p>
              <v-btn icon ripple v-if="item.to">
                <v-icon color="lighten-2">chevron_right</v-icon>
              </v-btn>
            </div>
          </div> -->
          
          <div v-for="(item, index) in agendaB" :key="'partB' + index" class="agendaPart part2">
            <div class="timeFrom">
              <p v-if="item.time">{{ item.time }}</p>
            </div>

            <div :class="{'subtitle blue white--text': !item.ppl, 'contents blue--text': item.ppl}">
              <p v-html="$vuetify.t(item.theme)"></p>
              <span v-if="item.ppl" class="font-italic" v-html="$vuetify.t(item.ppl)"></span>
            </div>
          </div>

          <div class="agendaPart">
            <div class="timeFrom">
              <p>18:30</p>
            </div>
            <div class="contents grey lighten-3 text-xs-center align-center">
              <p>{{ $vuetify.t('$vuetify.lunchDinner.dinner') }}<br />({{ $vuetify.t('$vuetify.lunchDinner.dinnerLocal') }})</p>
            </div>
          </div>

        </v-list>
      </v-container>
    </v-content>
  </div>
</template>

<style scoped>
#agendaPage {
  margin-bottom: 30px;
}
.line {
  position: absolute;
  left: 45px;
  border-left: 2px solid #eee;
  top: 30px;
  bottom: 30px;
  z-index: 1;
}
.v-list {
    padding: 10px;
}

.agendaPart {
  display: flex;
  flex-wrap: nowrap;
  margin-bottom: 10px;
  z-index: 10;
}
.agendaPart .timeFrom {
  position: relative;
  width: 50px;
  margin-right: 10px;
  z-index: 10;
}
.agendaPart .timeFrom p {
  padding: 5px 0;
  background: #FFF;
  text-align: center;
  font-size: 10px;
}
.agendaPart .v-list--dense {
  height: auto;
}

.agendaPart .contents {
  display: flex;
  width: 100%;
  flex-direction: row;
}
.agendaPart .btn {
  width: 100%;
  height: auto;
  margin: 0;
}
.agendaPart .btn a {
  height: 50px;
  padding: 0;
}
.agendaPart button span {
  width: 100%;
}
.agendaPart button .v-icon {
  margin-left: 0;
}

.agendaPart .contents p {
  justify-content: flex-start;
  align-content: flex-start;
  align-items: stretch;
  margin: 0;
  padding: 5px;
  text-align: center;
  width: 100%;
  font-size: 12px;
}
.agendaPart .contents .v-btn {
  justify-content: flex-end;
  align-content: flex-end;
  align-items: stretch;
  min-width: 30px;
  margin: 0;
}
.agendaPart.part2 .contents {
  flex-direction: column;
}
.agendaPart.part2 .contents p {
  text-align: left;
  font-size: 14px;
  padding: 5px;
}
.agendaPart.part2 .contents span {
  color: #999;
  font-size: 11px;
  padding: 0 5px;
  line-height: 1.2;
}
.agendaPart.part2 .subtitle {
  width: 100%;
  margin-top: 10px;
  font-size: 12px;
  border-radius: 15px;
  -moz-outline-radius: 15px;
}
.agendaPart.part2 .subtitle p {
  padding: 5px;
  margin: 0 5px;
  text-align: center;
  padding: 4px;
  line-height: 1.1;
}

</style>

<script>
import headerBar from '../components/headerBar.vue'

export default {
  name: 'agendaPage',
  components: {
    headerBar
  },
  data () {
    return {
      agendaA: [
        {
          time: '9:30~',
          theme: '$vuetify.agenda.steps.start',
          class: 'grey lighten-3 text-xs-center align-center'
        },
        {
          time: '10:00~',
          theme: '$vuetify.agenda.steps.poster',
          class: 'blue lighten-4 align-center',
          to: '/panel'
        },
        {
          time: '12:00~',
          theme: '$vuetify.agenda.steps.lunch',
          class: 'grey lighten-3 text-xs-center align-center'
        }
      ],
      agendaB: [
        {
          time: '13:30~',
          theme: '$vuetify.agenda.present.part1.theme',
          ppl: '$vuetify.agenda.present.part1.name'
        },
        {
          time: '',
          theme: '$vuetify.agenda.present.part2.theme',
          ppl: ''
        },
        {
          time: '13:40~',
          theme: '$vuetify.agenda.present.part3.theme',
          ppl: '$vuetify.agenda.present.part3.name'
        },
        {
          time: '13:55~',
          theme: '$vuetify.agenda.present.part4.theme',
          ppl: '$vuetify.agenda.present.part4.name'
        },
        {
          time: '',
          theme: '$vuetify.agenda.present.part5.theme',
          ppl: ''
        },
        {
          time: '14:10~',
          theme: '$vuetify.agenda.present.part6.theme',
          ppl: '$vuetify.agenda.present.part6.name'
        },
        {
          time: '14:30~',
          theme: '$vuetify.agenda.present.part7.theme',
          ppl: '$vuetify.agenda.present.part7.name'
        },
        {
          time: '15:00~',
          theme: '$vuetify.agenda.present.part8.theme',
          ppl: '$vuetify.agenda.present.part8.name'
        },
        {
          time: '15:25~',
          theme: '$vuetify.agenda.present.part9.theme',
          ppl: '$vuetify.agenda.present.part9.name'
        },
        {
          time: '',
          theme: '$vuetify.agenda.present.part10.theme',
          ppl: ''
        },
        {
          time: '16:15~',
          theme: '$vuetify.agenda.present.part11.theme',
          ppl: '$vuetify.agenda.present.part11.name'
        },
        {
          time: '',
          theme: '$vuetify.agenda.present.part12.theme',
          ppl: '$vuetify.agenda.present.part12.name'
        },
        {
          time: '17:50~',
          theme: '$vuetify.agenda.present.part13.theme',
          ppl: '$vuetify.agenda.present.part13.name'
        },
      ]
    }
  },
  methods: {
  }
}
</script>
