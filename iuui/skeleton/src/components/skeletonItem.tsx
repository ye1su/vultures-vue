import { defineComponent } from "vue"
import { skeletonProps, SkeletonProps } from '../skeleton-types'
import {toRefs} from 'vue'

export default defineComponent({
  props: skeletonProps,
  setup(props: SkeletonProps, ctx) {
    const {length,num} = toRefs(props)
    console.log(num.value,length.value);

    return () => {
      return (
        <div>
          <div class="skeItem" style={{width:length.value+'px'}}></div>
        </div>
      )
    }
  }
})