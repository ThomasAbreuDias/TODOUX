<script setup>
import TodoItem from './TodoItem.vue'
</script>
<script>
export default {
    data() {
        return {
        todos: [
            { id: 1, title: 'My journey with Vue' },
            { id: 2, title: 'Blogging with Vue' },
            { id: 3, title: 'Why Vue is so fun' }
        ]
        }
    }
}
</script>
<template>
    <span>
        <label for="todo-text">Add things to do </label>
        <input type="text" id="todo-text">
        <button type="button">+</button>
    </span>
    <div class="todos-container">
        <TodoItem v-for="todo in todos" :key="todo.id" :title="todo.title"/>
    </div>
</template>

<style>
@media (min-width: 1024px) {
  .todos-container {
    display: flex;
    flex-direction: column;
    text-align: center;
    }
  }
</style>