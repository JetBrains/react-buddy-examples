import React from 'react';
import {
  Category,
  Component,
  Variant,
  Palette,
} from '@react-buddy/ide-toolbox';
import {FormTemplate} from "../templates/FormTemplate";
import {CardListTemplate} from "../templates/CardListTemplate";
import {TableTemplate} from "../templates/TableTemplate";
import {CardObjectTemplate} from "../templates/CardObjectTemplate";
import {CodeAndJsxPrototype, JsxPrototype, CodePrototype} from "../templates/JsxPrototype";
import {TreeTableTemplate} from "../templates/TreeTableTemplate";

export const PaletteTree = () => (
  <Palette>
    <Category name="Templates">
      <Component name="CardList">
        <Variant proto={CardListTemplate}/>
      </Component>
      <Component name="CardObject">
        <Variant proto={CardObjectTemplate}/>
      </Component>
      <Component name="Form">
        <Variant proto={FormTemplate}/>
      </Component>
      <Component name="Table">
        <Variant proto={TableTemplate}/>
      </Component>
      <Component name="TreeTable">
        <Variant proto={TreeTableTemplate}/>
      </Component>
    </Category>
    <Category name={"Prototype Demo"}>
      <Component name="Only jsx">
        <Variant proto={JsxPrototype}/>
      </Component>
      <Component name="Only code content">
        <Variant proto={CodePrototype}/>
      </Component>
      <Component name="Jsx and code content">
        <Variant proto={CodeAndJsxPrototype}/>
      </Component>
    </Category>
    <Category name="HTML">
      <Component name="a">
        <Variant requiredParams={['href']}>
          <a>Link</a>
        </Variant>
      </Component>
      <Component name="button">
        <Variant>
          <button>Button</button>
        </Variant>
      </Component>
    </Category>
  </Palette>
);
