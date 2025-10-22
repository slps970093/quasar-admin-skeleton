<template>
  <q-layout>
    <q-page-container>
      <q-page class="flex bg-image flex-center">
        <q-card v-bind:style="$q.screen.lt.sm?{'width': '80%'}:{'width':'30%'}">
          <q-card-section>
            <q-avatar size="103px" class="absolute-center shadow-10">
              <img src="//next-quasar-admin.netlify.app/profile.svg"
            </q-avatar>
          </q-card-section>
          <q-card-section>
            <div class="text-center q-pt-lg">
              <div class="col text-h6 ellipsis">
                Log in
              </div>
            </div>
          </q-card-section>
          <q-card-section>
            <q-form
              class="q-gutter-md"
              @submit="onSubmit"
            >
              <q-input
                v-model="email"
                type="email"
                label="電子郵件"
                outlined
                :rules="[val => !!val || '請輸入電子郵件']"
                class="q-mb-md"
              />

              <q-input
                v-model="password"
                :type="showPassword ? 'text' : 'password'"
                label="密碼"
                outlined
                :rules="[val => !!val || '請輸入密碼']"
                class="q-mb-md"
              />

              <div>
                <q-btn label="Login"  type="submit" color="primary" :loading="loading">
                  <template v-slot:loading>
                    <q-spinner-hourglass class="on-left" />
                    登入中...
                  </template>
                </q-btn>
              </div>
            </q-form>
          </q-card-section>
        </q-card>
      </q-page>
    </q-page-container>
  </q-layout>
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

</script>

<style scoped>
.bg-image {
  background-image: linear-gradient(135deg, #7028e4 0%, #e5b2ca 100%);
}
</style>
