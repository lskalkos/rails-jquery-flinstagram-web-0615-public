// Add your JavaScript here

$(function() {

    $('.like-btn').click(function(event){

        event.preventDefault();
        event.stopPropagation();

        var link = $(this).parent();
        var url = link.attr('href');
        var method = link.data('method');
        var button = $(this).find("span");
        var parent = link.parent();
        var likes_msg = parent.find('.likes-message');

        function toggleHeartClass(){
            console.log("working");
            button.toggleClass('red-heart grey-heart');
        }

        function updateMessage(message){
            likes_msg.html(message);
        }


        $.ajax({
            url: url,
            method: method,
            dataType: 'json',
            success: function(data){
                var message = data.message;
                toggleHeartClass();
                updateMessage(message);
            }
        })

    })
});



