import {defineComponent} from 'vue'


export default defineComponent({
  name:'ISearch',
  setup(){
    return () =>{
      return (
        <div>
          <p>搜索框</p>
          <input type='text'></input>
        </div>
        
      )
    }
  }
})