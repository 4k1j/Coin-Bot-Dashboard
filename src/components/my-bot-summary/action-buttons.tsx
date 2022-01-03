import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import PlayArrowTwoToneIcon from '@mui/icons-material/PlayArrowTwoTone';
import RestartAltTwoToneIcon from '@mui/icons-material/RestartAltTwoTone';
import DeleteForeverTwoToneIcon from '@mui/icons-material/DeleteForeverTwoTone';
import { styled } from '@mui/material/styles';

const StyledButton = styled(Button)(() => ({
  padding: 3,
}));

function ActionButtons() {
  return (
    <ButtonGroup size="small" color="primary">
      <StyledButton key="play">
        <PlayArrowTwoToneIcon />
      </StyledButton>
      <StyledButton key="restart">
        <RestartAltTwoToneIcon />
      </StyledButton>
      <StyledButton key="delete">
        <DeleteForeverTwoToneIcon />
      </StyledButton>
    </ButtonGroup>
  );
}

export default ActionButtons;
