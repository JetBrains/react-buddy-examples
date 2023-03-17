import React from "react";
import {ComponentPreview, Previews} from "@react-buddy/ide-toolbox-next";
import {PaletteTree} from "./palette";
import {HomePage} from "@/pages/HomePage";
import Document from "@/pages/_document";
import Home from "@/pages";

const ComponentPreviews = () => {
  return (
    <Previews palette={<PaletteTree/>}>
      <ComponentPreview path="/HomePage">
        <HomePage/>
      </ComponentPreview>
      <ComponentPreview path="/Document">
        <Document/>
      </ComponentPreview>
      <ComponentPreview path="/Home">
        <Home/>
      </ComponentPreview>
    </Previews>
  );
};

export default ComponentPreviews;