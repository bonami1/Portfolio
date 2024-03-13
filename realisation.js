const tabBtn = document.querySelectorAll(".right .btn")
const tabContent = document.querySelectorAll('.content')

tabBtn.forEach((tab, index)=>{
    tab.addEventListener('click', ()=>{
        tabBtn.forEach(tab=>{tab.classList.remove('active')});
        tab.classList.add('active');

        tabContent.forEach(content=>{
            content.classList.remove('active')
        })
        tabContent[index].classList.add('active')
    })
})
tabBtn[0].click();