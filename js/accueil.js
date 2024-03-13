const tabButtons = document.querySelectorAll(".tabs button")
const tabContent = document.querySelectorAll('.content')

tabButtons.forEach((tab, index)=>{
    tab.addEventListener('click', ()=>{
        tabButtons.forEach(tab=>{tab.classList.remove('active')});
        tab.classList.add('active');

        tabContent.forEach(content=>{
            content.classList.remove('active')
        })
        tabContent[index].classList.add('active')
    })
})
tabButtons[0].click();