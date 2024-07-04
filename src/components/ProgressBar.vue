<template>
<div class="bar-wrapper">
    <div class="wrap"><div class="current-value"></div></div>
    <h1>{{ currentValue1 }}</h1>
</div>
<div class="bar-wrapper" v-show="show">
    <div class="wrap"><div class="current-value"></div></div>
    <h1>{{ currentValue2 }}</h1>
</div>

</template> 

<script>
export default {
props: [ 'currentValue1','currentValue2', 'width1','width2','show'],

mounted(){
    let currentBlock = document.querySelectorAll('.current-value')
    let h1 = document.querySelector('h1')
    setTimeout( ()=> { currentBlock[0].style.width = `${this.width1}%` }, 20)  
    setTimeout( ()=> { currentBlock[1].style.width = `${this.width2}%` }, 20)       
    for (let index = 0; index < h1.length; index++) {
        if(this.width >= 100){
            h1[index].style.color = 'white'
            console.log('a lot')
        }

    }
    
}
}
</script>

<style>

.bar-wrapper {
    background-color: white;
    width: 90%;
    margin:auto;
    margin-top:50px;
    border-radius: 20px;
    display: flex;
    align-items: center;
    height: 150px;
}
.current-value{
    width: 1px;
    height: 100%;
    background-image: url('@/assets/h1-bg.png');
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 20px;
    transition: .5s;
}
.bar-wrapper h1{
    position: absolute;
    right: 150px;
    -webkit-text-fill-color: #7F00FF;
}
.wrap{
    height: 100%;
    width: 80%;
    border-radius: 20px;
    transition: .5s;
    background-color: white;
}

</style>

