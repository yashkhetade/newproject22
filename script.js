




function addNewWEField(){

    let newNode=document.createElement('textarea');
    newNode.classList.add('form-control');
    newNode.classList.add('weField');
    newNode.classList.add('mt-2');
    newNode.setAttribute('rows',3);
    newNode.setAttribute('placeholder','Enter here');
     
    let weOb=document.getElementById('we');
    let weAddButtonOb=document.getElementById('weAddButton');
    
    

    weOb.insertBefore(newNode, weAddButtonOb);
}

function addNewAQField(){

    let newNode=document.createElement('textarea');
    newNode.classList.add('form-control');
    newNode.classList.add('aqField');
    newNode.classList.add('mt-2');
    newNode.setAttribute('rows',3);
    newNode.setAttribute('placeholder','Enter here');
     
    let aqOb=document.getElementById('aq');
    let aqAddButtonOb=document.getElementById('aqAddButton');
    
    

    aqOb.insertBefore(newNode, aqAddButtonOb);
}



function addNewskqField(){

    let newNode=document.createElement('textarea');
    newNode.classList.add('form-control');
    newNode.classList.add('skqField');
    newNode.classList.add('mt-2');
    newNode.setAttribute('rows',3);
    newNode.setAttribute('placeholder','Enter here');
     
    let skqOb=document.getElementById('skq');
    let skqAddButtonOb=document.getElementById('skqAddButton');
    
    

    skqOb.insertBefore(newNode, skqAddButtonOb);
}

// generating cv 

function generateCV(){



        if(document.getElementById('imgField').value==""){
            alert("Select your photo before generating CV");
            return false;
        }
       
      
       

   let nameField=document.getElementById('nameField').value;

   let nameT1=document.getElementById('nameT1');
   nameT1.innerHTML=nameField;

   document.getElementById('nameT2').innerHTML=nameField;

   document.getElementById('contactT').innerHTML=document.getElementById('contactField').value;
   document.getElementById('mailT').innerHTML=document.getElementById('mailField').value;
   document.getElementById('addressT').innerHTML=document.getElementById('addressField').value;

//    document.getElementById('fbtemp').innerHTML=document.getElementById('fbField').value;

   document.getElementById('linkedtemp').innerHTML=document.getElementById('linkedField').value;
   document.getElementById('gittemp').innerHTML=document.getElementById('githubField').value;
  
   document.getElementById('objectiveT').innerHTML=document.getElementById('objectiveField').value;






   let wes=document.getElementsByClassName("weField");

   let str='';
   
   for(element of wes){
       str=str+`<li> ${element.value} </li>`;
   
   
   }
   
   document.getElementById('weT').innerHTML=str;

   

   


   let skqs=document.getElementsByClassName("skqField");

   let str4='';
   
   for(element of skqs){
       str4=str4+`<li> ${element.value} </li>`;
   
   
   }
   
   document.getElementById('skqT').innerHTML=str4;
   




let aqs=document.getElementsByClassName("aqField");

let str2='';

for(element of aqs){
    str2=str2+`<li> ${element.value} </li>`;


}

document.getElementById('aqT').innerHTML=str2;
   


// code for image 

let file=document.getElementById('imgField').files[0];
console.log(file);

let reader=new FileReader();

reader.readAsDataURL(file);

console.log(reader.result);


 reader.onloadend=function (){
    document.getElementById('imgTemp').src=reader.result;
 };








document.getElementById('cv-form').style.display='none';
document.getElementById('cv-template').style.display='block';


}

function printCV(){

    window.print();
}










