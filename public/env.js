console.log('test');
$(document).ready(function() {
    console.log('Document ready')

    //bind calculate button
    $('#calculateBtn').click(function() {
        var x = $('#x').val()
        var y = $('#y').val()

        numbers = {
            x : x,
            y : y
        }

        //return result to the user
        $.get("http://localhost:4000/adder", numbers, function(data) {
            console.log('Data has returned: '+data)
            $('#result').val(data)
        })
    })
})