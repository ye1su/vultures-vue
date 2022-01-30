import { computed, defineComponent,ref } from 'vue'
import {switchProps,switchClss} from './switch-types'
import './switch.scss'
export default defineComponent({
  name: 'ISwitch',
  props: switchProps,
  emits:['update:modelValue','change'],
  setup(props,ctx){
    let tagSwitch = ref(false)
    let colorSwitch = ref('#e3e3e3')
    const isDisable = ref<switchClss>(['switch-box'])
    const inp = ref(null)
    props.modelValue && (tagSwitch.value = true)
    props.disabled ? isDisable.value.push('disSwitchBox') : ''
    const toggole = () => {
      tagSwitch.value = !tagSwitch.value     
      ctx.emit('update:modelValue',tagSwitch.value)
      ctx.emit('change',tagSwitch.value)
    }
    const sClass = computed(()=>{
      if(tagSwitch.value){
        colorSwitch.value = props.color
        return 'switch-label-active'
      }else{
        colorSwitch.value ="#e3e3e3"
        return 'switch-label'
      }
    })
    return {
      tagSwitch,
      toggole,
      sClass,
      inp,
      colorSwitch,
      isDisable
    }
  },
  render() {
    return (
      <div class={this.isDisable } onChange={this.toggole}>
        <label class={this.sClass} for='switch-input' style={{'background-color':this.colorSwitch}}></label>
        <input class='switch-input' type='checkbox' id='switch-input' ref="inp" checked={this.tagSwitch} disabled={this.disabled} style={this.disabled? {'cursor': 'not-allowed'}:''}/>
      </div>
    )
  }
})
