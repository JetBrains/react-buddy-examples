import {useState} from "react";
import {Sex, User} from "../types";

/** Current template demonstrates how you can define a react component by the velocity parameter properties.
 * To see the result of the processed template try to drag and drop it from React palette (Templates -> CardList) to {@link CardListTestComponent} div element.
 * For more information follow https://youtrack.haulmont.com/issue/RCB-465/Cards-list-template-support
 **/
export const CardListTemplate = () => {

  /*vtl const testState: ${card.itemsVariableType} = ${card.itemsVariableName}*/
  /*vtl const testItemType: ${card.itemType} = ${card.itemsVariableName}[0]*/
  /*vtl const titleProperty = $quote${card.titleProperty.name}$quote*/
  /*Sort properties:*/
  /*vtl const sortProperties: string[] = [*/
  /*vtl #foreach($property in $card.sortProperties)*/
  /*vtl $quote${property.name}$quote#if( $foreach.hasNext ),$newline#end */
  /*vtl #end*/
  /*vtl $newline]*/

  /*Filter properties:*/
  /*vtl const filteredProperties: string[] = [*/
  /*vtl #foreach($property in $card.filterProperties)*/
  /*vtl $sQuote${property.name}$sQuote#if( $foreach.hasNext ),$newline#end */
  /*vtl #end*/
  /*vtl $newline]*/

  /*All properties:*/
  /*vtl const allProperties: string[] = [#foreach($property in $card.fields)$sQuote${property.name}$sQuote#if( $foreach.hasNext ), #end#end]*/

  /*Pagination:*/
  /*vtl const isPageable = $card.pagination*/
  /*vtl const rowsPerPage =#if( $card.rowsPerPage ) $card.rowsPerPage#else 0 #end */

  /*Actions:*/
  /*vtl const actions: string[] = [#foreach($action in $card.actions)$sQuote${action.type} - ${action.label} - ${action.id}$sQuote#if( $foreach.hasNext ), #end#end]*/

  return (
    <>
      All displayed properties:
      {/*vtl #foreach($property in $card.itemProperties)*/}
      {/*vtl Name: $property.name*/}
      {/*vtl Label: $property.label*/}
      {/*vtl #if($property.dataType == "string")*/}
      <div>{/*vtl {testState.${property.name}}*/}</div>
      {/*vtl #elseif($property.dataType == "boolean")*/}
      <input type={"checkbox"} /*vtl checked={testState.${property.name}}*//>
      {/*vtl #elseif($property.dataType == "number")*/}
      <input type={"number"}>
        {/*vtl {testState.${property.name}}*/}
      </input>
      {/*vtl #end*/}
      {/*vtl Excluded: $property.excluded*/}
      {/*vtl IsTitle: $property.asTitle*/}
      {/*vtl Sorted: $property.sorted*/}
      {/*vtl Filtered: $property.filtered*/}
      {/*vtl #end*/}
    </>
  );
};

const CardListTestComponent = () => {

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