google.charts.load('current', {packages: ['corechart', 'line']});

let LCRatingCharts = document.querySelectorAll(".lc-rating");



const drawLCRatingCharts = () => {
    
    const requestURL = 'https://leetcode-api.p.rapidapi.com/leetcode/histogram?username=bharathkalyans&limit=30';
    const requestOptions = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '61a8ce81f8msh05396268c8490e3p1a506cjsn594c1a1451fc',
            'X-RapidAPI-Host': 'leetcode-api.p.rapidapi.com'
        }
    };
    
    const xhr = new XMLHttpRequest();
    xhr.responseType = 'json';
    xhr.onreadystatechange = () => {
    if (xhr.readyState === XMLHttpRequest.DONE) {
        console.log(xhr.response);
    }
    }
    xhr.open('POST', 'https://leetcode.com/graphql');
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.setRequestHeader('Cookie', 'csrftoken=DSmIlC3tYBdd1SCtRZiLHNvTntvMAvoCiXqhaZbxkMM1twAAkeLGJDQtn34hGqAn; _gid=GA1.2.1067162429.1690723192; _gat=1; _ga_CDRWKZTDEX=GS1.1.1690723191.1.1.1690723227.24.0.0; _ga=GA1.1.1615408329.1690723192; _dd_s=rum=0&expire=1690724142280');
    xhr.setRequestHeader('Authorization', '');
    xhr.setRequestHeader('X-Csrftoken', 'DSmIlC3tYBdd1SCtRZiLHNvTntvMAvoCiXqhaZbxkMM1twAAkeLGJDQtn34hGqAn');
    const query = `query contestRatingHistogram {
    contestRatingHistogram {
        userCount
        ratingStart
        ratingEnd
        topPercentage
    }
    }`;
    const variables = {};
    const operationName = 'contestRatingHistogram';
    const body = JSON.stringify({ query, variables, operationName });
    xhr.send(body);

    
    var data = new google.visualization.DataTable();
    data.addColumn('number', 'Rating');
    data.addColumn('number', 'Time');
    
    data.addRows([
        [0, 0], [1, 5], [5, 9], [11, 2], [20, 4]
    ]);
    
    var options = {
        hAxis: {
            title: 'Time'
        },
        vAxis: {
            title: 'Popularity'
        },
        series: {
            1: {curveType: 'function'}
        }
    };
    
    var chart = new google.visualization.LineChart(document.getElementById('chart_div'));
    chart.draw(data, options);
}


google.charts.setOnLoadCallback(drawLCRatingCharts);