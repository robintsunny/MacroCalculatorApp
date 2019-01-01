const dailyIntake = {
    f: 0,
    c: 0,
    p: 0,
    fib: 0
}


class Food {
    constructor(name, fat,carb,pro,fib) {
        this.name = name,
        this.fat = fat,
        this.carb = carb,
        this.pro = pro, 
        this.fib = fib
    }
}

// const dummyFood = new Food('dummy food', 15, 50, 35, 10)
// const newDummyHtml = `<li class="food_item">${dummyFood.name}<button class="add_food">ADD</button></li><br />`
// document.querySelector('.food_items').insertAdjacentHTML("beforeend", newDummyHtml);

// var li = document.createElement("li");
// li.setAttribute('id', candidate.value);
// li.appendChild(document.createTextNode(candidate.value));
// ul.appendChild(li)


// set goals
const setGoals = () => {
    //comes in as strings
    const fat = document.querySelector(".goals_f").value;
    const carb = document.querySelector(".goals_c").value;
    const pro = document.querySelector(".goals_p").value;

    // convert string to int
    const fatCals = 9 * parseInt(fat)
    const carbCals = 4 * parseInt(carb)
    const proCals = 4 * parseInt(pro)
    const totalCals =  fatCals + carbCals + proCals;

    // calories as percentage
    const fatPerc = (fatCals/totalCals*100).toFixed(2);
    const carbPerc = (carbCals/totalCals*100).toFixed(2);
    const proPerc = (proCals/totalCals*100).toFixed(2);

    // render to UI
    document.querySelector(".curr_f").textContent = `Fat: ${fat} grams, ${fatPerc}%`;
    document.querySelector(".curr_c").textContent = `Carb: ${carb} grams, ${carbPerc}%`;
    document.querySelector(".curr_p").textContent = `Protein: ${pro} grams, ${proPerc}%`;
    document.querySelector(".curr_cal").textContent = `Total Calories: ${totalCals}`;
}

document.querySelector('.set_goal').addEventListener('click',setGoals)





// create food item and save
// const favorites = [];

const addFoodToFavorites = () => {
    const name = document.querySelector(".new_name").value;
    const fat = parseInt(document.querySelector(".new_f").value);
    const carb = parseInt(document.querySelector(".new_c").value);
    const pro = parseInt(document.querySelector(".new_p").value);
    const fib = parseInt(document.querySelector(".new_fib").value);

    totalCarb = carb-fib; //account for fiber
    
    const food = new Food(name, fat, totalCarb, pro, fib);


    // favorites.push(food);
    updateFoodList(food);
}

const updateFoodList = food => {
    const newHtml = `<li class="food_item" id="${food.name}">${food.name}<button class="add_food" id="add_${food.name}">ADD</button></li><br />`
    
    document.querySelector('.food_items').insertAdjacentHTML("beforeend", newHtml);

}

document.querySelector('.add_food_to_favorites').addEventListener('click', addFoodToFavorites)


// add food item
const addFoodToDaily = () => {
    const name = document.querySelector(".new_name").value;
    const fat = parseInt(document.querySelector(".new_f").value);
    const carb = parseInt(document.querySelector(".new_c").value);
    const pro = parseInt(document.querySelector(".new_p").value);
    const fib = parseInt(document.querySelector(".new_fib").value);
    
    totalCarb = carb - fib; //account for fiber
    
    dailyIntake[f] = dailyIntake[f] + totalCarb;
    dailyIntake[c] = dailyIntake[c] + fat;
    dailyIntake[p] = dailyIntake[p] + pro;
    dailyIntake[fib] = dailyIntake[fib] + fib;
    
    updateDaily(dailyIntake)
}

const addFromFavorites = () => {
    
}


// calculate macros