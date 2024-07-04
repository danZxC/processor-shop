<template>
    <div class="bg2 background">
        <div class="wrapper">
            <img src="../assets/image-main2.png" alt="">
            <div class="points">
                <div class="point">
                    <div class="mark"></div>
                    <p>для игр</p>
                </div>
    
                <div class="point">
                    <div class="mark"></div>
                    <p>для работы</p>
                </div>
    
                <div class="point">
                    <div class="mark"></div>
                    <p>для творчества</p>
                </div>
            </div>
        </div>
    </div>
    </template>
    
    <style scoped>
    .background {
        background-image: url('../assets/bg-main2.png');
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        height: auto;
        width: 100%;
    
    }
    
    
    
    .points {
        width: 40%;
        display: flex;
        height: 90%;
        flex-direction: column;
        justify-content: space-around;
        align-items: start;
        text-align: left;
    }
    
    .point{
        display: flex;
        width: 100%;
        justify-content: space-between;
        align-items: center;
    }
    .mark {
        width: 20%;
        background-color: #7F00FF;
        border-radius: 20px;
        height: 15px;
    }
    
    .point p {
        font-size: calc(10px + 16 * (100vw / 1920));
        width: 70%;
        letter-spacing: 10px;
      font-weight:bold;
      color:white;
      margin: 0;
    }
    img{
        height: 80vh;
    }
    </style>
    