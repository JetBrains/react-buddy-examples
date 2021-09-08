import React from 'react';
import { Previews, ComponentPreview } from '@react-buddy/ide-toolbox';
import App from '../App';
import {ConditionalComponent1, JsxTreeDemoScreen} from "../Tree";

export const ComponentPreviews = () => {
  return (
    <Previews>
      <ComponentPreview path="/App">
        <App />
      </ComponentPreview>
        <ComponentPreview path="/JsxTreeDemoScreen">
            <JsxTreeDemoScreen/>
        </ComponentPreview>
        <ComponentPreview path="/ConditionalComponent1">
            <ConditionalComponent1/>
        </ComponentPreview>
    </Previews>
  );
};
