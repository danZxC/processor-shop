<template>
  
  <div class="wrapper">
   <div class="nav-wrapper">
      <img :src='require("./assets/logotip.png")' alt="">
      <nav>
        <router-link :to="{name: 'home'}">Главная</router-link> 
        <router-link :to="{name: 'product'}">Продукты</router-link>
        <router-link :to="{name: 'check'}">Управление</router-link> 
        <router-link :to="{name: 'compareChoise'}">Сравнение</router-link>
      </nav>
   </div>
  </div>
  <router-view/>

</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Comfortaa:wght@300..700&family=Orbitron:wght@400..900&display=swap');
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.nav-wrapper {
  background-color: white;
  display: flex;
  justify-content: space-between;
  width: 90%;
  align-items: center;

  
}
nav {
  display: flex;
  justify-content: space-between;
  width: 50%;
  align-items: center;
  background-color: white;
}
* {
  margin: 0;
  padding: 0;
}
nav a {
  font-weight: bold;
  color: #130133;
  text-decoration: none;
  font-family: 'Comfortaa';
  font-size: calc(5px + 16 * (100vw / 1920));
}

nav a.router-link-exact-active {
  border-bottom: 1px black solid;
}

h1{
  background:url(assets/h1-bg.png) no-repeat center/cover;
  background-clip:text;
  -webkit-text-fill-color: transparent;
  font-family: 'Orbitron';
  font-weight:bold;
  letter-spacing: 10px;
  font-size: calc(55px + 16 * (100vw / 1920));
}

.wrapper{
       width: 90%;
      display: flex;
      align-items: center;
      height: 90vh;
      justify-content: space-between;
      margin: 0vh auto 0 auto;
}

button {
    background-image: url(assets/test.gif);
    background-size: cover;
    background-position: center;
    border-radius: 30px;
    width: 70%;
    height: 15vh;
    border:0;
    display: flex;
    justify-content: center;
    align-items: center;
}

button p {
    color: black;
    background-color: white;
    border-radius: 30px;
    font-weight: 700;
    letter-spacing: 0;
    width: 70%;
    height: 70%;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>

<style scoped>
.wrapper {
  top:0;
  position: fixed;
  height: 10vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  z-index: 100;
}


</style>