// Set dimensions and margins
let width = 600,
  height = 400;

let margin = {
  top: 20,
  bottom: 50,
  left: 160,
  right: 20,
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

// Load in the data
d3.csv("data/LifeExpectancyData.csv").then((data) => {
  // Convert data types
  data.forEach((d) => {
    d["infant deaths"] = +d["infant deaths"];
    d.Year = +d.Year;
  });

  // Filter for the latest year, 2015, and get top 20 countries by infant deaths
  let filtered = data
    .filter((d) => d.Year === 2015)
    .sort((a, b) => b["infant deaths"] - a["infant deaths"])
    .slice(0, 20);

  // Set domains for scales
  xscale.domain([0, d3.max(filtered, (d) => d["infant deaths"])]);
  yscale.domain(filtered.map((d) => d.Country));

  // Create the bars
  svg
    .selectAll("rect")
    .data(filtered)
    .enter()
    .append("rect")
    .attr("x", margin.left)
    .attr("y", (d) => yscale(d.Country))
    .attr("width", (d) => xscale(d["infant deaths"]))
    .attr("height", yscale.bandwidth())
    .attr("fill", "skyblue");

  // Create the axes
  svg
    .append("g")
    .call(d3.axisLeft(yscale))
    .attr("transform", `translate(${margin.left}, 0)`); // Position y-axis correctly

  svg
    .append("g")
    .call(d3.axisBottom(xscale).ticks(5).tickFormat(d3.format(".2s")))
    .attr("transform", `translate(${margin.left},${height + margin.top})`); // Adjust x-axis

  // Add labels
  svg
    .append("text")
    .attr("x", width / 2 + margin.left)
    .attr("y", height + margin.top + 40)
    .attr("text-anchor", "middle")
    .text("Infant Deaths");

  svg
    .append("text")
    .attr("x", 0 - height / 2 + margin.top)
    .attr("y", 15)
    .attr("text-anchor", "middle")
    .text("Country")
    .attr("transform", "rotate(-90)"); // Adjusted label positioning
});
