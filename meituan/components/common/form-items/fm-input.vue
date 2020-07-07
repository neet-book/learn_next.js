<template>
  <div class="fm-input">
    <div>
      <input
        v-if="!label"
        type="text"
        v-module='value'
        @input="onInput"
      >
      <label v-else>{{ label }}<input
        type="text"
        v-module='value'
        @input="onInput"
      ></label>
    </div>
    <span class="tip" v-show="visibale">{{ msg }}</span>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop, Inject } from 'nuxt-property-decorator'
import FmForm from './fm-form.vue'

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
    phone: function (value: any): boolean {
      console.log(value)
      return /^1[0-9]{10}$/.test(value)
    },
    email: function (value: any):boolean {
      return /^[0-9A-Za-z]+@[0-9A-Za-z]+(\.)+$/.test(value) 
      return /^[0-9A-Za-z]+@[0-9A-Za-z]+(\.)+$/.test(value) 
    },
    password: function (value: any): boolean {
      return /(?=.*[0-9])(?=.*[A-Za-z])^[0-9A-Za-z]{5,15}$/.test(value)
    },
    hexRGB: function(value: any):boolean {
      return /^#([0-9A-Fa-f]{3}|[0-9A-Fa-f]{6})$/.test(value)
    },
    idcard: function (value: any): boolean {
      return /^\d{15}$|^\d{17}[\dxX]$/g.test(value)
    },
    time: function (value: any): boolean {
      return /^([01]?[09]|2[0-4]):([0-5]?[0-9]|)$/.test(value)
    },
    date: function (value: any):boolean {
      return /^(\d{4})-(0[1-9]|1[0-2])-([0-2][0-9]|3[0-1])$/.test(value)
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

@Component
export default class FmInput extends Vue {
  @Prop(String) label: string | undefined
  // @Prop(String) value: string | undefined
  value=''
  @Prop({ type: Object, default: () => {} }) rule: Rule | undefined
  // 验证失败提示内容
  msg: string = ''
  // 是否显示验证失败提示信息
  visibale: boolean = false
  // @Inject('$fm_form') $fm_from: any

  // 声明周期钩子
  mounted() {
    // this.$fm_from
    this.msg = this.$props.rule.msg || '输入的内容有误'
  }

  // Methods
  onInput(event: any) {
    const value = event.target.value
    // // 验证规则
    // this.showTip()
    let {result, rule} = this.valiFromdate(value)
    // console.log(result, rule)
    this.visibale = !result
  }

  // 根据规则验证表达内容
  valiFromdate(value: any): ValifyResult {
    const rule = this.rule
    if (!rule) return { result: true,rule: '' }

    // 创建类型验证实例
    const checkType = new CheckType()

    // 创建验证规则对象
    /*
    * content: 验证规则内容
    */
    const checkRule: any = {
      required(content: any, value: any): boolean {
        if (content) {
          return !(value === '' || value === undefined)
        }
        return true
      },
      validator(content: any, value: any): boolean {
        return content(value)
      },
      max(content: any, value: any): boolean {
        return value.toString().length <= content
      },
      min(content: any, value: any): boolean {
        return value.toString().length >= content
      },
      type(content:any, value: any): boolean {
        console.log(content)
        return checkType.check[content](value)
      }
    }

    // 将验证规则装换为键值对数组
    const items = Object.entries(rule)
    const result: any[] = []

    // 遍历验证规则
    for (let [rule, content] of items) {
      if (rule === 'msg') continue
      // 调用规则所对应方法
      if (!checkRule[rule](content, value)) {
        return {
          result: false,
          rule: rule,
        }
      } 
    }

    // 验证通过
    return {
      result: true,
      rule: ''
    }
  }

  showTip(): void {
    this.visibale = true
  }
  
}
</script>

<style scoped>

</style>
