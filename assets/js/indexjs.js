 /* ฟังชั่นก์การ แสดงสถานะการใข้งานเมนู */
 function openmenu(tabname) { /* นำชื่อ tab มาจากparameter จากHTML */
    var menus = document.getElementsByClassName("side-bar-menu");  /* ดึงข้อมูลElement มาโดยใช้ DOM */
    for(menubar of menus){/* ให้วนลูปเอาข้อมูลเช่นพวก Tag element ต่างๆ เข้ามาใช้และเป็นจำนวนการวนลูบ */
        menubar.classList.remove("sider-bar-active");/* ลบClass การแสดงสถานะการใช้งานเมนนูออก จาก Tag element ทั้งหมด ภายในHTML ที่เราดึงข้อมูลมาโดยใช้ DOM*/
        
    }
    document.getElementById(tabname).classList.add("sider-bar-active");/* เพื่อClass ใส่ไปใน Tag Element ที่มีชื่อเดียวกันกับตัวแปรที่เรานำมาจาก Parameter*/
    
}

document.getElementById('introduce').addEventListener('click',function(){
    document.getElementById('content-introduce').scrollIntoView({behavior:"smooth"});
})


document.getElementById('about').addEventListener('click',function(){
    document.getElementById('content-about').scrollIntoView({behavior:"smooth",block:"start"});
})

document.getElementById('portfolio').addEventListener('click',function(){
    document.getElementById('content-portfolio').scrollIntoView({behavior:"smooth",block:"start"});
})

/* ฟังชั่นก์การ ย่อขยายแถบSidebar */
const menuBtn = document.querySelector('.js-btn');/* ดึงข้อมูลTag element มาจาก Class js-btn*/

if(menuBtn){/* หากมีตัวแปร menubtn เข้ามาจะทำงาน */
    menuBtn.addEventListener('click',()=>{/* หากTag Element ที่เราดึงเข้ามามีการ คลิก จะทำงาน*/
       document.querySelector('body').classList.toggle('close');/* ดึงElement จาก Body เข้ามา แล้วจึงเพิ่มClass close เข้าไป*/
    })
}

/* สร้างclassขึ้นมาเพื่อ ปรับขยายและสร้างscroll ให้แถบเมนูเวลาย่อหน้าจอ*/
const resizeObserver = new ResizeObserver((entries)=>{/* สร้างClassขึ้นมา มีparameter สำหรับรับค่า  */
      const asidenav = document.querySelector('.js-aside')/* ดึงข้อมูลTag element มาจาก Class js-aside*/
      
      if(asidenav){/*หากมีasidenav เข้ามาจะทำงาน  */
        if(asidenav.scrollHeight !== asidenav.clientHeight){/* หากแถบเมนู มีการย่อขนาด โดยไม่เท่ากับขนาดจอของตัวผู้ใช้ */
            asidenav.classList.add('border')/* จะเพิ่มClass border เข้าไปใน เมนู */
        }else{
            asidenav.classList.remove('border')/* หากแถบไม่ จะลบClass border ออกไป */
        }
      }

})
resizeObserver.observe(document.querySelector('.js-aside'))/* เรียกใช้งานโดยส่งค่า DOM เข้าไป */

/* const slide =document.querySelector(".workshop")
let isDragStart =false;

const dragstart =(e)=>{
   isDragStart = true;
}
const dragging =(e)=>{ 
    if(!isDragStart) return;
    e.preventDefault();
    slide.scrollLeft = e.pageX;    
}
const dragstop =(e)=>{
    isDragStart = false;
 }
slide.addEventListener("mousemove", dragging);
slide.addEventListener("mousedown", dragstart);
slide.addEventListener("mouseup", dragstop); */


arrowicon = document.querySelectorAll('.content-2 i');
const slide =document.querySelector(".workshop");
firstcard = slide.querySelectorAll('.workcard')[0];
let firstcardwidth = firstcard.clientWidth ;

/* const showHideIcons =()=>{
    arrowicon[0].style.display = slide.scrollLeft == 0 ? "none" : "flex";
} */

arrowicon.forEach(icon => {
    icon.addEventListener("click", ()=>{
             slide.scrollLeft += icon.id == "left" ? -firstcardwidth : firstcardwidth;
             /* showHideIcons(); */
    });
    
});
