<script setup>
import { defineProps, defineEmits, ref } from 'vue'
const props = defineProps({
  id: Number,
  title: {
    type: String,
    required: true,
  },
  done: Boolean
})

const emit = defineEmits(['update:done', 'update:title', 'delete'])
const isEditing = ref(false)
const editText = ref(props.title)

//------------------------
//Logical part of the component
//------------------------

// Edit functions
function startEdit() {
  isEditing.value = true
  editText.value = props.title
}
function cancelEdit() {
  isEditing.value = false
  editText.value = props.title
}

function saveEdit() {
  if (editText.value.trim()) {
    emit('update:title', { id: props.id, title: editText.value.trim() })
    isEditing.value = false
  }
}
//Update functions
function handleUpdate(event) {
  emit('update:done', event.target.checked)
}
// Delete functions 
function handleDelete() {
  emit('delete', props.id)
}

</script>
<template>
    <span class="todo-item">
        <!-- Edition mode -->
         <template v-if="isEditing">
          <input 
            class="edit-input"
            v-model="editText"
            @keyup.enter="saveEdit"
            @keyup.esc="cancelEdit"
          />
          <button @click="saveEdit">✔️</button>
          <button @click="cancelEdit">⛔</button>
         </template>
        <!-- Display mode -->
         <template v-else>
            <input type="checkbox" :checked="done" @change="handleUpdate">
            <label :class="{done}">{{ title }}</label>
            <button @click="startEdit">✏️</button>
         </template>
        <button @click="handleDelete">🗑️</button>
    </span>
</template>

<style>
  .edit-input {
    max-width: 60%;
  }
@media (min-width: 1024px) {
  .todo-item {
    display: inline-flex;
    align-items: center;
    padding-top: 1em;
  }
  .todo-item > label {
    margin-right: 0.5em;
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