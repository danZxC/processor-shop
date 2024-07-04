<template>
    <div class="bg background">
    <div class="wrapper">
        <div class="cta">
            <div class="text-wrapper">
                <h1>CPU CENTER</h1>
                <p>Иддеальный процессор для любых целей</p>
            </div>
            <router-link :to="{name:'product'}"><button class="back-button"><p>Подробнее</p></button></router-link>
        </div>
        <img src="../assets/img-main.png" alt="">
    </div>
</div>

</template>

<style scoped>
.background {
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    width: 100%;
    background-image: url('../assets/bg-main.png');
    height: 100vh;

}
.wrapper {
    margin: 10vh auto 0 auto;
}
.cta{
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;

}
p{
    color:white;  
    font-size: calc(15px + 16 * (100vw / 1920));
    font-family: 'Comfortaa';
    line-height: 50px;
    letter-spacing: 20px;
    width: 90%;
}
.text-wrapper {
    display: flex;
    flex-direction: column;
    height: 30%;
    text-align: left;
    align-items: start;
    justify-content: space-between;
}
button {
    background-image: url(../assets/test.gif);
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
a{
    text-decoration: none;
}
</style>