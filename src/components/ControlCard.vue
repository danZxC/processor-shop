<template>
<div class="left-side">
    <p>{{ id }}</p>
    <img :src="source" alt="">
    <div class="text-card">
        <h1>{{ model }}</h1>
        <p>{{ company }}</p>
    </div>
</div>
<div class="buttons">
    <router-link @click="Json" :to="{name: 'CreateUpdate', params: {action: 'Редактировать', id:String(idP) }}"><img src="@/assets/edit-icon.png" alt=""></router-link>
    <img @click="DeleteFromBd()" src="@/assets/delete-icon.png" alt="">
</div>
</template>

<script>
import axios from 'axios';

export default{
    data(){
        return {
            idP:this.id
        }
    },
    props:['model','company','source','id'],
    methods: {
    DeleteFromBd(){
        axios.post('http://localhost:3000/delete', {
            id:this.id
        })
        location.reload()
    },
  },
  mounted(){
   console.log(this.idP)
 }
}
</script>

<style scoped>
h1{
  font-weight: 400;
  letter-spacing: 0;
  margin:0;
  font-size: calc(8px + 16 * (100vw / 1920));
  -webkit-text-fill-color: black;
  text-align: left;
}
.left-side{
    height: 100%;
    display: flex;
    width: 30%;
    justify-content: start;
    gap:10%;
    align-items: center;
}
img{
    height: 60px;
    width: 60px;
}

.text-card {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 60%;
}

.buttons {
    display: flex;
    width: 10%;
    justify-content: space-between;
}
.buttons img:hover{
    cursor: pointer;
}
p{
    text-align: left;
}

form {
    position: absolute;
  display: flex;

  height: 0;
  opacity: 0;
  justify-content: space-between;
  margin: 0 auto 0vh auto;
}

form.active{
  width: 100%;
  height: auto;
  transition:  1s;
  opacity: 1;  
  margin: 0 auto 10vh auto;
}
</style>

