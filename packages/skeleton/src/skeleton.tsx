/*
 * @Author: sifengyuan
 * @Date: 2022-07-23 10:50:48
 * @LastEditors: sifengyuan
 * @LastEditTime: 2022-07-23 18:09:30
 * @FilePath: /iuUI/packages/skeleton/src/skeleton.tsx
 * @Description: update here
 */
import { defineComponent, toRefs } from 'vue'
import { skeletonProps, SkeletonProps } from './skeleton-types'
import SkeletonItem from './components/skeletonItem'
import './skeleton.scss'

export default defineComponent({
  name: 'VulSkeleton',
  props: skeletonProps,
  setup(props: SkeletonProps, ctx) {
    const { length, num } = toRefs(props)
    console.log(length.value)

    const list = (n: number) => {
      if (n == 1) {
        return <SkeletonItem length={length.value}></SkeletonItem>
      }
      const res = []
      for (let i = 0; i < n; i++) {
        if (i == 0) {
          res.push(<SkeletonItem length={length.value * 0.3}></SkeletonItem>)
        } else {
          res.push(<SkeletonItem length={length.value}></SkeletonItem>)
        }
      }
      return res
      // if(n==1){
      //   return (<SkeletonItem length={length.value } ></SkeletonItem>)
      // }
      // const res = []
      // for (let i = 0; i < n; i++) {
      //   if
      //     res.push(<SkeletonItem length={length.value / 2} ></SkeletonItem>)

      // }
      // return res
    }

    return () => {
      return <div>{list(num.value)}</div>
    }
  }
})
