import { createI18n } from 'vue-i18n'
import en from '@/locales/en-US/en.json'
import cn from '@/locales/ZH-CN/cn.json'

const message = {
  cn:cn,
  en: en,
}

const i18n = createI18n<[typeof en], 'en' | 'cn'>({

  locale: 'cn', // 设置语言类型
  globalInjection: true, // 全局注册$t方法
  messages: message,
})

export default i18n

