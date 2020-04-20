window.onload = function() {
    var chart = new
    CanvasJS.Chart("chartContainer", {
        Title: {
            text: "Top ten Teams"
        },
        data: [{
            type: "doughnut",
            dataPoints: [
                { label: "Astralis", y: 1000 },
                { label: "ENCE", y: 217 },
                { label: "Evil Geniuses", y: 507 },
                { label: "Faze", y: 316 },
                { label: "fnatic", y: 611 },
                { label: "Liquid", y: 594 },
                { label: "mousesport", y: 715 },
                { label: "Natus Vincere", y: 860 },
                { label: "10 thieves", y: 339 },
                { label: "Vitality", y: 454 },
            ]
        }]
    });
    chart.render();
}