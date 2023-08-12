const content = document.querySelector("#fact_content");
const reload=document.querySelector("#reload");


const url = 'https://facts-by-api-ninjas.p.rapidapi.com/v1/facts';
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '30a67c5810mshaeedadd73c61767p15eec6jsn191e3611957d',
        'X-RapidAPI-Host': 'facts-by-api-ninjas.p.rapidapi.com'
    }
};

function fact_content(){
    fetch(url, options)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            
            content.innerHTML = data[0].fact;
        })
}
fact_content();

// function rotate(){
//     reload.classList.add("animatedBtn");

//     setTimeout(() => {
//         reload.classList.remove("animatedBtn");
//     }, 1000)
// }

reload.addEventListener("click", () => {
    
    // rotate();
    
    fact_content();

})


