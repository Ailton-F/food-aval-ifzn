var chart = new CanvasJS.Chart("graphic", {
    animationEnabled: true,
    
    title:{
        text:"Avaliação da refeição da instituição."
    },
    axisX:{
        interval: 1
    },
    data: [{
        type: "bar",
        name: "companies",
        axisYType: "secondary",
        color: "#014D65",
        dataPoints: [
            { y: 3, label: "Ótimo" },
            { y: 7, label: "Bom" },
            { y: 5, label: "Ruim" }
        ]
    }]
});
chart.render();

$('.aval').click(function(){
    $.ajax({
        url: '../../aval-buttons.html',
    }).done(function(res){
        $('.btn-container').empty();
        $('.btn-container').append(res);
        
        
        // let value_c1 = parseInt($('.contador-1>span').text());
        // let value_c2 = parseInt($('.contador-2>span').text());
        // let value_c3 = parseInt($('.contador-3>span').text());

        // function upVal(text, valToUp, divToReload){
        //     Swal.fire({
        //         icon: 'success',
        //         title: `Certeza que quer votar em "${text}"?`,
        //         confirmButtonText: 'Sim',
        //         showCancelButton: true,
        //     }).then(function(res){
        //         if(res.isConfirmed){
        //             valToUp += 1;
        //             divToReload.text(value_c1);
        //         }
        //     });
        // }

        // $('.aval-good').click(function(){
        //     upVal('Ótimo', value_c1, $('.contador-1>span'));
        // });

        // $('.aval-so').click(function(){
        //     upVal('Ok', value_c2, $('.contador-2>span'));
        // });

        // $('.aval-bad').click(function(){
        //     upVal('Péssimo', value_c3, $('.contador-3>span'));
        // });
        
    }).fail(function(JHXRql, textStatus){
        console.log(JHXRql+ ' ' +textStatus);
    });
    
    
});