// 防抖
export function debounce(fn: Function, layout: number): Function {
  let timer: number | null = null
  return function (...args: any[]) {
    if (timer !== null) window.clearTimeout(timer)
    // @ts-ignore
    const context: any = this
    timer = window.setTimeout(function () {
      fn.call(context, ...args)
      timer = null
    })
  }
}

// 节流
export function throttle(fn: Function, layout: number): Function {
  let timer: number | null = null
  return function(...args: any[]) {
    if(timer !== null) return
    // @ts-ignore
    const context: any = this
    timer = window.setTimeout(function () {
      fn.call(context, ...args)
      timer = null
    }, layout)
  }
}