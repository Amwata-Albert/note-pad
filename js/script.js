$(document).ready(function () {
    // console.log('creating note')

    let notesArray = [];

    console.log(notesArray)

    $("#write-note").click(function (event) {
        // console.log('creating note')
        event.preventDefault();

        const addedNote = $("textarea#note-content").val();

        if (addedNote !== '') {
            notesArray.push(`<li>${addedNote}</li>`);
        }

        // console.log(notesArray);

        $("#notes-display").html("");

        notesArray.forEach(function (note) {
            $("#notes-display").prepend(function() {
                return note;
            });
        });
    });



    $("#delete").on('click', function (event) {
        $('form').each(function () {
            this.empty();
        });

    });
});
