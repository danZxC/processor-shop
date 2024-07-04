const express = require('express');
const session = require('express-session')
const app = express();
const port = 3000;
const cors = require('cors')
const mysql = require('mysql');


app.listen(port,() => {
  console.log(`Сервер запущен на порту ${port}`);
});


app.use(cors())
app.use(express.json())
app.use(session({
  secret: '123',
  resave: false,
  saveUninitialized: true
}));



function Query(req,res,query){
  const connection = mysql.createConnection({
    host: "127.0.0.1",
    user: "root",
    password: "",
    database: 'processor'
  });
  connection.connect((err) => {
    if (err) {
      console.error('Ошибка подключения к базе данных:',err.stack);
      res.status(500).send('Internal Server Error');
      return;
    }
    console.log('Подключение к базе данных успешно');
  });
  
  console.log("Это req от get" + req)
  connection.query(query,function (error,result) {
    if (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    } else {
      res.json(result);
    }
    connection.end(); // Закрываем подключение после выполнения запроса
  });
}

app.post('/create',(req,res) => {
  PostArray = req.body.model
  console.log(req.body.model)
  let Values = "("+ "'" + PostArray.imgSrc + "'" + "," + "'" + PostArray.company + "'"  + "," + "'"  + PostArray.model + "'"  + ","+ PostArray.baseFrequency  + "," + PostArray.maxFrequency + "," + PostArray.threats  + "," + PostArray.cores  + "," + PostArray.techprocess  + "," + "'"  +  PostArray.memory + "'"  + "," + PostArray.price  + "," + PostArray.geekMultiScore + "," + PostArray.passmark + "," + PostArray.geekSingleScore + "," + PostArray.FireStrike +  "," + Number(PostArray.recommended) + ")"

  console.log(Values)
  Query(req.body.model,res,`INSERT INTO generalinfo (ImageSrc,Company,Model,BaseFrequency,MaxFrequency,Threads,Cores,TechProcess,SupportedMemory,Price,GeekBench_5_MultiCore,Passmark,GeekBench_5_SingleCore,DMark_Fire_Strike_Physics,Reccomended) VALUES ${Values}`)  
});


app.post('/delete',(req,res) => {
  Query(req.body.id,res,`DELETE FROM generalinfo WHERE generalinfo.id=${req.body.id}`)
});



app.get('/general',(req,res) => {
  Query(req,res,'SELECT * FROM generalinfo WHERE Reccomended=1')
});

app.get('/all',(req,res) => {
  Query(req,res,'SELECT * FROM generalinfo')
});


let id = 0
app.post('/edit',(req,res) => {
 id=req.body.id
});

app.get('/edit',(req,res)=>{
  console.log(id)
  Query(req,res,`SELECT * FROM generalinfo WHERE id = ${id}`)
})

app.post('/editing',(req,res) => {
  PostArray = req.body.model
  Query(req,res,`UPDATE generalinfo SET ImageSrc = '${PostArray.imgSrc}', Model = '${PostArray.model}',Company = '${PostArray.company}', BaseFrequency = '${PostArray.baseFrequency}',MaxFrequency = '${PostArray.maxFrequency}', Threads = '${PostArray.threats}', Cores = '${PostArray.cores}',TechProcess = '${PostArray.techprocess}', SupportedMemory = '${PostArray.memory}', Price = '${PostArray.price}', GeekBench_5_MultiCore = '${PostArray.geekMultiScore}', Passmark = '${PostArray.passmark}',GeekBench_5_SingleCore = '${PostArray.geekSingleScore}', DMark_Fire_Strike_Physics = '${PostArray.FireStrike}', Reccomended = '${Number(PostArray.recommended)}'  WHERE generalinfo.id = ${id}`)
});

app.post('/cardBig',(req,res) => {
  id = req.body.id
  console.log(id)
});

app.get('/cardBig',(req,res)=>{
  console.log(id)
  Query(req,res,`SELECT * FROM generalinfo WHERE id = ${id}`)
})

let recomenadation = {
  company:'',
  price:0,
  geekMulty:0,
  memory:0,
}
app.post('/cardBigSmall',(req,res) => {
  recomenadation.company = req.body.company,
  recomenadation.price = req.body.price,
  recomenadation.geekMulty = req.body.geekMulty,
  recomenadation.memory = req.body.memory,
  console.log(recomenadation)
});

app.get('/cardBigSmall',(req,res)=>{
  console.log(recomenadation)
  Query(req,res,`SELECT * FROM generalinfo WHERE (Company LIKE '${recomenadation.company}') OR (Price BETWEEN ${recomenadation.price - 100} AND ${recomenadation.price + 100}) OR (SupportedMemory LIKE '${recomenadation.memory}') OR (GeekBench_5_MultiCore BETWEEN ${recomenadation.geekMulty-1000} AND ${recomenadation.geekMulty+1000})`)
})

app.get('/modelCompare', (req,res)=>{
  Query(req,res, `SELECT Model FROM generalinfo`)
})

let modelsComare={}
app.post('/Comparison', (req,res)=>{
  modelsComare = req.body
  console.log(modelsComare)
})

app.get('/Comparison', (req,res)=>{
  Query(req,res,`SELECT * FROM generalinfo WHERE (Model LIKE '${modelsComare.model1}') OR (Model LIKE '${modelsComare.model2}')`)
})

app.get('/banner', (req,res)=>{
  Query(req,res, `SELECT * FROM banner`)
})

directionSort = ''
columnSort = ''
app.post('/sort',(req,res)=>{
  directionSort = req.body.direction
  columnSort = req.body.column
})

app.get('/sort', (req,res)=>{
  Query(req,res, `SELECT * FROM generalinfo ORDER BY ${columnSort} ${directionSort}`)
  console.log(directionSort + "   "+ columnSort)
})