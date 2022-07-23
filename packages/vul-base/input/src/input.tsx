/*
 * @Author: sifengyuan
 * @Date: 2022-07-23 10:50:48
 * @LastEditors: sifengyuan
 * @LastEditTime: 2022-07-23 18:07:51
 * @FilePath: /iuUI/packages/input/src/input.tsx
 * @Description: update here
 */
import { defineComponent, toRefs, ref } from 'vue'
import './input.scss'
import { InputProps, inputProps } from './input-styles'

export default defineComponent({
  name: 'VulInput',
  props: inputProps,
  emits: ['onHandleChange', 'update:modlueValue'],
  setup(props: InputProps, ctx) {
    const { disabled } = toRefs(props)
    const classList = ref<string[]>(['inp'])
    disabled.value && classList.value.push('dis')

    const getInfo = ($event: Event): void => {
      ctx.emit('update:modlueValue', ($event.target as HTMLInputElement).value)
      ctx.emit('onHandleChange', ($event.target as HTMLInputElement).value)
    }

    return () => {
      return (
        <div>
          <input
            type='text'
            class={classList.value}
            disabled={disabled.value}
            placeholder={props.placeholder}
            onInput={getInfo}
            value={props.modlueValue}
          ></input>
        </div>
      )
    }
  }
})
