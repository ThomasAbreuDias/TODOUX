<template>
    <form id="register" action="register" method="post">
        <input type="email" name="mail" id="mail" required placeholder="Enter your mail">
        <input type="password" name="password" id="pw" required placeholder="Choose your password">
        <input type="password" name="password-confirmation" id="pwc" required placeholder="Confirm your password">
        <button type="submit">Register</button>
    </form>
</template>
<style scoped>
    form#register {
        display: flex;
        flex-direction: column;
        row-gap: 1em;
    }
</style>