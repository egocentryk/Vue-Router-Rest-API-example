<template>
    <div id="app">
        
        <img class="logo" alt="Vue logo" src="./assets/logo.png" />

        <nav>
            <router-link to='/'>Home</router-link>
            <router-link to='/countries'>Countries</router-link>
        </nav>
        <router-view />
    </div>
</template>

<script>

    export default {

    }
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }

    #app .logo {
        max-width: 40px;
        margin-bottom: 30px;
    }

    nav a {
        display: inline-block;
        margin: 10px;
    }
</style>
