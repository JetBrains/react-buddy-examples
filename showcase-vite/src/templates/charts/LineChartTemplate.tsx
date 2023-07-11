import {ResponsiveLine, Serie} from "@nivo/line";
import {DepartmentInfo} from "../../types";
import {useEffect, useState} from "react";

/** Current template demonstrates how you can define a react component by the velocity parameter properties.
 * To see the result of the processed template try to drag and drop it from React palette (Templates -> Charts -> Line) to {@link LineChartTest} Fragment element.
 * For more information follow https://youtrack.haulmont.com/issue/RCB-863/Amplicode-charts-wizard
 **/
export const LineChartTemplate = () => {

  const [lineData, setLineData] = useState<Serie[]>([]);
  /*vtl #if($line.itemsVariableName)*/
  useEffect(() => {
  /*vtl const mappedData: Serie[] = ${line.itemsVariableName}.map( item => {
      return {
        id: item.${line.id.name},
        data: item.${line.data.name}.map(dataItem => {
        return { x: dataItem.${line.x.name}, y: dataItem.${line.y.name} }
      })
      }
    })
    setLineData(mappedData)*/
  }, ["/*vtl ${line.itemsVariableName}*/"]);
  /*vtl #end*/

  return (
    <div style={{
      height: 400,
      margin: '0 auto',
      padding: 30,
      width: 500,
    }}>
      <ResponsiveLine
        data={lineData}
        curve={"linear"}
        /*vtl #if( $line.leftAxisLabel && "$line.leftAxisLabel" != "" )
        axisLeft={{
          legend: $quote${line.leftAxisLabel}$quote,
          legendPosition: "middle",
          legendOffset: -40
        }}${newline}#end*/
        /*vtl #if( $line.rightAxisLabel && "$line.rightAxisLabel" != "" )
        axisRight={{
          legend: $quote${line.rightAxisLabel}$quote,
          legendPosition: "middle",
          legendOffset: 40
        }}${newline}#end*/
        /*vtl #if( $line.topAxisLabel && "$line.topAxisLabel" != "" )
        axisTop={{
          legend: $quote${line.topAxisLabel}$quote,
          legendPosition: "middle",
          legendOffset: -40
        }}${newline}#end*/
        /*vtl #if( $line.bottomAxisLabel && "$line.bottomAxisLabel" != "" )
        axisBottom={{
          legend: $quote${line.bottomAxisLabel}$quote,
          legendPosition: "middle",
          legendOffset: 40
        }}${newline}#end*/
        margin={{top: 20, right: 20, bottom: 60, left: 80}}
      />
    </div>
  );
};

export const LineChartTest = () => {

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