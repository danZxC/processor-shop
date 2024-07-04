<template>
    <div class="bg1 background">
        <div class="title-wrapper">
            <img :src="item.ImageSrc" alt="">
            <h1>{{ item.Model }}</h1>
            <p>{{ item.Company }}</p>
         </div>
    </div>
    <div class="bg2 background">
        <div class="character-wrapper">
            <h1 class="character-title">Характеристики</h1>
            <div class="character">
                  <div class="character-inside-wrapper">
                    <h2>Базовая частота</h2>
                    <h3>{{ item.BaseFrequency }} Mhz</h3>
                  </div>
            </div>
            <div class="character">
                  <div class="character-inside-wrapper">
                    <h2>Максимальная частота</h2>
                    <h3>{{ item.BaseFrequency }} Mhz</h3>
                  </div>
            </div>
            <div class="character">
                  <div class="character-inside-wrapper">
                    <h2>Количество потоков</h2>
                    <h3>{{ item.Threads}}</h3>
                  </div>
            </div>
            <div class="character">
                  <div class="character-inside-wrapper">
                    <h2>Количество ядер</h2>
                    <h3>{{ item.Cores }}</h3>
                  </div>
            </div>
            <div class="character">
                  <div class="character-inside-wrapper">
                    <h2>Техпроцесс</h2>
                    <h3>{{ item.TechProcess }}nm</h3>
                  </div>
            </div>
            <div class="character">
                  <div class="character-inside-wrapper">
                    <h2>Тип оперативной памяти</h2>
                    <h3>{{ item.SupportedMemory }}</h3>
                  </div>
            </div>
        </div>
    </div>
    <div class="bg3 background">
        <div class="test-list">
            <h3 @click="GeekMulty(item.GeekBench_5_MultiCore, 20000)">GeekBench 5 Multi-Core</h3>
            <h3 @click="GeekMulty(item.Passmark, 20000)">Passmark</h3>
            <h3 @click="GeekMulty(item.GeekBench_5_SingleCore, 5000)">GeekBench 5 Single-Core</h3>
            <h3 @click="GeekMulty(item.DMark_Fire_Strike_Physics, 25000)">3DMark Fire Strike Physics</h3>
        </div>
        <KeepAlive :key="keep"> <ProgressBar :currentValue1 = "currentBarValue" :show="false" :width1 = "(currentBarValue/maxBarvalue)*100"/></KeepAlive>
        <div class="buttons">    
            <button  class="price"><p>{{item.Price}}$</p></button>
            <a :href="'https://www.aliexpress.com/w/wholesale-'+ item.Model +'.html'"><button  class="buy"><p>Купить</p></button></a>
        </div>
        <h1>Рекомендуемо</h1>
        <div class="cards-wrapper">
              <div class="card" v-for="item in smallcard" :key = 'item.id'>
               <SmallCard 
               :source = "item.ImageSrc"
                :title="item.Model"
                :core = "item.Cores"
                :threads = "item.Threads"
                :frequency = "item.BaseFrequency"
                :techprocess = "item.TechProcess"
                :price = "item.Price"
                :id="item.id"
                />
              </div>
        </div>
    </div>


</template>


<script>
import axios from 'axios';
import ProgressBar from '@/components/ProgressBar.vue'
import SmallCard from './SmallCard.vue';

export default {
    components:{
        ProgressBar,
        SmallCard
    },
    props:['id'],
    data(){
        return {
            rout: this.$route.params.id,
            item:{},
            currentBarValue:1,
            maxBarvalue:20000,
            keep:0,
            smallcard:[],
        }
    },
    methods:{
        GeekMulty(current, max){
            this.currentBarValue = current,
            this.maxBarvalue = max
            this.keep +=1
        }
    },
    mounted(){
        
        axios.post('http://localhost:3000/cardBig', {
            id:this.rout
        })
        axios.get('http://localhost:3000/cardBig')
        .then(response => {
            this.item = JSON.parse( JSON.stringify(response.data[0]))
            if(this.item == null || this.item == undefined || this.item == {}){
          location.reload()
        }
            this.currentBarValue = this.item.GeekBench_5_MultiCore
        })
        .catch(error => {
            console.error(error);
        });

       setTimeout(()=>{
        axios.post('http://localhost:3000/cardBigSmall', {
            company:this.item.Company,
            price: this.item.Price,
            geekMulty: this.item.GeekBench_5_MultiCore,
            memory: this.item.SupportedMemory
        })
        axios.get('http://localhost:3000/cardBigSmall')
        .then(response => {
            this.smallcard = JSON.parse( JSON.stringify(response.data))
            
        })
        .catch(error => {
            console.error(error);
        });
       },100)
        

    }
}

</script>


<style scoped>
.background{
    background-repeat: no-repeat;
    background-size: cover;
}
.bg1{
    background-image: url('@/assets/bigCard-bg1.png');
    height: 100vh;
}
.bg2{
    background-image: url('@/assets/bigCard-bg2.png');
    background-position: center;
    height: 110vh;
}
.bg3{
    background-color: #040015;
}
h1{
    font-family: 'Comfortaa';
    margin-top:0vh;
    font-size: calc(40px + 16 * (100vw / 1920));
    letter-spacing: 10px;
}
.buttons{
    width: 90%;
    display: flex;
    justify-content: space-between;
    margin:100px auto 5vh auto;
}
a{
    width: 50%;
    height: 100%;
}
.title-wrapper {
    padding-top:150px;
    height: 70vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    
}
.test-list{
    display: flex;
    width: 90%;
   justify-content: space-between;
    margin: auto;
    padding-top: 150px;
}
.price{
    width: 30%;
}
.buy{
    width: 100%;
}
.test-list h3 {
    padding-bottom: 15px;
    font-size: 25px;
    color:white;
    font-family: 'Orbitron';
    border-bottom:3px solid #040015;
}
.test-list h3:hover {
    display: block;
    cursor: pointer;
    border-bottom: 3px solid #7800FF;
    box-sizing:border-box;
}
.title-wrapper img {
    height: 80%;   
}

.title-wrapper p {
    color:white;
    font-size: calc(20px + 16 * (100vw / 1920));
    font-family: 'Comfortaa';
}

.character-wrapper {
    display: flex;
    flex-direction: column;
    height: 100vh;
    width: 90%;
    margin:auto;
    justify-content: space-between;
    align-items: start;
    
}
.character-title{
    -webkit-text-fill-color: white;
}
.character {
    display: flex;
    background-color: white;
    width: 100%;
    justify-content: center;
    height: 10vh;
    align-items: center;
    border-radius: 20px;
}
.character-inside-wrapper{
    display: flex;
    width: 80%;
    height: 100%;
    justify-content: space-between;
    align-items: center;
}
h3 {
    color:#7800FF;
    font-size: calc(20px + 16 * (100vw / 1920));
    font-family: 'Orbitron';
}


.cards-wrapper {
  display: flex;
  justify-content: left;
  gap:30px;

  width: 90%;
  flex-wrap: wrap;
  padding: 100px 0 ;
  margin:auto;
}

.card {
  width: 23%;
  background-color: white;
  height: 100%;
  border-radius: 10px;
  margin-bottom: 50px;
}
</style>



