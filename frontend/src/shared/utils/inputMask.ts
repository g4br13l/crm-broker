


export function inputMask() {


  function phone(value: string) {
    // masks: 088 98888-8888, 88 98888-8888, 088 8888-8888, 88 8888-8888
    value = value.replace(/\D/g, '')
    const dddWith0 = value[0] === '0'
    const numWith9 = (dddWith0 && value[3] === '9') || (!dddWith0 && value[2] === '9')
    
    value = dddWith0
      ? value.replace(/^([0-9]{3})(\d)/, '$1 $2')
      : value.replace(/^([0-9]{2})(\d)/, '$1 $2')
    
    value = numWith9
      ? value.replace(/([9][0-9]{4})(\d)/, '$1-$2')
      : value.replace(/([0-9]{4})(\d)/, '$1-$2')
    
    return value.slice(0, 14 - (dddWith0 ? 0 : 1) - (numWith9 ? 0 : 1))
  }
  
  function name(value: string) {
    return value
  }

  return { phone, name }
}


export type InputMaskT = ReturnType<typeof inputMask>
export type InputMaskFnT = InputMaskT[keyof InputMaskT]
