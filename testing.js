for(let i=1;i<20;++i){
    console.log(`for n=${i} sum is ${i*(i+1)/2}`)
}

function check(sum){
    return (Math.sqrt(1+8*sum)-1)/2===Math.floor((Math.sqrt(1+8*sum)-1)/2);
}


for(let i=1;i<500;++i){
    if(check(i)){
        console.log(i)
    }
}
