import { RotatingLines } from 'react-loader-spinner';

import { Box } from './Louder.styled';

export default function Loader() {
  return (
    <Box>
      <RotatingLines
        type="Watch"
        strokeColor="green"
        height={100}
        width={100}
      />
    </Box>
  );
}