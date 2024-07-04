<template>
    <swiper
      :direction="'vertical'"
      :centeredSlides="true"
      :spaceBetween="10"
      :autoplay="{
        delay: 1500,
        disableOnInteraction: false,
      }"
      :pagination="{
        clickable: true,
      }"
      
      :modules="modules"
      class="mySwiper"
    >
      <swiper-slide v-for="item in items" :key="item.id">
        <img :src="item.Image" alt="">
        <div class="text">
            <h1>{{ item.name }}</h1>
            <p class="description">{{ item.description }}</p>
            <button><p>{{ item.price }}$</p></button>
        </div>
      </swiper-slide>
    </swiper>
  </template>
  <script>
    // Import Swiper Vue.js components
    import { Swiper, SwiperSlide } from 'swiper/vue';
  
    // Import Swiper styles
    import 'swiper/css';
  
    import 'swiper/css/pagination';
    import 'swiper/css/navigation';
  
    import { Autoplay, Pagination, Navigation } from 'swiper/modules';
    import axios from 'axios'

    export default {
      components: {
        Swiper,
        SwiperSlide,
      },
      data(){
        return{
            items:[]
        }
      },
      setup() {
        return {
          modules: [Autoplay, Pagination, Navigation],
        };
      },
      mounted(){
        axios.get('http://localhost:3000/banner')
      .then(response => {
        this.items = JSON.parse( JSON.stringify(response.data))
        console.log(this.items)
      })
      .catch(error => {
        console.error(error);
      });
      }
    };
  </script>

<style scoped>
    
.swiper {
  width: 70%;
  height: 60vh;
  border-radius: 20px;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
}

.swiper-slide img {
    position: absolute;
  display: block;
  width: 100%;
  height: 105%;
  object-fit: cover;
  filter: brightness(0.5)
}
.text{
    z-index: 5;
    display: flex;
    height: 70%;
    width: 80%;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
}
.text h1{
    font-size: 75px;
 }
 button{
    width: 40%;
    height: 30%;
    
 }

.description {
    color: white;
    font-size: 25px;
 }
button p{
    color: black;
    font-size: 25px;
}


</style>
  