console.log("Welcome to My Calculator!!!");
let str="";
let strp="";
let pi=document.getElementById("pi").innerHTML
let root=document.getElementById("root").innerHTML;
let cuberoot=document.getElementById("cuberoot").innerHTML;
let i=0,j=0,k=0,l=0,m=0;
let buttons = Array.from(document.querySelectorAll(".button"));
let info=document.getElementById("info");
buttons.forEach((element)=>{
  element.addEventListener("click",(e)=>{
    if(e.target.innerHTML==="=")
    {
       str= str.replace("sin", "Math.sin");
      str= str.replace("ln", "Math.log");
      str= str.replace("log", "Math.log10");
      str= str.replace("cos", "Math.cos");
      str= str.replace("tan", "Math.tan");
      str=str.replace(root,"Math.sqrt")
      str=str.replace(cuberoot,"Math.cbrt")
      str=str.replace(pi,"Math.PI");
      // str= str.replace("sin", "Math.sin");
      // str= str.replace("sin", "Math.sin");
      // str= str.replace("sin", "Math.sin");
      // if (string.includes(pi))
      // {
      //  string= string.replace(pi, "Math.PI");
      // }
      console.log(str);
      str=eval(str);
      document.getElementById("textarea").value=str;
    }
    else if(e.target.innerHTML==="AC")
    {
      str="";
       document.getElementById("textarea").value=str;
    }
    else if(e.target.innerHTML=="X")
    {   
        strp=str.slice(0,str.length-1);
        str=strp;
        document.getElementById("textarea").value=strp;
    }
    else if(e.target.innerHTML=="%")
    {   
        strp=parseFloat(str);
        strp=strp/100;
        strp=strp.toString();
        str=strp;
        document.getElementById("textarea").value=strp;
    }
    //problem--------------------------------------------------------------
    else if(e.target.innerHTML=="!")
    {
      function factorial(n){
        let answer = 1;
        if (n == 0 || n == 1){
          return answer;
        }
        else if(n > 1){
          for(var i = n; i >= 1; i--){
            answer = answer * i;
          }
          return answer;
        }
         else{
          console.log("Negative numbers are not calculated while calculating factorial of a number");
         }
      }
      str= str+e.target.innerHTML;
      document.getElementById("textarea").value=str;
      strp=str;
      for (let index = 0; index < strp.length; index++) {
          if(strp[index]=="!")
          {
            i=index;
            for (let j = i; j < strp.length; j++) {
              if (strp[j]=="+") {
                i=j;
              }
            }
            strp=strp.slice(0,i);
            result1=strp.includes("*");
            result2=strp.includes("+");
            result3=strp.includes("-");
            result4=strp.includes("/");
            if(result1==false && result2==false && result3==false && result4==false)
            {
      
              strp=parseInt(strp);
              strp=factorial(strp);
              strp=strp.toString();
              str=strp;
            }

          }
          
      }
      
      for (let index = 0; index < strp.length-1; index++) {
        console.log("initial value of index="+index);
        if(strp[index]=="*")
          {
            let strps=0;
            k=index;
              for (let j = k; j < strp.length; j++) {
                if (strp[j]=="*") {
                  k=j;
                }
              }
            strps=strp.slice(k+1,i);
            strps=factorial(strps);
            strps=strps.toString();
            strp=strp.slice(0,k);
            strp=strp+"*"+strps;
            strp=eval(strp);
            strp=strp.toString();
            str=strp;
          }
          if(strp[index]=="+")
          {
            let strps=0;
            k=index;
              for (let j = k; j < strp.length; j++) {
                if (strp[j]=="+") {
                  k=j;
                }
              }
            strps=strp.slice(k+1,i);
            strps=factorial(strps);
            strps=strps.toString();
            strp=strp.slice(0,k);
            strp=strp+"+"+strps;
            strp=eval(strp);
            strp=strp.toString();
            str=strp;
          }
          if(strp[index]=="-")
          {
            let strps=0;
            k=index;
              for (let j = k; j < strp.length; j++) {
                if (strp[j]=="-") {
                  k=j;
                }
              }
            strps=strp.slice(k+1,i);
            strps=factorial(strps);
            strps=strps.toString();
            strp=strp.slice(0,k);
            strp=strp+"-"+strps;
            strp=eval(strp);
            strp=strp.toString();
            str=strp;
          }
          if(strp[index]=="/")
          {
            let strps=0;
            k=index;
              for (let j = k; j < strp.length; j++) {
                if (strp[j]=="/") {
                  k=j;
                }
              }
            strps=strp.slice(k+1,i);
            strps=factorial(strps);
            strps=strps.toString();
            strp=strp.slice(0,k);
            strp=strp+"/"+strps;
            strp=eval(strp);
            strp=strp.toString();
            str=strp;
          }
      }
    }
    else{
      str= str+e.target.innerHTML;
      document.getElementById("textarea").value=str;
    } 
  })
})

