import {PropType} from 'vue'

export const modalProps = {
  modelValue:{
    type:Boolean,
    default:false,
  },
  'update:modelValue': {
    type: Function as PropType<(v: boolean) => void>,
    default: undefined
  },
  onSure:{
    type: Function as PropType< () => void >
  }
} as const 
