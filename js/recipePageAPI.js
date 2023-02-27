//take in url and parse the parameters from URI component
const urlParams = new URLSearchParams(window.location.search);
const recipeString = urlParams.get('recipe');
const recipeLoad = JSON.parse(decodeURIComponent(recipeString));

//initialize Edamam API application ID and key
const app_id = '56f3e360';
const app_key = '59dc0e6b8dc78eef16f4f3dbaf874b83';

//get query from loaded parameter and initialize image
const query = recipeLoad.query;
var image = "";
//input parameters into url
const url = `https://api.edamam.com/search?q=${query}&app_id=${app_id}&app_key=${app_key}`;
fetch(url).then(response => response.json()).then(data => {
    console.log(data.hits);
    recipeImagesHtml = "";
    //load recipe image or the recipe page
    image = data.hits[recipeLoad.index].recipe.image
    //input into main image
    recipeImagesHtml += `
        <img src= "${image}" alt = "recipe picture" width = "800" height = "500">
    `;
    document.querySelector(".mainImg").innerHTML = recipeImagesHtml;
    //input into secondary image
    recipeImagesHtml = "";
    recipeImagesHtml += `
        <img src= "${image}" alt = "recipe picture" width = "300" height = "150">
    `;
    document.querySelector(".secondImg").innerHTML = recipeImagesHtml;
    //input into tertiary iamge
    recipeImagesHtml = "";
    recipeImagesHtml += `
        <img src= "${image}" alt = "recipe picture" width = "300" height = "150">
    `;
    document.querySelector(".thirdImg").innerHTML = recipeImagesHtml;
    //input into quaternary image
    recipeImagesHtml = "";
    recipeImagesHtml += `
        <img src= "${image}" alt = "recipe picture" width = "300" height = "150">
    `;
    document.querySelector(".fourthImg").innerHTML = recipeImagesHtml;
    //set inner HTML for slideshow but with recipe image
    recipeSlideShowHtml = "";
    recipeSlideShowHtml += `
        <div class="mySlides fade">
            <div class="numbertext">1 / 4</div>
            <img src="${image}" style="width:100%">
            <div class="text">Method picture 1</div>
        </div>

        <div class="mySlides fade">
            <div class="numbertext">2 / 4</div>
            <img src="${image}" style="width:100%">
            <div class="text">Method picture 2</div>
        </div>

        <div class="mySlides fade">
            <div class="numbertext">3 / 4</div>
            <img src="${image}" style="width:100%">
            <div class="text">Method picture 3</div>
        </div>

        <div class="mySlides fade">
            <div class="numbertext">4 / 4</div>
            <img src="${image}" style="width:100%">
            <div class="text">Method picture 4</div>
        </div>
        <!-- Next and previous buttons -->
        <a class="prev" onclick="plusSlides(-1)">&#10094;</a>
        <a class="next" onclick="plusSlides(1)">&#10095;</a>
        <br>
        <!-- The dots/circles -->
        <div class = "dots" style="text-align:center">
            <span class="dot" onclick="currentSlide(1)"></span>
            <span class="dot" onclick="currentSlide(2)"></span>
            <span class="dot" onclick="currentSlide(3)"></span>
            <span class="dot" onclick="currentSlide(4)"></span>
        </div>
    `;

    document.querySelector(".slideshow-container").innerHTML = recipeSlideShowHtml;
}).catch(error => console.error(error));

console.log(recipeLoad);
//adjust recipe title and description
recipeDescHtml = "";
recipeDescHtml += `
    <h2>
        ${recipeLoad.label}
    </h2>
    ${recipeLoad.dietLabels} ${recipeLoad.cuisineType} ${recipeLoad.dishType}
`;
document.querySelector(".recipeDesc").innerHTML = recipeDescHtml;

//adjust recipe info in the sidebar
recipeInfoHtml = "";
recipeInfoHtml += `
    <span>
        <img src="../assets/icon/hourglass.png" width = "50" alt = "hourglass">
        <p>
            ${recipeLoad.totalTime} mins
        </p>
        <img src="../assets/icon/food.png" width = "50" alt = "hourglass">
        <p>
            ${recipeLoad.yield} Servings
        </p>
    </span>
`;
document.querySelector(".cookInfo").innerHTML = recipeInfoHtml;
//define recipe ingredients wrapper html for the table
recipeIngHtml = "";
recipeIngHtml += `
    <h2>
    Ingredients
    </h2>
    <table>
        <tbody>
`;
//loop through recipe ingredients and interpolate into table
for (let i = 0; i<recipeLoad.ingredientLines.length;i++){
    recipeIngHtml += `
        <tr>
            <td>
                ${recipeLoad.ingredientLines[i]}
            </td>
        </tr>
    `;
}
recipeIngHtml += `
    </tbody>
</table>
`
document.querySelector(".recipeIngredients").innerHTML = recipeIngHtml;


//define nutritional facts html wrapper
recipeNutritionHtml = "";
//interpolated data is numerically rounded and parameter-based
recipeNutritionHtml += `
    <h2>
        Nutrition Facts
    </h2>
    <table>
        <tr>
            <th scope="col">${Math.round(recipeLoad.calories)} Calories</th>
            <th scope="col">${Math.round(recipeLoad.digest[0].total)}${recipeLoad.digest[0].unit} ${recipeLoad.digest[0].label}</th>
            <th scope="col">${Math.round(recipeLoad.digest[1].total)}${recipeLoad.digest[1].unit} ${recipeLoad.digest[1].label}</th>
            <th scope="col">${Math.round(recipeLoad.digest[2].total)}${recipeLoad.digest[2].unit} ${recipeLoad.digest[2].label}</th>
            <th scope="col">${Math.round(recipeLoad.digest[3].total)}${recipeLoad.digest[3].unit} ${recipeLoad.digest[3].label}</th>
            <th scope="col">${Math.round(recipeLoad.digest[4].total)}${recipeLoad.digest[4].unit} ${recipeLoad.digest[4].label}</th>
        </tr>
        <tr>
            <td colspan = "2">
                • ${recipeLoad.digest[5].label} ${Math.round(recipeLoad.digest[5].total)}${recipeLoad.digest[5].unit}
            </td>
            <td colspan = "2">
                • ${recipeLoad.digest[6].label} ${Math.round(recipeLoad.digest[6].total)}${recipeLoad.digest[6].unit}
            </td>
            <td colspan = "2">
                • ${recipeLoad.digest[7].label} ${Math.round(recipeLoad.digest[7].total)}${recipeLoad.digest[7].unit}
            </td>
        </tr>
        <tr>
            <td colspan = "2">
                • ${recipeLoad.digest[8].label} ${Math.round(recipeLoad.digest[8].total)}${recipeLoad.digest[8].unit}
            </td>
            <td colspan = "2">
                • ${recipeLoad.digest[9].label} ${Math.round(recipeLoad.digest[9].total)}${recipeLoad.digest[9].unit}
            </td>
            <td colspan = "2">
                • ${recipeLoad.digest[10].label} ${Math.round(recipeLoad.digest[10].total)}${recipeLoad.digest[10].unit}
            </td>
        </tr>
        <tr>
            <td colspan = "2">
                • ${recipeLoad.digest[11].label} ${Math.round(recipeLoad.digest[11].total)}${recipeLoad.digest[11].unit}
            </td>
            <td colspan = "2">
                • ${recipeLoad.digest[12].label} ${Math.round(recipeLoad.digest[12].total)}${recipeLoad.digest[12].unit}
            </td>
            <td colspan = "2">
                • ${recipeLoad.digest[13].label} ${Math.round(recipeLoad.digest[13].total)}${recipeLoad.digest[13].unit}
            </td>
        <tr>
            <td colspan = "2">
                • ${recipeLoad.digest[14].label} ${Math.round(recipeLoad.digest[14].total)}${recipeLoad.digest[14].unit}
            </td>
            <td colspan = "2">
                • ${recipeLoad.digest[15].label} ${Math.round(recipeLoad.digest[15].total)}${recipeLoad.digest[15].unit}
            </td>
            <td colspan = "2">
                • ${recipeLoad.digest[16].label} ${Math.round(recipeLoad.digest[16].total)}${recipeLoad.digest[16].unit}
            </td>
        </tr>
        <tr>
            <td colspan = "2">
                • ${recipeLoad.digest[17].label} ${Math.round(recipeLoad.digest[17].total)}${recipeLoad.digest[17].unit}
            </td>
            <td colspan = "2">
                • ${recipeLoad.digest[18].label} ${Math.round(recipeLoad.digest[18].total)}${recipeLoad.digest[18].unit}
            </td>
            <td colspan = "2">
                • ${recipeLoad.digest[19].label} ${Math.round(recipeLoad.digest[19].total)}${recipeLoad.digest[19].unit}
            </td>
        </tr>
        <tr>
            <td colspan = "2">
                • ${recipeLoad.digest[20].label} ${Math.round(recipeLoad.digest[20].total)}${recipeLoad.digest[20].unit}
            </td>
            <td colspan = "2">
                • ${recipeLoad.digest[21].label} ${Math.round(recipeLoad.digest[21].total)}${recipeLoad.digest[21].unit}
            </td>
            <td colspan = "2">
                • ${recipeLoad.digest[22].label} ${Math.round(recipeLoad.digest[22].total)}${recipeLoad.digest[22].unit}
            </td>
        </tr>
        <tr>
        <td colspan = "2">
            • ${recipeLoad.digest[23].label} ${Math.round(recipeLoad.digest[23].total)}${recipeLoad.digest[23].unit}
        </td>
        <td colspan = "2">
            • ${recipeLoad.digest[24].label} ${Math.round(recipeLoad.digest[24].total)}${recipeLoad.digest[24].unit}
        </td>
        <td colspan = "2">
            • ${recipeLoad.digest[25].label} ${Math.round(recipeLoad.digest[25].total)}${recipeLoad.digest[25].unit}
        </td>
    </tr>
    </table>
`;
document.querySelector(".recipeNutrition").innerHTML = recipeNutritionHtml;

