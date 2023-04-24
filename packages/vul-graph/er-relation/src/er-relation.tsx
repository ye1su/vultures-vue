/*
 * @Author: sfy
 * @Date: 2023-04-22 09:34:55
 * @LastEditors: sfy
 * @LastEditTime: 2023-04-22 17:17:06
 * @FilePath: /vultures-vue/packages/vul-graph/er-relation/src/er-relation.tsx
 * @Description: update here
 */
import { defineComponent, ref, onMounted } from 'vue'
import { behavior, register,  } from './service'
import { dataTransform } from './data'
import G6 from '@antv/g6';

export default defineComponent({
  name: 'ER',
  setup() {
    const $narRef = ref()

    onMounted(() => {


      register()

      const container = $narRef.value;
      console.log(container, 'container');


      const width = container.scrollWidth
      const height = (container.scrollHeight || 500) - 20
      const graph = new G6.Graph({
        container,
        width,
        height,
        defaultNode: {
          size: [300, 200],
          type: 'dice-er-box',
          color: '#5B8FF9',
          style: {
            fill: '#9EC9FF',
            lineWidth: 3
          },
          labelCfg: {
            style: {
              fill: 'black',
              fontSize: 20
            }
          }
        },
        defaultEdge: {
          type: 'dice-er-edge',
          style: {
            stroke: '#e2e2e2',
            lineWidth: 4,
            endArrow: true
          }
        },
        modes: {
          default: ['drag-node', 'drag-canvas']
        },
        layout: {
          type: 'dagre',
          rankdir: 'LR',
          align: 'UL',
          controlPoints: true,
          nodesepFunc: () => 0.2,
          ranksepFunc: () => 0.5
        },
        animate: true,
        fitView: true
      })

      behavior(graph)
      
      console.log(dataTransform(), '========');
      
      graph.data(dataTransform())

      graph.render()
    })

    return () => {
      return (
        <div style={{ width: '800px', height: '400px' }} ref={$narRef}>
        </div>
      )
    }
  }
})
