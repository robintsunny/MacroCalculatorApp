// const newHtml = '<div>howdy</div>';
// document.querySelector('.yo').insertAdjacentHTML('beforeend', newHtml)


class Food {
    constructor(name, fat,carb,pro,fib) {
        this.name = name,
        this.fat = fat,
        this.carb = carb,
        this.pro = pro, 
        this.fib = fib
    }
}

class Goals {
    constructor(fat,carb,pro,fib) {
        this.fat = fat,
        this.carb = carb,
        this.pro = pro, 
        this.fib = fib
    }
}


// set goals
const setGoals = () => {
    const fat = document.querySelector(".goals_f").value;
    const carb = document.querySelector(".goals_c").value;
    const pro = document.querySelector(".goals_p").value;

    console.log([fat,carb,pro])
    const fatCals = 9 * parseInt(fat)
    const carbCals = 4 * parseInt(carb)
    const proCals = 4 * parseInt(pro)
    const totalCals =  fatCals + carbCals + proCals;

    const fatPerc = (fatCals/totalCals*100).toFixed(2);
    const carbPerc = (carbCals/totalCals*100).toFixed(2);
    const proPerc = (proCals/totalCals*100).toFixed(2);

    document.querySelector(".curr_f").textContent = `Fat: ${fat} grams, ${fatPerc}%`;
    document.querySelector(".curr_c").textContent = `Carb: ${carb} grams, ${carbPerc}%`;
    document.querySelector(".curr_p").textContent = `Protein: ${pro} grams, ${proPerc}%`;
    document.querySelector(".curr_cal").textContent = `Total Calories: ${totalCals}`;


}

document.querySelector('.set_goal').addEventListener('click',setGoals)


// edit goals




// create food item and save

// edit food item



// add food item


// calculate macros