/*
 * @Author: sifengyuan
 * @Date: 2022-07-24 21:45:46
 * @LastEditors: sfy
 * @LastEditTime: 2023-04-23 23:15:19
 * @FilePath: /vultures-vue/packages/vul-graph/echart-columnar/src/echart-columnar.tsx
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
import { defineComponent, ref, onMounted } from 'vue'
import { mockData, transform } from './mockData'
import { register } from './services'
import G6 from '@antv/g6';

export default defineComponent({
  name: 'VulEchartColumnar',
  setup() {
    const $container = ref()

    onMounted(() => {
      const resData = transform()
      register()
      const width = $container.value.scrollWidth;
      const height = $container.value.scrollHeight || 500;
      console.log($container.value, '$container');

      const graph = new G6.Graph({
        container: $container.value,
        width,
        height,
        defaultNode: {
          type: 'sql',
        },
        defaultEdge: {
          type: 'polyline',
          style: {
            radius: 10,
            offset: 45,
            endArrow: true,
            lineWidth: 2,
            stroke: '#C2C8D5',
          },
        },
        nodeStateStyles: {
          selected: {
            stroke: '#d9d9d9',
            fill: '#5394ef',
          },
        },
        modes: {
          default: [
            'drag-canvas',
            'zoom-canvas',
            'click-select',
          ],
        },
        fitView: true,
      });

      graph.data(resData);
      graph.render();
    })

    return () => {
      return (
        <div style={{ width: '500px', height: '300px' }} ref={$container}></div>
      )

    }
  }
})
