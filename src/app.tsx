import React from 'react';
import { Box, Text, useStdout } from 'ink';
import { useTomcsLogic } from './hooks/use-logic.js';
import { Shell, Spinner } from './components/ui/index.js';

export const GeneratedUI = () => {
  const { stdout } = useStdout();
  const width = stdout.columns || 80;
  const height = stdout.rows || 24;
  const liveData = useTomcsLogic({});

  return (
    // <Shell title="Generated App">
    <Box width="100%" height="100%">
      <Spinner position="absolute" marginLeft={Math.floor((8 / 100) * width)} marginTop={Math.floor((6 / 30) * height)}  />
    </Box>
    // </Shell>
  );
};