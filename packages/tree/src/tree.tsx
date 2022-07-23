import { defineComponent, toRefs } from 'vue'
import { treeProps, TreeProps, TreeData, TreeItem } from './tree-types'
import IconOpen from './components/icon-open'
import IconClose from './components/icon-close'
import useToggle from './composables/use-toggle'
import './tree.scss'

export default defineComponent({
  name: 'ITree',
  props: treeProps,
  emits: [],
  setup(props: TreeProps, ctx) {
    const { data } = toRefs(props)
    const { openedData, toggle } = useToggle(data.value)

    // 增加缩进的展位元素
    const Indent = () => {
      return (
        <span style='display: inline-block; width: 16px; height: 16px;'></span>
      )
    }

    const renderNode = (item: TreeItem) => {
      return (
        <div style={{ paddingLeft: `${24 * (item.level - 1)}px` }}>
          <div>
            {item.children ? (
              item.open ? (
                <IconOpen onClick={() => toggle(item)} /> // 给节点绑定点击事件
              ) : (
                <IconClose onClick={() => toggle(item)} />
              ) // 给节点绑定点击事件
            ) : (
              <Indent />
            )}
            <span>{item.label}</span>
          </div>
        </div>
      )
    }

    return () => {
      return (
        <div>{openedData.value.map((item: TreeItem) => renderNode(item))}</div>
      )
    }
  }
})
