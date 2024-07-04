<template>
    <div class="bg background">
        <div class="wrapper">
            <div class="title-wrapper">
                <h1>Сейчас популярно</h1>
                <router-link :to="{name:'product'}"><button class="back-button"><p>Более</p></button></router-link>
            </div>
            <div class="cards-wrapper">
              <div class="card" v-for="item in items" :key = 'item.id'>
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

    </div>
</template>

<style scoped>
.wrapper {
  flex-direction: column;
  justify-content: space-evenly;
  height: 100vh;
}
.title-wrapper {
  margin:10vh auto 0 auto;
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
  height: 10vh;
}

h1{
    font-family: 'Comfortaa';
    font-size: calc(40px + 16 * (100vw / 1920));
    margin-top: 0;
}
.background {
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    width: 100%; 
    background-image: url('../assets/bg-main3.png');
    height: 100vh;
}
button {
  width: 100%;
  height: 100%;
  border-radius: 10px;
}
a{
  width: 30%;
  height: 100%;
}
.cards-wrapper {
  display: flex;
  justify-content: start;
  gap:40px;
  width: 100%;
  height: 70vh;
  flex-wrap: wrap;
}

.card {
  width: 23%;
  background-color: white;
  height: 100%;
  border-radius: 10px;
}
</style>


<script>
import axios from 'axios'
import SmallCard from './SmallCard.vue'
export default {
  data() {
    return {
      items: [],
    };
  },
  components: {
    SmallCard,
  },
  mounted() {
    axios.get('http://localhost:3000/general')
      .then(response => {
        this.items = JSON.parse( JSON.stringify(response.data))
        if(this.items == null || this.items == undefined || this.items == []){
          location.reload()
        }
      })
      .catch(error => {
        console.error(error);
      });
  }
};
</script>
