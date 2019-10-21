//Container Used to Store Grid
const container_div = document.getElementById('container');

//Creates default 16x16 Grid  
grid(16);

function grid(size){ 
//Creates Grid    
    for (var i = 0; i < size; i++) {
        for (var j = 0; j < size; j++) {
            var div = document.createElement("div");
            div.style.width = 100 / size + "%";
            div.style.height = 100 / size + "%";
            container_div.appendChild(div);
        }
    }
    
//Selects All Divs in Container
const divi = document.querySelectorAll('#container > div');
//For Each Div, The BackgroundColor Changes
    divi.forEach((div)=>{
        div.addEventListener("mouseover", (e) => {
            var color = ["#08F7FE", "#09FBD3", "#FE53BB", "#F5D300"];
                for(let y = 0; y < 5; y++){
                    div.style.backgroundColor = color[Math.floor(Math.random() * 4)];  
                }
        });
    });

}

//Prompts User for Grid Size
function promptMe(){
   var size = prompt("Please enter grid size");

   //Removes Original Div
   if (size != null){
    while (container_div.firstChild){
        container_div.removeChild(container_div.firstChild);
    }
    //Creates New Grid w/ New Size
    grid(size);
   }
}





