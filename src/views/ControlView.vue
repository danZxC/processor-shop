<template>
   <div class="background">
    <div class="title-wrapper">
          <h1>Панель управления</h1>
        <router-link :to="{name: 'CreateUpdate', params: {action: 'Добавить',id:' '}}"><button class="add-button"><p>Добавить</p></button></router-link>
    </div>
    <div class="control-wrapper" v-for="item in items" :key="item.id">
      <ConntrolCard
        :model="item.Model"
        :company = 'item.Company'
        :source = 'item.ImageSrc'
        :id="item.id"
      />
    </div>
   </div>
</template>
<style scoped>

.title-wrapper {
  padding:15vh 0 5vh 0;
  margin: auto;
  display: flex;
  justify-content: space-between;
  width: 90%;
  align-items: center;
  height: 10vh;
}
h1{
    font-family: 'Comfortaa';
    font-size: calc(40px + 16 * (100vw / 1920));
    margin-top: 0;
}

.add-button{
  width: 100%;
  height: 100%;
  border-radius: 10px;
}
.background {
  min-height: 95vh;
    background-color: #040015;
    padding-bottom: 5vh;
}
.column{
  display: flex;
  gap:50px;
  width: 45%;
  align-items: center;
  flex-direction: column;

}

.control-wrapper {
  display: flex;
  width: 90%;
  margin:auto;
  height: 10vh;
  justify-content: space-around;
  align-items: center;
  background-color: white;
  border-radius: 20px;
  margin-bottom: 5vh;
}
.control-wrapper:last-child{

  margin-bottom:0;
}
form {
  display: flex;
  width: 90%;
  height: 0;
  opacity: 0;
  justify-content: space-between;
  margin: 0 auto 0vh auto;
}

form.active{
  height: auto;
  transition:  1s;
  opacity: 1;  
  margin: 0 auto 10vh auto;
}

.recommended {
  display: flex;
  color:white;
  font-size: calc(10px + 16 * (100vw / 1920));

  text-align: left;
  justify-content: space-between;
  width: 100%;
  align-items: center;
}



input {
    width: 100%;
    height: 10vh;
    border-radius: 20px;
    text-align: center;
    font-size: calc(5px + 16 * (100vw / 1920));
}
input::placeholder,input{
  font-family: 'Comfortaa';
 font-size: calc(5px + 16 * (100vw / 1920));
  letter-spacing: .3em;
}

a{
  width: 30%;
  height: 10vh;
  border-radius: 20px;
}

</style>



<script>
import axios from 'axios'
import ConntrolCard from '@/components/ControlCard.vue'

export default {
  components:{
    ConntrolCard
  },
  data() {
    return {
      addProduct:{
        imgSrc:'',
        model:'',
        baseFrequency:'',
        cores:'',
        techprocess:'',
        geekMultiScore:'',
        geekSingleScore:'',
        price:'',

        company:'',
        maxFrequency:'',
        threats:'',
        memory:'',
        passmark:'',
        FireStrike:'',
        recommended:'0'
      },
      items: [],
      AddViewToogle: false,
      WatchViewToggle: false,
    };
  },
  methods: {

  },

  mounted() {
    axios.get('http://localhost:3000/all')
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