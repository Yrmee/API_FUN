const apiData = {
    url: 'https://pokeapi.co/api/v2/',
    type: 'pokemon',
    id: '133',
};

//const {url, type, id} = apiData
const apiUrl = `${apiData.url}${apiData.type}/${apiData.id}`;

fetch(apiUrl)
    .then( (data) => data.json())
    .then( (pokemon) => generateHtml(pokemon))

const generateHtml = (data) => {
    console.log(data);
    const html = `
        <div class="name">${data.name}</div>
        <img src=${data.sprites.front_default}>
        <div class="details">
        <span> Height: ${data.height} </span>
        <span> Weight: ${data.weight} </span>
        </div>
    `;

    const pokemonDiv = document.querySelector('.pokemon')
    pokemonDiv.innerHTML = html
};

// Functie voor Details Pokemon
const details = () => {
    const pokemonDetails = document.getElementById("details");
    const newLi = document.createElement("li");
    const newLiContent = document.createTextNode("Abilities: run-away, adaptability and anticipation.");

        newLi.appendChild(newLiContent);
        pokemonDetails.append(newLi);
};

// Selecting button element
const btn = document.getElementById("btn");


// Assigning event listeners to the button
// -----> Het lukte mij niet om de button on/off te laten werken.
btn.addEventListener("click", details);