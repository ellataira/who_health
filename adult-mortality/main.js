// Set dimensions and margins
let width = 500,
  height = 400;

let margin = {
  top: 20,
  bottom: 50,
  left: 210,
  right: 120,
};

// Create SVG element
let svg = d3
  .select("#chart")
  .append("svg")
  .attr("width", width + margin.left + margin.right)
  .attr("height", height + margin.top + margin.bottom);

// Define scales
let xscale = d3.scaleLinear().range([0, width]);

let yscale = d3.scaleBand().range([0, height]).padding(0.2);

d3.csv("data/LifeExpectancyData.csv").then((data) => {
  data.forEach((d) => {
    d["Adult Mortality"] = +d["Adult Mortality"];
    d.Year = +d.Year;
  });

  // Filter for 2015
  let filtered = data.filter((d) => d.Year === 2015);

  let top10 = filtered
    .sort((a, b) => b["Adult Mortality"] - a["Adult Mortality"])
    .slice(0, 10);

  let bottom10 = filtered
    .sort((a, b) => a["Adult Mortality"] - b["Adult Mortality"])
    .slice(0, 10);

  let combinedData = top10.concat(bottom10);

  combinedData.sort((a, b) => b["Adult Mortality"] - a["Adult Mortality"]);

  // Set domains for scales
  xscale.domain([0, d3.max(combinedData, (d) => d["Adult Mortality"])]);
  yscale.domain(combinedData.map((d) => d.Country));

  // Create bars
  svg
    .selectAll("rect")
    .data(combinedData)
    .enter()
    .append("rect")
    .attr("x", margin.left)
    .attr("y", (d) => yscale(d.Country))
    .attr("width", (d) => xscale(d["Adult Mortality"]))
    .attr("height", yscale.bandwidth())
    .attr("fill", (d) => (top10.includes(d) ? "#800080" : "#008000"));

  // Create the axes
  svg
    .append("g")
    .call(d3.axisLeft(yscale))
    .attr("transform", `translate(${margin.left}, 0)`);

  svg
    .append("g")
    .call(d3.axisBottom(xscale).ticks(5).tickFormat(d3.format(".2s")))
    .attr("transform", `translate(${margin.left},${height + margin.top})`);

  // Add labels
  svg
    .append("text")
    .attr("x", width / 2 + margin.left)
    .attr("y", height + margin.top + 40)
    .attr("text-anchor", "middle")
    .text("Adult Mortality");

  svg
    .append("text")
    .attr("x", 0 - height / 2 + margin.top)
    .attr("y", 15)
    .attr("text-anchor", "middle")
    .text("Country")
    .attr("transform", "rotate(-90)");

  // legend
  let legend = svg
    .append("g")
    .attr("transform", `translate(${width + margin.left + 20}, ${margin.top})`);

  legend
    .append("rect")
    .attr("x", 0)
    .attr("y", 0)
    .attr("width", 20)
    .attr("height", 20)
    .attr("fill", "#800080");
  legend
    .append("text")
    .attr("x", 30)
    .attr("y", 15)
    .text("Top 10")
    .style("font-size", "14px");

  legend
    .append("rect")
    .attr("x", 0)
    .attr("y", 30)
    .attr("width", 20)
    .attr("height", 20)
    .attr("fill", "#008000");

  legend
    .append("text")
    .attr("x", 30)
    .attr("y", 45)
    .text("Bottom 10")
    .style("font-size", "14px");
});
