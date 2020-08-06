(function ($) {
	// Typed JS options
	const options = {
		strings: ['Note-Pad App.', 'take notes anywhere,','anytime...'],
		typeSpeed: 80,
		smartBackspace: true,
		loop: true,
		showCursor: false,
		backDelay: 700,
		fadeOut: true,
	  };

	  const typed = new Typed('.heading', options);

	// Initialize global array to store our notes
	let notesArray = [];

	/** CREATE NOTES FUNCTION
	 * This function goes throuhg the list of notes in notesArray and add them to the HTML
	 * It will be used in the addNote and deleteNote functions.
	 */
	function displayNotes( array ) {
		$("#notes-display").html("");

		/**Add each note in the notesArray to the unordered list with id #notes-display
		 * Give each list item an id with the format id="note-<indexOf(note)>". 
				 E.g the first note <li id="0"> and so on.
		 */
		return array.forEach(function (note, index) {
			$("#notes-display").prepend(function () {
				return `<li id=${index} class="list-group-item d-flex justify-content-between align-items-center">
						${note}
						<span class="badge badge-success badge-pill edit">
								<i class="fas fa-pen "></i>
						</span>
						<span class="badge badge-danger badge-pill delete">
								<i class="fas fa-trash-alt"></i>
						</span>
				</li>`;
			});
		});
	}

	$("#write-note").click(function (event) {
		event.preventDefault();

		const addedNote = $("textarea#note-content").val();

		if (addedNote !== '') {
			notesArray.push(addedNote);
		}

		// Show the notes in the HTML
		displayNotes(notesArray);
	});

	/** DELETE NOTE FUNCTION:
	 * This method is used since the HTML for the list of notes is dynamically generated
	 * We have to bind the click event to an already existing parent, in this case #notes-display
	 * Get the note's id from the <li> id attribute
	 * The note's id - 1 = the index of the note in the notesArray
	 * Use .splice() method to remove the note from the array 
	 */
	$('#notes-display').on('click', 'li > .delete', function () {
		const noteIndex = parseInt($(this).parent().attr('id'));

		// Delete the note from the noteArray
		notesArray.splice(noteIndex, 1);

		// clear the textarea
		$("#note-content").val("");
		
		//  Show the notes in the HTML
		displayNotes(notesArray);
	});
	/**
	 * EDIT NOTE FUNCTION */ 
	$('#notes-display').on('click', 'li > .edit', function () {
		const noteIndex = parseInt($(this).parent().attr('id'));

	});
})(jQuery);
