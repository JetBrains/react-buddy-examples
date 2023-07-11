import {BarDatum, ResponsiveBar} from "@nivo/bar";
import {useEffect, useState} from "react";

/** Current template demonstrates how you can define a react component by the velocity parameter properties.
 * To see the result of the processed template try to drag and drop it from React palette (Templates -> Charts -> Bar) to {@link BarChartTest} Fragment element.
 * For more information follow https://youtrack.haulmont.com/issue/RCB-863/Amplicode-charts-wizard
 **/
export const BarChartTemplate = () => {

  const [barData, setBarData] = useState<BarDatum[]>([]);
  /*vtl #if($bar.itemsVariableName)*/
  useEffect(() => {
    /*vtl setBarData($bar.itemsVariableName)*/
  }, ["/*vtl ${bar.itemsVariableName}*/"]);
  /*vtl #end*/

  return (
    <div style={{
      height: 400,
      margin: '0 auto',
      padding: 30,
      width: 500,
    }}>
      <ResponsiveBar
        data={barData}
        layout={"vertical"}
        /*vtl
        keys={[
            #foreach($key in $bar.keys)
            $quote${key.name}$quote#if( $foreach.hasNext ),$newline#end
            #end$newline]}
        */
        /*vtl indexBy=$quote${bar.index.name}$quote*/
        /*vtl #if( $bar.leftAxisLabel && "$bar.leftAxisLabel" != "" )
        axisLeft={{
          legend: $quote${bar.leftAxisLabel}$quote,
          legendPosition: "middle",
          legendOffset: -40
        }}${newline}#end*/
        /*vtl #if( $bar.rightAxisLabel && "$bar.rightAxisLabel" != "" )
        axisRight={{
          legend: $quote${bar.rightAxisLabel}$quote,
          legendPosition: "middle",
          legendOffset: 40
        }}${newline}#end*/
        /*vtl #if( $bar.topAxisLabel && "$bar.topAxisLabel" != "" )
        axisTop={{
          legend: $quote${bar.topAxisLabel}$quote,
          legendPosition: "middle",
          legendOffset: -40
        }}${newline}#end*/
        /*vtl #if( $bar.bottomAxisLabel && "$bar.bottomAxisLabel" != "" )
        axisBottom={{
          legend: $quote${bar.bottomAxisLabel}$quote,
          legendPosition: "middle",
          legendOffset: 40
        }}${newline}#end*/
        margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
      />
    </div>
  );
};

export const ColumnBarChartTemplate = () => {

  const [barData, setBarData] = useState<BarDatum[]>([]);
  /*vtl #if($bar.itemsVariableName)*/
  useEffect(() => {
    /*vtl setBarData($bar.itemsVariableName)*/
  }, ["/*vtl ${bar.itemsVariableName}*/"]);
  /*vtl #end*/

  return (
    <div style={{
      height: 400,
      margin: '0 auto',
      padding: 30,
      width: 500,
    }}>
      <ResponsiveBar
        data={barData}
        layout={"horizontal"}
        /*vtl
        keys={[
            #foreach($key in $bar.keys)
            $quote${key.name}$quote#if( $foreach.hasNext ),$newline#end
            #end$newline]}
        */
        /*vtl indexBy=$quote${bar.index.name}$quote*/
        /*vtl #if( $bar.leftAxisLabel && "$bar.leftAxisLabel" != "" )
        axisLeft={{
          legend: $quote${bar.leftAxisLabel}$quote,
          legendPosition: "middle",
          legendOffset: -40
        }}${newline}#end*/
        /*vtl #if( $bar.rightAxisLabel && "$bar.rightAxisLabel" != "" )
        axisRight={{
          legend: $quote${bar.rightAxisLabel}$quote,
          legendPosition: "middle",
          legendOffset: 40
        }}${newline}#end*/
        /*vtl #if( $bar.topAxisLabel && "$bar.topAxisLabel" != "" )
        axisTop={{
          legend: $quote${bar.topAxisLabel}$quote,
          legendPosition: "middle",
          legendOffset: -40
        }}${newline}#end*/
        /*vtl #if( $bar.bottomAxisLabel && "$bar.bottomAxisLabel" != "" )
        axisBottom={{
          legend: $quote${bar.bottomAxisLabel}$quote,
          legendPosition: "middle",
          legendOffset: 40
        }}${newline}#end*/
        margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
      />
    </div>
  );
};

export const BarChartTest = () => {
  const countriesInfo = [
    {
      "country": "AD",
      "hot dog": 67,
      "hot dogColor": "hsl(125, 70%, 50%)",
      "burger": 46,
      "burgerColor": "hsl(311, 70%, 50%)",
      "sandwich": 70,
      "sandwichColor": "hsl(191, 70%, 50%)",
      "kebab": 178,
      "kebabColor": "hsl(126, 70%, 50%)",
      "fries": 180,
      "friesColor": "hsl(196, 70%, 50%)",
      "donut": 135,
      "donutColor": "hsl(182, 70%, 50%)"
    },
    {
      "country": "AE",
      "hot dog": 24,
      "hot dogColor": "hsl(183, 70%, 50%)",
      "burger": 157,
      "burgerColor": "hsl(169, 70%, 50%)",
      "sandwich": 115,
      "sandwichColor": "hsl(24, 70%, 50%)",
      "kebab": 142,
      "kebabColor": "hsl(163, 70%, 50%)",
      "fries": 101,
      "friesColor": "hsl(242, 70%, 50%)",
      "donut": 89,
      "donutColor": "hsl(17, 70%, 50%)"
    },
    {
      "country": "AF",
      "hot dog": 85,
      "hot dogColor": "hsl(275, 70%, 50%)",
      "burger": 187,
      "burgerColor": "hsl(55, 70%, 50%)",
      "sandwich": 55,
      "sandwichColor": "hsl(177, 70%, 50%)",
      "kebab": 115,
      "kebabColor": "hsl(120, 70%, 50%)",
      "fries": 117,
      "friesColor": "hsl(96, 70%, 50%)",
      "donut": 38,
      "donutColor": "hsl(350, 70%, 50%)"
    },
    {
      "country": "AG",
      "hot dog": 47,
      "hot dogColor": "hsl(242, 70%, 50%)",
      "burger": 87,
      "burgerColor": "hsl(332, 70%, 50%)",
      "sandwich": 181,
      "sandwichColor": "hsl(343, 70%, 50%)",
      "kebab": 47,
      "kebabColor": "hsl(127, 70%, 50%)",
      "fries": 126,
      "friesColor": "hsl(267, 70%, 50%)",
      "donut": 102,
      "donutColor": "hsl(2, 70%, 50%)"
    },
    {
      "country": "AI",
      "hot dog": 145,
      "hot dogColor": "hsl(281, 70%, 50%)",
      "burger": 72,
      "burgerColor": "hsl(49, 70%, 50%)",
      "sandwich": 149,
      "sandwichColor": "hsl(311, 70%, 50%)",
      "kebab": 60,
      "kebabColor": "hsl(314, 70%, 50%)",
      "fries": 65,
      "friesColor": "hsl(180, 70%, 50%)",
      "donut": 102,
      "donutColor": "hsl(115, 70%, 50%)"
    },
    {
      "country": "AL",
      "hot dog": 124,
      "hot dogColor": "hsl(274, 70%, 50%)",
      "burger": 72,
      "burgerColor": "hsl(155, 70%, 50%)",
      "sandwich": 92,
      "sandwichColor": "hsl(58, 70%, 50%)",
      "kebab": 83,
      "kebabColor": "hsl(177, 70%, 50%)",
      "fries": 88,
      "friesColor": "hsl(234, 70%, 50%)",
      "donut": 179,
      "donutColor": "hsl(161, 70%, 50%)"
    },
    {
      "country": "AM",
      "hot dog": 87,
      "hot dogColor": "hsl(72, 70%, 50%)",
      "burger": 162,
      "burgerColor": "hsl(14, 70%, 50%)",
      "sandwich": 147,
      "sandwichColor": "hsl(37, 70%, 50%)",
      "kebab": 85,
      "kebabColor": "hsl(337, 70%, 50%)",
      "fries": 72,
      "friesColor": "hsl(178, 70%, 50%)",
      "donut": 192,
      "donutColor": "hsl(129, 70%, 50%)"
    }
  ]

  return (
    <></>
  );
};