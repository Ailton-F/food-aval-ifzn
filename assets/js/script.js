$('.aval').click(function(){
    $.ajax({
        url: '../../aval-buttons.html',
    }).done(function(res){
        $('.btn-container').empty();
        $('.btn-container').append(res);

        let chartDom = $('.graphic');
        let myChart = echarts.init(chartDom);
        let option;

        option = {
            xAxis: {
                type: 'category',
                data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
            },
            yAxis: {
                type: 'value'
            },
            series: [
                {
                data: [120, 200, 150, 80, 70, 110, 130],
                type: 'bar'
                }
            ]
        };

        option && myChart.setOption(option);
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