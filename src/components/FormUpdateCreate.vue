<template>
   <div class="background">
    <div class="title-wrapper">
      
      <h1>{{ rout }}</h1>
      <router-link :to="{name:'control'}"><button class="back-button"><p>Назад</p></button></router-link>
    </div>
    <form >
            <div class="column">
              <div class="input-wrapper">
                  <label for="">Ссылка на картинку</label>
                  <input type="text" placeholder="Ссылка на картинку" v-model="addProduct.imgSrc">
              </div>
              <div class="input-wrapper">
                  <label for="">Производитель</label>
                  <input type="text" placeholder="Производитель" v-model="addProduct.company" class="ImageLink">
              </div>
              <div class="input-wrapper">
                  <label for="">Базовая Частота</label>
                  <input type="text" placeholder="Базовая частота" v-model="addProduct.baseFrequency" class="ImageLink">
              </div>
              <div class="input-wrapper">
                  <label for="">Количество ядер</label>
                  <input type="text" placeholder="Количество ядер" v-model="addProduct.cores" class="ImageLink">
              </div>
              <div class="input-wrapper">
                  <label for="">Техпроцесс</label>
                  <input type="text" placeholder="Техпроцесс" v-model="addProduct.techprocess" class="ImageLink">
              </div>
              <div class="input-wrapper">
                  <label for="">GeekBench 5 Multi-Core</label>
                  <input type="text" placeholder="GeekBench 5 Multi-Core" v-model="addProduct.geekMultiScore" class="ImageLink">
              </div>
              <div class="input-wrapper">
                  <label for="">GeekBench 5 Single-Core</label>
                  <input type="text" placeholder="GeekBench 5 Single-Core" v-model="addProduct.geekSingleScore" class="ImageLink">
              </div>
              <div class="input-wrapper">
                  <label for="">Цена</label>
                  <input type="text" placeholder="Стоимость" v-model="addProduct.price" class="ImageLink">|
              </div>
           </div>

          <div class="column">
              <div class="input-wrapper">
                  <label for="">Модель товара</label>
                  <input type="text" placeholder="Модель товара" v-model="addProduct.model" class="ImageLink">
              </div>
              <div class="input-wrapper">
                  <label for="">Максимальная частота</label>
                  <input type="text" placeholder="Максимальная частота" v-model="addProduct.maxFrequency" class="ImageLink">
              </div>

              <div class="input-wrapper">
                  <label for="">Количество потоков</label>
                  <input type="text" placeholder="Количество потоков" v-model="addProduct.threats" class="ImageLink">
              </div>
              <div class="input-wrapper">
                  <label for="">Поддерживаемая память</label>
                  <select name="Память" v-model="addProduct.memory">
                    <option  value="DDR3">DDR3</option>
                    <option  value="DDR4">DDR4</option>
                    <option  value="DDR5">DDR5</option>
                    <option  value="DDR6">DDR6</option>
                </select>
              </div>
              
              <div class="input-wrapper">
                  <label for="">Passmark</label>
                  <input type="text" placeholder="Passmark" v-model="addProduct.passmark" class="ImageLink">
              </div>
              <div class="input-wrapper">
                  <label for="">3DMark Fire Strike Physics</label>
                  <input type="text" placeholder="3DMark Fire Strike Physics" v-model="addProduct.FireStrike" class="ImageLink">
              </div>

           
           <div class="recommended">
             <label> Добавить в рекомендацию</label>
             <input type="checkbox" v-model = "addProduct.recommended">
           </div>
           <button @click="Check()"><p>{{ rout }}</p></button>
         </div>
    </form>
   </div>

</template>
 
 
 
<style scoped>
.background {
  min-height: 95vh;
    background-color: #040015;
    padding:15vh 0 5vh 0;
}
 .title-wrapper {
   padding:5vh 0 5vh 0;
   margin: auto;
   display: flex;
   justify-content: space-between;
   width: 90%;
   align-items: center;
   height: 10vh;
 }
.column{
  display: flex;
  gap:30px;
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
  justify-content: space-between;
  margin: 0 auto 0vh auto;
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

.input-wrapper{
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
}
label{
  color:white;
  width: 40%;
  text-align: left;
  line-height: 30px;
  font-size: 20px;
}



button{
  width: 100%;
  height: 10vh;
  border-radius: 20px;
  margin: 0vh auto 10vh auto;
}
a{
  width: 10%;
  height: 100%;
  display: block;
}
.back-button{
  width: 100%;
  height: 100%;
  border-radius: 10px;
  margin:0;
}
h1{
  margin-top:0;
  font-family: 'Comfortaa';
  
  font-size: calc(40px + 16 * (100vw / 1920));
}
</style>
 
<style>
input,select {
    width: 60%;
    height: 70px;
    border-radius: 20px;
    text-align: center;
    font-size: 15px;
}
input::placeholder,input{
  font-family: 'Comfortaa';
  font-size: 15px;
  letter-spacing: .3em;
}
</style>
 
 
<script>
 import axios from 'axios'
 
 export default {
   data() {
     return {
      check:false,
      rout: this.$route.params.action,
      routId: this.$route.params.id,
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
    Check(){
      axios.get('http://localhost:3000/all')
      .then(response => {
        this.items = JSON.parse( JSON.stringify(response.data))
        
        for(let i=0;i<this.items.length;i++){
          console.log(this.check)
          if(this.addProduct.model === this.items[i].Model){
            
            this.check = false
            console.log(this.check)
            break;
          }
          else{
            this.check = true
            console.log(this.check)
          }
        }

        if(this.rout === 'Добавить'){
            if(this.check==true){   
            axios.post('http://localhost:3000/create', {
                model:this.addProduct
            })
            alert('Элемент добавлен')   
            } 
            else if(!this.check){
              alert("Модель процессора уже существует")
            }
        }
       

       if(this.rout === 'Редактировать'){
          axios.post('http://localhost:3000/editing', {
             model:this.addProduct
         })
         alert('Элемент отредактирован')      
        }
      })
      .catch(error => {
        console.error(error);
      }); 

      

      
     
    },
     
  },
mounted(){

  axios.post('http://localhost:3000/edit', {id:this.routId})
  axios.get('http://localhost:3000/edit')
            .then(response => {
              console.log(response)
              this.addProduct.imgSrc = JSON.parse( JSON.stringify(response.data[0].ImageSrc))
              this.addProduct.company = JSON.parse( JSON.stringify(response.data[0].Company))
              this.addProduct.model = JSON.parse( JSON.stringify(response.data[0].Model))
              this.addProduct.baseFrequency = JSON.parse( JSON.stringify(response.data[0].BaseFrequency))
              this.addProduct.maxFrequency = JSON.parse( JSON.stringify(response.data[0].MaxFrequency))
              this.addProduct.threats = JSON.parse( JSON.stringify(response.data[0].Threads))
              this.addProduct.cores = JSON.parse( JSON.stringify(response.data[0].Cores))
              this.addProduct.techprocess = JSON.parse( JSON.stringify(response.data[0].TechProcess))
              this.addProduct.memory = JSON.parse( JSON.stringify(response.data[0].SupportedMemory))
              this.addProduct.price = JSON.parse( JSON.stringify(response.data[0].Price))
              this.addProduct.geekMultiScore = JSON.parse( JSON.stringify(response.data[0].GeekBench_5_MultiCore))
              this.addProduct.passmark = JSON.parse( JSON.stringify(response.data[0].Passmark))
              this.addProduct.geekSingleScore = JSON.parse( JSON.stringify(response.data[0].GeekBench_5_SingleCore))
              this.addProduct.FireStrike = JSON.parse( JSON.stringify(response.data[0].DMark_Fire_Strike_Physics))
              this.addProduct.recommended = JSON.parse( JSON.stringify(response.data[0].Reccomended))
            })
            .catch(error => {
              console.error(error);
            });          
}
 };
 
</script>