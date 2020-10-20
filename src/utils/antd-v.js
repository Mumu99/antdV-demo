import {
  Layout,
  Icon,
  Dropdown,
  Menu,
  Tooltip,
  Button,
  Card,
  Form,
  Input,
  message
} from 'ant-design-vue'
import Vue from 'vue'
Vue.use(Layout)
  .use(Icon)
  .use(Dropdown)
  .use(Menu)
  .use(Tooltip)
  .use(Button)
  .use(Card)
  .use(Form)
  .use(Input)
message.config({
  top: `100px`,
  duration: 2,
  maxCount: 1
})
Vue.prototype.$message = message
