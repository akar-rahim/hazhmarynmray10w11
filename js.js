var english=document.getElementById('nmrayenglish');
var kurdy=document.getElementById('nmraykurdy');
var araby=document.getElementById('nmray3araby');
var berkary=document.getElementById('nmrayberkary');
var kemya=document.getElementById('nmraykemya');
var fezya=document.getElementById('nmrayfezya');
var zendazany=document.getElementById('nmrayzendazany');
var hazhmarbtn=document.getElementById('hazhmarbtn');
var txt=document.getElementById('hazhmarkrdntxt');
var nsbae10=document.querySelector("#nsbae10");
var nsbae11=document.querySelector("#nsbae11");



hazhmarbtn.addEventListener('click',function(){


var krd=kurdy.value*4;
var arb=araby.value*5;
var fez=fezya.value*4;
var kem=kemya.value*4;
var berk=berkary.value*6;
var zend=zendazany.value*4;
var eng=english.value*5;
var sum=krd+arb+fez+kem+berk+zend+eng;
var ssg=sum/32;
var ssy=ssg*0.8;
let result=Number(nsbae10.value)+Number(nsbae11.value)+ssy;
let mu3adaly12=Number(kurdy.value)+Number(araby.value)+Number(english.value)+Number(berkary.value)+
Number(kemya.value)+Number(fezya.value)+Number(zendazany.value);
let mu3adal=Number(mu3adaly12)/7;
if(result>mu3adal){
txt.innerHTML="زیادیکرد لە"+mu3adal+" بۆ "+result;

}else{

    txt.innerHTML=" کەمیکرد لە"+mu3adal+"بۆ"+result;

}

});




