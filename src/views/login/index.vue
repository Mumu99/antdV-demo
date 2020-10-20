<template>
  <div class="container">
    <a-form
      id="components-form-demo-normal-login"
      :form="form"
      class="login-form"
      @submit="handleSubmit"
    >
      <div class="title">系统登录</div>
      <a-form-item>
        <a-input
          v-decorator="[
            'userName',
            { rules: [{ required: true, message: 'Please input your username!' }] },
          ]"
          placeholder="Username"
          size="large"
        >
          <a-icon
            slot="prefix"
            type="user"
            style="color: rgba(0,0,0,.25)"
          />
        </a-input>
      </a-form-item>
      <a-form-item>
        <a-input-password
          v-decorator="[
            'password',
            { rules: [{ required: true, message: 'Please input your Password!' }] },
          ]"
          type="password"
          placeholder="Password"
          size="large"
          allow-clear
        >
          <a-icon
            slot="prefix"
            type="lock"
            style="color: rgba(0,0,0,.25)"
          />
        </a-input-password>
      </a-form-item>
      <a-form-item>
        <div class="tip">
          <span>用户名: admin</span>
          <span>密码: 随便填</span>
        </div>
        <div class="tip">
          <span>用户名: 木木大人</span>
          <span>密码: 随便填</span>
        </div>
        <a-button
          type="primary"
          html-type="submit"
          class="login-form-button"
          style="background: #13aee4"
          size="large"
        >
          登录
        </a-button>
      </a-form-item>
    </a-form>
  </div>
</template>

<script>
export default {
  beforeCreate() {
    this.form = this.$form.createForm(this, { name: 'normal_login' })
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault()
      this.form.validateFields((err, values) => {
        if (!err) {
          const { userName, password } = values
          if (
            (userName === 'admin' && password) ||
            (userName === '木木大人' && password)
          ) {
            this.$message.success('登录成功')
            window.localStorage.setItem('antdV', true)
            window.localStorage.setItem('userName', userName)
            this.$router.push('/dashboard/analysis')
          } else {
            this.$message.error('用户名填写错误')
          }
        }
      })
    }
  }
}
</script>

<style lang='less' rel='stylesheet/less' scoped>
.container {
  min-height: 100%;
  width: 100%;
  background: url('../../assets//login2.png'), url('../../assets/login.png');
  background-position: left bottom, 0 0;
  background-repeat: no-repeat;
  background-size: 20%, 100% 100%;
}
.login-form {
  position: relative;
  width: 520px;
  max-width: 100%;
  padding: 250px 35px 0;
  margin-left: 130px;
  overflow: hidden;
  .title {
    font-size: 26px;
    color: #13aee4;
    margin: 0 auto 40px auto;
    text-align: left;
    font-weight: 700;
    position: relative;
    padding-left: 10px;
    &::after {
      position: absolute;
      top: 5px;
      left: 0;
      width: 4px;
      height: 35px;
      background-color: #13aee4;
      content: '';
      border-radius: 10px;
    }
  }
  .tip {
    & span:last-child {
      margin-left: 20px;
    }
  }
}
#components-form-demo-normal-login .login-form {
  max-width: 300px;
}
#components-form-demo-normal-login .login-form-forgot {
  float: right;
}
#components-form-demo-normal-login .login-form-button {
  width: 100%;
}
</style>

