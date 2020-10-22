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
  Tag,
  Progress,
  DatePicker,
  Table
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
  .use(Progress)
  .use(DatePicker)
  .use(Table)
message.config({
  top: `70px`,
  duration: 2,
  maxCount: 1
})
Vue.prototype.$message = message
