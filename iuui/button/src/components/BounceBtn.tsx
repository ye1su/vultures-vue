import { defineComponent } from 'vue'
import './buttonComponents.scss'
import { buttonProps } from '../button-styles'

export default defineComponent({
  props: buttonProps,
  setup(props) {
    return () => {
      return (
        <div>
          <div class='button1'>
            <span>{props.content}</span>
          </div>
        </div>
      )
    }
  }
})
