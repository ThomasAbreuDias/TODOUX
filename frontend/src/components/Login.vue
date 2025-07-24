<template>
    <form id="login" action="login" method="post">
        <input type="email" name="mail" id="mail" required placeholder="Enter your mail">
        <input type="password" name="password" id="pw" required placeholder="Enter your password">
        <button type="submit">Login</button>
    </form>
</template>
<style scoped>
    form#login {
        display: flex;
        flex-direction: column;
        row-gap: 1em;
    }
</style>