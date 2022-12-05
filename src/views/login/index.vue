<template>
  <div class="login_background">
    <div class="login_background_front"></div>
    <div class="login_main">
      <div class="login_config">
        <i style="font-size-adjust: inherit;">{{ time }}</i>
        <!--        <a-dropdown>-->
        <!--          <global-outlined/>-->
        <!--          <template #overlay>-->
        <!--            <a-menu>-->
        <!--              <a-menu-item-->
        <!--                  v-for="item in lang"-->
        <!--                  :key="item.value"-->
        <!--                  :command="item"-->
        <!--                  :class="{ selected: config.lang === item.value }"-->
        <!--                  @click="configLang(item.value)"-->
        <!--              >-->
        <!--                {{ item.name }}-->
        <!--              </a-menu-item>-->
        <!--            </a-menu>-->
        <!--          </template>-->
        <!--        </a-dropdown>-->
      </div>
      <div class="login-form">
        <a-card>
          <div class="login-header">
            <div class="logo">
              <img src="/img/logo.png"/>
              <label>脚手架</label>
            </div>
          </div>
          <a-tabs v-model:activeKey="activeKey">
            <a-tab-pane key="userAccount" tab="帐号密码">
              <user-login-form/>
            </a-tab-pane>
            <a-tab-pane key="userSms" tab="手机号登录" force-render>
              <phone-login-form/>
            </a-tab-pane>
          </a-tabs>
          <three-login/>
        </a-card>
      </div>
    </div>
  </div>
</template>
<script>
import phoneLoginForm from './mobile.vue';
import userLoginForm from './user.vue';

export default ({
  components: {
    phoneLoginForm,
    userLoginForm
  },
  /**
   * 创建时需要执行的
   */
  created() {
    this.getTime();
    setInterval(() => {
      this.getTime();
    }, 1000);
  },
  data() {
    return {
      time: undefined,
      activeKey: 'userSms'
    };
  },
  setup() {

  },
  methods: {
    getTime() {
      this.time = this.$dayjs().format('YYYY年MM月DD日 HH:mm:ss');
    }
  }
});
</script>

<style lang="less">
@import 'login';
</style>
