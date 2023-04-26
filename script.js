;
function getval(){
    let changedata = document.getElementById("changedata").value;
    changedata = Number(changedata);
    let valuee=[];
    if(changedata<0){
       let stri = "Enter positive value";
     document.getElementById("change").innerHTML=stri;
    }
    else {
        if(changedata%2==0){
        let change = document.getElementById("change");
        valuee.push(changedata+2)
        valuee.push(changedata+4)
        valuee.push(changedata+6)
        change.innerHTML=valuee;
    }
    else{
        let change = document.getElementById("change");
        valuee.push(changedata+2)
        valuee.push(changedata+4)
        valuee.push(changedata+6)
        change.innerHTML=valuee;
    }

    }
}

