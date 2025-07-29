<script setup>
import TodoItem from './TodoItem.vue'
import { ref } from 'vue';
</script>
<script>
const todos = ref([
  { id: 1, title: 'My journey with Vue', done: false },
  { id: 2, title: 'Blogging with Vue', done: true },
  { id: 3, title: 'Why Vue is so fun', done: false }
])


const newTodo = ref('')

function addTodo() {
  if (newTodo.value.trim() !== '') {
    todos.value.push({
      id: Date.now(), // id unique
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