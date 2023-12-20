"use strict";



let time='night'
let parametr=document.getElementById('parametr');/**иконки canvas */
let formSearch= document.getElementById('search_form'),///форма
searchCity= document.getElementById('getCity'),///кнопка

searchCityInpyt= document.getElementById('address');///input

searchCityInpyt.addEventListener('mouseenter',autocompleteOff)
searchCityInpyt.addEventListener('touchstart',autocompleteOff)

function autocompleteOff(e){
  e.target.setAttribute('autocomplete','off')
}



let storageDataCity='';
let hash;
let hashJSON;

formSearch.addEventListener('submit', (e)=>{
  e.preventDefault()
})
window.addEventListener('DOMContentLoaded',()=>{
  
   hash = window.location.hash
   hashJSON= decodeURIComponent(hash.substring(1))
  
  
 

  if(sessionStorage.length!=0 && hashJSON=='board'){
    storageDataCity =  Object.keys(sessionStorage)[0]
    let coord= JSON.parse(sessionStorage.getItem(storageDataCity))
    lat=coord.lat
    lon=coord.lon
   
    getParametrs(storageDataCity)
  }
    
 


 
 
})

let main = document.getElementById('main'),
mainTwo= document.getElementById('main_two'),
moon = document.querySelector('.moon'),
sun= document.querySelector('.sun');


let widthWindow,
heightWindow;



getWindowClientSize()
/********************************************************** */
function getWindowClientSize() {
  var uaB=navigator.userAgent.toLowerCase();
  var isOperaB = (uaB.indexOf('opera')  > -1);
  var isIEB=(!isOperaB && uaB.indexOf('msie') > -1);

  var clientWidth=((document.compatMode||isIEB)&&!isOperaB)?
    (document.compatMode=='CSS1Compat')?
    document.documentElement.clientWidth:
    document.body.clientWidth:
    (document.parentWindow||document.defaultView).innerWidth;

  var clientHeight=((document.compatMode||isIEB)&&!isOperaB)?
    (document.compatMode=='CSS1Compat')?
    document.documentElement.clientHeight:
    document.body.clientHeight:
    (document.parentWindow||document.defaultView).innerHeight;

  return (widthWindow=clientWidth, heightWindow=clientHeight);
}
/********************************************************** */

let allWidth=widthWindow>500?200:widthWindow*0.46; ////ширина и высота для всех элементов АДАПТИВ CANVAS
let paddingA= widthWindow/30/*********падинг коофиуиент */
let flexDirectionParametrs =widthWindow>500?"row":"column";/////////////FLEX_DIRECTION
let flexDirectionROW =widthWindow>500?"column":"row";/////////////FLEX_DIRECTION
let flexJC =widthWindow>500?"space-between":"none";/////////////FLEX_JC
let center = widthWindow>500?200/2:widthWindow*0.46/2;/********центр canvas*/
let lenghtN=center*0.75;/****растояние от объекта до центра canvas */
let borderRadius=widthWindow/95;
let fontWidth ;


if(widthWindow>1600){/***********коофициент размера шрифта canvas*/
  fontWidth=widthWindow/110
}else if(widthWindow>1300){
  fontWidth=widthWindow/90
}else if(widthWindow>1100){
  fontWidth=widthWindow/70
}else if(widthWindow>800){
  fontWidth=widthWindow/60
}
else if(widthWindow>400){
  fontWidth=widthWindow/35
}







let zimaD = "background-image:url(./images/zimaD.jpg)"
let zimaDDown = "background-image:url(./images/zimaDDown.png)"
let zimaN = "background-image:url(./images/zimaN.jpg)"
let zimaNDown = "background-image:url(./images/zimaNDown.png)"



if(time=='day'){
  changeImg(zimaD,zimaDDown)
}else if(time=='night'){
  changeImg(zimaN,zimaNDown)
}




function changeImg(imgVar){

  main.setAttribute('style',imgVar)
  // mainTwo.setAttribute('style',imgVarD)







  if(imgVar==zimaD){
    let xSun=0
    let ySun=0


    let sunUp =  setInterval(sunMove,1000/20)

    function sunMove(){
      sun.style.position='absolute';
      sun.style.left=0;
      sun.style.top=300+'px';


      sun.style.zIndex=25;

      sun.innerHTML=`<svg height="200px" width="200px" version="1.1" id="_x36_" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" xml:space="preserve" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <g> <path style="fill:#C9B997;" d="M258.373,448.122c-11.783,0-21.337,1.395-21.337,18.136c0,8.131,9.553,45.742,21.337,45.742 c11.784,0,21.336-37.611,21.336-45.742C279.709,449.518,270.156,448.122,258.373,448.122z"></path> <path style="fill:#C9B997;" d="M352.653,422.86c-10.205,5.891-17.78,11.876-9.41,26.374c4.065,7.041,31.144,34.837,41.349,28.945 c10.205-5.892-0.328-43.241-4.393-50.282C371.829,413.4,362.858,416.968,352.653,422.86z"></path> <path style="fill:#C9B997;" d="M448.046,344.432c-14.498-8.37-20.483-0.795-26.375,9.41c-5.892,10.205-9.46,19.176,5.038,27.546 c7.041,4.065,44.39,14.598,50.282,4.393C482.883,375.576,455.087,348.497,448.046,344.432z"></path> <path style="fill:#C9B997;" d="M465.07,238.225c-16.741,0-18.136,9.553-18.136,21.337c0,11.784,1.396,21.336,18.136,21.336 c8.13,0,45.742-9.553,45.742-21.336C510.812,247.777,473.2,238.225,465.07,238.225z"></path> <path style="fill:#C9B997;" d="M426.71,137.735c-14.498,8.37-10.93,17.341-5.038,27.546c5.892,10.204,11.877,17.78,26.375,9.41 c7.041-4.065,34.837-31.144,28.945-41.349C471.099,123.137,433.75,133.67,426.71,137.735z"></path> <path style="fill:#C9B997;" d="M164.092,422.86c-10.205-5.892-19.176-9.46-27.546,5.038c-4.065,7.041-14.598,44.39-4.393,50.282 c10.205,5.892,37.283-21.904,41.349-28.945C181.872,434.737,174.297,428.752,164.092,422.86z"></path> <path style="fill:#C9B997;" d="M424.226,259.561c0-45.799-18.564-87.263-48.577-117.276L141.097,376.837 c30.013,30.013,71.477,48.578,117.276,48.578C349.971,425.415,424.226,351.159,424.226,259.561z"></path> </g> <g> <path style="fill:#E5DC90;" d="M164.11,96.239c-10.143,5.855-19.05,9.401-27.297-4.618c-0.082-0.083-0.165-0.247-0.248-0.412 c-4.123-7.009-14.596-44.367-4.453-50.305c7.669-4.454,25.07,10.308,34.719,20.781c3.298,3.464,5.69,6.433,6.68,8.164 C181.84,84.364,174.336,90.384,164.11,96.239z"></path> <g> <path style="fill:#E5DC90;" d="M279.729,52.861v0.577c-0.248,16.164-9.732,17.566-21.359,17.566 c-9.319,0-17.236-0.907-20.122-9.483c-0.824-2.227-1.237-5.113-1.237-8.66c0-5.03,3.629-21.276,9.154-32.987 c3.546-7.257,7.752-12.782,12.205-12.782c1.319,0,2.639,0.495,3.876,1.402C272.225,15.174,279.729,45.604,279.729,52.861z"></path> <path style="fill:#E5DC90;" d="M95.085,165.264c-5.938,10.226-11.875,17.813-26.39,9.401 c-3.958-2.227-14.432-11.793-21.854-21.524c-0.082-0.083-0.165-0.165-0.165-0.248c-5.69-7.504-9.484-15.091-6.928-19.545 c5.938-10.226,43.213,0.33,50.305,4.371c1.237,0.742,2.391,1.484,3.381,2.226C103.909,147.699,100.445,155.945,95.085,165.264z"></path> <path style="fill:#E5DC90;" d="M69.85,259.524c0,11.546-1.32,21.03-17.236,21.359h-0.907c-7.834,0-43.13-8.907-45.605-20.122 c-0.082,0-0.082,0-0.082,0c0-0.412-0.083-0.824-0.083-1.237c0-4.536,5.69-8.824,13.112-12.205 c11.711-5.525,27.709-9.071,32.657-9.071c4.701,0,8.164,0.742,10.721,2.062C69.108,243.773,69.85,251.113,69.85,259.524z"></path> <path style="fill:#E5DC90;" d="M68.7,344.432c-7.041,4.065-34.837,31.144-28.945,41.349c5.892,10.205,43.241-0.328,50.281-4.393 c14.498-8.37,10.93-17.341,5.038-27.546C89.183,343.637,83.197,336.062,68.7,344.432z"></path> <path style="fill:#E5DC90;" d="M352.653,96.263c10.205,5.892,19.176,9.46,27.546-5.038c4.065-7.041,14.598-44.39,4.393-50.282 c-10.205-5.892-37.284,21.904-41.349,28.945C334.873,84.386,342.448,90.371,352.653,96.263z"></path> <path style="fill:#E5DC90;" d="M258.373,93.708c-91.598,0-165.853,74.255-165.853,165.853 c0,45.799,18.563,87.262,48.577,117.276l234.552-234.552C345.635,112.271,304.172,93.708,258.373,93.708z"></path> </g> </g> </g> <g> <path style="fill:#F3E2A6;" d="M252.408,440.964c-11.783,0-21.337,1.395-21.337,18.136c0,8.131,9.553,45.742,21.337,45.742 s21.336-37.611,21.336-45.742C273.744,442.36,264.191,440.964,252.408,440.964z"></path> <path style="fill:#F3E2A6;" d="M346.688,415.702c-10.205,5.892-17.78,11.877-9.41,26.375c4.065,7.041,31.144,34.837,41.349,28.945 c10.205-5.892-0.328-43.241-4.393-50.282C365.864,406.242,356.893,409.81,346.688,415.702z"></path> <path style="fill:#F3E2A6;" d="M442.081,337.274c-14.498-8.37-20.483-0.795-26.375,9.41c-5.892,10.205-9.46,19.176,5.038,27.546 c7.041,4.065,44.39,14.598,50.282,4.393C476.918,368.418,449.122,341.339,442.081,337.274z"></path> <path style="fill:#F3E2A6;" d="M459.105,231.066c-16.741,0-18.136,9.553-18.136,21.337c0,11.784,1.395,21.336,18.136,21.336 c8.13,0,45.742-9.553,45.742-21.336C504.846,240.619,467.235,231.066,459.105,231.066z"></path> <path style="fill:#F3E2A6;" d="M420.744,130.577c-14.497,8.37-10.93,17.341-5.038,27.546c5.892,10.205,11.877,17.78,26.375,9.41 c7.041-4.065,34.837-31.144,28.945-41.349C465.134,115.979,427.785,126.511,420.744,130.577z"></path> <path style="fill:#F3E2A6;" d="M158.127,415.702c-10.205-5.892-19.176-9.46-27.546,5.038c-4.065,7.041-14.598,44.39-4.392,50.282 c10.205,5.892,37.283-21.904,41.349-28.945C175.907,427.578,168.332,421.594,158.127,415.702z"></path> <path style="fill:#F3E2A6;" d="M418.261,252.403c0-45.799-18.564-87.263-48.577-117.276L135.132,369.679 c30.014,30.013,71.477,48.578,117.276,48.578C344.006,418.257,418.261,344.001,418.261,252.403z"></path> </g> <g> <path style="fill:#FBEEB9;" d="M158.09,89.065c-7.67,4.453-14.679,7.587-21.277,2.557c-2.144-1.567-4.206-4.041-6.268-7.587 c-4.041-7.01-14.597-44.367-4.371-50.223c9.814-5.69,34.967,19.545,40.657,27.874c0.33,0.412,0.577,0.742,0.742,1.072 C175.903,77.189,168.316,83.209,158.09,89.065z"></path> <g> <path style="fill:#FBEEB9;" d="M273.709,45.687c0,0.577,0,1.155-0.083,1.65c-0.577,15.174-9.814,16.493-21.194,16.493 c-4.288,0-8.247-0.165-11.628-1.237c-0.907-0.247-1.732-0.659-2.556-1.072c-2.722-1.402-4.866-3.711-6.02-7.422 c-0.083-0.083,0-0.083,0-0.083c-0.742-2.227-1.155-5.03-1.155-8.329c0-4.865,3.464-20.452,8.824-32.08 c3.216-7.01,7.175-12.617,11.381-13.442C251.69,0.083,252.02,0,252.432,0c3.547,0,6.927,3.463,9.814,8.494 c0.99,1.649,1.897,3.464,2.804,5.443C270.328,25.482,273.709,40.904,273.709,45.687z"></path> <path style="fill:#FBEEB9;" d="M89.147,158.09c-5.937,10.226-11.875,17.813-26.39,9.484c-2.969-1.732-9.648-7.505-15.916-14.432 c-0.082-0.083-0.165-0.165-0.165-0.248c-8.577-9.401-16.246-20.864-12.865-26.719c5.855-10.226,43.213,0.33,50.222,4.371 c5.195,3.051,8.164,6.185,9.401,9.401C95.662,145.637,92.858,151.658,89.147,158.09z"></path> <path style="fill:#FBEEB9;" d="M63.83,252.432c0,11.793-1.402,21.277-18.142,21.277H45.44c-5.03-0.083-20.122-3.382-31.503-8.577 c-2.886-1.402-5.608-2.804-7.835-4.371c-0.082,0-0.082,0-0.082,0C2.309,258.205,0,255.401,0,252.432c0-0.33,0-0.742,0.165-1.072 c0.742-4.041,5.69-7.669,12.04-10.886c11.793-5.608,28.451-9.401,33.482-9.401c1.897,0,3.629,0.165,5.196,0.412 c6.762,0.99,9.978,4.288,11.545,8.824c0.412,1.072,0.66,2.309,0.825,3.546C63.748,246.412,63.83,249.381,63.83,252.432z"></path> <path style="fill:#FBEEB9;" d="M84.034,374.237c-5.196,3.051-27.379,9.649-40.739,8.576c-1.567-0.083-2.969-0.33-4.288-0.742 c-2.392-0.66-4.206-1.815-5.195-3.464c-0.908-1.567-1.072-3.629-0.577-5.855c2.804-12.206,23.503-32.08,29.523-35.461 c2.969-1.732,5.608-2.804,7.917-3.216c7.917-1.732,12.453,2.969,16.659,9.566c0.577,0.99,1.237,1.979,1.814,3.051 c2.062,3.711,3.959,7.175,4.701,10.556C95.25,363.268,93.353,368.876,84.034,374.237z"></path> <path style="fill:#FBEEB9;" d="M346.688,89.104c10.205,5.892,19.176,9.46,27.546-5.038c4.065-7.041,14.598-44.39,4.393-50.282 c-10.205-5.892-37.284,21.904-41.349,28.945C328.908,77.228,336.483,83.213,346.688,89.104z"></path> <path style="fill:#FBEEB9;" d="M369.701,135.164l-0.743,0.742l-3.381,3.381L135.164,369.701 c-2.474-2.474-4.783-4.948-7.092-7.587c-6.185-7.009-11.793-14.514-16.741-22.513c-15.668-25.318-24.74-55.171-24.74-87.168 c0-91.621,74.221-165.842,165.842-165.842c29.936,0,58.057,7.917,82.385,21.936C347.6,115.784,359.31,124.773,369.701,135.164z"></path> </g> </g> </g> </g></svg>`
      if(xSun<280){
        sun.style.transform=`translate(${xSun+'px'},${-ySun+'px'})`;
        xSun+=10
        ySun+=10
      }else{
      clearInterval(sunUp)
      }

    }

  }else{
    let xMoon=0
    let yMoon=0


    moon.style.position='absolute';
    moon.style.right=-180+'px';
    moon.style.top=300+'px';


    moon.style.zIndex=25;

    moon.innerHTML=`<svg height="190px" width="190px" version="1.1" id="_x35_" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" xml:space="preserve" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <path style="fill:#F3ECDD;" d="M90.822,60.408c105.574-92.296,264.984-76,357.28,29.574s84.138,262.286-21.436,354.583 S158.688,529.26,66.392,423.687S-14.752,152.704,90.822,60.408z"></path> <path style="fill:#ECE1D0;" d="M107.702,89.331c99.918-87.352,248.823-74.176,333.823,23.051s75.389,243.385-24.528,330.736 c-99.918,87.352-251.733,82.319-336.733-14.909S7.784,176.683,107.702,89.331z"></path> <g> <path style="fill:#D7D1C4;" d="M244.034,141.578C226.114,178.849,181.001,192.92,143.73,175 c-37.271-17.92-53.236-61.358-35.316-98.629c17.92-37.271,62.836-54.047,100.107-36.127 C245.792,58.164,261.954,104.307,244.034,141.578z"></path> <path style="opacity:0.06;fill:#040000;" d="M128.089,97.737c17.92-37.271,62.836-54.047,100.107-36.127 c4.127,1.984,7.995,4.316,11.586,6.943c-7.335-11.909-17.951-21.909-31.261-28.309c-37.271-17.92-82.187-1.144-100.107,36.127 c-15.805,32.873-5.247,70.539,23.036,91.267C118.965,147.179,116.792,121.234,128.089,97.737z"></path> </g> <path style="fill:#D7D1C4;" d="M217.126,218.456c-1.17-5.733,2.71-11.178,8.442-12.348c5.733-1.17,11.248,2.359,12.418,8.092 s-2.456,11.466-8.189,12.636C224.065,228.005,218.296,224.189,217.126,218.456z"></path> <path style="opacity:0.5;fill:#FFFFFF;" d="M363.159,97.031c-1.17-5.733,2.71-11.178,8.442-12.348s11.248,2.359,12.418,8.092 c1.17,5.733-2.456,11.466-8.189,12.636C370.097,106.581,364.328,102.764,363.159,97.031z"></path> <path style="fill:#D7D1C4;" d="M282.758,398.482c8.691-7.598,21.813-6.256,29.411,2.434c7.598,8.691,6.926,21.591-1.765,29.189 c-8.691,7.598-22.06,6.972-29.658-1.719C273.149,419.697,274.067,406.08,282.758,398.482z"></path> <path style="opacity:0.5;fill:#FFFFFF;" d="M58.328,221.051c-1.17-5.733,2.71-11.178,8.442-12.348 c5.733-1.17,11.248,2.359,12.418,8.092c1.17,5.733-2.456,11.466-8.189,12.636C65.267,230.6,59.498,226.784,58.328,221.051z"></path> <path style="fill:#D7D1C4;" d="M468.957,281.792c-3.725,36.65-37.257,62.1-73.907,58.374c-36.65-3.725-63.179-35.28-59.453-71.93 c3.725-36.65,36.273-64.306,72.923-60.581C445.17,211.381,472.683,245.142,468.957,281.792z"></path> <g> <path style="fill:#D7D1C4;" d="M173.243,331.228c14.631,25.328,4.867,57.296-20.461,71.927 c-25.328,14.631-57.072,6.642-71.703-18.687c-14.631-25.328-6.526-58.259,18.802-72.89 C125.209,296.946,158.611,305.899,173.243,331.228z"></path> <path style="opacity:0.06;fill:#040000;" d="M112.82,324.421c18.464-10.666,41.211-8.787,57.856,2.82 c-15.693-22.239-46.848-29.497-70.796-15.664c-25.328,14.631-33.433,47.562-18.802,72.89c4.04,6.993,9.388,12.657,15.541,16.895 c-0.915-1.299-1.789-2.644-2.602-4.052C79.387,371.983,87.492,339.052,112.82,324.421z"></path> </g> <path style="opacity:0.06;fill:#040000;" d="M349.708,282.184c3.725-36.65,36.272-64.306,72.923-60.581 c12.217,1.242,23.416,5.824,32.783,12.736c-11.007-14.534-27.695-24.731-46.895-26.682c-36.65-3.725-69.197,23.931-72.922,60.581 c-2.465,24.248,8.316,46.262,26.507,59.465C352.784,315.151,347.977,299.219,349.708,282.184z"></path> </g> <path style="opacity:0.1;fill:#040000;" d="M254.816,381.8c-105.36,0-198.423-52.065-254.726-131.657 C-2.613,349.865,55.643,444.482,154.03,486.89c128.776,55.508,279.654,1.534,335.162-127.242 c15.267-35.419,21.657-72.749,20.289-109.419C453.171,329.772,360.138,381.8,254.816,381.8z"></path> </g> </g></svg>`

    let moonUp =setInterval(moonMove,1000/20)
    function moonMove(){
      if(xMoon<280){
        moon.style.transform=`translate(${-xMoon+'px'},${-yMoon+'px'})`;
        xMoon+=10
        yMoon+=10
      }else{
        clearInterval(moonUp)
      }

    }

  }

}




$("#address").suggestions({////////////подсказки при вводе города 

  token: "0ec2b83eec5c6c8265242b12bd426f14b9d90d43",
  type: "ADDRESS",
  geoLocation: false,
  bounds: "city",
  
  constraints: {
    locations: { country: "*" }
  },
  onSelect:function(suggestions){
    city=suggestions.data.city
    coutryCode=suggestions.data.country_iso_code
    getCoord(city)
    searchCityInpyt.value=''
  
  }
});




/******************************GEO API **************************************/


let city; /****************город*/
let coutryCode;/******************* код страны*/






let lat;////////////////широта
let lon;///////////////долгота 

async function  getCoord(a){/////////////////////получение координат заданного города 
  
  let citeCoordGet=`http://api.openweathermap.org/geo/1.0/direct?q=${a}&limit=5&appid=4d6fd7b7b5715aee9828478b6f714df0`;
  let responce=  await fetch(citeCoordGet)
  const getCoord=await  responce.json() 




  for(let coord of getCoord ){
  
    if(coord.country ==coutryCode ){
      
      lat=coord.lat
      lon=coord.lon
      
      getParametrs(a)
      
    }

  }


}



let allPar ={}

async function getParametrs(a){

  switchToBoardPage()

  let allParametrs = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=4d6fd7b7b5715aee9828478b6f714df0&units=metric`
  let responce =await fetch(allParametrs)
  const getParametrsI=await  responce.json() 
 
  for(let i in getParametrsI){
    allPar[i]=getParametrsI[i]
    
  }


  innerData(a)
  starPressure()
  startWind()


  sessionStorage[a]=JSON.stringify({lat,lon});

  for(let c in sessionStorage){
    if(c!=a){
      delete sessionStorage[c]
    }
  }
    
    


  // const weatherNow = document.getElementById('weather_now'),
  let container=document.getElementById('container'), /*контейнер*/
    board=document.getElementById('board'),
    allParametrsI=document.querySelector('.allParametrs'),
    weatherBoard=document.getElementById('weatherBoard'),
    rowItem = document.querySelector('.row'),
    favoritesSVG=document.querySelector('.favoritesSVG'),
    addFavorites=document.querySelector('.add');

  favoritesSVG.addEventListener('click',()=>{
    
    switchToFavoritesPage()
  
  })
  favoritesSVG.addEventListener('touchstart',()=>{
  
    switchToFavoritesPage()
  
  })


  addFavorites.addEventListener('click',()=>{
  
    localStorage.setItem(a,JSON.stringify(getParametrsI))
    
  })
  addFavorites.addEventListener('touchstart',()=>{

    localStorage.setItem(a,JSON.stringify(getParametrsI))
    
  })


  let boardWidth = widthWindow>500?widthWindow*0.4:widthWindow*0.9;

  if(widthWindow>1600){/***********ШИРИНА ГЛАВНОГО ЭКРАНА В ЗАВИСИМОСТИ ОТ ЭКРАНА*/
    boardWidth=widthWindow*0.4

  }else if(widthWindow>1100){
    boardWidth=widthWindow*0.5
  }else if(widthWindow>800){
    boardWidth=widthWindow*0.6
  }
  else if(widthWindow>350){
    boardWidth=widthWindow*0.9
  }



  board.style.flexDirection=flexDirectionParametrs/***************стили главного экрана */
  board.style.width=boardWidth+'px';
  board.style.justifyContent=flexJC;
  board.style.borderRadius=borderRadius+'px';
  board.style.padding=paddingA+'px'
  board.style.opacity = 1;
  board.style.visibility = 'visible';
  board.style.transition= ' .5s ease';

  rowItem.style.flexDirection= flexDirectionROW

  allParametrsI.style.justifyContent='center'
  board.style.display='flex' 
  
}



async function innerData(city){


  weatherBoard.style.paddingTop= 10+'%'




  let date = new Date(),
    dateHH = date.getHours()<10?'0'+date.getHours():date.getHours(),
    dateMM = date.getMinutes()<10?'0'+date.getMinutes():date.getMinutes(),
    dateDD= date.getDate();

  let monthNameD = date.toLocaleString('default', { month: 'long' });
  let monthName = monthNameD=='август'?monthNameD.replace('т','та'):monthNameD.replace('ь','я');

  let wBoard=document.getElementById('weatherBoard')




  wBoard.innerHTML=  `

                  <div class="temp">${Math.round(allPar.main.temp)}<span class="span_temp">&#176;C</span></div>
                  <div class="name">${city}</div>
                  <div class="date">
                      <div class="time">${dateHH +':'+dateMM}</div>
                      <div class="data">${dateDD+' '+monthName}</div>

                  </div>
                  
                  <div class="tempF">ощущается как ${Math.round(allPar.main.feels_like)}<span class="spanTemp">&#176;C</span></div>
                  <div class="weather_conditions" style=""></div>

    `

  let temp=document.querySelector('.temp'),
    name=document.querySelector('.name'),
    tempF=document.querySelector('.tempF'),
    spanTempF=document.querySelector('.spanTemp'),
    spanTemp=document.querySelector('.span_temp');


    temp.style.fontSize=fontWidth*10+'px';
    name.style.fontSize=fontWidth*4+'px';
    spanTempF.style.fontSize=fontWidth*2.2+'px';
    tempF.style.fontSize=fontWidth*2.2+'px';
    spanTemp.style.fontSize=fontWidth*1.5+'px';
  
}





/***********************************************************************кампонент ВЕТЕР********************************************************/


function startWind(){



  let windSpeed = allPar.wind.speed,
    windDegTreangle=allPar.wind.deg>180?allPar.wind.deg-180:allPar.wind.deg+180,
    windDeg=allPar.wind.deg;
  let DirectionOfTheWind = document.getElementById('DirectionOfTheWind');
  let context=DirectionOfTheWind.getContext('2d');
  let treeangle = document.getElementById('treeangle');
  let contextT=treeangle.getContext('2d'); 


  // let SVGWind =document.getElementById('SVG_wind');


  DirectionOfTheWind.width=allWidth;
  DirectionOfTheWind.height=allWidth;
  treeangle.width=allWidth;
  treeangle.height=allWidth;


  let radius= DirectionOfTheWind.width/2.6;
  let angleLine=Math.PI*2/4;
  let angleCoof=angleLine/10;/**коофициент угла дуги для отступа под буквы */

  class LineCoord{
    constructor(num,center,radius,angleLine,boolin){
      this.num=num;
      this.center=center;
      this.radius=radius;
      this.angleLine=angleLine
      this.boolin=boolin;
    }
    drawLine(){

      context.strokeStyle='#4D3778';
      context.lineWidth=center/25;
      context.beginPath();
      context.arc(center,center, this.radius, this.angleLine*this.num+angleCoof,this.angleLine*(this.num+1)-angleCoof, this.boolin);
      context.stroke();

    }
  }


  let arcElemO=new LineCoord(0,center,radius,angleLine,false)/*******дуги со смещением в зависимости от позиции */
  arcElemO.drawLine()
  let arcElemT=new LineCoord(1,center,radius,angleLine,false)
  arcElemT.drawLine()
  let arcElemTh=new LineCoord(2,center,radius,angleLine,false)
  arcElemTh.drawLine()
  let arcElemF=new LineCoord(3,center,radius,angleLine,false)
  arcElemF.drawLine()


  /*коофициенты-----------букв------------------*/ 
      
  let north=2,
      south=1,
      east=0.5,
      west=1.5
  /**--------координаты букв сторон света------------- */

  class CoordLiter{
    constructor(liter,num,center,lenghtN){
      this.num=num
      this.liter= liter;
      this.center= center;
      this.lenghtN= lenghtN;
    }
    getCoordW(){
      let angle=Math.PI*this.num;
      let coordLiterX=this.center+Math.sin(angle)*this.lenghtN,
      coordLiterY=this.center-Math.cos(angle)*this.lenghtN;
      context.font=`300 ${fontWidth}px roboto`
      context.fillStyle='white';
      context.textAlign='center';
      context.textBaseline='middle';
      context.fillText(this.liter,coordLiterX,coordLiterY);
    }
  }

  const literOne = new CoordLiter('С',north,center,lenghtN)
  literOne.getCoordW()
  const literTwo = new CoordLiter('Ю',south,center,lenghtN)
  literTwo.getCoordW()
  const literThree = new CoordLiter('З',west,center,lenghtN)
  literThree.getCoordW()
  const literFour = new CoordLiter('В',east,center,lenghtN)
  literFour.getCoordW()



  /*----------------------центр ветра---------------------------------------------*/ 


  let numSideArr=Math.round(windDeg/45)
  let sideArr = ['северный','северо-восточный','восточный','юго-восточный','южный','юго-западный','западный','северо-западный','северный']
  let sideWind=sideArr[numSideArr]



  context.font=`100 ${fontWidth}px  roboto`
  context.fillStyle='white';
  context.textAlign='center';
  context.textBaseline='middle';
  context.fillText(`${sideWind}`,center,DirectionOfTheWind.width/2.2) /****отступ текста */


  context.fillText(`${windSpeed.toFixed(1)} м/с`,center,DirectionOfTheWind.width/1.8)/****отступ текста */

  /*--------------стрелка ветра------*/


  let num = 0
  let triangleRAF = requestAnimationFrame(triangleDraw)

  function  triangleDraw(){
    let angleR=(num*Math.PI/180)
    let lenghtToHourR= treeangle.width/2
    let coordHourItemXR=center+Math.sin(angleR)*lenghtToHourR*0.65,
        coordHourItemYR=center-Math.cos(angleR)*lenghtToHourR*0.65;


    contextT.clearRect(0,0,treeangle.width,treeangle.height)/**ОБЯЗАТЕЛЬНАЯ ОЧИСТКА ЭЛЕМЕНТА  */
    contextT.save();
    contextT.fillStyle='#4D3778';
    contextT.translate(coordHourItemXR,coordHourItemYR)
    contextT.rotate(angleR)
    contextT.beginPath();
    contextT.moveTo(0,0);
    contextT.lineTo(10,30);
    contextT.lineTo(-10,30);
    contextT.strokeStyle='#ffffff61';

    contextT.closePath();
    contextT.fill();
    contextT.stroke();

    contextT.restore();      

    num++/**увеличение угла */

    if(num<windDegTreangle){

      requestAnimationFrame(triangleDraw)/**ПОВТОР АНИМАЦИИ ПОКА СРАБАТЫВАЕТ УСЛОВИЕ */

    }else{
       cancelAnimationFrame(triangleRAF)/**ОТКЛЮЧЕНИЕ АНИМАЦИИ */
    }
    }
}


/***********************************************************************кампонент ВЕТЕР END********************************************************/
/***********************************************************************кампонент ДАВЛЕНИЕ ********************************************************/
function starPressure(){


  let  pressure = Math.round(allPar.main.pressure/1.33)
  let DirectionPressure = document.getElementById('DirectionPressure');
  let pointer = document.getElementById('pointer');
  let contextP=DirectionPressure.getContext('2d'); 
  let contextPointer=pointer.getContext('2d'); 

  DirectionPressure.width=allWidth;
  DirectionPressure.height=allWidth;
  pointer.width=allWidth;
  pointer.height=allWidth;

  contextP.strokeStyle='#4D3778';

  for(let i=21; i<=36;i++){///построение левой стороны давления 
    let angleP = (Math.PI/18)*i;

    let coordPX=center+Math.sin(angleP)*lenghtN;
    let coordPY=center-Math.cos(angleP)*lenghtN;

    contextP.save()
    contextP.beginPath();
    contextP.translate(coordPX,coordPY)
    contextP.rotate(angleP)
    contextP.moveTo(0,0);
    contextP.lineTo(0,15);
    contextP.lineCap='round';
    contextP.lineWidth=5;
    contextP.stroke();
    contextP.restore()
  }
  for(let i=1; i<=15;i++){//построение правой стороны давления 
    let angleP = (Math.PI/18)*i;

    let coordPX=center+Math.sin(angleP)*lenghtN;
    let coordPY=center-Math.cos(angleP)*lenghtN;

    contextP.save()
    contextP.beginPath();
    contextP.translate(coordPX,coordPY)
    contextP.rotate(angleP)
    contextP.moveTo(0,0);
    contextP.lineTo(0,15);
    contextP.lineCap='round';
    contextP.lineWidth=5;
    contextP.stroke();
    contextP.restore()
  }

  let anglePPointerH;
  let anglePPointerL;
  let startAngle=pressure>760?0:(Math.PI/18)*21;

  let pointerDrawRAF= requestAnimationFrame(pointerDraw)




  function pointerDraw(){

  if(pressure>760){
    let highPressure =(pressure-760)/2;
    anglePPointerH=(Math.PI/18)*highPressure;
  }else{
    let lowPressure = (760-pressure)/2;
    anglePPointerL=Math.PI*2-(Math.PI/18*lowPressure)
  }

  let coordPXPointer=center+Math.sin(startAngle)*lenghtN;
  let coordPYPointer=center-Math.cos(startAngle)*lenghtN;

  contextPointer.clearRect(0,0, pointer.width, pointer.height)/**ОБЯЗАТЕЛЬНАЯ ОЧИСТКА ЭЛЕМЕНТА  */
  contextPointer.strokeStyle='#d5d5d5';
  contextPointer.save()
  contextPointer.beginPath();
  contextPointer.translate(coordPXPointer,coordPYPointer)
  contextPointer.rotate(startAngle)
  contextPointer.moveTo(0,0);
  contextPointer.lineTo(0,15);
  contextPointer.lineCap='round';
  contextPointer.lineWidth=8;
  contextPointer.shadowColor='rgb(255, 255, 92)';
  contextPointer.shadowOffsetX=0;
  contextPointer.shadowOffsetY=0;
  contextPointer.shadowBlur=23;
  contextPointer.stroke();
  contextPointer.restore()
  startAngle+=Math.PI/300

  if(startAngle==anglePPointerH || startAngle>anglePPointerH || startAngle==anglePPointerL || startAngle>anglePPointerL  ){
    cancelAnimationFrame(pointerDrawRAF)
  }else(
    requestAnimationFrame(pointerDraw)
  )
  }

  /*----------------------центр давления ---------------------------------------------*/ 

  let pressureCenterOne = `${pressure}`///////давлние из API
  let pressureCenterTwo = 'мм.рт.ст.'/////////давлние из API
    contextP.font=`100 ${fontWidth}px  roboto`
    contextP.fillStyle='white';
    contextP.textAlign='center';
    contextP.textBaseline='middle';
    contextP.fillText(pressureCenterOne,center,center*0.9)/****отступ текста */
    contextP.fillText(pressureCenterTwo,center,center*1.1)/****отступ текста */


  let anglePPointerTL=Math.PI/18*21
  let anglePPointerTH=Math.PI/18*15
  let coordPXPointerTL=center+Math.sin(anglePPointerTL)*lenghtN;
  let coordPYPointerTL=center-Math.cos(anglePPointerTL)*lenghtN;
  let coordPXPointerTH=center+Math.sin(anglePPointerTH)*lenghtN;
  let coordPYPointerTH=center-Math.cos(anglePPointerTH)*lenghtN;
    contextP.font=`300 ${fontWidth}px  roboto`
    contextP.fillStyle='white';
    contextP.textAlign='center';
    contextP.textBaseline='middle';
    contextP.fillText('низкое',coordPXPointerTL,coordPYPointerTL+20) /****отступ текста */
    contextP.fillText('Высокое',coordPXPointerTH,coordPYPointerTH+20)/****отступ текста */



}
/***********************************************************************кампонент ДАВЛЕНИЕ END********************************************************/


/*****************************************************************************sessionStorage************************************************************/


window.onhashchange=goToHash;

let hashState={}

function goToHash(){
  
  
  hash = window.location.hash
  hashJSON= decodeURIComponent(hash.substring(1))

  if(hashJSON==''){
    
    hashState={pageName:'MAIN'}
    
  }else{
    hashState=JSON.parse(hashJSON)
  }

  let weatherU={
    Clear:'background-image:url(./images/clear.png)',
    Clouds:'background-image:url(./images/clouds.png)',
    Rain:'background-image:url(./images/rain.png)'
   

  }
    
  
  let pageHTML =''
  
  switch(hashState.pageName){
    
    case'MAIN':
    pageHTML='<div class="home">для корректной работы приложения начните ввод города в поисковое окно сайта и выберите из предложенных вариантов подходящий вам.</div>'
    break;
    case'favorites':
    let allFav={}
    for(let i=0; i<localStorage.length; i++) {
      let key = localStorage.key(i);
     let data= JSON.parse(localStorage.getItem(key))
     
     allFav[key]=data
    }
   
  
      for(let i in allFav){
        let img = allFav[i].weather[0].main

        pageHTML+=`<div id="favorites">
        <div class="left">
        <span class="nameF">${i}</span>
        <div class="tempF">${Math.round(allFav[i].main.temp)}<span>&#176;C</span></div>
        <div class="tempFF"><span class="tempFF_S">ощущается как</span>${+" "+Math.round(allFav[i].main.feels_like)}<span>&#176;C</span></div>
        </div>
        <div class="right" style=${weatherU[img]}>
        </div>

        </div>
        `
        
      }
    break;
    case'board':
      if(sessionStorage.length!=0){
        
        storageDataCity =  Object.keys(sessionStorage)[0]
        let coord= JSON.parse(sessionStorage.getItem(storageDataCity))
        lat=coord.lat
        lon=coord.lon
       
        getParametrs(storageDataCity)
      }

   
      pageHTML=`     <div href='#board' id='board' class="board">
        <div class="add" ><svg width="40px" height="40px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns" fill="#5e4c80"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>plus-circle</title> <desc>Created with Sketch Beta.</desc> <defs> </defs> <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage"> <g id="Icon-Set-Filled" sketch:type="MSLayerGroup" transform="translate(-466.000000, -1089.000000)" fill="#5e4c80"> <path d="M488,1106 L483,1106 L483,1111 C483,1111.55 482.553,1112 482,1112 C481.447,1112 481,1111.55 481,1111 L481,1106 L476,1106 C475.447,1106 475,1105.55 475,1105 C475,1104.45 475.447,1104 476,1104 L481,1104 L481,1099 C481,1098.45 481.447,1098 482,1098 C482.553,1098 483,1098.45 483,1099 L483,1104 L488,1104 C488.553,1104 489,1104.45 489,1105 C489,1105.55 488.553,1106 488,1106 L488,1106 Z M482,1089 C473.163,1089 466,1096.16 466,1105 C466,1113.84 473.163,1121 482,1121 C490.837,1121 498,1113.84 498,1105 C498,1096.16 490.837,1089 482,1089 L482,1089 Z" id="plus-circle" sketch:type="MSShapeGroup"> </path> </g> </g> </g></svg></div>
        <div class="favoritesSVG"><svg fill="#5e4c80" width="45px" height="45px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" stroke="#5e4c80"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M12.279 8.833 12 9.112l-.279-.279a2.745 2.745 0 0 0-3.906 0 2.745 2.745 0 0 0 0 3.907L12 16.926l4.186-4.186a2.745 2.745 0 0 0 0-3.907 2.746 2.746 0 0 0-3.907 0z"></path><path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"></path></g></svg></svg></div>
        
        <div id='weatherBoard'class="weather_board"></div>
        <div class="allParametrs">
          
          <div class="row row_two">
              <div id='parametr' class="item three">

                  <svg id="SVG_wind"  viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="#4D3778"><g stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="m 4 1 c -0.554688 0 -1 0.445312 -1 1 s 0.445312 1 1 1 h 1 c 0.074219 0.003906 0.144531 0.027344 0.214844 0.066406 c 0.199218 0.113282 0.289062 0.339844 0.230468 0.566406 c -0.058593 0.222657 -0.25 0.367188 -0.476562 0.367188 h -4.96875 v 2 h 4.96875 c 1.125 0 2.121094 -0.765625 2.410156 -1.855469 c 0.289063 -1.085937 -0.1875 -2.246093 -1.160156 -2.808593 c -0.320312 -0.183594 -0.671875 -0.285157 -1.023438 -0.316407 c -0.003906 0 -0.007812 0 -0.011718 -0.003906 c -0.0625 -0.007813 -0.121094 -0.015625 -0.183594 -0.015625 z m 8.480469 1 c -1.617188 0.011719 -3.058594 1.152344 -3.40625 2.769531 c -0.113281 0.542969 0.230469 1.074219 0.773437 1.1875 c 0.539063 0.117188 1.070313 -0.230469 1.183594 -0.769531 c 0.167969 -0.78125 0.886719 -1.285156 1.675781 -1.171875 c 0.792969 0.109375 1.34375 0.792969 1.289063 1.589844 c -0.054688 0.796875 -0.699219 1.394531 -1.496094 1.394531 h -12.5 v 2 h 12.5 c 1.828125 0 3.363281 -1.429688 3.492188 -3.253906 c 0.128906 -1.828125 -1.195313 -3.457032 -3.003907 -3.714844 c -0.171875 -0.023438 -0.339843 -0.03125 -0.507812 -0.03125 z m -12.480469 8 v 2 h 10 c 0.289062 0 0.5 0.210938 0.5 0.5 s -0.210938 0.5 -0.5 0.5 h -1 c -0.554688 0 -1 0.445312 -1 1 s 0.445312 1 1 1 h 1 c 1.367188 0 2.5 -1.132812 2.5 -2.5 s -1.132812 -2.5 -2.5 -2.5 z m 0 0" fill="#4D3778"></path> </g></svg>
                <canvas id='treeangle'>

                </canvas>

                <canvas id='DirectionOfTheWind'>

                </canvas>

            </div>
            <div id='parametr' class="item four">

                <svg id="SVGpressure"  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12 9C11.4477 9 11 9.44771 11 10V15.2676C10.4022 15.6134 10 16.2597 10 17C10 18.1046 10.8954 19 12 19C13.1046 19 14 18.1046 14 17C14 16.2597 13.5978 15.6134 13 15.2676V10C13 9.44771 12.5523 9 12 9Z" fill="#4D3778"></path> <path d="M11 6C11 5.44772 11.4477 5 12 5C12.5523 5 13 5.44772 13 6C13 6.55228 12.5523 7 12 7C11.4477 7 11 6.55228 11 6Z" fill="#4D3778"></path> <path d="M16 7C15.4477 7 15 7.44772 15 8C15 8.55229 15.4477 9 16 9C16.5523 9 17 8.55229 17 8C17 7.44772 16.5523 7 16 7Z" fill="#4D3778"></path> <path d="M6 13C5.44772 13 5 12.5523 5 12C5 11.4477 5.44772 11 6 11C6.55228 11 7 11.4477 7 12C7 12.5523 6.55228 13 6 13Z" fill="#4D3778"></path> <path d="M7 8C7 8.55229 7.44772 9 8 9C8.55228 9 9 8.55228 9 8C9 7.44772 8.55228 7 8 7C7.44772 7 7 7.44772 7 8Z" fill="#4D3778"></path> <path d="M18 13C17.4477 13 17 12.5523 17 12C17 11.4477 17.4477 11 18 11C18.5523 11 19 11.4477 19 12C19 12.5523 18.5523 13 18 13Z" fill="#4D3778"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23ZM12 20.9932C7.03321 20.9932 3.00683 16.9668 3.00683 12C3.00683 7.03321 7.03321 3.00683 12 3.00683C16.9668 3.00683 20.9932 7.03321 20.9932 12C20.9932 16.9668 16.9668 20.9932 12 20.9932Z" fill="#4D3778"></path> </g></svg>
                

                <canvas id='DirectionPressure'>

                </canvas>
                <canvas id='pointer'>

                </canvas>
            </div>
          </div>
        </div>

        </div>
      `




    break
  }
    container.innerHTML=pageHTML
 

     /***************************** DRAGNDROP*/
   

     let favorites = document.querySelectorAll('#favorites');
 
     if(favorites ){
      for(let f of favorites){
        f.style.width=allWidth*1.9+'px';
        f.style.height=allWidth/2 +'px';
        f.style.borderRadius=25 +'px';
        f.onmousedown = function(eo) {

          var coords = getCoords(f);
          var shiftX = eo.pageX - coords.left;
          var shiftY = eo.pageY - coords.top;
        
          f.style.position = 'absolute';
          document.body.appendChild(f);
          moveAt(eo);
        
          f.style.zIndex = 1000;
        
          function moveAt(eo) {
            f.style.left = eo.pageX - shiftX + 'px';
            f.style.top = eo.pageY - shiftY + 'px';
          }
        
          document.onmousemove = function(eo) {
            moveAt(eo);
          };
        
          f.onmouseup = function() {
            document.onmousemove = null;
            f.onmouseup = null;
          };
        
        }
        
        f.ondragstart = function() {
          return false;
        };
        
        function getCoords(elem) {   
          var box = elem.getBoundingClientRect();
          return {
            top: box.top + scrollY,
            left: box.left + scrollX
          };
        }
       
      }
       container.style.flexDirection='column'
       container.style.alignItems='center'
       container.style.justifyContent='top'

       
     }


     if(window.onhashchange){
      for(let f of favorites){
        f.style.position='relative'}
     }
     /****************************** */
 
}




function switchToState(newState){
  location.hash= encodeURIComponent(JSON.stringify(newState))
}

function switchToMainPage(){
  switchToState({pageName:'MAIN'})
}
function switchToBoardPage(){
  switchToState({pageName:'board'})
}
function switchToFavoritesPage(){
  switchToState({pageName:'favorites'})
  
}



goToHash()