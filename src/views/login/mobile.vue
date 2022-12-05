<template>
  <a-form ref="phoneLoginFormRef" :model="phoneFormData">
    <a-form-item name="phone">
      <a-input v-model:value="phoneFormData.phone" placeholder="请输入手机号" size="large">
        <template #prefix>
          <mobile-outlined class="text-black text-opacity-25"/>
        </template>
      </a-input>
    </a-form-item>
    <a-form-item name="phoneValidCode">
      <a-row :gutter="8">
        <a-col :span="17">
          <a-input
              v-model:value="phoneFormData.phoneValidCode"
              placeholder="请输入验证码"
              size="large"
          >
            <template #prefix>
              <mail-outlined class="text-black text-opacity-25"/>
            </template>
          </a-input>
        </a-col>
        <a-col :span="7">
          <a-button size="large" style="width: 100%" @click="getPhoneValidCode" :disabled="state.smsSendBtn">
            {{ (!state.smsSendBtn && '发送验证码') || state.time + ' s' }}
          </a-button>
        </a-col>
      </a-row>
    </a-form-item>
    <a-form-item>
      <a-button type="primary" style="width: 100%" :loading="loading" round size="large" @click="submitLogin">
        登录
      </a-button>
    </a-form-item>
  </a-form>
  <a-modal
      v-model:visible="visible"
      :width="400"
      title="人机验证"
      @cancel="handleCancel"
      @ok="handleOk"
  >
    <a-form ref="phoneLoginFormModalRef" :model="phoneFormModalData">
      <a-form-item name="validCode">
        <a-row :gutter="8">
          <a-col :span="17">
            <a-input
                v-model:value="phoneFormModalData.validCode"
                placeholder="请输入机器验证码"
                size="large"
            >
              <template #prefix>
                <verified-outlined class="text-black text-opacity-25"/>
              </template>
            </a-input>
          </a-col>
          <a-col :span="7">
            <img
                :src="validCodeBase64"
                style="border: 1px solid var(--border-color-split); cursor: pointer; width: 100%; height: 40px"
                @click="getPhonePicCaptcha"
            />
          </a-col>
        </a-row>
      </a-form-item>
    </a-form>
  </a-modal>
</template>
<script setup>
import { reactive } from 'vue';

const state = reactive({
  time: 10,
  smsSendBtn: false
});
const phoneFormData = reactive({
  validCode: undefined,
  phoneValidCode: undefined,
  phone: undefined
});
const phoneFormModalData = reactive({
  validCode: undefined
});
/**
 * 获取验证码
 */
const getPhoneValidCode = () => {
  state.smsSendBtn = true;
  state.time = 10;
  const time = setInterval(() => {
    state.time--;
    if (state.time === 0) {
      state.smsSendBtn = false;
      clearInterval(time);
    }
  }, 1000);
};
</script>