
let fill =  document.querySelector(".fill")
let empties = document.querySelectorAll(".empty")


fill.addEventListener("dragstart" , (e) =>{
    fill.classList.add("hold")
})

fill.addEventListener("dragend" , (e) =>{
    fill.classList.remove("hold")
    
})

empties.forEach(empty =>{
    empty.addEventListener("dragover" , (e) =>{
        e.preventDefault()
        empty.classList.add("hoverd")
    })
    empty.addEventListener("dragleave" , (e) =>{
        e.preventDefault()
        empty.classList.remove("hoverd")
        // console.log("dragleave")
    })
    empty.addEventListener("drop" , (e) =>{
        empty.appendChild(fill)
        empty.classList.remove("hoverd")
        
    })
})