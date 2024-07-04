<template>
<div class="background">
    <BannerProduct/>
    <h1>Все процессоры</h1>
    <div class="sort">
      <div class="sort-by">
        <label>Сортировать по:</label>
        <select name="Сортировать по" v-model="column">
          <option  value="Company">Компания</option>
          <option  value="Model">Модель</option>
          <option  value="Cores">Ядра</option>
          <option  value="Threads">Потоки</option>
          <option  value="TechProcess">Техпроцесс</option>
          <option  value="price">Цена</option>
          <option  value="id">Id</option>
        </select>
      </div>
      <div class="sort-by" >
        <label> Направление</label>
        <select name="Direction" v-model="direction">
          <option  value="ASC">Увеличение</option>
          <option  value="DESC">Уменьшение</option>
        </select>
      </div>
      <button @click="Sort()" class="sort-button"><p>Сортировать</p></button>
    </div>
    <div  class="cards-wrapper">
    <div class="card" v-for="item in items" :key = 'item.id'>
      <SmallCard 
                :source = "item.ImageSrc"
                :title="item.Model"
                :core = "item.Cores"
                :threads = "item.Threads"
                :frequency = "item.BaseFrequency"
                :techprocess = "item.TechProcess"
                :price = "item.Price"
                :id = "item.id"
      />
    </div>
</div>
</div>
</template>


<script>
import axios from 'axios'
import SmallCard from '../components/SmallCard.vue';
import BannerProduct from '../components/BannerProduct.vue'
export default {
  data() {
    return {
      items: [],
      direction:'',
      column:'',
    };
  },
  methods: {
    Sort(){
      console.log(this.direction)
      console.log(this.column)
      axios.post('http://localhost:3000/sort', {
        direction:this.direction,
        column:this.column
      })
      setTimeout(()=>{
        axios.get('http://localhost:3000/sort')
      .then(response => {
        this.items = JSON.parse( JSON.stringify(response.data))
        if(this.items == null || this.items == undefined || this.items == []){
          location.reload()
        }
      })
      .catch(error => {
        console.error(error);
      });
      },200)
    }
  },
  components: {
    SmallCard,
    BannerProduct
  },
  mounted() {
    axios.get('http://localhost:3000/all')
      .then(response => {
        this.items = JSON.parse( JSON.stringify(response.data))
      })
      .catch(error => {
        console.error(error);
      });

  }
};
</script>

<style scoped>
.background {
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    width: 100%; 
    background-image: url('/src/assets/protuct-bg.png');
    padding-top: 15vh;
}
p {
  margin-top:300px;
}
h1{
  font-size: 55px;
  margin: 10vh auto;
}
.card {
  width: 23%;
  background-color: white;
  height: 100%;
  border-radius: 10px;
}
.cards-wrapper {
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-image: url('../assets/protuct-bg.png');
  display: flex;
  justify-content: start;
  gap:40px;
  width: 90%;
  flex-wrap: wrap;
  padding-bottom: 100px;
  margin:auto;
}
.sort-button{
  width: 20%;
  height: 80%;
}
.sort-button p {
  margin:0;
}
.sort {
  background-color: white;
  width: 80%;
  height: 100px;
  margin:100px auto;
  border-radius: 20px;
  display: flex;
  justify-content: space-around;
  align-items: center;
}

select{
  width: 150px;
}
.sort-by{
  display: flex;
  width: 20%;
  justify-content: space-between;
  align-items: center;
}
</style>
