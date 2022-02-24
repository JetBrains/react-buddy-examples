import React from 'react';
import { Previews, ComponentPreview } from '@react-buddy/ide-toolbox';
import { PaletteTree } from './palette';
import App from '../App';

const ComponentPreviews = () => {
  return (
    <Previews palette={<PaletteTree />}>
      <ComponentPreview path="/App">
        <App />
      </ComponentPreview>
    </Previews>
  );
};

export default ComponentPreviews;
