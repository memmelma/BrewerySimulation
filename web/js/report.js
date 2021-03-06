// get Corporate Colors
var colors = new Colors();

// Chart Color and Font Size
Chart.defaults.global.defaultFontColor = colors.white[3];
Chart.defaults.global.defaultFontSize = Chart.defaults.global.defaultFontSize * 1.5;

function randomscalingfactor() {
    return Math.round(Math.random(10) * 10000);
}

var report =
    [
        {
            data: [
                randomscalingfactor(),
                randomscalingfactor(),
                randomscalingfactor(),
                randomscalingfactor(),
            ],
            name: "Periode 1"
        },{
            data: [
                randomscalingfactor(),
                randomscalingfactor(),
                randomscalingfactor(),
                randomscalingfactor(),
            ],
            name: "Periode 2"
        },{
            data: [
                randomscalingfactor(),
                randomscalingfactor(),
                randomscalingfactor(),
                randomscalingfactor(),
            ],
            name: "Periode 3"
        },{
            data: [
                randomscalingfactor(),
                randomscalingfactor(),
                randomscalingfactor(),
                randomscalingfactor(),
            ],
            name: "Periode 4"
        }
    ];

ko.applyBindings(report);

function getLineChart(color, data) {
    return config_2 = {
        type: 'line',
        data: {
            labels: ["Periode 1", "Periode 2", "Periode 3", "Periode 4"],
            datasets: [{
                label: false,
                borderColor: color,
                backgroundColor: color,
                data: data,
                pointRadius: 0.1,
                pointHitRadius: 10
            }]
        },
        options: {
            legend: {
                display: false
            },
            responsive: true,
            tooltips: {
                mode: 'index',
            },
            hover: {
                mode: 'index'
            },
            scales: {
                display: false,
                xAxes: [{
                    display: false
                }],
                yAxes: [{
                    display: false
                }]
            }
        }
    };
}

function getBarChartData() {

    return barChartData = {
        labels: ["Periode 1", "Periode 2", "Periode 3", "Periode 4"],
        datasets: [
            getDataset("Personal", colors.red[0], report[0].data),
            getDataset("Rohstoffe", colors.blue[0], report[1].data),
            getDataset("Sonstige", colors.green[0], report[2].data)
        ]

    };

    function getDataset(name, color, data) {
        return {
            label: name,
            backgroundColor: color,
            borderColor: color,
            borderWidth: 1,
            data: data
        }
    }
}


var ctx = document.getElementById("canvas-bericht-1").getContext("2d");
window.myLine_1 = new Chart(ctx, getLineChart(colors.red[0], report[0].data));

var ctx = document.getElementById("canvas-bericht-2").getContext("2d");
window.myLine_2 = new Chart(ctx, getLineChart(colors.blue[0], report[1].data));

var ctx = document.getElementById("canvas-bericht-3").getContext("2d");
window.myLine_3 = new Chart(ctx, getLineChart(colors.blue[0], report[2].data));

var ctx = document.getElementById("canvas-bericht-4").getContext("2d");
window.myLine_4 = new Chart(ctx, getLineChart(colors.green[0], report[3].data));

var ctx = document.getElementById("canvas-bericht-5").getContext("2d");
window.myBar_1 = new Chart(ctx, {
    type: 'bar',
    data: getBarChartData(),
    options: {
        responsive: true,
        legend: {
            position: 'top',
        },
        title: {
            display: false,
            text: 'Ausgaben nach Kategorie'
        }
    }
});

var ctx = document.getElementById("canvas-bericht-6").getContext("2d");
window.myBar_2 = new Chart(ctx, {
    type: 'bar',
    data: getBarChartData(),
    options: {
        responsive: true,
        legend: {
            position: 'top',
        },
        title: {
            display: false,
            text: 'Einnahmen nach Kategorie'
        }
    }
});

