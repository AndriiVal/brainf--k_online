$("#button1").click(function() {
	var code = $("#txtArea").val();
	$.post("/run", {
			js_data: JSON.stringify({ "code":code})
		},
		function(data) {
			$('#result').append(`<p>${JSON.stringify(data.result, null, 2)}</p>`);
	});
});

$("#button2").click(function() {
	$('#result').html('');
	$('#result').append('<h2>Output:</h2>');
});
