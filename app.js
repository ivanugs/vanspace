const url = "https://api.nasa.gov/planetary/apod?api_key=Md6ZhB8e1s2GDDDn6dEI4WialPr963Fl4DVh6PcA&count=15";

async function getImagenes() {
    try {
        let fetchImagenes = await fetch(url);
        let datosImagenes = await fetchImagenes.json();

        const card = document.querySelector("[data-ul]");
        datosImagenes.forEach(imagen => {
        const cardContent = `
            <li class="card">
                <img class="card__image" src="${imagen.url}" alt="imagen">
                <h3 class="card__title">${imagen.title}</h3>
            </li>`;
        card.innerHTML = card.innerHTML + cardContent;
        })
    } catch (error) {
        console.error();
    }
}


//then y catch
/* function getImagenes() {
    fetch(url)
    .then(response => response.json())
    .then(datosImagenes => {
        console.log(datosImagenes)

        const card = document.querySelector("[data-ul]");
        datosImagenes.forEach(imagen => {
        const cardContent = `
            <li class="card">
                <img class="card__image" src="${imagen.url}" alt="imagen">
                <h3 class="card__title">${imagen.title}</h3>
            </li>`;
        card.innerHTML = card.innerHTML + cardContent;
        });
    })
    .catch(err => console.error());
}
*/
getImagenes(); 