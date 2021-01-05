<template>
    <div id="login">
        <Login></Login>
    </div>
</template>

<script>
import Login from '../components/login/LoginComponent.vue';

export default {
   name: 'login',
   components: {
       Login
   }

}
</script>

<style lang="scss" scoped>
    #login {
        background-image: url('../assets/login/login_bg.jpg');
        height: 100%; /* You must set a specified height */
        background-position: center; /* Center the image */
        background-repeat: no-repeat; /* Do not repeat the image */
        background-size: cover;
        overflow: auto;
    }
</style>