
function makeGrid(i) {
	for (var row = 0; row < i; row++){
		for (var column = 0; column < i; column++){
			$("#box").append("<div class='grid'></div>");
		};
	};
	$(".grid").width(960/i);
	$(".grid").height(960/i);
};

function resetGrid() {
	$(".grid").remove();
};

function newGrid() {
	resetGrid();
	var addSquares = prompt("For a new grid enter a number between 1 and 64.");
	if (addSquares > 0 && addSquares < 65) {
		if (addSquares % 1 === 0) {
			makeGrid(addSquares);
		} else {
			alert("Please only enter whole numbers")
			newGrid();
		};
	} else {
		newGrid();
	};
};

$(document).ready(function() {
	makeGrid(16);
	$(".grid").hover(function(){
		$(this).css("background", "black");
	});
	$("button").click(function(){
		newGrid();
		$(".grid").hover(function(){
			$(this).css("background", "black");
		});
	});
});