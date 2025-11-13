let gotogoa=(sucess,failure)=>{
    let acc_bal=8000;
    if(acc_bal>=15000){
        console.log("gom and enjoy");    
    }else{
        failure("go to prostack!");
        
    }

}
gotogoa((msg)=>{console.log(msg);
},(err)=>{console.log(err);
})