let imgOnClick = document.querySelectorAll(".featured-img")

// click listener for images on the homePage
for(let i = 0; i< imgOnClick.length; i++){
    imgOnClick[i].addEventListener("click", (e)=>{
        let currentTargetValue = e.currentTarget.dataset.id
        let vOne = localStorage.setItem("currentTargetlocalStorage", currentTargetValue)
})
}

