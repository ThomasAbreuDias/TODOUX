<script setup>
import Register from '@/components/Register.vue'
</script>

<template>
  <div class="register">
    <h2>Register Page</h2>
    <Register />
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .register {
    display: flex;
    flex-direction: column;
    text-align: center;
    }
  }
</style>