/*
 * @Author: sfy
 * @Date: 2023-04-23 22:34:32
 * @LastEditors: sfy
 * @LastEditTime: 2023-04-23 22:34:33
 * @FilePath: /vultures-vue/packages/vul-graph/echart-columnar/src/services.ts
 * @Description: update here
 */


import G6 from '@antv/g6';
export const register = () => {

  G6.registerNode(
    'sql',
    {
      drawShape(cfg, group) {
        const rect = group.addShape('rect', {
          attrs: {
            x: -75,
            y: -25,
            width: 150,
            height: 50,
            radius: 10,
            stroke: '#5B8FF9',
            fill: '#C6E5FF',
            lineWidth: 3,
          },
          name: 'rect-shape',
        });
        if (cfg.name) {
          group.addShape('text', {
            attrs: {
              text: cfg.name,
              x: 0,
              y: 0,
              fill: '#00287E',
              fontSize: 14,
              textAlign: 'center',
              textBaseline: 'middle',
              fontWeight: 'bold',
            },
            name: 'text-shape',
          });
        }
        return rect;
      },
    },
    'single-node',
  );
}
