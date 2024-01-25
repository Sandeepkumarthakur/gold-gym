import React from "react";
import { Stack } from "@mui/material";

const Loader = () => (
  <Stack
    direction="row"
    justifyContent="center"
    alignItems="center"
    width="100%"
  >
    {/* <InfinitySpin color="grey" /> */}
    Loading ...
  </Stack>
);

export default Loader;
