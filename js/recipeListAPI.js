//initialize Edamam API application ID and key
const app_id = '56f3e360';
const app_key = '59dc0e6b8dc78eef16f4f3dbaf874b83';

//initialize search button and search bar
let searchButton = document.querySelector(".searchBtn");
let searchBar = document.querySelector(".searchBar");

let empty = 0;
//when the search button is pressed
searchButton.addEventListener("click", ()=>{
    //whatever is in the search bar when search is pressed is the query value
    const query = searchBar.value;
    //if it is not empty
    if(query!=""){
        //load the url and insert parameters
        const url = `https://api.edamam.com/search?q=${query}&app_id=${app_id}&app_key=${app_key}`;
        console.log("button pressed")
        //response from the fetch is parsed into JSON
        fetch(url).then(response => response.json()).then(data => {
            console.log(data.hits);
            empty = 0;
            //initialize html to replace
            let recipeListHtml = "";
            //loop through each data point
            for (let i = 0; i < data.hits.length; i++) {
                //extract recipe data from array
                const recipe = data.hits[i].recipe;
                console.log(recipe)
                //every third element is a new row
                if ((i + 1) % 3 == 1) {
                    recipeListHtml += `<div class="row">`;
                }
                //encode data from the recipe to pass into the URI for the recipe page
                const encodedRecipe = {
                    label: recipe.label,
                    calories: recipe.calories,
                    dietLabels: recipe.dietLabels,
                    cuisineType: recipe.cuisineType,
                    dishType: recipe.dishType,
                    //map array elements of the nutrition info
                    digest: recipe.digest.map(digest => {
                        return {
                            total: digest.total,
                            label: digest.label,
                            unit: digest.unit
                        }
                    }),
                    ingredientLines: recipe.ingredientLines,
                    image: recipe.image,
                    totalTime: recipe.totalTime,
                    yield: recipe.yield,
                    query: query,
                    index: i
                };
                //html for each element interpolated with recipe data
                //encoded recipe data is inserted into the URI component
                //recipe image is replaced
                recipeListHtml += `
                    <div class="column">
                        <a href="recipe-page.html?recipe=${encodeURIComponent(JSON.stringify(encodedRecipe))}">
                            <img src="${recipe.image}" width="350" alt="recipe image">
                        </a>
                        <p>
                            <div class="iframeHolder">
                                <iframe width="100%" height="100%" frameborder="0" src="divStarRating.html"></iframe>
                            </div>
                            <h3>${recipe.label}</h3>
                            ${recipe.dietLabels} ${recipe.cuisineType} ${recipe.dishType}
                        </p>
                    </div>
                `;
                //every third element is a new row
                if ((i + 1) % 3 == 0 || i == data.hits.length - 1) {
                    recipeListHtml += `</div>`;
                }

            }
            //if search results are empty then default to burrito layout
            if(data.hits.length == 0){
                alert("Search Invalid!");
                recipeListHtml = `
                <div class="row">
                <div class="column">
                    <a href="recipe-page.html"> <img src="../assets/img/burrito-food-recipe-photo.jpg" width = "350" alt="recipe row 1 column 1 image"></a>
                    <p>
                        <span>
                            <a href="https://www.pexels.com/photo/close-up-photo-of-a-burrito-461198/">Close-up Photo of a Burrito From Pixabay, 2005, pexels.com </a>
                        </span>
                    </p>
                    <p>
                        <div class = "iframeHolder">
                            <iframe width="100%" height="100%" frameborder="0" src="divStarRating.html"></iframe>
                        </div>
                        <h3>
                            Recipe One
                        </h3>
                        Wow! What a great looking burrito! This must be a very popular recipe that is appreciated by millions of people worldwide! This section may include description from recipe page.
                    </p>
                </div>
                <div class="column">
                    <a href="recipe-page.html"> <img src="../assets/img/burrito-food-recipe-photo.jpg" width = "350" alt="recipe row 1 column 2 image"></a>
                    <p>
                        <span>
                            <a href="https://www.pexels.com/photo/close-up-photo-of-a-burrito-461198/">Close-up Photo of a Burrito From Pixabay, 2005, pexels.com </a>
                        </span>
                    </p>
                    <p>
                        <div class = "iframeHolder">
                            <iframe width="100%" height="100%" frameborder="0" src="divStarRating.html"></iframe>
                        </div>
                        <h3>
                            Recipe Two
                        </h3>
                        Hm, this burrito looks like the same as the first one. Must be that popular huh.
                    </p>
                </div>
                <div class="column">
                    <a href="recipe-page.html"> <img src="../assets/img/burrito-food-recipe-photo.jpg" width = "350" alt="recipe row 1 column 3 image"></a>
                    <p>
                        <span>
                            <a href="https://www.pexels.com/photo/close-up-photo-of-a-burrito-461198/">Close-up Photo of a Burrito From Pixabay, 2005, pexels.com </a>
                        </span>
                    </p>
                    <p>
                        <div class = "iframeHolder">
                            <iframe width="100%" height="100%" frameborder="0" src="divStarRating.html"></iframe>
                        </div>
                        <h3>
                            Recipe Three
                        </h3>
                        The popularity of burritos rose exponentially due to Recipes on Hand's marketing.
                    </p>
                </div>
            </div>
            <div class="row">
                <div class="column">
                    <a href="recipe-page.html"> <img src="../assets/img/burrito-food-recipe-photo.jpg" width = "350" alt="recipe row 2 column 1 image"></a>
                    <p>
                        <span>
                            <a href="https://www.pexels.com/photo/close-up-photo-of-a-burrito-461198/">Close-up Photo of a Burrito From Pixabay, 2005, pexels.com </a>
                        </span>
                    </p>
                    <p>
                        <div class = "iframeHolder">
                            <iframe width="100%" height="100%" frameborder="0" src="divStarRating.html"></iframe>
                        </div>
                        <h3>
                            Recipe Four
                        </h3>
                        There has never been a single type of burrito that has been so widely accepted by this many people.
                    </p>
                </div>
                <div class="column">
                    <a href="recipe-page.html"> <img src="../assets/img/burrito-food-recipe-photo.jpg" width = "350" alt="recipe row 2 column 2 image"></a>
                    <p>
                        <span>
                            <a href="https://www.pexels.com/photo/close-up-photo-of-a-burrito-461198/">Close-up Photo of a Burrito From Pixabay, 2005, pexels.com </a>
                        </span>
                    </p>
                    <p>
                        <div class = "iframeHolder">
                            <iframe width="100%" height="100%" frameborder="0" src="divStarRating.html"></iframe>
                        </div>
                        <h3>
                            Recipe Five
                        </h3>
                        Is there someone moderating what goes into the recipe list? This is getting "out of Hand". Sorry.
                    </p>
                </div>
                <div class="column">
                    <a href="recipe-page.html"> <img src="../assets/img/burrito-2.jpg" width = "350" alt="recipe row 2 column 3 image"></a>
                    <p>
                        <span>
                            <a href="https://www.pexels.com/photo/close-up-shot-of-a-burrto-9258714/">Close-Up Shot of a Burrto From Gonzalo Mendiola, 2021, pexels.com </a>
                        </span>
                    </p>
                    <p>
                        <div class = "iframeHolder">
                            <iframe width="100%" height="100%" frameborder="0" src="divStarRating.html"></iframe>
                        </div>
                        <h3>
                            Recipe Six
                        </h3>
                        Different burrito this time, nice.
                    </p>
                </div>
            </div>
                
                `
            }
            document.querySelector(".recipeList").innerHTML = recipeListHtml;
    
        }).catch(error => console.error(error));
    }

});
