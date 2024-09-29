function calculateFootprint() {
    // Get user inputs
    const miles = parseFloat(document.getElementById('miles').value);
    const electricity = parseFloat(document.getElementById('electricity').value);
    const plastic = parseFloat(document.getElementById('plastic').value);
    
    // Validate inputs
    if (isNaN(miles) || isNaN(electricity) || isNaN(plastic)) {
        alert("Please enter valid numbers for all fields.");
        return;
    }
    
    // Basic carbon footprint calculations
    const carbonFromMiles = miles * 0.411; // Example factor (kg CO2 per mile)
    const carbonFromElectricity = electricity * 0.92; // Example factor (kg CO2 per kWh)
    const carbonFromPlastic = plastic * 0.25; // Example factor (kg CO2 per plastic item)
    
    const totalCarbon = carbonFromMiles + carbonFromElectricity + carbonFromPlastic;
    
    // Generate tips based on total carbon footprint
    let tips = "";
    if (totalCarbon > 20) {
        tips = "Consider reducing your driving, using energy-efficient appliances, and minimizing plastic use.";
    } else if (totalCarbon > 10) {
        tips = "Good job! You can further reduce your carbon footprint by conserving energy and reducing waste.";
    } else {
        tips = "Excellent! Keep up the great work in minimizing your carbon footprint.";
    }
    
    // Display the results
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `
        <h2>Your Carbon Footprint</h2>
        <p>Total CO<sub>2</sub> Emissions: <strong>${totalCarbon.toFixed(2)} kg</strong></p>
        <p>${tips}</p>
    `;
}
