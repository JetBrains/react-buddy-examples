import React from 'react';
import {
  Category,
  Component,
  Variant,
  Palette,
} from '@react-buddy/ide-toolbox';
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from "@mui/material/TextField";

export default () => (
  <Palette>
    <Category name="Layout">
      <Component name="Box">
        <Variant>
          <Box></Box>
        </Variant>
      </Component>
      <Component name="Container">
        <Variant>
          <Container maxWidth="sm"></Container>
        </Variant>
        <Variant name="fixed">
          <Container fixed></Container>
        </Variant>
      </Component>
      <Component name="Grid">

      </Component>
      <Component name="Stack">
        <Variant>
          <Stack spacing={2}>
            <Box>Item1</Box>
            <Box>Item2</Box>
          </Stack>
        </Variant>
        <Variant name="horizontal">
          <Stack
              direction="row"
              divider={<Divider orientation="vertical" flexItem />}
              spacing={2}
          >
            <Box>Item 1</Box>
            <Box>Item 2</Box>
            <Box>Item 3</Box>
          </Stack>
        </Variant>
      </Component>
    </Category>
    <Category name="Inputs">
      <Component name="Autocomplete">
        <Variant>
          <Autocomplete
              disablePortal
              options={[]}
              sx={{ width: 300 }}
              renderInput={(params) => <TextField {...params} label="Movie" />}
          />
        </Variant>
      </Component>
    </Category>
  </Palette>
);
