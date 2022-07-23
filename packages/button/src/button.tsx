/*
 * @Author: sifengyuan
 * @Date: 2022-07-23 10:50:48
 * @LastEditors: sifengyuan
 * @LastEditTime: 2022-07-23 18:06:58
 * @FilePath: /iuUI/packages/button/src/button.tsx
 * @Description: update here
 */
import { defineComponent } from 'vue'
import BounceBtn from './components/BounceBtn'
import GradualBtn from './components/GradualBtn'
import NeonBtn from './components/NeonBtn'
import StreamerBtn from './components/StreamerBtn'
import DefaultBtn from './components/DefaultBtn'
import { buttonProps } from './button-styles'

export default defineComponent({
  name: 'VulButton',
  props: buttonProps,
  setup(props) {
    const getBtn = () => {
      switch (props.type) {
        case 'default':
          return <DefaultBtn content={props.content} />
        case 'bounce':
          return <BounceBtn content={props.content} />
        case 'neno':
          return <NeonBtn  content={props.content}/>
        case 'fradual':
          return <GradualBtn  content={props.content}/>
        case 'streamer':
          return <StreamerBtn content={props.content} />
        default:
          return <DefaultBtn content={props.content}/>
      }
    }

    return () => {
      return(
        <div>{getBtn()}</div>
      )
      
    }
  }
})
