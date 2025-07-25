<script setup>
import TodosContainer from '@/components/Todos/TodosContainer.vue'
</script>

<template>
  <div class="todos">
   <TodosContainer />
  </div>
</template>
<style>
@media (min-width: 1024px) {
  .todos-container {
    display: flex;
    flex-direction: column;
    }
  }
</style>