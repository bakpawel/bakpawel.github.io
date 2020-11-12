var ctx = document.getElementById('myChart').getContext('2d');
var charr = function(num){
    let numbers = num;
    var chart = new Chart(ctx, {
        // The type of chart we want to create
        type: 'doughnut',
    
        // The data for our dataset
        data: {
            labels: ['January', 'February', 'March'],
            datasets: [{
                label: 'Something',
                backgroundColor: ['rgb(255, 99, 132)','rgb(155, 99, 132)','rgb(155, 199, 132)'],
                borderColor: ['rgb(255, 99, 132)','rgb(155, 99, 132)','rgb(155, 199, 132)'],
                data: numbers
            }]
        },
    
        // Configuration options go here
        options: {
            maintainAspectRatio: false
        }
    });
}
let firstchar = charr([24,15,44]);
// firstchar();
// console.log(chart);
$(document).ready(function(){
    console.log($("div").css("background-color"));
    $("button").click(function(e){
        $("#load").load("fileeet.txt", function(response,status, xhr){
            if (status == "error")
            {
                $("#load").html("Error "+ xhr.status +": "+ xhr.statusText).animate({fontSize:30});
            };
        });
        // $("canvas").hide();
    });

    $("p").click(function(){
        $(this).hide();
    })
});