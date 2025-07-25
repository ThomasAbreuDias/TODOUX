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
function deleteTodo(id) {
  console.log(id);
  todos.value = todos.value.filter(todo => todo.id !== id)
}
</script>
<template>
    <span>
        <label for="todo-text">Add things to do </label>
        <input type="text" id="todo-text" v-model="newTodo">
        <button type="button" @click="addTodo">+</button>
    </span>
    <div class="todos-container">
        <TodoItem 
          v-for="todo in todos" 
          :key="todo.id" 
          :id="todo.id" 
          :title="todo.title" 
          v-model:done="todo.done"
          @delete="deleteTodo" 
        />
    </div>
</template>


