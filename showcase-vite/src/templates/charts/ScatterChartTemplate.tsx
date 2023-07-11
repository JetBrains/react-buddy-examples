import {ResponsiveScatterPlot} from "@nivo/scatterplot";
import {ScatterPlotDatum, ScatterPlotRawSerie} from "@nivo/scatterplot/dist/types/types";
import {DepartmentInfo} from "../../types";
import {useEffect, useState} from "react";

/** Current template demonstrates how you can define a react component by the velocity parameter properties.
 * To see the result of the processed template try to drag and drop it from React palette (Templates -> Charts -> Scatter) to {@link ScatterChartTest} Fragment element.
 * For more information follow https://youtrack.haulmont.com/issue/RCB-863/Amplicode-charts-wizard
 **/
export const ScatterChartTemplate = () => {

  const [scatterData, setScatterData] = useState<ScatterPlotRawSerie<ScatterPlotDatum>[]>([]);
  /*vtl #if($scatter.itemsVariableName)*/
  useEffect(() => {
    /*vtl const mappedData: ScatterPlotRawSerie<ScatterPlotDatum>[] = ${scatter.itemsVariableName}.map( item => {
        return {
            id: item.${scatter.id.name},
            data: item.${scatter.data.name}.map(dataItem => {
                return { x: dataItem.${scatter.x.name}, y: dataItem.${scatter.y.name} }
            })
          }
      })
      setScatterData(mappedData)*/
  }, ["/*vtl ${scatter.itemsVariableName}*/"]);
  /*vtl #end*/

  return (
    <div style={{
      height: 400,
      margin: '0 auto',
      padding: 30,
      width: 500,
    }}>
      <ResponsiveScatterPlot
        data={scatterData}
        /*vtl #if( $scatter.leftAxisLabel && "$scatter.leftAxisLabel" != "" )
        axisLeft={{
          legend: $quote${scatter.leftAxisLabel}$quote,
          legendPosition: "middle",
          legendOffset: -40
        }}${newline}#end*/
        /*vtl #if( $scatter.rightAxisLabel && "$scatter.rightAxisLabel" != "" )
        axisRight={{
          legend: $quote${scatter.rightAxisLabel}$quote,
          legendPosition: "middle",
          legendOffset: 40
        }}${newline}#end*/
        /*vtl #if( $scatter.topAxisLabel && "$scatter.topAxisLabel" != "" )
        axisTop={{
          legend: $quote${scatter.topAxisLabel}$quote,
          legendPosition: "middle",
          legendOffset: -40
        }}${newline}#end*/
        /*vtl #if( $scatter.bottomAxisLabel && "$scatter.bottomAxisLabel" != "" )
        axisBottom={{
          legend: $quote${scatter.bottomAxisLabel}$quote,
          legendPosition: "middle",
          legendOffset: 40
        }}${newline}#end*/
        margin={{top: 20, right: 20, bottom: 60, left: 80}}
      />
    </div>
  );
};

export const ScatterChartTest = () => {

  const departments: DepartmentInfo[] = [
    {
      department: "IT",
      budgetPerYears: [
        {year: 2015, budget: 3490000},
        {year: 2016, budget: 3550000},
        {year: 2017, budget: 3600000},
        {year: 2018, budget: 3670000},
        {year: 2019, budget: 3700000},
        {year: 2020, budget: 3810000},
        {year: 2021, budget: 3930000},
      ]
    },
    {
      department: "Accounting",
      budgetPerYears: [
        {year: 2015, budget: 1000000},
        {year: 2016, budget: 1100000},
        {year: 2017, budget: 1230000},
        {year: 2018, budget: 1430000},
        {year: 2019, budget: 1500000},
        {year: 2020, budget: 1510000},
        {year: 2021, budget: 1600000},
      ]
    }
  ];

  return (
    <></>
  );
};