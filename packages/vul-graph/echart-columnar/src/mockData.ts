/*
 * @Author: sfy
 * @Date: 2023-04-23 22:34:26
 * @LastEditors: sfy
 * @LastEditTime: 2023-04-23 23:16:03
 * @FilePath: /vultures-vue/packages/vul-graph/echart-columnar/src/mockData.ts
 * @Description: update here
 */
/*
 * @Author: sfy
 * @Date: 2023-04-23 17:32:23
 * @LastEditors: sfy
 * @LastEditTime: 2023-04-23 19:28:49
 * @FilePath: /icm-custom/src/pages/ProcessMining/mockData.ts
 * @Description: update here
 */
import * as dagre from 'dagre'

export const mockData = {
  nodes: [
    {
      id: '1',
      name: '债权人不存在'
    },
    {
      id: '2',
      name: '接收发票'
    },
    {
      id: '3',
      name: '处理发票'
    },
    {
      id: '4',
      name: '已检查并批准'
    },
    {
      id: '5',
      name: '延后处理'
    },
    {
      id: '6',
      name: '核对合同条款'
    },
    {
      id: '7',
      name: '请求缺失数据'
    },
    {
      id: '8',
      name: '最终检查发展'
    },
    {
      id: '9',
      name: '批准发票'
    },
    {
      id: '10',
      name: '置走付款流程'
    },
    {
      id: '11',
      name: '按需付款'
    },
    {
      id: '12',
      name: '澄清异常发票'
    }
  ],
  edges: [
    {
      source: '1',
      target: '2',
      label: '14'
    },
    {
      source: '2',
      target: '3',
      label: '3333'
    },
    {
      source: '3',
      target: '4',
      label: '4444'
    },
    {
      source: '3',
      target: '5',
      label: '1'
    },
    {
      source: '3',
      target: '6',
      label: '1'
    },
    {
      source: '5',
      target: '6',
      label: '1'
    },
    {
      source: '6',
      target: '7'
    },
    {
      source: '7',
      target: '5'
    },
    {
      source: '3',
      target: '7'
    },

    {
      source: '4',
      target: '5'
    },
    {
      source: '5',
      target: '6'
    },
    {
      source: '6',
      target: '7'
    },
    {
      source: '7',
      target: '8'
    },
    {
      source: '8',
      target: '9'
    },
    {
      source: '2',
      target: '10'
    },
    {
      source: '10',
      target: '11'
    },
    {
      source: '3',
      target: '12'
    }
  ]
}

export const transform = () => {
  // Create a new directed graph
  var g = new dagre.graphlib.Graph()

  // Set an object for the graph label
  g.setGraph({})

  // Default to assigning a new object as a label for each new edge.
  // States and transitions from RFC 793
  var states = [
    'CLOSED',
    'LISTEN',
    'SYN RCVD',
    'SYN SENT',
    'ESTAB',
    'FINWAIT-1',
    'CLOSE WAIT',
    'FINWAIT-2',
    'CLOSING',
    'LAST-ACK',
    'TIME WAIT'
  ]

  // Automatically label each of the nodes
  states.forEach(function (state) {
    g.setNode(state, { label: state, width: 250, height: 100 })
  })

  // Set up the edges
  g.setEdge('CLOSED', 'LISTEN', { label: 'open' })
  g.setEdge('LISTEN', 'SYN RCVD', { label: 'rcv SYN' })
  g.setEdge('LISTEN', 'SYN SENT', { label: 'send' })
  g.setEdge('LISTEN', 'CLOSED', { label: 'close' })
  g.setEdge('SYN RCVD', 'FINWAIT-1', { label: 'close' })
  g.setEdge('SYN RCVD', 'ESTAB', { label: 'rcv ACK of SYN' })
  g.setEdge('SYN SENT', 'SYN RCVD', { label: 'rcv SYN' })
  g.setEdge('SYN SENT', 'ESTAB', { label: 'rcv SYN, ACK' })
  g.setEdge('SYN SENT', 'CLOSED', { label: 'close' })
  g.setEdge('ESTAB', 'FINWAIT-1', { label: 'close' })
  g.setEdge('ESTAB', 'CLOSED', { label: 'close' })
  g.setEdge('ESTAB', 'CLOSE WAIT', { label: 'rcv FIN' })
  g.setEdge('FINWAIT-1', 'FINWAIT-2', { label: 'rcv ACK of FIN' })
  g.setEdge('FINWAIT-1', 'CLOSING', { label: 'rcv FIN' })
  g.setEdge('CLOSE WAIT', 'LAST-ACK', { label: 'close' })
  g.setEdge('FINWAIT-2', 'TIME WAIT', { label: 'rcv FIN' })
  g.setEdge('CLOSING', 'TIME WAIT', { label: 'rcv ACK of FIN' })
  g.setEdge('LAST-ACK', 'CLOSED', { label: 'rcv ACK of FIN' })
  g.setEdge('TIME WAIT', 'CLOSED', { label: 'timeout=2MSL' })

  dagre.layout(g)
  

  let nodes = []
  g.nodes().forEach(function (v) {
    console.log('Node ' + v + ': ' + JSON.stringify(g.node(v)))
    let obj = g.node(v)
    nodes.push({
      id: v,
      ...obj
    })
  })

  let edges = []
  g.edges().forEach(function (e) {
    console.log('Edge ' + e.v + ' -> ' + e.w + ': ' + JSON.stringify(g.edge(e)))
    edges.push({
      label: g.edge(e).label,
      source: e.v,
      target: e.w,
      controlPoints: g.edge(e).points
    })
  })

  return {
    nodes,
    edges
  }
}
