import { watch } from 'fs'
import { defineComponent, ref } from 'vue'
import { modalProps } from './modal-style'
import './modal.scss'
export default defineComponent({
  name: 'IModal',
  props: modalProps,
  emits:['update:modelValue'],
  setup(props,ctx) {
  const closeWindwo = (e:Event) => {
      ctx.emit('update:modelValue',false)
      e.stopPropagation()
    }
    const clickContent = (e:Event) =>{
      ctx.emit('update:modelValue',true)
      e.stopPropagation()
    }
    // watch(
    //   () => props.modelValue,
    //   (count, prevCount) => {
    //     /* ... */
    //   }
    // )
    return () => {
      return (
        <div class='modal' v-show={props.modelValue} onClick={closeWindwo}>
          <div class='base-model__content' onClick={clickContent} >
            <div class='base-model__title'>111</div>
            <div class='base-model__control'>
              <span>确定</span>
              <span onClick={closeWindwo}>关闭</span>
            </div>
          </div>
        </div>
      )
    }
  }
})
