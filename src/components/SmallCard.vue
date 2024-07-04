<template>
   <div class="card-wrapper">
        <img class="image" :src="source" alt="">
        <h1>{{ title }}</h1>
        <div class="info">
            <div class="info-wrap">
                <p>Ядро</p>
                <p>{{ core }}</p>
            </div>
            <hr>
            <div class="info-wrap">
                <p>Потоки</p>
                <p>{{ threads }}</p>
            </div>
            <hr>
            <div class="info-wrap">
                <p>Частота</p>
                <p>{{ frequency }}</p>
            </div>
            <hr>
            <div class="info-wrap">
                <p>Техпроцесс</p>
                <p>{{ techprocess }}</p>
            </div>
            <hr>
        </div>
        <button class="price"><p>{{ price }}$</p></button>
        <button  class="more"><router-link :to="{name: 'bigCard', params:{id: idBig,model:modelBig,  price:priceBig}}"><p>Подробнее</p></router-link></button>
   </div>
</template>

<style scoped>
.image{
    width: 60%;
    height: 40%;
    background-color: red;
}
.card-wrapper {
    width: 100%;
    height: 70vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
}
h1{
    background:black;
    background-clip:text;
    -webkit-text-fill-color: transparent;
    font-size: calc(10px + 16 * (100vw / 1920));
    font-weight: 700;
    letter-spacing: 0px;
    margin-top:0;
    width: 80%;
    word-break: break-all;
}
.info{
    display: flex;
    flex-direction: column;
    width: 80%;
    height: 20%;
    justify-content: space-between;
    align-items: center;
}
.info-wrap {
    display: flex;
    width: 100%;
    justify-content: space-between;

}
hr{
    width: 100%;
}
.price {
    align-self: flex-end;
    height: 5%;
    width: 40%;
    border-radius: 10px;
    margin-right: 10%;
}
.more {
    height: 10%;
    width: 80%;
    border-radius: 10px;
}
.more p {
    font-size: calc(5px + 16 * (100vw / 1920));
    font-weight: normal;
}
a{
    color: black;
    background-color: white;
    border-radius: 10px;
    font-weight: 700;
    letter-spacing: 0;
    width: 70%;
    height: 70%;
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;

}
</style>

<script>
export default {
    props: ["source","title", "core" ,"threads", "frequency", "techprocess", "price", "id"],
    data() {
        return {
            idBig:this.id,
            modelBig:this.title,
            priceBig:this.price
        }
    },
    mounted(){
        console.log(this.idBig)
    }
    
}


</script>