(function(){
    let a=1456;
     let count;
    while(1){
       let extract=a%10;
       a=a/10;
       count++;
    }
    console.log(count);
})();