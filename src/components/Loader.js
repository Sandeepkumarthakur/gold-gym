import React from 'react';
import { Stack } from '@mui/material';
import { Infinity } from 'react-loader-spinner';

const Loader = () => (
  <Stack
    direction="row"
    justifyContent="center"
    alignItems="center"
    width="100%"
  >
    <Infinity color="grey" />
  </Stack>
);

export default Loader;
