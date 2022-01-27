import {defineComponent, toRefs,ref} from 'vue'
import './input.scss'
import {InputProps,inputProps} from './input-styles'

export default defineComponent({
  name:'IInput',
  props:inputProps,
  emits: ['onHandleChange','update:modlueValue'],
  setup(props:InputProps,ctx){
    const {disabled} = toRefs(props)
    const classList = ref(['inp'])
    disabled.value && classList.value.push('dis')

    const getInfo = ($event:Event) => {

      ctx.emit('update:modlueValue',($event.target as HTMLInputElement).value)
      ctx.emit('onHandleChange',($event.target as HTMLInputElement).value)
    }

    return () =>{
      return (
        <div>
          <input type='text' class={classList.value}  disabled={disabled.value} placeholder={props.placeholder}  onInput={getInfo} value={props.modlueValue}></input>
        </div>
        
      )
    }
  }
})