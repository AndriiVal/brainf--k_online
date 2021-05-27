$("#button1").click(function() {
	var code = $("#txtArea").val();
	$.post("/run", {
			js_data: JSON.stringify({ "code":code})
		},
		function(data) {
			if (data.result === '') {
				$('#result').append(`<p>>>></p>`);
			} else {
				$('#result').append(`<p>>>>${(data.result)}</p>`);
			}
	});
});

$("#button2").click(function() {
	$('#result').html('');
	$('#result').append('<h2>Output:</h2>');
});
