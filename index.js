    const wrapper=document.querySelector(".slider-wrapper")
    const menuitems=document.querySelectorAll(".menu-items")

    menuitems.forEach((item,index)=>{
        item.addEventListener("click",()=>{
            wrapper.style.transform=`translateX(${-100 *index}vw)`
        })


    }
    )