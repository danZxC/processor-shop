<template>
<div class="background">
    <div class="title-wrapper">
        <h1>Сравнение процессоров</h1>
        <router-link :to="{name: 'compareChoise'}"><button class="compare-button"><p>Вернуться</p></button></router-link>
    </div>
    <h1 class="comparison">{{ model1.Model }} VS {{ model2.Model }}</h1>
    <div class="compare-wrapper">
        <h2>Базовая частота</h2>
        <div class="compare-values">
            <h1>{{ model1.BaseFrequency }}</h1>
            <img :src= "require('@/assets/'+images[0])" alt="">
            <h1>{{ model2.BaseFrequency }}</h1>
        </div>
    </div>
    <div class="compare-wrapper">
        <h2>Максимальная частота</h2>
        <div class="compare-values">
            <h1>{{ model1.MaxFrequency }}</h1>
            <img :src= "require('@/assets/'+images[1])" alt="">
            <h1>{{ model2.MaxFrequency }}</h1>
        </div>
    </div>
    <div class="compare-wrapper">
        <h2>Количество потоков</h2>
        <div class="compare-values">
            <h1>{{ model1.Threads }}</h1>
            <img :src= "require('@/assets/'+images[2])" alt="">
            <h1>{{ model2.Threads }}</h1>
        </div>
    </div>    
    <div class="compare-wrapper">
        <h2>Количество ядер</h2>
        <div class="compare-values">
            <h1>{{ model1.Cores }}</h1>
            <img :src= "require('@/assets/'+images[3])" alt="">
            <h1>{{ model2.Cores }}</h1>
        </div>
    </div>
    
    <div class="compare-wrapper">
        <h2>Техпроцесс</h2>
        <div class="compare-values">
            <h1>{{ model1.TechProcess }}</h1>
            <img :src= "require('@/assets/'+images[4])" alt="">
            <h1>{{ model2.TechProcess }}</h1>
        </div>
    </div>
    <div class="compare-wrapper">
        <h2>Тип оперативной памяти</h2>
        <div class="compare-values">
            <h1>{{ model1.SupportedMemory }}</h1>
            <img :src= "require('@/assets/'+images[5])" alt="">
            <h1>{{ model2.SupportedMemory }}</h1>
        </div>
    </div>
    <div class="test-list">
            <h2 @click="GeekMulty(model1.GeekBench_5_MultiCore, model1.GeekBench_5_MultiCore, 20000)">GeekBench 5 Multi-Core</h2>
            <h2 @click="GeekMulty(model1.Passmark,model2.Passmark, 20000)">Passmark</h2>
            <h2 @click="GeekMulty(model1.GeekBench_5_SingleCore,model2.GeekBench_5_SingleCore, 5000)">GeekBench 5 Single-Core</h2>
            <h2 @click="GeekMulty(model1.DMark_Fire_Strike_Physics,model2.DMark_Fire_Strike_Physics, 25000)">3DMark Fire Strike Physics</h2>
    </div>
    <KeepAlive :key="keep1"> <ProgressBar :show="true" :currentValue1 = "currentBarValue1"  :currentValue2 = "currentBarValue2" :width1 = "(currentBarValue1/maxBarvalue)*100" :width2 = "(currentBarValue2/maxBarvalue)*100"/></KeepAlive>
   
</div>
</template>


<script>
import axios from 'axios'
import ProgressBar from '@/components/ProgressBar.vue'
export default {
    components:{ProgressBar},
    data(){
        return {
            mod1: this.$route.params.model1,
            mod2:this.$route.params.model2,
            imageSrc:'less.png',
            model1:{},
            model2:{},
            models:[],
            images:['less.png', 'more.png','more.png','more.png','more.png','more.png'],
            currentBarValue1:1,
            currentBarValue2:2,
            maxBarvalue:20000,

            keep:0,
            keep1:0
        }
    },
    methods:{
        CheckImage(id,model1Compare,model2Compare){
            if(model1Compare > model2Compare){
                this.images[id] = 'more.png'
                console.log('more')
            }
            else if(model1Compare < model2Compare){
                this.images[id] = 'less.png'
                console.log('less')
            } else if(model1Compare == model2Compare){
                this.images[id] = 'equal.png'
                console.log('equal')
            }
        },
        GeekMulty(currentModel1,currentModel2, max){
            this.currentBarValue1 = currentModel1,
            this.currentBarValue2 = currentModel2,
            this.maxBarvalue = max
            this.keep +=1
            this.keep1+=1
        }
    },
    mounted(){
        axios.post('http://localhost:3000/Comparison', {
             model1:this.mod1,
             model2:this.mod2,
         })
         axios.get('http://localhost:3000/Comparison')
        .then(response => {
            this.models = JSON.parse( JSON.stringify(response.data))
            console.log(this.models)
            this.model1 = this.models[0]
            this.model2 = this.models[1]
            if(this.models[1]==undefined){
                this.model2 = this.model1
            }
            
        })
        .catch(error => {
            console.error(error);
        });
        setTimeout(()=>{
           this.CheckImage(0, this.model1.BaseFrequency,this.model2.BaseFrequency)
           this.CheckImage(1, this.model1.MaxFrequency,this.model2.MaxFrequency)
           this.CheckImage(2, this.model1.Threads,this.model2.Threads)
           this.CheckImage(3, this.model1.Cores,this.model2.Cores)
           this.CheckImage(4, this.model2.TechProcess,this.model1.TechProcess)
           this.CheckImage(5,Number(this.model1.SupportedMemory.split('')[3]), Number(this.model2.SupportedMemory.split('')[3]))
        },200)
        
    }
}
</script>

<style scoped>
.comparison{
    margin-top: 50px;
    font-size: 30px;
}
.background {
    min-height: 190vh;
    background-color: #040015;
    padding:15vh 0 10vh 0;
    background-image: url(@/assets/compare-bg.png);
    background-size: cover;
    background-repeat: no-repeat;
}
.test-list{
    display: flex;
    width: 90%;
   justify-content: space-between;
    margin: auto;
    padding-top: 150px;
}
.test-list h2:hover{
    cursor: pointer;
}
form {
    width: 80%;
    display: flex;
    justify-content: space-between;
    margin:100px auto;
}
select{
    width: 40%;
    height: 100px;
    border-radius: 20px;
    text-align: center;
    font-size: 15px;
}
option{
    height: 50px;
}
.title-wrapper {
    display: flex;
    width: 90%;
    justify-content: center;
    margin: auto;
}
.title-wrapper button {
    position: absolute;
    left:5%;
    width: 8%;
    border-radius: 10px;
    top:170px;
    height: 50px;
    z-index: 1;
}
.compare-wrapper{
    margin:150px auto 0 auto;
    display: flex;
    height: 100px;
    align-items: center;
    flex-direction: column;
    width: 90%;
    height: 150px;
}
.compare-values{
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
}
.compare-values h1{
    width: 20%;
}
h1{
    font-family: 'Comfortaa';
}


h2{
    color:white;
    font-size: 25px;
}
</style>

