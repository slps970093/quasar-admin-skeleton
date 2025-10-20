<template>
  <div class="login-container">
    <div class="login-card">
      <div class="login-header">
        <q-icon name="fa-solid fa-user-circle" size="4rem" color="primary" />
        <h2 class="login-title">歡迎登入</h2>
        <p class="login-subtitle">請輸入您的帳號密碼</p>
      </div>

      <q-form @submit="onSubmit" class="login-form">
        <q-input
          v-model="email"
          type="email"
          label="電子郵件"
          outlined
          :rules="[val => !!val || '請輸入電子郵件']"
          class="q-mb-md"
        >
          <template v-slot:prepend>
            <q-icon name="fa-solid fa-envelope" />
          </template>
        </q-input>

        <q-input
          v-model="password"
          :type="showPassword ? 'text' : 'password'"
          label="密碼"
          outlined
          :rules="[val => !!val || '請輸入密碼']"
          class="q-mb-md"
        >
          <template v-slot:prepend>
            <q-icon name="fa-solid fa-lock" />
          </template>
          <template v-slot:append>
            <q-icon
              :name="showPassword ? 'fa-solid fa-eye-slash' : 'fa-solid fa-eye'"
              class="cursor-pointer"
              @click="showPassword = !showPassword"
            />
          </template>
        </q-input>

        <div class="row justify-between items-center q-mb-lg">
          <q-checkbox v-model="rememberMe" label="記住我" />
          <q-btn flat color="primary" label="忘記密碼？" class="text-caption" />
        </div>

        <q-btn
          type="submit"
          color="primary"
          label="登入"
          class="full-width q-mb-md"
          size="lg"
          :loading="loading"
        >
          <template v-slot:loading>
            <q-spinner-hourglass class="on-left" />
            登入中...
          </template>
        </q-btn>

        <div class="text-center">
          <q-btn flat color="grey-7" label="還沒有帳號？立即註冊" />
        </div>
      </q-form>

      <q-separator class="q-my-lg" />

      <div class="social-login">
        <p class="text-center text-grey-6 q-mb-md">或使用以下方式登入</p>
        <div class="row q-gutter-sm">
          <q-btn
            outline
            color="red"
            icon="fab fa-google"
            label="Google"
            class="col"
            @click="socialLogin('google')"
          />
          <q-btn
            outline
            color="blue"
            icon="fab fa-facebook"
            label="Facebook"
            class="col"
            @click="socialLogin('facebook')"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useQuasar } from 'quasar'

const router = useRouter()
const $q = useQuasar()

const email = ref('')
const password = ref('')
const showPassword = ref(false)
const rememberMe = ref(false)
const loading = ref(false)

const onSubmit = async () => {
  loading.value = true
  
  // 模擬登入過程
  setTimeout(() => {
    loading.value = false
    
    $q.notify({
      type: 'positive',
      message: '登入成功！',
      icon: 'fa-solid fa-check-circle'
    })
    
    // 登入成功後跳轉到 dashboard
    router.push('/dashboard')
  }, 1500)
}

const socialLogin = (provider: string) => {
  $q.notify({
    type: 'info',
    message: `${provider} 登入功能開發中...`,
    icon: 'fa-solid fa-info-circle'
  })
}
</script>

<style scoped>
.login-container {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 20px;
}

.login-card {
  background: white;
  border-radius: 16px;
  padding: 40px;
  width: 100%;
  max-width: 400px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
}

.login-header {
  text-align: center;
  margin-bottom: 32px;
}

.login-title {
  margin: 16px 0 8px 0;
  color: #333;
  font-weight: 600;
}

.login-subtitle {
  color: #666;
  margin: 0;
  font-size: 14px;
}

.login-form {
  margin-bottom: 24px;
}

.social-login {
  margin-top: 24px;
}

@media (max-width: 480px) {
  .login-card {
    padding: 24px;
    margin: 16px;
  }
}
</style>