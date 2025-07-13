import { createI18n } from 'vue-i18n'
import EN from '@/locales/en-US/en.json'
import CN from '@/locales/ZH-CN/cn.json'

const message = {
  cn:CN,
  en: EN,
}

const i18n = createI18n({
  locale: 'cn', // 设置语言类型
  legacy: false, // 如果要支持compositionAPI，此项必须设置为false;
  globalInjection: true, // 全局注册$t方法
  messages: message,
})

export default i18n

