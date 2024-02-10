function addNewWEField()
{
    let newNode=document.createElement('textarea')
    newNode.classList.add("form-control")
    newNode.classList.add("weField")
    newNode.classList.add("mt-2")
    newNode.setAttribute("rows",3)
    newNode.setAttribute("placeholder","Enter here");


    let weob=document.getElementById("we");
    let weAddButtonob=document.getElementById("weAddButton");

    weob.insertBefore(newNode,weAddButtonob);
    
}
function addNewAQField()
{
    let newNode=document.createElement('textarea')
    newNode.classList.add("form-control")
    newNode.classList.add("aqField")
    newNode.classList.add("mt-2")
    newNode.setAttribute("rows",3)
    newNode.setAttribute("placeholder","Enter here");


    let aqob=document.getElementById("aq");
    let aqAddButtonob=document.getElementById("aqAddButton");

    aqob.insertBefore(newNode,aqAddButtonob);
}

function generateCV()
{
   let nameField=document.getElementById("nameField").value;
   let nameT1=document.getElementById("nameT1")
   nameT1.innerHTML = nameField;

   document.getElementById("nameT2").innerHTML=nameField;

   let contactField=document.getElementById("contactField").value;
   let contactT=document.getElementById("contactT")
   contactT.innerHTML = contactField;

   let adressField=document.getElementById("adressField").value;
   let adressT=document.getElementById("adressT")
   adressT.innerHTML = adressField;

 

   let anchor=document.getElementById("fbField").value;
   document.getElementById("fbT").setAttribute('href',anchor);

   let anchor1=document.getElementById("instaField").value;
   document.getElementById("instaT").setAttribute('href',anchor1);

   let anchor2=document.getElementById("linkedField").value;
   document.getElementById("linkedT").setAttribute('href',anchor2);

   let objectiveField=document.getElementById("objectiveField").value;
   let objectiveT = document.getElementById("objectiveT");
   console.log(objectiveField);
   objectiveT.innerHTML = objectiveField;
   console.log(objectiveT);
   


  let wes = document.getElementsByClassName("weField")
  let str= "";

  for(let e of wes)
  {
    str= str+`<li> ${e.value} </li>`
  }

  document.getElementById("weT").innerHTML=str;

  let aqs = document.getElementsByClassName("aqField")
  let str1= "";

  for(let e of aqs)
  {
    str1= str1+`<li> ${e.value} </li>`
  }

  document.getElementById("aqT").innerHTML=str1;

   //code for setting image

   let file=document.getElementById("imgField").files[0]
   console.log(file);

    let reader=new FileReader();
    reader.readAsDataURL(file);

    console.log(reader.result);

    

    //set the image to template

    reader.onloadend=function(){
        document.getElementById("imgTemplate").src = reader.result;
    };



  document.getElementById("cv-form").style.display="none";
  document.getElementById("cv-template").style.display="block";


}

function printCv(){
       window.print();
}