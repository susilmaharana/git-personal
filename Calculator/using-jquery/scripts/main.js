$(function(){
    $('.key-row div span').each(function(){
        $(this).parent().attr("data-key-val", $(this).text());
    });

    var calculate = function() {
        //calculate whatever inside action-trail
    }

    var appendValues = function(keyVal) {
        $('#action-trail').append(this);
    } 

    $('.key-row div').on('click', function(){
        var keyVal = $(this).data('key-val');
        switch(keyVal) {
            case '1': 
            case '2': 
            case '3': 
            case '4': 
            case '5': 
            case '6': 
            case '7': 
            case '8': 
            case '9': 
            case '0': 
            case '.' :
                appendValues(keyVal);
                break;
            case '/':
            case '*':
            case '-':
            case '+':
                appendValues(keyVal);
                break;
            case '=':
                calculate();
                break;
            default:
                break;
                
        }
        if($(this).text() !== '=')
        {
            $('#action-trail').append($(this).data('key-val'));
        }
        else {
            calculate();
        }
    });
});