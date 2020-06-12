<template>
  <div class="fm-input">
    <input
      v-if="!label"
      type="text"
      :value="value"
      @input="$emit('input', $event.target.value)"
    >
    <label v-else>{{ label }}<input
      type="text"
      :value="v"
      @input="onInput"
    ></label>
    <span class="tip" v-show="visibale">{{ msg }}</span>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator'

export interface Rule {
  required?: boolean
  validator?: Function
  type?: ['number', 'phone', 'email']
  max?: number
  min?: number
  msg: string
}

interface Validator {
  (content: any): boolean
}

interface Validate {
  [key: string]: Validator
}

interface ValifyResult {
  result: boolean
  rule: string
}

@Component
export default class FmInput extends Vue {
  @Prop(String) label: string | undefined
  @Prop(String) value: string | undefined
  @Prop(Object) rule: Rule |undefined
  // 输入框的值
  v: any = ''
  // 验证失败提示内容
  msg: string | undefined =  this.rule.msg
  // 是否显示验证失败提示信息
  visibale: boolean = false

  onInput(event: any) {
    const value = event.target.value

    let {result, rule} = this.validate(value)
    if (result === false) {
      this.visibale = true
    } else {
      this.visibale = false
    }
  }

  showTip(): void {
    this.visibale = true
  }
  // 根据规则验证表达内容
  validate(content: any): ValifyResult {
    const rule = this.rule
    if (!rule) return { result: true,rule: '' }

    // 内容类型验证
    class CheckType {
      private types: string[] = [
        'phone',
        'email',
        'idcard',
        'password',
        'hexRGB',
        'time',
        'date'
      ]

      public check: Validate = {
        phone: function (content: any): boolean {
          return /^1[0-9]{10}$/.test(content)
        },
        email: function (content: any):boolean {
          return /^[0-9A-Za-z]+@[0-9A-Za-z]+(\.)+$/.test(content) 
        },
        password: function (content: any): boolean {
          return /(?=.*[0-9])(?=.*[A-Za-z])^[0-9A-Za-z]{5,15}$/.test(content)
        },
        hexRGB: function(content: any):boolean {
          return /^#([0-9A-Fa-f]{3}|[0-9A-Fa-f]{6})$/.test(content)
        },
        idcard: function (content: any): boolean {
          return /^\d{15}$|^\d{17}[\dxX]$/g.test(content)
        },
        time: function (content: any): boolean {
          return /^([01]?[09]|2[0-4]):([0-5]?[0-9]|)$/.test(content)
        },
        date: function (content: any):boolean {
          return /^(\d{4})-(0[1-9]|1[0-2])-([0-2][0-9]|3[0-1])$/.test(content)
        }
      }

      public addType(type: string, validator: Validator): void {
        if (typeof this.check[type] === 'function') return console.log('当前添加验证类型已存在')
        this.types.push(type)
        this.check[type] = validator
      }

      public modify(type: string, validator: Validator): void {
        if (!this.types.includes(type)) this.types.push(type)
        this.check[type] = validator
      }
    }

    const checkType = new CheckType()
    const value = this.v
    // 将验证规则装换为键值对数组
    const items = Object.entries(rule)
    const result: any[] = []
    // 遍历验证规则
    for (let [rule, content] of items) {
      if (!checkRule(rule, content, value)) {
        return {
          result: false,
          rule: rule,
        }
      }
    }

    // 根据规则类型进行验证
    function checkRule(rule: string, content: any, value: any) {
      switch(rule) {
        case 'required':
          return value === '' || value === undefined
        break

        case 'validator':
          return content(value)
        break

        case 'type':
          return checkType.check[content](value)
        break

        case 'max':
          return value.toString().length < content
        break

        case 'min':
          return value.toString().length > content
        break

        default:
        return true
      }
    }
  }
}
</script>

<style scoped>

</style>
