

function clamp(value) {
    return Math.max(0, Math.min(value, 100));
}

function simulateUser(data) {
    let wealth = 50;
    let health = 50;
    let mental = 50;
    let career = 50;


    // Wealth Logic
    wealth += data.income / 100;
    if (data.invest) wealth += 15;
    wealth += data.riskLevel *2;


    // Health logic
    health += data.sleepHours * 3;
    if (data.gym) health += 20;
    if (data.sleepHours < 6) health -=15;


    // Mental Logic
    mental += data.sleepHours * 2;
    if (!data.gym) mental -= 5;
    if (data.studyHours > 3) mental += 10;


    // Career Logic
    career += data.studyHours * 5;
    career += data.riskLevel * 3;
    if (!data.invest) career -= 5;


    // Clamp scores between 0 - 100
    wealth = clamp(wealth);
    health = clamp(health);
    mental = clamp(mental);
    career = clamp(career);

    return {
        wealth: Math.round(wealth),
        health: Math.round(health),
        mental: Math.round(mental),
        career: Math.round(career)
    };
}



// Future Prediction Text

function predictFuture(scores) {
    let message = "";

    if (scores.wealth > 70) {
        message += " 💰 Strong financial future ahead.\n";
    } else if (scores.wealth < 40) {
        message += " 💸 Financial growth may struggle unless habits change.\n"
    }

    if (scores.health < 40) {
        message += " ⚠ Health risk detected over long term.\n"
    }

    if (scores.career > 75) {
        message += " 🚀 High probability of career acceleration .\n"
    }

    if(scores.mental <40) {
        message += " 🧠Burnout risk is increasing.\n"
    }

    return message;
}


// 10 Years Simulation

function simulateTenYears(data){
    let yearlyDate =[];

    let wealth = 50;
    let health = 50;
    let mental = 50;
    let career = 50;

    for(let year = 1; year <= 10; year++) {
        // Wealth grows depending on income & investing 
        wealth += (data.income / 200);
        if (data.invest) wealth += 3;
        wealth += data.riskLevel;

        // Health changes
        health += data.sleepHours * 0.5;
        if (data.gym) health += 2;
        if (data.sleepHours < 6) health -= 3;

        // Mental state
        mental += data.sleepHours * 0.3;
        if (!data.gym) mental -= 1;
        if (data.studyHours > 3) mental +=1;

        // Career growth
        career += data.studyHours * 1.5;
        career += data.riskLevel * 0.8;

        // Clamp
        wealth = clamp(wealth);
        health = clamp(health);
        mental = clamp(mental);
        career = clamp(career);

        yearlyDate.push({
            year: year,
            wealth: Math.round(wealth),
            health: Math.round(health),
            mental: Math.round(mental),
            career: Math.round(career)
        });
    }

    return yearlyDate;
}


















// Tessssst

// const testUser = {
//     age: 22,
//     income: 500,
//     sleepHours: 5,
//     gym: false,
//     studyHours: 2,
//     riskLevel: 7,
//     invest: true
// };

// const result = simulateUser(testUser);
// console.log("scores:", result);

// const prediction = predictFuture(result);
// console.log("Prediction:", prediction)

// const tenYears = simulateTenYears(testUser);
// console.log("10 Years Simulation:", tenYears);