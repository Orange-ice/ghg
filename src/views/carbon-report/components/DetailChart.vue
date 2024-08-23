<script setup lang="ts">
  /**
   * @description 详情预览 碳排放明细图表
   * */
  import { ToolTipFormatterParams } from '@/types/echarts';
  import { graphic } from 'echarts';
  import { ref } from 'vue';
  import { AnyObject } from '@/types/global';
  import { ContentDataRecord, queryContentData } from '@/api/dashboard';

  function graphicFactory(side: AnyObject) {
    return {
      type: 'text',
      bottom: '8',
      ...side,
      style: {
        text: '',
        textAlign: 'center',
        fill: '#4E5969',
        fontSize: 12
      }
    };
  }

  const xAxis = ref<string[]>([]);
  const chartsData = ref<number[]>([]);
  const graphicElements = ref([
    graphicFactory({ left: '2.6%' }),
    graphicFactory({ right: 0 })
  ]);
  const chartOption = {
    grid: {
      left: '5%',
      right: '0',
      top: '10',
      bottom: '30'
    },
    xAxis: {
      type: 'category',
      offset: 2,
      data: xAxis.value,
      // boundaryGap: false,
      // axisLabel: {
      //   color: '#4E5969',
      //   formatter(value: number, idx: number) {
      //     if (idx === 0) return '';
      //     if (idx === xAxis.value.length - 1) return '';
      //     return `${value}`;
      //   }
      // },
      axisLine: {
        show: false
      },
      axisTick: {
        show: false
      }
      // splitLine: {
      //   show: true,
      //   interval: (idx: number) => {
      //     if (idx === 0) return false;
      //     if (idx === xAxis.value.length - 1) return false;
      //     return true;
      //   },
      //   lineStyle: {
      //     color: '#E5E8EF'
      //   }
      // },
      // axisPointer: {
      //   show: true,
      //   lineStyle: {
      //     color: '#23ADFF',
      //     width: 2
      //   }
      // }
    },
    yAxis: {
      type: 'value',
      axisLine: {
        show: false
      }
      // axisLabel: {
      //   formatter(value: any, idx: number) {
      //     if (idx === 0) return value;
      //     return `${value}k`;
      //   }
      // },
      // splitLine: {
      //   show: true,
      //   lineStyle: {
      //     type: 'dashed',
      //     color: '#E5E8EF'
      //   }
      // }
    },
    tooltip: {},
    // graphic: {
    //   elements: graphicElements.value
    // },
    series: [
      {
        data: chartsData.value,
        type: 'bar',
        barWidth: 24, // 设置柱子宽度为 20
        itemStyle: {
          color: '#44BC80'
        }
        // emphasis: {
        //   focus: 'series',
        //   itemStyle: {
        //     borderWidth: 2
        //   }
        // }
      }
    ]
  };
  const fetchData = async () => {
    try {
      const { data: chartData } = await queryContentData();
      chartData.forEach((el: ContentDataRecord, idx: number) => {
        xAxis.value.push(el.x);
        chartsData.value.push(el.y);
        if (idx === 0) {
          graphicElements.value[0].style.text = el.x;
        }
        if (idx === chartData.length - 1) {
          graphicElements.value[1].style.text = el.x;
        }
      });
    } catch (err) {
      // you can report use errorHandler or other
    }
  };
  fetchData();
</script>

<template>
  <Chart height="299px" :option="chartOption" />
</template>
