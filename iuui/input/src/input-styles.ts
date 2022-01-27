import { PropType,ExtractPropTypes } from "vue";

export const inputProps = {
  placeholder:{
    type: String,
    default:undefined
  },
  disabled:{
    type:Boolean,
    default:false
  },
  modlueValue:{
    type:String,
    default:'',
  },
  onHandleChange:{
    type: Function as PropType< (v: string) => void >,
    default:undefined
  },
  'update:modlueValue':{
    type: Function as PropType< (v: string) => void >,
    default:undefined
  }
} as const 

export type InputProps = ExtractPropTypes<typeof inputProps>