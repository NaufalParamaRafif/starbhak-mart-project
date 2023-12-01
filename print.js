$(document).ready(function() {

    $(".screen-shot-button").click(function() {
        window.print();
    });

    $(document).keydown(function(event) {
        if (event.ctrlKey && event.key === 'p') {
            event.preventDefault();
            window.print();
        }
    });
});