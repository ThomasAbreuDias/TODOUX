<script setup>
import { defineProps, defineEmits } from 'vue'
const props = defineProps({
  id: Number,
  title: {
    type: String,
    required: true,
  },
  done: Boolean
})


const emit = defineEmits(['update:done', 'delete'])

function handleDelete(){
  emit('delete', props.id)
}

</script>
<template>
    <span class="todo-item">
        <input type="checkbox" :checked="done" @change="emit('update:done', $event.target.checked)">
        <label :class="{done}">{{ title }}</label>
        <button @click="handleDelete">🗑️</button>
    </span>
</template>

<style>
@media (min-width: 1024px) {
  .todo-item {
    padding-top: 1em;
  }
  .todo-item > [type="checkbox"] {
    margin-right: 1em;
  }
  .todo-item > [type="checkbox"]:checked{
    text-decoration: line-through;
  }
  .done {
    text-decoration: line-through;
    color: gray;
  }
}
</style>