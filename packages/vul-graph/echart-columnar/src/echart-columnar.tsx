/*
 * @Author: sifengyuan
 * @Date: 2022-07-24 21:45:46
 * @LastEditors: sifengyuan
 * @LastEditTime: 2022-07-24 22:26:32
 * @FilePath: /vultures/packages/vul-graph/echart-columnar/src/echart-columnar.tsx
 * @Description: update here
 */
/*
 * @Author: sifengyuan
 * @Date: 2022-07-23 10:50:48
 * @LastEditors: sifengyuan
 * @LastEditTime: 2022-07-23 18:06:58
 * @FilePath: /iuUI/packages/button/src/button.tsx
 * @Description: update here
 */
import { defineComponent,ref,onMounted } from 'vue'
import * as echarts from 'echarts';

const option = {
  xAxis: {
    type: 'category',
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      data: [120, 200, 150, 80, 70, 110, 130],
      type: 'bar'
    }
  ]
};

export default defineComponent({
  name: 'VulEchartColumnar',
  setup() {
    const $narRef = ref()

    onMounted(() => {
      const narChart = echarts.init($narRef.value, 'dark');
      narChart.setOption(option);
    })
  
    return () => {
      return(
        <div style={{width:'100%',height:'100%'}}  ref={$narRef}></div>
      )
      
    }
  }
})
