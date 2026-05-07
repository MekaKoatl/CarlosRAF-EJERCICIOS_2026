loadCharacter();

function loadCharacter() {
  fetch("https://rickandmortyapi.com/api/character/")
    .then((res) => res.json())
    .then((RnMdata) => {
      let characters = RnMdata.results;
      showData(characters);
    });
}

function showData(characters) {
  const container = document.getElementById("showcharacters");

  for (let i = 0; i < characters.length; i++) {
    const card = document.createElement("div");
    card.className = "bg-white max-w-sm p-6 border border-gray-200 rounded-lg shadow";

    card.innerHTML = `
      <img src="${characters[i].image}" alt="${characters[i].name}" class="rounded-lg w-full" />
      <h5 class="mt-4 mb-2 text-2xl font-semibold text-gray-800">${characters[i].name}</h5>
      <p class="text-gray-500">${characters[i].status} - ${characters[i].species}</p>
    `;

    container.appendChild(card);  
  }
}