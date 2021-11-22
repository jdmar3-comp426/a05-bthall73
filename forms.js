window.addEventListener( "load", function() {
    function sendData() {
        const sendRequest = new XMLHttpRequest();

        const newFormInfo = new URLSearchParams(FormData( form ));

        sendRequest.addEventListener( "error", function ( event ) {
            alert( 'Submission unsuccessful! Please try again.' );
        });

        sendRequest.addEventListener( "load", function ( event ) {
            alert( 'Your account was created!' );
        });

        sendRequest.open( "POST", "http://localhost:5000/app/new/user" );

        sendRequest.send( newFormInfo );
    }
    const form = document.getElementById( "newForm" );

    form.addEventListener( "submit", function ( event ) {
        event.preventDefault();
        sendData();
    })
});