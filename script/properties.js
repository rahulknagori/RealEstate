let onPropertyImageClick = document.querySelectorAll(".property-img");

for(let i = 0; i< onPropertyImageClick.length; i++){
    onPropertyImageClick[i].addEventListener("click", (e)=>{
        let currentTargetValue = e.currentTarget.dataset.id
        let vOne = localStorage.setItem("currentTargetlocalStorage", currentTargetValue)
})
}