input.style.backgroundColor="rgba(0,0,0,0,4)";
let nums=[48,49,50,51,52,53,54,55,56,57];
let opt=["+","-","*","/","%","^"];
let opt_keyCode=[43,45,42,47,37,94];
let other=["e","log","sqrt","sin","cos","pie","x!","(",")","."];
let other_keyCode=[101,108,83,115,99,112,120,40,41,46];
let specialKey=["All Cancel","Cancel","="];
let special_keyCode=[97,122,61];
let All=[0,1,2,3,4,5,6,7,8,9,"+","-","*","/","%","(",")","^",".","e(","log(","√(","sin(","cos(","π(","!("];
let All_opt_2=["+","-","*","/","%","^"];
let All_opt_1=["e","√","π","!"];
let All_opt_01=["log","sin","cos"];
let All_keyCode=[48,49,50,51,52,53,54,55,56,57,43,45,42,47,37,40,41,94,46,101,108,83,115,99,112,120,122,65,13];
let ID=["0","1","2","3","4","5","6","7","8","9","plus","minus","multiply","divide","mod","o_brac","c_brac","power","dot","expo","log","sqrt","sin","cos","pi","factorial","C","AC","ans"]
let OK=false;


function OnInput(){
    container.style.backgroundColor=cont_color.value;
    let btns=document.getElementsByClassName('btns');
    let opt_btns=document.getElementsByClassName('opt-btns');
    let func_btns=document.getElementsByClassName('func-btns');
    for(let i=0;i<btns.length;i+=1){
        btns[i].addEventListener('mouseover',()=>{
            btns[i].style.color=cont_color.value;
        });
        btns[i].addEventListener('mouseout',()=>{
            btns[i].style.color="black";
        });
    }    
    for(let i=0;i<opt_btns.length;i+=1){
        opt_btns[i].addEventListener('mouseover',()=>{
            opt_btns[i].style.color=cont_color.value;
        });
        opt_btns[i].addEventListener('mouseout',()=>{
            opt_btns[i].style.color="black";
        });
    }    
    for(let i=0;i<func_btns.length;i+=1){
        func_btns[i].addEventListener('mouseover',()=>{
            func_btns[i].style.color=cont_color.value;
        });
        func_btns[i].addEventListener('mouseout',()=>{
            func_btns[i].style.color="black";
        });
    }
}

function Fact(num){
    let ans=1
    for(let i=1;i<=num;i+=1){
        ans=ans*i;
    }
    return ans;
}

function cancel(){
    let val=input.value;
    val.length
    val=val.slice(0,val.length-1);
    input.value=val;
}

function btn_color(Id){
    let element=document.getElementById(Id);
    element.style.backgroundColor=cont_color.value;
    element.style.color="white";
    setTimeout(()=>{
        element.style.backgroundColor="aliceblue";
        element.style.color="black";
    },150)
}
function Clicked(Id){       
if(OK){
    if(input.value==="0"){
        input.value="";
    }
    let index=ID.indexOf(Id);
    let value=input.value;
    value+=All[index];
    input.value=value;
}
    btn_color(Id);
}

function calculate(Id){
    let val=input.value;
    for(let i=0;i<val.length;i+=1){
        if(All_opt_2.includes(val[i])){
            let opt=val[i];
            let n1=parseFloat(val.substring(0,i))
            let n2=parseFloat(val.substring(i+1,val.length));
            input.value=calculate1(n1,n2,opt);
        }
    }
    btn_color(Id);
}

function calculate1(n1,n2,opt){
    let ans;
    switch (opt) {
        case "+":
            ans=(n1+n2).toString();
            break;
        case "-":
            ans=(n1-n2).toString();
            break;
        case "*":
            ans=(n1*n2).toString();
            break;
        case "/":
            ans=(n1/n2).toString();
            break;
        case "%":
            ans=(n1%n2).toString();
            break;
        case "^":
            ans=(Math.pow(n1,n2)).toString();
            break;
    }
    return ans;
}

function calculate2(num,opt){
    let ans;
    switch (opt){
        case "e":
            ans=Math.exp(num);
            break;
        case "√":
            ans=Math.sqrt(num);
            break;
        case "π":
            ans=(Math.PI)*num;
            break;
        case "!":
            ans=Fact(num);
            break;
        }
    return ans;
}

function calculate3(num,val_substr){
    let ans;
    switch (val_substr) {
        case "sin":
            ans=Math.sin(num);
            break;
        case "cos":
            ans=Math.cos(num);
            break;
        case "log":
            ans=Math.log(num);
            break;
    }
    return ans;
}

start.addEventListener('click',()=>{
    input.value="";
    input.placeholder="Calc here...";
    input.style.backgroundColor="aliceblue";
    input.style.color="black";
    btn_color("start");
    OK=true;
});

Close.addEventListener('click',()=>{
    btn_color("Close");
    if(!input.hasAttribute('value')){
        input.setAttribute('value',"To start calculation start calc.....");
    }
    input.value="";
    input.placeholder="";
    input.style.backgroundColor="rgba(0,0,0,0.3)";
    input.style.color="white";
    OK=false;
});
// *********************************************************************

AC.addEventListener('click',()=>{input.value=0;});

C.addEventListener('click',()=>{cancel();});


// ****************** Displaying On screen keywords ********************
document.addEventListener("keypress",(event)=>{
    if(input.value==="0"){
        input.value="";
    }else if(event.keyCode===122){
        cancel();
    }else if(event.keyCode===97 || event.keyCode===65){
        input.value=0;
    }
    if(event.keyCode===67){
        btn_color("Close");
        input.value="";
        input.placeholder="";
        input.style.backgroundColor="rgba(0,0,0,0.3)";
        input.style.color="white";
        OK=false;
    }
        let value=input.value;
        let keyCode=event.keyCode;
        if(All[All_keyCode.indexOf(keyCode)]!=undefined && event.keyCode!=13){
            value+=All[All_keyCode.indexOf(keyCode)];
            input.value=value;
        }
        let val=input.value;
        if(opt.includes(val[val.length-2]) && opt.includes(val[val.length-1]) && val.length>=3){    let last_opt=val[val.length-1];
            cancel();
            let newVal=val.slice(0,val.length-2);
            newVal+=last_opt;
            input.value=newVal;
        }
        if(!OK){
            input.value="";
            input.placeholder="";
        }
});


// ********************** Answer **********************
document.addEventListener("keypress",(event)=>{
    let val=input.value;
    // let opts=[];
    // let firstOpt;
    for(let i=0;i<val.length;i+=1){
    // ************** Arithmetic opts **************    
        // if(All_opt_2.includes(val[i]) && i!=0){
        //     opts.push(val[i]);
        // }
        // if(opts.length===1 && All_opt_2.includes(val[i]) && i!=0){
        //     firstOpt=i;
        // }
        // if(opts.length>=2){
        //     let n1=parseFloat(val.substring(0,firstOpt));
        //     let n2=parseFloat(val.substring(firstOpt+1,val.length-1));
        //     input.value=calculate1(n1,n2,opts[0])+opts[1];
        //     opts.shift();
        // }

        // ************** (e,sqrt,pie,fact)****************
        if(All_opt_1.includes(val[i]) && val.includes(")")){
            let p1=val.indexOf("(");
            let p2=val.indexOf(")");
            let num=parseFloat(val.substring(p1+1,p2));
            input.value=calculate2(num,val[i]);
        }

        // ************* Trignometric opts *************
        let val_substr;
        if(i<=val.length-3){
            val_substr=val.substring(i,i+3)};
        if(All_opt_01.includes(val_substr) && val.includes(")")){
            let p1=val.indexOf("(");
            let p2=val.indexOf(")");
            let num=parseFloat(val.substring(p1+1,p2));
            input.value=calculate3(num,val_substr);
        }
        
    }
    if(event.keyCode===13){
            input.value=eval(val);
    }
});

// ***************** Extra Decoration *********************
document.addEventListener('keypress',(event)=>{
    if(All_keyCode.includes(event.keyCode)){
    let id_num=All_keyCode.indexOf(event.keyCode);
    btn_color(ID[id_num]);
    }
});