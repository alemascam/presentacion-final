const main = document.getElementById('tarjetas');

const url= 'https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood'

fetch(url)
  .then((resp) => resp.json())
  .then((data) => printData(data.meals))
  .catch((error) => console.log(error))

  const printData = (arr) => {
    let str = '';
    for(let i = 0; i < arr.length; i++){
      const idMeal = arr[i].idMeal;
      const strMeal = arr[i].strMeal;
      const strMealThumb = arr[i].strMealThumb;
        str = str + `
        
        <div class="card-image">
            <figure>
              <img src="${strMealThumb}" alt="${strMeal}" width="200">
            </figure>
            <div>
          <div class="card-content">
              <p>Nombre:${strMeal}</p>
              <p>id:${idMeal}</p>
              </div>
          </div>
      </div>
    `
}
tarjetas.innerHTML = str;
    
}