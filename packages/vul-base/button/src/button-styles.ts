import { ExtractPropTypes } from "vue"

export const buttonProps =  {
  type:{
    type:String,
    default:'default'
  },
  content:{
    type:String,
    default:'BUTTON'
  }
} as const 

export type  ButtonProps = ExtractPropTypes<typeof buttonProps>