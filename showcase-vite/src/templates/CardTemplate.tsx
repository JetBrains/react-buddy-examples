import React from "react";
import {Sex, User} from "../types";

/** Current template demonstrates how you can define a react component by the velocity parameter properties.
 * To see the result of the processed template try to drag and drop it from React palette (Templates -> CardObject) to {@link CardTestComponent} div element.
 * For more information follow https://youtrack.haulmont.com/issue/RCB-468/Object-card-template-wizard
 **/
export const CardTemplate = () => {
  const itemVariableName = "/*vtl $card.itemsVariableName*/"
  const itemType = "/*vtl $card.itemType*/"
  const titleProperty = "/*vtl ${sQuote}${card.titleProperty.name}${sQuote}*/"
  const subtitleProperty = "/*vtl ${sQuote}${card.subTitleProperty.name}${sQuote}*/"
  const isOutlined = "/*vtl $card.outlined*/"

  /*Actions:*/
  /*vtl const actions: string[] = [*/
  /*vtl #foreach($action in $card.actions)*/
  /*vtl $sQuote${action.type} - ${action.id} - ${action.label}$sQuote#if( $foreach.hasNext ),$newline#end*/
  /*vtl #end*/
  /*vtl $newline]*/

  /*All properties:*/
  /*vtl const allProperties: string[] = [*/
  /*vtl #foreach($property in $card.allProperties)*/
  /*vtl {${newline}label: $sQuote${property.label}$sQuote*/
  /*vtl name: $sQuote${property.name}$sQuote*/
  /*vtl dataType: $sQuote${property.dataType}$sQuote*/
  /*vtl asTitle: ${property.asTitle}*/
  /*vtl asSubtitle: ${property.asSubtitle}*/
  /*vtl excluded: $sQuote${property.excluded}$sQuote${newline}}#if( $foreach.hasNext ),$newline#end*/
  /*vtl #end*/
  /*vtl $newline]*/

  return (
    <div>
    </div>
  );
};

export const CardTestComponent = () => {

  const cardData: User = {
    id: 2,
    firstName: "Petr",
    lastName: "Petrov",
    age: 46,
    email: "p.petrov@gmail.com",
    isAlive: true,
    sex: Sex.MAN,
    profession: "Software Developer",
    salary: 200000,
    testFunction1: () => {
      return {};
    },
    testFunction2: Function
  };

  return (
    <div></div>
  );
};

