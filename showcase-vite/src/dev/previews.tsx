import React from 'react';
import {ComponentPreview, Previews} from '@react-buddy/ide-toolbox';
import {PaletteTree} from './palette';
import App from "../App";
import {HooksDemoComponent} from "../demo/hooks";
import {LineChartTest, LineChartTemplate} from "../templates/charts/LineChartTemplate";
import {BarChartTemplate, BarChartTest} from "../templates/charts/BarChartTemplate";
import {ScatterChartTemplate, ScatterChartTest} from "../templates/charts/ScatterChartTemplate";
import {PieChartTemplate, PieChartTest} from "../templates/charts/PieChartTemplate";

const ComponentPreviews = () => {
  return (
    <Previews palette={<PaletteTree/>}>
        <ComponentPreview path="/App">
            <App/>
        </ComponentPreview>
      <ComponentPreview path="/HooksDemoComponent">
        <HooksDemoComponent/>
      </ComponentPreview>
        <ComponentPreview path="/ChartTemplate">
            <LineChartTemplate/>
        </ComponentPreview>
      <ComponentPreview path="/BarChartTemplate">
        <BarChartTemplate/>
      </ComponentPreview>
      <ComponentPreview path="/ScatterChartTemplate">
        <ScatterChartTemplate/>
      </ComponentPreview>
        <ComponentPreview path="/PieChartTemplate">
            <PieChartTemplate/>
        </ComponentPreview>
        <ComponentPreview path="/ChartTest">
            <LineChartTest/>
        </ComponentPreview>
      <ComponentPreview path="/ScatterChartTest">
        <ScatterChartTest/>
      </ComponentPreview>
      <ComponentPreview path="/PieChartTest">
        <PieChartTest/>
      </ComponentPreview>
      <ComponentPreview path="/BarChartTest">
        <BarChartTest/>
      </ComponentPreview>
    </Previews>
  );
};

export default ComponentPreviews;