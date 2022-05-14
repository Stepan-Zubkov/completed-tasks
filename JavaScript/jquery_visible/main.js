$(function() {
$('button#change_visible').click(function() {
    switch ($('input:checked').val()) {
        case 'Gone':
            $('div#change_element').toggle();
            break;
        case 'Slide':
            $('div#change_element').slideToggle(2000);
            break;
        case 'Fade':
            $('div#change_element').fadeToggle(2000);
            break;
        default:
            break;
    }
    console.log($('input:checked').val());
})
})