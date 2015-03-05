

$(function() {

	$(" input ").keypress( function ( e ) {
		if ( e.keyCode === 13 ) {
			$( this ).toggleClass( 'error' );
		}
	});

	$( 'ul li' ).click( function () {
		alert( $( this ).text() );
	});

	$( '.spinner' ).hide();
	$( '#github-results' ).hide();

	function displayResults ( response ) {
		var i;
		$( '#github-results').empty();
		for ( i=0; i< response.repositories.length; i++ ) {
			appendListItem( response.repositories[ i ] );
		}

		displayList();
	}

	function appendListItem ( repo ) {
		$( '#github-results' ).append( '<div class="table-responsive"<li> <table class="table table-hover"> <tr> <td class="info" </td> ' + repo.name + ' '+ ' <strong> By </strong> ' + repo.owner + ' <strong> UserName : </strong>' + repo.username+' </tr></table></li></div>'  );
	}

	function displayList () {
		$( '#github-results' ).show();
		$( '.spinner' ).hide();
	}

	function displaySpinner () {
		if ($(".repo-name").val()==="") {
	     		alert("Please Enter Repo name...");
		$( ".repo-name" ).focus();
		return false;
    };
		$( '.spinner' ).show(); 
	}

	$( '#load-button' ).click( function () {
		var repo_name = $( '.repo-name' ).val();		
		displaySpinner();
		$( '#github-results' ).hide();
		$.ajax({
            url: 'https://api.github.com/legacy/repos/search/' + repo_name,
            type: 'GET',
            success: displayResults
            
        });
	})
});




