$(document).ready(function () {
    // console.log('creating note')

    let notesArray = [];

    console.log(notesArray)

    $("#write-note").click(function (event) {
        // console.log('creating note')
        event.preventDefault();

        const addedNote = $("textarea#note-content").val();

        if (addedNote !== '') {
            notesArray.push(addedNote);
        }

        // console.log(notesArray);

        $("#notes-display").html("");

        const reverseNotes = notesArray;

        reverseNotes.reverse().forEach(function (note) {
            $("#notes-display").append(function() {
                return `<li>${note}</li>`;
            });
        });
    });



    $("#delete").on('click', function (event) {
        $('form').each(function () {
            this.empty();
        });

    });
});
