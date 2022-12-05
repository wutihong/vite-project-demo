<template>
  <a-form ref="loginForm" :model="userForm">
    <a-form-item name="account">
      <a-input
          v-model:value="userForm.account"
          placeholder="请输入用户名"
          size="large"
          @keyup.enter="login"
      >
        <template #prefix>
          <UserOutlined class="login-icon-gray"/>
        </template>
      </a-input>
    </a-form-item>
    <a-form-item name="password">
      <a-input-password
          v-model:value="userForm.password"
          placeholder="请输入密码"
          size="large"
          autocomplete="off"
          @keyup.enter="login"
      >
        <template #prefix>
          <LockOutlined class="login-icon-gray"/>
        </template>
      </a-input-password>
    </a-form-item>
    <a-form-item name="validCode">
      <a-row :gutter="8">
        <a-col :span="17">
          <a-input
              v-model:value="userForm.validCode"
              placeholder="请输入验证码"
              size="large"
          >
            <template #prefix>
              <verified-outlined class="login-icon-gray"/>
            </template>
          </a-input>
        </a-col>
        <a-col :span="7">
          <img :src="validCodeBase64" class="login-validCode-img" @click="loginCaptcha"/>
        </a-col>
      </a-row>
    </a-form-item>
    <a-form-item>
      <a-button type="primary" class="w-full" :loading="loading" round size="large" @click="login" style="width: 100%;"
      >登录
      </a-button>
    </a-form-item>
  </a-form>
</template>

<script>
export default {
  created() {
  },
  setup() {

  },
  data() {
    return {
      loading: false, // 登录按钮loading
      userForm: {
        account: undefined, // 用户帐号
        password: undefined, // 用户密码
        validCode: undefined // 验证码
      }
    };
  },
  methods: {
    /**
     * 刷新验证码
     */
    loginCaptcha() {

    },
    /**
     * 登录
     */
    login() {
      this.$message.warn('1111111');
    }
  }
};
</script>