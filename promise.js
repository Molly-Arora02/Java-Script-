let watchingMovie = false ;

function delay(){
  let currentTime = new Date().getTime();
  while(currentTime + 3000 >= new Date().getTime()){

  }
}
let p = new Promise(function(resolve, reject){
  if(watchingMovie){
    resolve("I am watching movie");
  }else{
    reject("I am not watching movie");
  }
});
p.then(function(message){
  console.log(message);
}).catch(function(message){
  console.log(message);
});