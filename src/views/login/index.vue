<template>
  <div class="login">
    <div class="title">积木碳云 3.7.0</div>
    <div class="login-box">
      <div class="login-title">登录</div>
      <a-form
        ref="formRef"
        size="large"
        :model="loginForm"
        @submit="handleSubmit"
      >
        <a-form-item
          field="username"
          :rules="[{ required: true, message: '用户名不能为空' }]"
          :validate-trigger="['change']"
          hide-label
        >
          <a-input
            v-model="loginForm.username"
            size="large"
            placeholder="请输入用户名"
            allow-clear
            autocomplete="username"
          >
            <template #prefix>
              <icon-user />
            </template>
          </a-input>
        </a-form-item>
        <a-form-item
          field="password"
          :rules="[
            { required: true, message: '密码不能为空' },
            { minLength: 6, maxLength: 20, message: '长度在 6 到 20 个字符' },
          ]"
          :validate-trigger="['change', 'blur']"
          hide-label
        >
          <a-input-password
            v-model="loginForm.password"
            placeholder="请输入密码"
            allow-clear
            autocomplete="current-password"
          >
            <template #prefix>
              <icon-lock />
            </template>
          </a-input-password>
        </a-form-item>
        <a-button
          type="primary"
          class="login-button"
          size="large"
          html-type="submit"
          long
          :loading="loading"
        >
          登录
        </a-button>
      </a-form>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { ref, reactive } from 'vue';
  import { useUserStore } from '@/store';
  import { useRouter } from 'vue-router';
  import { LoginData } from '@/api/user';
  import { ValidatedError } from '@arco-design/web-vue/es/form/interface';

  const router = useRouter();
  const userStore = useUserStore();
  const loading = ref(false);
  const loginForm = reactive({
    username: 'nene',
    password: '123456',
    sysTemType: 'CARBON_DATA',
  });

  interface FormSubmitResult {
    errors: Record<string, ValidatedError> | undefined;
    values: Record<string, any>;
  }

  const handleSubmit = async ({ errors, values }: FormSubmitResult) => {
    if (!errors) {
      await userStore.login(values as LoginData);
      router.push({ name: 'carbonDashboard' });
    }
  };
</script>

<style lang="less" scoped>
  .login {
    height: 100vh;
    background: url('../../assets/loginBg.svg') no-repeat;
    background-size: cover;
    padding-top: 150px;

    .title {
      text-align: center;
      margin: 0 auto;
      font-size: 30px;
      color: var(--color-neutral-10);
      font-weight: 600;
    }

    .login-box {
      background: #ffffff;
      box-shadow: 1px 2px 4px 3px rgba(207, 207, 207, 0.5);
      border-radius: 8px;
      width: 30%;
      min-width: 400px;
      padding: 40px;
      display: flex;
      margin: 40px auto 0;
      flex-direction: column;

      .login-title {
        font-size: 24px;
        color: var(--color-neutral-8);
        letter-spacing: 5.87px;
        text-align: center;
        font-weight: 500;
        margin-bottom: 30px;
      }

      .username,
      .password {
        position: relative;
      }

      .username > img:first-child,
      .password > img:first-child {
        position: absolute;
        left: 10px;
        top: 50%;
        z-index: 999;
        width: 20px;
        transform: translateY(-50%);
      }

      .pwd-eye {
        cursor: pointer;
        position: absolute;
        right: 10px;
        top: 50%;
        z-index: 999;
        width: 20px;
        transform: translateY(-50%);
      }

      .login-button {
        margin: 30px 0 80px;
      }

      :deep(.arco-form-item) {
        margin-bottom: 30px;
      }
    }
  }
</style>
