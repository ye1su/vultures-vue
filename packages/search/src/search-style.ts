import type { PropType, ExtractPropTypes } from 'vue'
export const searchProps = {
  onSearch: {
    type: Function as PropType<(v: string) => void>,
    default: undefined
  }
} as const

export type SearchProps = ExtractPropTypes<typeof searchProps>
