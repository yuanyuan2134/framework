/* 商品转换图表 */
<script type='es6'>
import chartBase from "./ChartBase";
export default {
  name: "goodsConvertChart",
  extends: chartBase,
  data() {
    return {};
  },
  methods: {
    //设置图表数据项
    makeOption(data) {
      const category = data.category;
      const legend = data.legend;
      const xAxis = data.xAxis;
      const series = [];
      for(let i=0;i<data.legend.length; i++){
        series.push({
          name: legend[i],
          type: "line",
          data: data.datas[i],
          symbol: "circle",
          symbolSize: 10
          // smooth:true
        })
      };

      this.option = {
        title: {
          text: this.chartTitle,
          show: false
        },
        tooltip: {
          trigger: "axis",
          padding: 10,
          formatter:function(data){
             var result = `${category}: ${data[0].name}<br>`;
                 for(var i=0;i<data.length;i++) {
                     result += `${data[i].seriesName}: ${data[i].value}<br>`;
                 } 
              return result;
          }
        },
        legend: {
          data: legend,
          icon: "rect",
          itemWidth: 10, // 设置宽度
          itemHeight: 10, // 设置高度
          bottom: 0,
          left: 40
        },
        grid: {
          left: "3%",
          right: "4%",
          // bottom: '10%',
          // top:'10%',
          containLabel: true
        },
        // toolbox: {
        //     feature: {
        //         saveAsImage: {}
        //     }
        // },
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: xAxis,
          axisLine: {
            lineStyle: {
              color: "rgb(217,217,217)"
            }
          },
          axisLabel: {
            color: "#000"
          }
        },
        yAxis: {
          type: "value",
          axisTick: {
            show: false
          },
          axisLine: {
            show: false
          }
        },
        color: this.colorList,
        series: series
      };
    }
  },
  components: {}
};
</script>
