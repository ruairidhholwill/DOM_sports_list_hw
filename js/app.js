document.addEventListener('DOMContentLoaded', () => {
    const sportForm = document.querySelector('#new-sport-form');
    sportForm.addEventListener('submit', handleForm);

    const deleteAllButton = document.querySelector('#delete-all');
    deleteAllButton.addEventListener('click', handleDeleteAll)
})

const handleForm = function (event) {
    event.preventDefault();

    const sportStarItem = createSportStarItem(event.target);
    const sportStar = document.querySelector('#sport-stars');
    sportStar.appendChild(sportStarItem);

    event.target.reset();
}

const createSportStarItem = function (form) {
    const sportStarItem = document.createElement('li');
    sportStarItem.classList.add('.fun')

    const name = document.createElement('h2');
    name.textContent = `${form.first_name.value} ${form.last_name.value}`;
    sportStarItem.appendChild(name);

    const sport = document.createElement('h3');
    sport.textContent = form.sport.value;
    sportStarItem.appendChild(sport)

    const nationality = document.createElement('h4');
    nationality.textContent = form.nationality.value;
    sportStarItem.appendChild(nationality)

    return sportStarItem;
}

const handleDeleteAll = function () {
    const sportStar = document.querySelector('#sport-stars');
    sportStar.innerHTML = '';
}

