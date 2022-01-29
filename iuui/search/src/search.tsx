import { defineComponent, ref } from 'vue'
import { Input } from '../../input/index'
import IconSearch from './components/icon-search'
import { searchProps } from './search-style'
import './search.scss'

export default defineComponent({
  name: 'ISearch',
  props: searchProps,
  emits: ['onSearch'],
  setup(prop, ctx) {
    const alue = ref<string>('')
    const haveInfo = ($evnet: Event) => {
      console.log(alue.value)

      ctx.emit('onSearch', alue.value)
    }

    return () => {
      return (
        <div class='isearch'>
          <Input
            v-model:modlueValue={alue.value}
            placeholder='Happy to use iuUI'
          ></Input>
          <div class='iconSearch' onClick={haveInfo}>
            <IconSearch />
          </div>
        </div>
      )
    }
  }
})
