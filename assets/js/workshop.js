
/* arrowicon = document.querySelectorAll('.carousel button');
const slide =document.querySelector(".carousel-item");
firstcard = slide.querySelectorAll('.carousel-item-list')[0];
let firstcardwidth = firstcard.clientWidth ;
arrowicon.forEach(icon => {
    icon.addEventListener("click", ()=>{
             slide.scrollLeft += icon.id == "forward" ? firstcardwidth : -firstcardwidth;
             console.log(firstcard)
    });
    
}); */

/* 
const buttons =document.querySelectorAll("[data-carousel-button]");

buttons.forEach(button => {
    button.addEventListener("click",()=>{
        const offset = button.dataset.carouselButton === "next" ? 1 : -1
        const slides =button.closest("[data-carousel]").querySelector("[data-slides]")

        const activeSlide = slides.querySelector("[data-active]")
        let newIndex = [...slides.children].indexOf(activeSlide)+offset
        if (newIndex < 0) newIndex = slides.children.length - 1
        if (newIndex >= slides.children.length) newIndex = 0

        slides.children[newIndex].dataset.active =true
        delete activeSlide.dataset.active
    });
}); */

/* Carousel */
let currentindex = 0 ;
let dotindex = 0;
const imgelements = document.querySelectorAll('.carousel-item-list');
const previousbtn = document.querySelector('.previousbtn');
const nextbtn = document.querySelector('.nextbtn');
const dotbtn = document.querySelectorAll('.dot');
const clickbtn =document.querySelectorAll('.carousel-dot .dot');
const clickbtnss =Array.from(document.querySelectorAll('.dot'));

function displayimage(imgelements, newindex,newdot,dotbtn) {
    if(newindex < 0 && newdot < 0){
        newindex =imgelements.length - 1;
        newdot = dotbtn.length - 1;
       
    }else if(newindex > imgelements.length -1 && newdot > dotbtn.length - 1){
           newindex = 0
           newdot=0
         
    }
    for(btns of dotbtn){/* ให้วนลูปเอาข้อมูลเช่นพวก Tag element ต่างๆ เข้ามาใช้และเป็นจำนวนการวนลูบ */
    btns.classList.remove("dot-bg");/* ลบClass การแสดงสถานะการใช้งานเมนนูออก จาก Tag element ทั้งหมด ภายในHTML ที่เราดึงข้อมูลมาโดยใช้ DOM*/
    
    }
    for(img of imgelements){
        img.classList.remove('vis')
    }
    const newimage = imgelements[newindex];
    const newbtn = dotbtn[newdot];
    newimage.classList.add('vis')
    newbtn.classList.add('dot-bg')
    currentindex = newindex
    dotindex = newdot
    
}



previousbtn.addEventListener('click',()=>displayimage(imgelements,currentindex - 1, dotindex -1,dotbtn ))
nextbtn.addEventListener('click',()=>displayimage(imgelements,currentindex + 1, dotindex +1 ,dotbtn ))
clickbtn.forEach(clickbtns =>{
clickbtns.addEventListener("click",()=>{
    const result = clickbtnss.findIndex(e => e === clickbtns)
    displayimage(imgelements,currentindex  = result, dotindex = result ,dotbtn )
 
})
})
/* /Carousel */

/* Pagination */
let thispage= 1;
let limit= 3;
let list = document.querySelectorAll('.pagination-card .skillcard');

function loaditem(){
    let beginGet = limit * (thispage - 1);
    let endGet = limit * thispage - 1;
    list.forEach((item, key)=>{
        if(key >= beginGet  && key <= endGet){
            item.style.display ='flex';
        }else{
            item.style.display='none';
        }
    })
    listpage();
    /* loadbottom(thispage); */
}
loaditem();

function listpage() {
    /* let count = Math.ceil(list.length/ limit) */
    let max = Math.ceil(list.length/ limit)
    let minmax = max - 4;
    let count = 2
    let count1 = thispage - count
    count1 =count1>=minmax?minmax:count1;
    let count2 = thispage + count
    document.querySelector('.pagination-num').innerHTML= '';
    document.querySelector('.prevpag').innerHTML= '';
    document.querySelector('.nextpag').innerHTML= '';
    let bottom =document.querySelector('.pagination-num')
    let prevpag = document.querySelector('.prevpag'); 
    let nextpag = document.querySelector('.nextpag'); 
    let newpage = ''
     
     if(thispage > 1){
        let prevpage = ''
        prevpage += `<li onclick= changepage(${thispage - 1}) class="prevpag"><span><img src="assets/img/arrow.png" alt=""></span></li>`   
        prevpag.innerHTML = prevpage
     } 
     if(thispage >3){
        newpage +=`<li onclick= changepage(1) class="num"><span>1</span></li>`
        newpage +=`<li class="dots">...</li>`
    }
    for(i =count1>1?count1:1;i<=Math.min(max,count2=count2<5?5:count2);i++){  
        
        /* let newpage = document.createElement('li')
        newpage.innerHTML = `<li onclick= changepage(${i}) class="num active"><span>${i}</span></li>` */
        if(i == thispage){
            newpage += `<li onclick= changepage(${i}) class="num active"><span>${i}</span></li>`
        }else{
            newpage += `<li onclick= changepage(${i}) class="num"><span>${i}</span></li>`
        }
       
        
        /* document.querySelector('.pagination-num').appendChild(newpage)  */
    }
    if(thispage < max && max > 6 && thispage < max-2){
        
        newpage+=`<li class="dots">...</li>`
        newpage +=`<li onclick= changepage(${max}) class="num"><span>${max}</span></li>`
        
    }  if(thispage < max){
        let nextpage = ''
        nextpage += `<li onclick= changepage(${thispage + 1}) class="nextpag"><span><img src="assets/img/arrow.png" alt=""></span></li>`   
        nextpag.innerHTML = nextpage
    }  bottom.innerHTML = newpage  
}


 /*
     if(thispage > 1){
        let prevpage = ''
        prevpage += `<li onclick= changepage(${thispage - 1}) class="prevpag"><span>Prev</span></li>`   
        prevpag.innerHTML = prevpage
     } 
    for(i =count1>1?count1:1;i<=Math.min(max,count2);i++){       
        if(i == thispage){
            newpage += `<li onclick= changepage(${i}) class="num active"><span>${i}</span></li>`
        }else{
            newpage += `<li onclick= changepage(${i}) class="num"><span>${i}</span></li>`
        }
        
           
        
    } if(thispage < count2){
        let nextpage = ''
        nextpage += `<li onclick= changepage(${thispage + 1}) class="nextpag"><span>Next</span></li>`   
        nextpag.innerHTML = nextpage
     } 
     bottom.innerHTML = newpage    */
    
     


/* function loadbottom(i){
    let paglist = document.querySelectorAll('.pagination-num .num')
    let Plimit = 3
    let nums = i
    let num = i== 1 ? 3 : i;
    let thisbot = num;
    let thisB = thisbot /2
    let countB = Math.ceil(list.length/ limit)
    pagS= Math.ceil(thisbot / 3 +2)
    pagE = Math.floor(nums / 3 -1)
    console.log(pagS,pagE,countB)
    paglist.forEach((item, key)=>{
        if(key <= pagS){
            item.style.display='block';
        }else{
            item.style.display='none';
        }
        if(key < pagE){
            item.style.display='none';

        }
    })
} */

function changepage(i,p) {  
    thispage = i;
    loaditem();
    /* loadbottom(i); */
    /* let bottom =document.querySelector('.pagination-num')
    bottom.scrollLeft += p */
    
}

/* Switch Tap */
let tabmenu = document.querySelectorAll('.tab-menus');
let tabmenuss =Array.from(document.querySelectorAll('.tab-menus'))
let cotentmenu = document.querySelectorAll('.tab-aticle')


tabmenu.forEach(tabmenus=>{
tabmenus.addEventListener('click',()=>{
   switchtab(tabmenus)
})
})

function switchtab(i) {
    for(tmenus of tabmenu){
        tmenus.classList.remove('active-tab')
    }
    i.classList.add('active-tab')
    let r1 = tabmenuss.findIndex(e => e === i)
    
     cotentmenu.forEach(cmenus=>{
        cmenus.classList.remove('active-aticle')
     })
     cotentmenu[r1].classList.add('active-aticle')
    

    
   
    
   
}

/* Basic clendar */
let calendar = document.querySelector('.bcalendar');
let date = document.querySelector('.dates');
let daily = document.querySelector('.daily-calendar');
let today = new Date();
let activeday;
let getmonth = today.getMonth();
let getyear = today.getFullYear();
let selecteddate = document.querySelector('.dates');
selecteddate.addEventListener('click',()=>{
    document.querySelector('.selectors-years').classList.toggle('closeAll');
})
let heads = document.querySelector('#head');
heads.addEventListener('click',()=>{
    document.querySelector('.selectors-years').classList.toggle('closeAll');
    document.querySelector('#head #openplus').classList.toggle('openplus');
    document.querySelector('#head #closeplus').classList.toggle('closeplus');
})



/* 
let updown = document.querySelector('.up-down');
updown.addEventListener('click',()=>{
    document.querySelector('.selectors-years').classList.toggle('closeAll');
})
let updown2 = document.querySelector('#dates-head .up-down');
updown2.addEventListener('click',()=>{
    document.querySelector('.selectors-years').classList.toggle('closeAll');
}) */


const months =[
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];

function Cyears(){
    let yearselect = document.querySelector('#section-years-tab')
    let startyears = getyear -4
    let endyears = getyear +8
    let yearinselect = ""
    for (let i = startyears; i < endyears; i++){
       
       yearinselect += `<option class="yearnum" value="${i}" onclick="CYearswitch(${i})">${i}</option>`    
    }

    let yearnum = document.querySelectorAll('.yearnum')

  
    yearselect.innerHTML= yearinselect
     
   
   
}

function CYearswitch(year,month){
    let months = month;
    let yearselected = year;
    let  intmonth = parseInt(yearselected);  
    document.querySelector('#section-years').classList.toggle('close');
    document.querySelector('#section-dates').classList.toggle('open');
    document.querySelector('#yearsselected').innerHTML = "<  "+year
    Cmonth(year);
   
}

function MapCalendar(y,m) {
    console.log(y)
    console.log(m)
    /* document.querySelector('.selectors-years').classList.toggle('closeAll'); */
    Calendar(y,m);
}


function Cmonth(y) {
    document.querySelector('#yearsselected').addEventListener('click',()=>{CYearswitch();})
    let deatailsmonth=''
    let month = document.querySelector('#select-dates-tab');
    for(mo = 0; mo <= months.length-1 ; mo++){
       if(mo == getmonth){
        deatailsmonth +=`<option value="${mo}" onclick=" MapCalendar(${y},${mo})" selected>${months[mo]}</option>`
       }else{
        deatailsmonth +=`<option value="${mo}" onclick=" MapCalendar(${y},${mo})">${months[mo]}</option>`
       }
    }
    
    month.innerHTML=deatailsmonth
   
    
}


function Calendar(yearselecteds,selectmonth) {
 
    let intyears = parseInt(yearselecteds)
    let intmonth = parseInt(selectmonth)
    const firstday = new Date(intyears , intmonth, 1);
    const lastday = new Date(intyears ,intmonth +1, 0);
    const prevlastday = new Date(intyears ,intmonth, 0);
          const prevday = prevlastday.getDate();
          const lastdays = lastday.getDate();
          const day = firstday.getDay();
          const nextday = 7 - lastday.getDay() - 1;

          date.innerHTML = months[intmonth]+" "+intyears ;

 

   let dayincalendar = "";

    for(x=day; x > 0; x--){
        dayincalendar +=`<div class="day-incalendar ">${prevday - x +1}</div>`;
       
    }
    
    for(i = 1; i <= lastdays; i++){
        if(i === new Date().getDate() && 
        intyears === new Date().getFullYear() &&
        intmonth === new Date().getMonth()
        )
    {
        dayincalendar +=`<div class="day-incalendar to-day">${i}</div>`;
    }else{
        dayincalendar +=`<div class="day-incalendar">${i}</div>`; 
    }
    }

     for(j=1; j <= nextday; j++){
        dayincalendar +=`<div class="day-incalendar">${j}</div>`; 
    } 
    daily.innerHTML=dayincalendar; 
    /* let moo = document.querySelector('.select-dates').value='sss';
    console.log(moo)*/
    
    Cyears();
}
    
Calendar(getyear,getmonth);


test=()=>{
let time = document.querySelectorAll('.carousel-item-list')
time.onreadystatechange = function(){
    if(time.readyState === 200){
        console.log("fuck")
    }else{
        console.log('nope')
    }
}
}

test();