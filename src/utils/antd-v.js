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
  message,
  Drawer,
  Tabs,
  Modal,
  Divider,
  List,
  Avatar,
  Tag
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
  .use(Drawer)
  .use(Tabs)
  .use(Modal)
  .use(Divider)
  .use(List)
  .use(Avatar)
  .use(Tag)
message.config({
  top: `100px`,
  duration: 2,
  maxCount: 1
})
Vue.prototype.$message = message
