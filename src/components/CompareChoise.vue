<template>
    <div class="background">
        <h1>Сравнение процессоров</h1>
        <form>
            <div class="select-wrapper">
                <h2>Модель 1</h2>
                <select name="Модель 1" v-model="m1">
                <option v-for="model in models" :key = 'model.Model' :value="model.Model">{{ model.Model }}</option>
                
                </select>
            </div>
            <div class="select-wrapper">
                <h2>Модель 2</h2>
                <select name="Модель 2" v-model="m2">
                    <option v-for="model in models" :key = 'model.Model' :value="model.Model">{{ model.Model }}</option> 
                </select>
            </div>
            
        </form>
        <router-link :to="{name: 'compare', params:{model1: m1, model2: m2}}"><button class="compare-button"><p>Сравнить</p></button></router-link>
    </div>
    </template>
    
    <style scoped>
    .background {
        min-height: 80vh;
        background-color: #040015;
        padding:15vh 0 5vh 0;
        background-image: url(@/assets/compare-bg.png);
        background-size: cover;
        background-repeat: no-repeat;
    }
    form {
        width: 80%;
        display: flex;
        justify-content: space-between;
        margin:100px auto;
    }
    .select-wrapper {
        width: 40%;
        height: 150px;
        font-size: 15px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        text-align: center;
    }
    h2{
        font-size: 20px;
        color:white;
        font-family: 'Comfortaa';
    }
    select{
        text-align: center;
        width: 100%;
        height: 60%;
        border-radius: 20px;
    }
    select option{
        height: 150px;
    }
    button{
        margin: auto;
        font-size: 35px;
    }
    </style>
    
    
    <script>
    import axios from 'axios'
    export default {
        data(){
            return {
                models:[],
                m1:'Модель 1',
                m2:'Модель 2',
            }
        },
        mounted(){
            axios.get('http://localhost:3000/modelCompare')
            .then(response => {
                this.models = JSON.parse( JSON.stringify(response.data))
                console.log(this.models)
                this.mod1=this.mod2 = this.models.Model[0]
            })
            .catch(error => {
                console.error(error);
            });
        }
    }
    </script>