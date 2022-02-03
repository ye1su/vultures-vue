import { defineComponent, PropType } from 'vue'
import './tooltip.scss'

const cardProps = {
  position: {
    type: String as PropType<'left' | 'top' | 'right' | 'bottom'>,
    default: 'top'
  },
  tooltip: {
    type: String,
    default: 'hello iuUI'
  }
} as const

export default defineComponent({
  name: 'ITooltip',
  props: cardProps,
  setup(props, ctx) {
    console.log(ctx.slots.default())
  },

  render() {
    const { tooltip, position } = this

    return (
      <div data-tooltip={tooltip} data-position={position}>
        {this.$slots.default?.()}
      </div>
    )
  }
})
