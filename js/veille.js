const articlesList = document.querySelectorAll(".articles");
const articlesArray = Array.from(articlesList);

//const note = articlesList.querySelector(".note").dataset.note;
//const date = articlesList.querySelector(".date").dataset.date;

function sortArticles(ev) {
    // recuperer la valeur
    const sortType = ev.target.value;
    if (sortType === "note") {
        sortNote = articlesArray.sort((a, b) => {
            const noteA = a.querySelector("#rating").dataset.note;
            const noteB = b.querySelector("#rating").dataset.note;   
            return noteB - noteA;
        })
    } else if (sortType === "date") {
        sortDate = articlesArray.sort((a, b) => {
            const dateA = new Date(a.querySelector(".date").dataset.date);
            const dateB = new Date(b.querySelector(".date").dataset.date);    
            return dateB - dateA;
        })
    }

    articlesArray.forEach((articleEl, i) => {
        articleEl.style.order = i;
    });
}