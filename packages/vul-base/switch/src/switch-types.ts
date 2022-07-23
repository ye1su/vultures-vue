import { ExtractPropTypes, PropType } from "vue"


export const switchProps = {
  color:{
    type:String,
    default:'#40ae7c'
  },
  change:{
    type:Function as PropType< (v:boolean) => void >,
    default:undefined
  },
  disabled:{
    type:Boolean,
    default:false
  },
  modelValue:{
    type:Boolean,
    default:false,
  },
  'update:modelValue': {
    type: Function as PropType<(v: boolean) => void>,
    default: undefined
  }

} as const 

export type SwitchProps = ExtractPropTypes<typeof switchProps >
export type switchClss = Array<string>