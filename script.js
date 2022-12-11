const jokeText = document.getElementById("joke")
const jokeBtn = document.getElementById("jokeBtn")

jokeBtn.addEventListener('click',getJoke);

async function getJoke(){
    const jokeData = await fetch('https://icanhazdadjoke.com/',{
        headers:{
            'Accept': 'application/json'
        }
    });
    const jokeObj = await jokeData.json();
    console.log(jokeObj.joke);
}