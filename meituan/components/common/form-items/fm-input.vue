<template>
  <div class="fm-input">
      <input
        :class="{ err: visible && !result }"
        v-model='boxValue'
        @blur="onBlur"
        @focus="onFocus"
        @input="onInput"
        class="input-box"
        v-if="!label"
        type="text"
      >
      <label v-else class="input-label">{{ label }}</label>
        <input
          :class="{ err: visible && !result }"
          v-model="boxValue"
          @blur="onBlur"
          @focus="onFocus"
          @input="onInput"
          class="input-box"
          type="text"
        >
      <span v-show="visible && result" class="success-tip"><i class="el-icon-success success-tip-icon"></i></span>
      <span v-show="visible && !result" class="error-tip"><i class="el-icon-error error-tip-icon"></i> {{ msg }}</span>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop, Inject } from 'nuxt-property-decorator'

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
  @Prop({ type: Object, default: () => {} }) rule: Rule | undefined
  @Prop(String) name: string | undefined
  @Prop() value: any
  // 验证失败提示内容
  msg: string = ''
  // 是否显示验证失败提示信息
  visible: boolean = false
  // 验证结果
  result: boolean = true
  boxValue = ''
  @Inject('$fm_form') $fm_from: any

  // 生命周期钩子
  mounted() {
    // 在父级form组件中注册表单组件
    if (this.$fm_from) {
      // 必填项，result初始化为false
      if (this.$props.rule.required) this.result = false
      this.$fm_from.formItems[this.name as string] = {
        result: this.result,
        value: this.value,
        rule: '',
        inst: this
      }
    }
    this.msg = this.$props.rule.msg || '输入的内容有误'
  }

  // Methods
  onBlur(event: any): void {
    this.visible = true
    const value = event.target.value
    // 验证规则
    let {result} = this.valiFromdate(value)
    this.result = result
  }

  onFocus(ev: any): void {
    this.visible = false
  }

  onInput(ev: any): void {
    this.$emit('input', ev.target.value)
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
    this.visible = true
    this.result = false
  }
  
}
</script>

<style scoped>
.fm-input {
  font-size: 0;
}
.input-label {
  display: inline-block;
  padding-right: 10px;
  width: 100px;
  height: 36px;
  line-height: 36px;
  font-size: 14px;
  text-align: right;
  color: #333;
}

.input-box {
  font-size: 14px;
  vertical-align: top;
  width: 248px;
  height: 24px;
  border: solid 1px #69696960;
  outline: none;
  padding: 5px;
}

.input-box:focus {
  border: 1px solid #FFC300;
}

.err {
  border: 1px solid #f76120;
}

.success-tip, .error-tip {
  padding: 5px 0;
  color: var(--color-normal);
  font-size: 12px;
}

.success-tip-icon, .error-tip-icon {
  font-size: 16px;
  margin: 0 2px;
}

.success-tip-icon {
  color: #8bd245;
}
.error-tip-icon {
  color: #f76120;
}

@media screen and (max-width: 580px) {
  .input-label {
    text-align: left;
  }

  .success-tip, .error-tip {
    display: block;
  }
}
</style>
