

document.addEventListener("DOMContentLoaded", () =>{

    const toggleBtn = document.getElementById("modeToggle");
    toggleBtn.addEventListener("click", () => {
        document.body.classList.toggle("light-mode");
        if (document.body.classList.contains("light-mode")) {
            toggleBtn.textContent = " ☀Light Mode";
        } else {
            toggleBtn.textContent = " 🌙Dark Mode";
    }
});

    const resultsDiv = document.getElementById("results");
    const userForm = document.getElementById("userForm")

    userForm.addEventListener("submit", (e) => {
        e.preventDefault();

        resultsDiv.innerHTML = "";

        const userData = {
            age: Number(document.getElementById("age").value),
            income: Number(document.getElementById("income").value),
            sleepHours: Number(document.getElementById("sleepHours").value),
            gym: document.getElementById("gym").checked,
            studyHours: Number(document.getElementById("studyHours").value),
            riskLevel: Number(document.getElementById("riskLevel").value),
            invest: document.getElementById("invest").checked
        };

        const tenYears = simulateTenYears(userData);

        tenYears.forEach((yearObj, index) => {
            const yearEl = document.createElement("div");
            yearEl.classList.add("year-card");
            yearEl.innerHTML = `
            <h3>Year ${yearObj.year}</h3>
            <div class="score wealth"> Wealth: ${yearObj.wealth}</div>
            <div class="score health"> Health: ${yearObj.health}</div>
            <div class="score mental"> Mental: ${yearObj.mental}</div>
            <div class="score career"> Career: ${yearObj.career}</div>
        `;
        resultsDiv.appendChild(yearEl);

        setTimeout(() => {
            yearEl.classList.add("visible");
            }, index * 300);
        });

        // SUMMARY CARD
        const lastYear = tenYears[tenYears.length - 1];

        const overallScore = (lastYear.wealth + lastYear.health + lastYear.mental + lastYear.career) / 4;

        let evaluation = "";

        if (overallScore >= 80) {
            evaluation = "Excellent Life";
        } else if (overallScore >= 60) {
            evaluation = "Balanced";
        } else if (overallScore >= 40) {
            evaluation = "Risky";
        } else {
            evaluation = "Destroyed"
        }
        const summaryEl = document.createElement("div");
        summaryEl.classList.add("summary-card");
        summaryEl.innerHTML = `
            <h2> Final Result After 10 Years </h2>
            <p> Wealth: ${lastYear.wealth} </p>
            <p> Health: ${lastYear.health} </p>
            <p> Mental: ${lastYear.mental} </p>
            <p> Career: ${lastYear.career} </p>
            <hr>
            <h3> Overall Score: ${overallScore.toFixed(1)} </h3>
            <h3> ${evaluation} </h3>`;
        resultsDiv.appendChild(summaryEl);
    });
});


