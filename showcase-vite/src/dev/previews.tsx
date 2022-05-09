import React from 'react';
import {ComponentPreview, Previews} from '@react-buddy/ide-toolbox';
import {PaletteTree} from './palette';
import App from "../App";
import {HooksDemoComponent} from "../demo/hooks";

const ComponentPreviews = () => {
  return (
    <Previews palette={<PaletteTree/>}>
        <ComponentPreview path="/App">
            <App/>
        </ComponentPreview>
      <ComponentPreview path="/HooksDemoComponent">
        <HooksDemoComponent/>
      </ComponentPreview>
    </Previews>
  );
};

export default ComponentPreviews;