import {ColumnsType} from "antd/es/table";
import {Table} from "antd";
import {useState} from "react";
import {Sex, User} from "../types";

/** Current template demonstrates how you can define a react component by the velocity parameter properties.
 * To see the result of the processed template try to drag and drop it from React palette (Templates -> Table) to {@link TableTestComponent} div element.
 * For more information follow https://youtrack.haulmont.com/issue/RCB-467/Table-template-support
 **/
export const TreeTableTemplate = () => {
  const itemsVariableType = "/*vtl $table.itemsVariableType*/"
  const itemType = "/*vtl $table.itemType*/"
  const fixedColumnName = "/*vtl ${sQuote}$table.fixedColumn${sQuote}*/"
  const hierarchyColumnName = "/*vtl ${sQuote}$table.hierarchyProperty${sQuote}*/"
  const fixedHeader = "/*vtl $table.fixedHeader*/"
  const expandableRow = "/*vtl $table.expandableRow*/"
  const rowSize = "/*vtl ${sQuote}$table.rowSize${sQuote}*/"
  const stripes = "/*vtl $table.stripes*/"
  /*Pagination:*/
  /*vtl const isPageable = $table.pagination*/
  /*vtl const rowsPerPage =#if( $table.rowsPerPage ) $table.rowsPerPage#else 0 #end */

  /*Sort properties:*/
  /*vtl const sortProperties: string[] = [*/
  /*vtl #foreach($property in $table.sortProperties)*/
  /*vtl $quote${property.name}$quote#if( $foreach.hasNext ),$newline#end */
  /*vtl #end*/
  /*vtl $newline]*/

  /*Filter properties:*/
  /*vtl const filteredProperties: string[] = [*/
  /*vtl #foreach($property in $table.filterProperties)*/
  /*vtl $sQuote${property.name}$sQuote#if( $foreach.hasNext ),$newline#end */
  /*vtl #end*/
  /*vtl $newline]*/

  /*Expand if set properties:*/
  /*vtl const expandIfSet: string[] = [*/
  /*vtl #foreach($property in $table.expandIfSet)*/
  /*vtl $quote${property.name}$quote#if( $foreach.hasNext ),$newline#end */
  /*vtl #end*/
  /*vtl $newline]*/

  /*Display in expand properties:*/
  /*vtl const displayInExpand: string[] = [*/
  /*vtl #foreach($property in $table.displayInExpand)*/
  /*vtl $sQuote${property.name}$sQuote#if( $foreach.hasNext ),$newline#end */
  /*vtl #end*/
  /*vtl $newline]*/

  /*All properties:*/
  /*vtl const allProperties: string[] = [#foreach($property in $table.allProperties)$sQuote${property.name}$sQuote#if( $foreach.hasNext ), #end#end]*/

  /*Actions:*/
  /*vtl const actions: string[] = [#foreach($action in $table.actions)$sQuote${action.type} - ${action.label} - ${action.id}$sQuote#if( $foreach.hasNext ), #end#end]*/

  const columns: ColumnsType<"/*vtl $table.itemType*/"> = [
    /*vtl #foreach($property in $table.itemProperties)*/
    {
      title: "/*vtl ${sQuote}$property.title${sQuote}*/",
      dataIndex: "/*vtl ${sQuote}$property.name${sQuote}*/",
      key: "/*vtl ${sQuote}$property.name${sQuote}*/",
      /*vtl #if($property.filtered == "true")*/
      /*vtl #if($property.dataType == "string")*/
      /*vtl filters: ${table.itemsVariableName}.map((item) => ({
          text: item.${property.name},
          value: item.${property.name}
      })),
      onFilter: (value, record) => record.${property.name}.includes(value as string),*/
      /*vtl #elseif($property.dataType == "boolean")*/
      /*vtl filters: [
          {
              text: "true",
              value: "true"
          },
          {
              text: "false",
              value: "false"
          }
      ],
      onFilter: (value, record) => String(record.${property.name}) == value,*/
      /*vtl #elseif($property.dataType == "number")*/
      /*vtl filters: ${table.itemsVariableName}.map((item) => ({
          text: item.${property.name},
          value: item.${property.name}
      })),
      onFilter: (value, record) => record.${property.name} == value,*/
      /*vtl #elseif($property.dataType == "object")*/

      /*vtl #end*/
      /*vtl #end*/
      /*vtl #if($property.sorted == "true")*/
      /*vtl #if($property.dataType == "string")*/
      /*vtl sorter: (a, b) => (a.${property.name} > b.${property.name} ? -1 : 1),*/
      /*vtl #elseif($property.dataType == "boolean")*/
      /*vtl sorter: (a, b) => (Number(a.${property.name}) - Number(b.${property.name})),*/
      /*vtl #elseif($property.dataType == "number")*/
      /*vtl sorter: (a, b) => a.${property.name} - b.${property.name},*/
      /*vtl #elseif($property.dataType == "object")*/
      /*vtl #end*/
      /*vtl #end*/
    },
    /*vtl #end*/
  ];

  return <Table /*vtl columns={columns} dataSource={$table.itemsVariableName}*/></Table>
};

const TreeTableTestComponent = () => {

  const [str, setStr] = useState<string>("");
  const [arrStr, setArrStr] = useState<string[]>([]);

  const [data, setData] = useState<User[] | undefined>([
    {
      id: 1,
      firstName: "Petr",
      lastName: "Petrov",
      age: 23,
      email: "p.petrov@gmail.com",
      isAlive: true,
      profession: "Middle Software Developer",
      sex: Sex.MAN,
      salary: 130000
    },
    {
      id: 2,
      firstName: "Ivan",
      lastName: "Ivanov",
      age: 46,
      email: "i.ivanov@gmail.com",
      isAlive: true,
      profession: "Manager",
      sex: Sex.MAN,
      salary: 250000
    },
    {
      id: 3,
      firstName: "Elena",
      lastName: "Nikolaevna",
      age: 40,
      email: "e.nikolaevna@gmail.com",
      isAlive: true,
      profession: "Senior Software Developer",
      sex: Sex.WOMAN,
      salary: 200000
    }
  ]);

  return (
    <div>
      {/*DROP HERE!*/}
    </div>
  );
};
