function categoryChange(category) {
    $.ajax({
        url: "api/RabbitMq/SendMessageToRabbitQueue",
        method: "POST",
        data: JSON.stringify(dataString),
        dataType: 'json',
        contentType: "application/json",
        success: function (result, status, jqXHR) {
            alert("Pushed Msg to RMQ success!");
        },
        error(jqXHR, textStatus, errorThrown) {
            console.log(textStatus);
        }
    });
}