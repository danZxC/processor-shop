<template>
    <div class="background">
        <h1>Введите логин и пароль администратора</h1>
        <input type="text" placeholder="login" v-model="login">
        <input type="password" placeholder="password" v-model="password">
        <button @click="Check" class="back-button"><p>Войти</p></button>
    </div>
</template>

<style scoped>
input{
    margin-bottom:50px;
}
.background {
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    width: 100%; 
    height: 85vh;
    background-image: url('/src/assets/protuct-bg.png');
    padding-top: 15vh;
}
h1{
    font-family: 'Comfortaa';
    font-size: 30px;
    padding: 50px 0;
}
button{
    margin: auto;
    width: 50%;
    height: 100px;
}
</style>

<script>
export default {
    data () {
        return {
            password: '',
            login: '', 
        }
    },
    methods: {
        Check() {
            if (this.password === '123321'&&this.login === 'admin') {
                this.errorMessage = '';
                this.$router.push('/control');
            } else {
                alert('Неправильный логин или пароль')
            }
            
        }
    }
}
</script>