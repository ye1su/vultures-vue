import type {ExtractPropTypes} from 'vue'

export const skeletonProps ={
  length:{
    type:Number,
    default:300
  },
  num:{
    type:Number,
    default:4
  }
} as const 

export type SkeletonProps = ExtractPropTypes<typeof skeletonProps>

