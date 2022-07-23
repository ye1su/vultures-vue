import { SetupContext } from "vue"

interface commonModal {
  cancelBubol:(e:Event) => void
  sendModuleValue:(tag:boolean) => void
}

export default function(ctx: SetupContext<("update:modelValue" | "onSure")[]>) :commonModal {

  const sendModuleValue =(tag:boolean) => {
    ctx.emit('update:modelValue', tag)
  }

  const cancelBubol = (e:Event) => {
    e.stopPropagation()
  }

  return {
    cancelBubol,
    sendModuleValue
  }
}