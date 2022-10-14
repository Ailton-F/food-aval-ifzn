$('.aval').click(function(){
    $.ajax({
        url: '../../aval-buttons.html',
    }).done(function(res){
        $('.btn-container').empty();
        $('.btn-container').append(res);
        
    }).fail(function(JHXRql, textStatus){
        console.log(JHXRql+ ' ' +textStatus);
    });
});