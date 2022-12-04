// 
let idButton = document.getElementById('button')
idButton.addEventListener('click', () => {
    console.log("botão clicado")
    respondeAPI()
})



async function respondeAPI() {
    let data = document.getElementById('data').value
    let api = "60Pl3KMpg3Uhm6tZT9h9ccb7DothHXkuPHcV6huB"
    const response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${api}&date=${data}`)
    console.log(response)
    let date = await response.json()
    console.log(date)
    usaApiDate(date)
}


function usaApiDate(date) {
    document.querySelector('#descritivo').innerHTML = date.explanation
    document.querySelector('#imagem').innerHTML = `<img class='imagem' src="${date.url}">`
}

