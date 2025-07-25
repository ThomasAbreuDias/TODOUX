<script setup>
import Login from '@/components/Login.vue'
</script>

<template>
  <div class="login">
    <h2>Login Page</h2>
    <Login />
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .login {
    display: flex;
    flex-direction: column;
    text-align: center;
  }
}
</style>