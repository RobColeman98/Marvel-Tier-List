const rows = document.querySelectorAll(".row")

const colors = ["green", "aquamarine", "yellow", "orange", "orangered", "firebrick"]

const onDragOver = (event) => {
    event.preventDefault();
}

const onDrop = (event) => {
    event.preventDefault()
    const draggedCardId = event.dataTransfer.getData("id")
    const draggedCard = document.getElementById(draggedCardId)
    event.target.appendChild(draggedCard)
   
    console.log("drop it like its hot")
}

rows.forEach((row, index) => {
 const label = row.querySelector(".label")
 label.style.backgroundColor = colors[index]
    row.ondragover = onDragOver;
    row.ondrop = onDrop
})