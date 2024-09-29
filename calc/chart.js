const ctx = document.getElementById('carbonChart').getContext('2d');

// Sample data for demonstration. Replace with actual calculations if needed.
const carbonData = [2 * 0.411, 10 * 0.92, 5 * 0.25, 3 * 1.5, 3 * -0.5]; // Replace with your calculated values
const carbonLabels = ['Miles Driven', 'Electricity Used', 'Plastic Items', 'Hours Using Electronics', 'Days Using Public Transport'];

const carbonChart = new Chart(ctx, {
    type: 'line', // Line graph type
    data: {
        labels: carbonLabels,
        datasets: [{
            label: 'Carbon Footprint (kg CO2)',
            data: carbonData,
            fill: false, // No fill under the line
            borderColor: 'rgba(75, 192, 192, 1)',
            backgroundColor: 'rgba(75, 192, 192, 0.6)',
            borderWidth: 2,
            pointRadius: 7, // Increase point radius for better visibility
            pointBackgroundColor: 'rgba(255, 99, 132, 0.8)',
            pointBorderColor: 'rgba(255, 99, 132, 1)',
            pointHoverRadius: 7,
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: true, // Maintain aspect ratio
        scales: {
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: 'Carbon Footprint (kg CO2)',
                    font: {
                        size: 14,
                        weight: 'bold',
                    },
                },
                grid: {
                    color: 'rgba(220, 220, 220, 0.5)',
                    lineWidth: 1,
                },
            },
            x: {
                title: {
                    display: true,
                    text: 'Categories',
                    font: {
                        size: 14,
                        weight: 'bold',
                    },
                },
                grid: {
                    display: false,
                },
            },
        },
        plugins: {
            legend: {
                display: true,
                position: 'top',
                labels: {
                    font: {
                        size: 12,
                        weight: 'bold',
                    },
                    padding: 20,
                },
            },
            tooltip: {
                backgroundColor: 'rgba(0, 0, 0, 0.7)',
                titleColor: '#fff',
                bodyColor: '#fff',
            },
        },
    }
});
