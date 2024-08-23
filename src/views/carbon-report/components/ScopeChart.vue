<script setup lang="ts">
  const chartOption = {
    legend: {
      // left: 'center',
      // data: ['纯文本', '图文类', '视频类'],
      // bottom: 0,
      // icon: 'circle',
      // itemWidth: 8,
      // textStyle: {
      //   color: isDark ? 'rgba(255, 255, 255, 0.7)' : '#4E5969'
      // },
      // itemStyle: {
      //   borderWidth: 0
      // },
      show: false
    },
    tooltip: {
      show: true,
      trigger: 'item'
    },
    // 图形中心的内容文本
    // graphic: {
    //   elements: [
    //     {
    //       type: 'text',
    //       left: 'center',
    //       top: '40%',
    //       style: {
    //         text: '内容量',
    //         textAlign: 'center',
    //         fill: isDark ? '#ffffffb3' : '#4E5969',
    //         fontSize: 14
    //       }
    //     },
    //     {
    //       type: 'text',
    //       left: 'center',
    //       top: '50%',
    //       style: {
    //         text: '928,531',
    //         textAlign: 'center',
    //         fill: isDark ? '#ffffffb3' : '#1D2129',
    //         fontSize: 16,
    //         fontWeight: 500
    //       }
    //     }
    //   ]
    // },
    series: [
      {
        type: 'pie',
        radius: ['60%', '90%'],
        center: ['50%', '50%'],
        label: {
          // formatter: '{d}%',
          // fontSize: 14,
          // color: isDark ? 'rgba(255, 255, 255, 0.7)' : '#4E5969',
          show: false
        },
        itemStyle: {
          // borderColor: isDark ? '#232324' : '#fff',
          // borderWidth: 1
        },
        data: [
          {
            value: [148564],
            name: '纯文本',
            itemStyle: {
              color: '#5caaff'
            }
          },
          {
            value: [334271],
            name: '图文类',
            itemStyle: {
              color: '#4ed692'
            }
          },
          {
            value: [445694],
            name: '视频类',
            itemStyle: {
              color: '#ffb461'
            }
          }
        ]
      }
    ]
  };
</script>

<template>
  <Chart height="200px" :option="chartOption" />
</template>
