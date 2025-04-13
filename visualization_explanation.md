**Group 7**: [https://ellataira.github.io/who\_health/](https://ellataira.github.io/who_health/)  
Ella Taira, Aretha Chen, Helen Miao  
**Link to published website:** [https://ellataira.github.io/who\_health/](https://ellataira.github.io/who_health/)

### Design of our visualizations:

**Life Expectancy of Selected Country vs. International Average**

To complement this broad view, we visualize each country’s life expectancy over time by comparing it to the international average for a more focused view. Life expectancy is continuous, so we represent this in a life graph. The marks are the lines, and the channels are the lines’ positions and colors. Since 193 countries are included in the dataset, we could not display every country’s life expectancy simultaneously, as the graph is far too crowded to be decipherable. So, we choose to compare each country one-by-one via a user selection against the international average. The y-axis starts at 30 years to make it easier to observe details in the lines. 

**Education vs. Income Composition of Resources**

Beyond healthcare, socioeconomic factors such as education and income composition play a crucial role in determining a population’s well-being, so we decided to visualize each country’s average years of education and Income Composition of Resources in a scatter plot. The mark is each dot. The channel is the position of each dot and the color indicates the country’s development status. Adding the color classification for development status allows the audience to observe how developed countries tend to be more educated and have the highest ICOR. The tooltip lets the audience see the specific average rates for each field for each country. 

**Top 10 and Bottom 10 Countries by Adult Mortality in 2015**

While life expectancy and socioeconomic factors shape overall health outcomes, specific public health crises, such as adult mortality rates, reveal significant inequalities between countries. The horizontal bar chart visualizes the top 10 countries with the highest adult mortality rates (probability of dying between 15 and 60 years per 1000 population) and the bottom 10 countries in 2015\. Each bar represents a country, with the length of the bar corresponding to the adult mortality rate. The marks are the bars, and the channels are their lengths and positions. The x-axis represents the adult mortality rate, and the y-axis shows the country names. The chart highlights which countries faced the highest adult mortality rates in 2015, indicating areas where public health interventions might be most needed. By focusing on the top and bottom 10 countries, this visualization emphasizes the disparities in adult mortality outcomes across the globe, and users can more quickly identify countries that may require additional attention when considering adult mortality.

**HIV/AIDS Deaths Over Time (Top 5 Countries)**

Another critical public health issue is the prevalence of HIV/AIDS-related deaths. We visualize HIV/AIDS-related deaths over time in the top five most affected countries through a line and point chart. The chart includes a line mark to show overall trends and circular point marks along the lines to emphasize each data point for clearer interaction. We aggregated the total number of HIV/AIDS deaths by country and filtered the dataset to include only the top five countries with the highest cumulative deaths. The x-axis represents time in years, while the y-axis represents the number of deaths for that year. The color encodes the country, and tooltips provide interactive details on each data point, showing the country name and the exact number of the sum of HIV/AIDS deaths. This visualization allows users to see both overall trends and country-specific patterns through a clean view.

**Life Expectancy and Healthcare Expenditure World Map**

Life expectancy serves as a key indicator of a nation's overall health and quality of life. We visualize each country's life expectancy using a dual world map, allowing for a side-by-side comparison with healthcare expenditure as a percentage of GDP. We use a map to observe spatial patterns that might be less apparent in a table or chart. We specifically use a dual map to give a clearer understanding of the relationship between healthcare spending and life expectancy across different regions. 

We use geographical data from [Natural Earth](https://www.naturalearthdata.com/downloads/10m-cultural-vectors/) to generate the world map. Discrepancies between country names in the life expectancy dataset and the Natural Earth dataset required manual preprocessing, and countries with missing data are displayed in light grey. For healthcare expenditure, values are capped at 100%, and any countries showing 0% are treated as missing data since it’s highly unlikely that a country allocates nothing to healthcare. The color gradient on the left map represents life expectancy in years (blue scale), while the right map represents healthcare expenditure as a percentage of GDP (red scale). We use different color schemes for each map to help visually distinguish between them. However, both maps use a linear scale, so that differences in color intensity are comparable across countries. This makes it easier to interpret patterns and find differences in spending and outcomes. Users can zoom in and out for a closer look, and any movement on one map is mirrored on the other, making direct comparisons easy. Hovering and clicking on a specific country reveals its corresponding values.

