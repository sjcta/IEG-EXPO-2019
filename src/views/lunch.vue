<template>
  <div>
    <headerBar v-on:childLang="$emit('changeLang')">{{ $vuetify.t('$vuetify.index.lunchDinner') }}</headerBar>

    <v-content id="panelList">
      <v-container fluid>
        <v-card color="white mb-4" class="lunch">
          <v-card-title primary-title>
            <div>
              <div class="headline white--text">{{ $vuetify.t('$vuetify.lunchDinner.lunch') }}</div>
              <span class=" white--text">12:00 - 13:30</span>
            </div>
          </v-card-title>
          <v-card-actions>
            <div class="d-flex"> 
              <v-icon large color="blue">location_on</v-icon>
              <span>{{ $vuetify.t('$vuetify.lunchDinner.lunchLocal') }}</span>
            </div>
          </v-card-actions>
        </v-card>

        <v-card color="white" class="dinner">
            <v-card-title primary-title>
              <div>
                <div class="headline white--text">{{ $vuetify.t('$vuetify.lunchDinner.dinner') }}</div>
                <span class=" white--text">18:30 ~ 20:00</span>
              </div>
            </v-card-title>
            
            <v-card-actions>
              <div class="d-flex"> 
                <v-icon large color="blue">location_on</v-icon>
                <span>{{ $vuetify.t('$vuetify.lunchDinner.dinnerLocal') }}</span>
              </div>
            </v-card-actions>

            <v-card-text class="py-0">
              <v-text-field v-model="guestName" clearable required :label="$vuetify.t('$vuetify.lunchDinner.fullname')" @keyup.enter="searchName"></v-text-field>
              <small class="grey--text" v-html="$vuetify.t('$vuetify.lunchDinner.sample')"></small>
            </v-card-text>
            
            <v-card-actions>
              <v-btn color="blue white--text" center block large @click="searchName">
                <v-icon left>event_seat</v-icon>{{ $vuetify.t('$vuetify.lunchDinner.find') }}
              </v-btn>
            </v-card-actions>
        </v-card>
        
        <v-dialog v-model="dialog" width="300">
          <v-card color="blue lighten-1" dark>
            <v-card-text class="display-1 text-xs-center py-5">
              <span v-text="searchResult"></span>
            </v-card-text>
          </v-card>
        </v-dialog>

      </v-container>
    </v-content>
  </div>
</template>

<style scoped>

.v-card__title {
  align-items: flex-start;
  height: 110px;
  padding-left: 50px;
}
.v-dialog .v-card__title {
  padding-left: 20px;
  height: auto;
}
.v-card.lunch .v-card__title {
  background: #FFF url('../assets/bg_lunch.png') no-repeat right top;
  background-size: 100% auto;
}
.v-card.dinner .v-card__title {
  background: #FFF url('../assets/bg_dinner.png') no-repeat right top;
  background-size: 100% auto;
}
.v-card__title div {
  width: 100%;
}
.v-card__actions {
  padding-bottom: 10px;
  justify-content:flex-start;
}
.v-card__actions .d-flex {
  justify-content: center;
  align-content: center;
  padding-left: 10px;
}
.v-card__actions span {
  line-height: 3;
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
      dialog: false,
      searchResult: '',
      guestName: '',
      tables: [
        {
          id: 'Table #1',
          name: ['鈴木正浩', '松岡秀佳', '野本正明', '小久保憲一', '金森秀人', '田辺史朗', '鈴木教洋', '小池麻子', '船木謙一', '鮫嶋茂稔'],
          ename: ['matsuoka hideka', 'nomoto masaaki', 'kokubo kenichi', 'kanamori hidehito', 'norihiro suzuki', 'tanabe shiro', 'koike asako', 'ishizuka asako', 'funaki kenichi', 'sameshima shigetoshi']
        }, 
        {
          id: 'Table #2',
          name: ['张煜', '陈木青', '罗露露', '马越鹏', '梁东明', '陈杨秋', '马军', '马元琛', '章一苇', '栾天'],
          ename: ['zhang yu', 'chen muqing', 'luo lulu', 'ma yuepeng', 'liang dongming', 'chen yangqiu', 'ma jun', 'ma yuanchen', 'zhang yiwei', 'luan tian']
        },
        {
          id: 'Table #3',
          name: ['鈴木友峰', '畑中長則', '木村雅彦', '马场健治', '森田歩', '矢川雄一', '山田真治', '赤津雅晴', '後藤康', '西澤格'],
          ename: ['suzuki tomomi', 'hatanaka takenori', 'masahiko kimura', 'baba kenji', 'morita ayumu', 'yagawa yuichi', 'yamada shinji', 'akatsu masaharu', 'goto yasushi', 'nishizawa itaru']
        },
        {
          id: 'Table #4',
          name: ['徳山健', '孟毅','安藤光浩','工藤真','真野宏之','中川路孝行','覃明','鈴木敦','湯田晋也','根岸伸幸'],
          ename: ['tokuyama takeshi', 'meng yi', 'andoh mitsuhiro', 'makoto kudo', 'mano hiroyuki', 'nakakawaji takayuki', 'qin ming', 'suzuki osamu', 'yuda shinya', 'negishi nobuyuki']
        },
        {
          id: 'Table #5',
          name: ['岩見健太郎','西正','鳥居和功','三輪俊晴','倉田英明','嶋本泰洋','山本政行','王晓虹','原田泰志','福山満由美'],
          ename: ['iwami kentaro', 'nishi masashi', 'kazuyoshi torii', 'miwa toshiharu', 'kurata hideaki', 'shimamoto yasuhiro', 'masayuki yamamoto', 'wang xiaohong', 'harada yasushi', 'mayumi fukuyama']
        },
        {
          id: 'Table #6',
          name: ['中垣亮','寺前俊哉','田中麻紀','藤原伸一','左滨','石川奉矛','北川央樹','王欣','平井千秋','何婷'],
          ename: ['nakagaki ryo',  'teramae toshiya', 'maki tanaka', 'fujiwara shinichi', 'zuo bin', 'ishikawa tomomu', 'kitagawa hiroki', 'wang xin', 'hirai chiaki', 'he ting']
        },
        {
          id: 'Table #7',
          name: ['石川晃','大土井智','池田尚司','長船辰昭','宫田辰彦','海藤賢一','福原照代','今井厚祐','関口隆昭','金城凌'],
          ename: ['ishikawa akira', 'satoshi odoi', 'ikeda hisashi', 'osafune tatsuaki', 'miyata tatsuhiko', 'kaito kenichi', 'fukuhara teruyo', 'imai kosuke', 'sekiguchi takaaki', 'kaneshiro ryo']
        },
        {
          id: 'Table #8',
          name: ['吹金原剛','佐々木欽也','傅子毅','内田牧男','宫崎邦彦','武田健一','吉田英恵','刘斯文','林晓列'],
          ename: ['fukimbara tsuyoshi', 'sasaki kinya', 'fu ziyi', 'uchida makio', 'miyazaki kunihiko', 'takeda kenichi', 'yoshida hanae', 'liu siwen', 'lin xiaoli']
        },
        {
          id: 'Table #9',
          name: ['郑萌','张杨','陈奕波','王怀安','刘逢春','单联柱','李媛','周绥健','耿璐','姜淼'],
          ename: ['zheng meng', 'zhang yang', 'chen yibo', 'wang huaian', 'liu fengchun', 'shan lianzhu', 'li yuan', 'zhou suijian', 'geng lu', 'jiang miao']
        },
        {
          id: 'Table #10',
          name: ['齋藤直','安部元幸','任保全','赖宁','田中努','岡田祥英','笹尾桂史','進藤雄介','张雪莹'],
          ename: ['saito nao', 'motoyuki abe', 'ren baoquan', 'lai ning', 'tanaka tsutomu', 'okada yoshihide', 'sasao keiji', 'shindo yusuke', 'zhang xueying']
        },
        {
          id: 'Table #11',
          name: ['朴勝煥','大沼寛','张学','赵幸锋','董強','彭文骏','孟祥賛','曾智嵘','刘锋','梁秋月'],
          ename: ['seunghwan park', 'onuma hiroshi', 'zhang xue', 'zhao xingfeng', 'dong qiang', 'peng wenjun', 'meng xiangzan', 'zeng zhirong', 'liu feng', 'liang qiuyue']
        },
        {
          id: 'Table #12',
          name: ['小林裕征','姚开鹏','苏银蕊','赖素红','裴雅超','叶琳','和波直樹','葛成娟','田中杰','王海凤'],
          ename: ['kobayashi hiroyuki', 'yao kaipeng', 'su yinrui', 'lai suhong', 'pei yachao', 'ye lin', 'wanami naoki', 'ge chengjuan', 'tian zhongjie', 'wang haifeng']
        },
        {
          id: 'Table #13',
          name: ['陈丽星','佐藤正輝','山本剛','武田幸子','渡辺直樹 ','张雪婷','罗蜀钰','史晓萌','车航宇'],
          ename: ['chen lixing', 'sato masateru', 'tsuyoshi yamamoto', 'yukiko takeda', 'watanabe naoki', 'zhang xueting', 'luo shuyu', 'shi xiaomeng', 'che hangyu']
        },
        {
          id: 'Table #14',
          name: ['褚钧时','张志霞','鲁时雨','王震山','张健','陈玉露','杨斯博','梁日昉','李岚'],
          ename: ['zhu junshi', 'zhang zhixia', 'lu shiyu', 'wang zhenshan', 'zhang jian', 'chen yulu', 'yang sibo', 'liang rifang', 'li lang']
        }
      ]
    }
  },
  computed: {
  },
  methods: {
    searchName: function () {
      var t = this;
      var _name = t.guestName.trim().toLowerCase();
      if(_name && _name != "") {
        t.searchResult = "";

        this.tables.forEach(table => {
          
            if(table.name.indexOf(_name)!=-1 || table.ename.indexOf(_name)!=-1) {
              t.searchResult = table.id; 
            }
        })

        if(t.searchResult == "") {
          t.searchResult = "T_T..."
        }

        t.dialog = true;
      }


    }
  }
};
</script>