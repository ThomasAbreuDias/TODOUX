<script setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
})
</script>
<template>
    <span>
        <input type="checkbox" name="chx" id="">
        <label for="chx">{{ title }}</label>
    </span>
</template>
