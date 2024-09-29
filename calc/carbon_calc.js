function calculateFootprint() {
    // Get user inputs
    const miles = parseFloat(document.getElementById('miles').value);
    const electricity = parseFloat(document.getElementById('electricity').value);
    const plastic = parseFloat(document.getElementById('plastic').value);
    const electronicHours = parseFloat(document.getElementById('hoursElectronics').value);
    const publicTransportDays = parseFloat(document.getElementById('publicTransportDays').value);

    // Validate inputs
    if (isNaN(miles) || isNaN(electricity) || isNaN(plastic) || isNaN(electronicHours) || isNaN(publicTransportDays)) {
        alert("Please enter valid numbers for all fields.");
        return;
    }

    // Basic carbon footprint calculations
    const carbonFromMiles = miles * 0.411; // kg CO2 per mile
    const carbonFromElectricity = electricity * 0.92; // kg CO2 per kWh
    const carbonFromPlastic = plastic * 0.25; // kg CO2 per plastic item
    const carbonFromElectronic = electronicHours * 1.5; // Example factor
    const carbonFromPublicTransport = publicTransportDays * 0.5; // Example factor

    const totalCarbon = carbonFromMiles + carbonFromElectricity + carbonFromPlastic + carbonFromElectronic - carbonFromPublicTransport;

    // Display the results
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `
        <h2>Your Carbon Footprint</h2>
        <p>Total CO<sub>2</sub> Emissions: <strong>${totalCarbon.toFixed(2)} kg</strong></p>
    `;
    
    let tips = ""; // Add your tips logic here
    let personalizedMessage = ""; // Add your personalized message logic here

    // Personalized messages and tips logic
    if (totalCarbon > 20) {
        tips = "Consider reducing your driving, using energy-efficient appliances, and minimizing plastic use.";
        personalizedMessage = "You're a role model for sustainability. Keep it up!";
    } else {
        tips = "Great job maintaining a low carbon footprint!\n- Continue to use public transportation and carpool whenever possible.\n- Keep using energy-efficient products and reduce plastic waste.";
        personalizedMessage = "You're a role model for sustainability. Keep it up!";
    }

    resultDiv.innerHTML += `
        <p>${personalizedMessage}</p>
        <p>${tips}</p>
        <button id="viewChartButton" onclick="redirectToChart()">View Visualizations</button>
    `;
}

// Redirect function
function redirectToChart() {
    window.location.href = "chart.html"; // Change to the actual path of your chart page
}
