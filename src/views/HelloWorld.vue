<template>
  <div class="hello">
    <h1>{{ msg }}</h1>

    <!-- element-ui框架使用demo -->
    <el-card>
      <h1>element-ui</h1>
      <el-row>
        <el-button>默认按钮</el-button>
        <el-button type="primary">主要按钮</el-button>
        <el-button type="success">成功按钮</el-button>
        <el-button type="info">信息按钮</el-button>
        <el-button type="warning">警告按钮</el-button>
        <el-button type="danger">危险按钮</el-button>
      </el-row>
    </el-card>

    <!-- 腾讯地图demo -->
    <el-card>
      <div class="map-demo">
        <div class="map1">
          <h1>腾讯地图1-天安门</h1>
          <demoMap1 :width="'600px'" :height="'300px'" :zoom="11" :center="[39.9046900000,116.4071700000]"></demoMap1>
        </div>
        <div class="map2">
          <h1>腾讯地图2-数码庄园</h1>
          <demoMap2 :width="'600px'" :height="'300px'" :zoom="15" :center="[39.7832100000,116.4994700000]"></demoMap2>
        </div>
      </div>
    </el-card>

    <!-- 取色器demo -->
    <el-card style="height: 380px;">
      <h1>取色器</h1>
      <colorPicker  v-model="color"></colorPicker >
    </el-card>

    <!-- 时间轴demo -->
    <el-card>
      <h1>时间轴</h1>
      <div style="width:700px;margin:0 auto;">
        <light-timeline :items="items">
          <template slot='tag' slot-scope='{ item }'>
            {{item.tag}}
          </template>
          <template slot='content' slot-scope='{ item }'>
            {{item.content}}, {{item.context}}
          </template>
        </light-timeline>
      </div>
    </el-card>

    <!-- 四级联动demo -->
    <el-card style="height:420px;">
      <h1>四级联动</h1>
      <area-select type='all' v-model='selected' :data='$pcaa' :level='3'></area-select>
      <p>{{selected}}</p>
      <area-cascader :level="2" :data='$pcaa' v-model='selected2'></area-cascader>
      <p>{{selected2}}</p>
    </el-card>

    <!-- 图表demo -->
    <el-card>
      <h1>图表</h1>
      <demoChart v-if="chartReady" :width="'900px'" :title="'测试图表'" style="margin: 0 auto;"></demoChart>
    </el-card>

  </div>
</template>

<script>
import utils from '@/utils';
import demoMap1 from '@/components/qqMap/demoMap1';
import demoMap2 from '@/components/qqMap/demoMap2';
import demoChart from '@/components/charts/demoChart';
export default {
  name: 'HelloWorld',
  components: {demoMap1, demoMap2, demoChart},
  data () {
    return {
      msg: '中企电商VUE框架',
      color: '#ff0000',
      items: [
        {
          tag: '2019-02-12',
          content: '测试内容测试内容测试内容测试内容测试内容测试内容'
        },
        {
          tag: '2019-02-13',
          type: 'circle',
          content: '练习内容练习内容练习内容练习内容练习内容练习内容练习内容'
        },
        {
          tag: '2019-02-18',
          content: '其他内容其他内容其他内容其他内容其他内容其他内容'
        }
      ],
      chartReady: false,
      selected: [],
      selected2: []
    }
  },
  created() {
    const _self = this;
    this.$api.orderList({}).then((response)=>{
      console.log(response);
    })
    .catch((error)=>{
      console.log(error);
    })

    setTimeout(()=>{
      _self.chartReady = true;
    },1000)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.hello{
      text-align: center;
}
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.el-card{
  margin-bottom:20px;
}
.line-container::after{
  left:1em;
}
</style>
