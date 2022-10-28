var chart = new CanvasJS.Chart("graphic", {
    animationEnabled: true,
    
    title:{
        text:"Avaliação da refeição da instituição."
    },
    axisX:{
        interval: 1
    },
    data: [{
        type: "column",
        name: "companies",
        axisYType: "secondary",
        color: "#014D65",
        dataPoints: [
            { y: 0, label: "Ótimo", color: '#4A993D'},
            { y: 0, label: "Bom", color: '#E9EE00'},
            { y: 0, label: "Ruim", color: '#FF5B5B'}
        ]
    }]
});


chart.render();

function upVal(dataPointPos, text){
    Swal.fire({
        icon: 'success',
        title: `Certeza que quer votar em "${text}"?`,
        confirmButtonText: 'Sim',
        showCancelButton: true,
    }).then(function(res){
        if(res.isConfirmed){
            chart.options.data[0].dataPoints[dataPointPos].y += 1
            chart.render()
            $.ajax({
                url: '../../index.html',
                datatype: 'html'
            }).done(function(res){
                $('.btn-container').empty();
                $('.btn-container').append($(res).find('.aval')); 
                $('.aval').click(aval);
            }).fail(function(){

            })
        }
    });
}
function aval(){
    $.ajax({
        url: '../../aval-buttons.html',
    }).done(function(res){
        $('.btn-container').empty();
        $('.btn-container').append(res);
        
        $('.aval-good').click(()=>{
            upVal(0, $('.aval-good').text())
        });
    
        $('.aval-so').click(()=>{
            upVal(1, $('.aval-so').text())
        });
    
        $('.aval-bad').click(()=>{
            upVal(2, $('.aval-bad').text())
        });
    }).fail(function(JHXRql, textStatus){
        console.log(JHXRql+ ' ' +textStatus);
    });
}

$('.aval').click(aval);
