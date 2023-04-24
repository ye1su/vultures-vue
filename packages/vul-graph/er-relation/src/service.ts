/*
 * @Author: sfy
 * @Date: 2023-04-22 10:08:22
 * @LastEditors: sfy
 * @LastEditTime: 2023-04-22 22:54:08
 * @FilePath: /vultures-vue/packages/vul-graph/er-relation/src/service.ts
 * @Description: update here
 */
import G6, { Graph } from '@antv/g6';

export const register = () => {
  const { Util, registerBehavior, registerEdge, registerNode } = G6
  const itemHeight = 20
  registerEdge('dice-er-edge', {
    draw(cfg, group) {
      const edge = group.cfg.item
      const sourceNode = edge.getSource().getModel()
      const targetNode = edge.getTarget().getModel()

      const sourceIndex = sourceNode.attrs.findIndex(
        (e) => e.key === cfg.sourceKey
      )

      const sourceStartIndex = 0

      let sourceY = 15

      if (sourceIndex > sourceStartIndex - 1) {
        sourceY = 30 + (sourceIndex - sourceStartIndex + 0.5) * itemHeight
      }

      const targetIndex = targetNode.attrs.findIndex(
        (e) => e.key === cfg.targetKey
      )

      const targetStartIndex = 0

      let targetY = 15

      if (targetIndex > targetStartIndex - 1) {
        targetY = (targetIndex - targetStartIndex + 0.5) * itemHeight + 30
      }

      const startPoint = {
        ...cfg.startPoint
      }
      const endPoint = {
        ...cfg.endPoint
      }

      startPoint.y = startPoint.y + sourceY
      endPoint.y = endPoint.y + targetY

      let shape
      if (sourceNode.id !== targetNode.id) {
        shape = group.addShape('path', {
          attrs: {
            stroke: '#5B8FF9',
            path: [
              ['M', startPoint.x, startPoint.y],
              [
                'C',
                endPoint.x / 3 + (2 / 3) * startPoint.x,
                startPoint.y,
                endPoint.x / 3 + (2 / 3) * startPoint.x,
                endPoint.y,
                endPoint.x,
                endPoint.y
              ]
            ],
            endArrow: true
          },
          // must be assigned in G6 3.3 and later versions. it can be any string you want, but should be unique in a custom item type
          name: 'path-shape'
        })
      } else {
        let gap = Math.abs((startPoint.y - endPoint.y) / 3)
        if (startPoint['index'] === 1) {
          gap = -gap
        }
        shape = group.addShape('path', {
          attrs: {
            stroke: '#5B8FF9',
            path: [
              ['M', startPoint.x, startPoint.y],
              [
                'C',
                startPoint.x - gap,
                startPoint.y,
                startPoint.x - gap,
                endPoint.y,
                startPoint.x,
                endPoint.y
              ]
            ],
            endArrow: true
          },
          // must be assigned in G6 3.3 and later versions. it can be any string you want, but should be unique in a custom item type
          name: 'path-shape'
        })
      }

      return shape
    },
    afterDraw(cfg, group) {
      const labelCfg = cfg.labelCfg || {}
      const edge = group.cfg.item
      const sourceNode = edge.getSource().getModel()
      const targetNode = edge.getTarget().getModel()
      if (sourceNode.collapsed && targetNode.collapsed) {
        return
      }
      const path = group.find(
        (element) => element.get('name') === 'path-shape'
      )

      const labelStyle = Util.getLabelPosition(path, 0.5, 0, 0, true)
      const label = group.addShape('text', {
        attrs: {
          ...labelStyle,
          text: cfg.label || '',
          fill: '#000',
          textAlign: 'center',
          stroke: '#fff',
          lineWidth: 1
        }
      })
      label.rotateAtStart(labelStyle.rotate)
    }
  })

  registerNode('dice-er-box', {
    draw(cfg, group) {
      const width = 250

      const boxStyle = {
        stroke: '#096DD9',
        radius: 4
      }

      const {
        attrs = [],
        startIndex = 0,
        selectedIndex,
        collapsed,
        icon
      } = cfg
      const list: any[] = attrs as any[]
      const height = 30 + list.length * itemHeight
      console.log('list: ', list);

      const offsetY = (0.5 - (startIndex % 1)) * itemHeight + 30

      group.addShape('rect', {
        attrs: {
          fill: boxStyle.stroke,
          height: 30,
          width,
          radius: [boxStyle.radius, boxStyle.radius, 0, 0]
        },
        draggable: true
      })

      let fontLeft = 12

      if (icon && icon.show !== false) {
        group.addShape('image', {
          attrs: {
            x: 8,
            y: 8,
            height: 16,
            width: 16,
            ...icon
          }
        })
        fontLeft += 18
      }

      group.addShape('text', {
        attrs: {
          y: 22,
          x: fontLeft,
          fill: '#fff',
          text: cfg.label,
          fontSize: 12,
          fontWeight: 500
        }
      })


      const keyshape = group.addShape('rect', {
        attrs: {
          x: 0,
          y: 0,
          width,
          height: height,
          ...boxStyle
        },
        draggable: true
      })


      const listContainer = group.addGroup({})
      listContainer.setClip({
        type: 'rect',
        attrs: {
          x: -8,
          y: 30,
          width: width + 16,
          height: height - 30
        }
      })
      listContainer.addShape({
        type: 'rect',
        attrs: {
          x: 1,
          y: 30,
          width: width - 2,
          height: height,
          fill: '#fff'
        },
        draggable: true
      })


      if (list) {
        list.forEach((e, i) => {
          const isSelected =
            Math.floor(startIndex) + i === Number(selectedIndex)
          let { key = '', type } = e
          if (type) {
            key += ' - ' + type
          }
          const label = key.length > 26 ? key.slice(0, 24) + '...' : key

          listContainer.addShape('rect', {
            attrs: {
              x: 1,
              y: i * itemHeight - itemHeight / 2 + offsetY,
              width: width - 4,
              height: itemHeight,
              radius: 2,
              lineWidth: 1,
              cursor: 'pointer',
            },
            // must be assigned in G6 3.3 and later versions. it can be any string you want, but should be unique in a custom item type
            name: `item-${Math.floor(startIndex) + i}-content`,
            draggable: true
          })

          if (!cfg.hideDot) {
            listContainer.addShape('circle', {
              attrs: {
                x: 0,
                y: i * itemHeight + offsetY,
                r: 3,
                stroke: boxStyle.stroke,
                fill: 'white',
                radius: 2,
                lineWidth: 1,
                cursor: 'pointer'
              }
            })
            listContainer.addShape('circle', {
              attrs: {
                x: width,
                y: i * itemHeight + offsetY,
                r: 3,
                stroke: boxStyle.stroke,
                fill: 'white',
                radius: 2,
                lineWidth: 1,
                cursor: 'pointer'
              }
            })
          }

          listContainer.addShape('text', {
            attrs: {
              x: 12,
              y: i * itemHeight + offsetY + 6,
              text: label,
              fontSize: 12,
              fill: '#000',
              fontFamily:
                'Avenir,-apple-system,BlinkMacSystemFont,Segoe UI,PingFang SC,Hiragino Sans GB,Microsoft YaHei,Helvetica Neue,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol',
              full: e,
              fontWeight: isSelected ? 500 : 100,
              cursor: 'pointer'
            },
            // must be assigned in G6 3.3 and later versions. it can be any string you want, but should be unique in a custom item type
            name: `item-${Math.floor(startIndex) + i}`
          })
        })
      }

      return keyshape
    },
    getAnchorPoints() {
      return [
        [0, 0],
        [1, 0]
      ]
    },
    setState(name, value, item) {
      const group = item.getContainer();
      
      const shape = group.get('children')[0]; // 顺序根据 draw 时确定
      if (name === 'running') {
      console.log(group.get('children')[3].get('children'), 'group');

        if (value) {
          shape.animate(
            {
              fill: '#000',
              repeat: true,
            },
            1000,
          );
        } else {
          shape.stopAnimate();
          shape.attr('fill', '#fff');
        }
      }
    },
  })



}

export const behavior = (graph: Graph) => {
  // graph.on('edge:mouseenter', function (e) {
  //   console.log(e.item, '2222');
  //   graph.setAutoPaint(false);
  //   graph.getNodes().forEach(function (node) {
  //     graph.clearItemStates(node);
  //     graph.setItemState(node, 'dark', true);
  //   });
  // })

  // 鼠标移动到上面 running，移出结束
  graph.on('node:mouseenter', ev => {
    const node = ev.item;
    console.log(node, '===');
    
    graph.setItemState(node, 'running', true);
  });

  graph.on('node:mouseleave', ev => {
    const node = ev.item;
    graph.setItemState(node, 'running', false);
  });
}
