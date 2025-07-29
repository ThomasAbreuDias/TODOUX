<script setup>
import { ref, onMounted, watch } from 'vue';
import TodoItem from './TodoItem.vue'

const todos = ref([])
const newTodo = ref('')

onMounted(() => {
  const stored = localStorage.getItem('todos')
  if (stored) {
    todos.value = JSON.parse(stored)
  }
})
watch(todos, (newVal) => {
  localStorage.setItem('todos', JSON.stringify(newVal))
}, {deep: true})

function addTodo() {
  if (newTodo.value.trim() !== '') {
    todos.value.push({
      id: Date.now(), 
      title: newTodo.value
    })
    newTodo.value = '' // Réinitialiser l’input
  }
}

function updateTitle({ id, title }) {
  let todo = todos.value.find(t => t.id === id)
  if (todo) todo.title = title
}

function deleteTodo(id) {
  todos.value = todos.value.filter(todo => todo.id !== id)
}
</script>
<template>
    <div class="todos-settings">
        <label for="todo-text">Add things to do: </label>
        <input type="text" id="todo-text" v-model="newTodo" @keyup.enter="addTodo">
        <button type="button" @click="addTodo" >+</button>
    </div>
    <div class="todos-container">
        <TodoItem 
          v-for="todo in todos" 
          :key="todo.id" 
          :id="todo.id" 
          :title="todo.title" 
          v-model:done="todo.done"
          @update:title="updateTitle"
          @delete="deleteTodo" 
        />
    </div>
</template>

<style>
  .todos-container {
    display: flex;
    flex-direction: column;
  }
</style>