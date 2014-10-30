function threeCircles() {

	// create a root svg
	var svg = d3.select("body")
				.append("svg")
				.attr("width",document.body.clientWidth)
				.attr("height",document.body.clientHeight);
	// bind some data
	var circles = svg.selectAll("circle")
					 .data([
					 	{size: 5},
					 	{size: 10},
					 	{size: 15}
					 ]);
	// draw some circles
	circles.enter()
		   .append("circle")
		   .attr("r",function(d){
		   	 return d.size;
		   })
		   .attr("cx",function() {
		   	 return 50 + Math.random() * (document.body.clientWidth - 50)
		   })
		   .attr("cy",function() {
		   	 return 50 + Math.random() * (document.body.clientHeight - 50)
		   })
}

