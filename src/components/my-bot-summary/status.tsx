import Avatar from '@mui/material/Avatar';
import { styled } from '@mui/material/styles';
import PendingOutlinedIcon from '@mui/icons-material/PendingOutlined';
import RunCircleOutlinedIcon from '@mui/icons-material/RunCircleOutlined';
import CurrencyExchangeOutlinedIcon from '@mui/icons-material/CurrencyExchangeOutlined';
import PauseCircleOutlinedIcon from '@mui/icons-material/PauseCircleOutlined';
import ReportGmailerrorredOutlinedIcon from '@mui/icons-material/ReportGmailerrorredOutlined';
import IndeterminateCheckBoxOutlinedIcon from '@mui/icons-material/IndeterminateCheckBoxOutlined';
import Tooltip from '@mui/material/Tooltip';
import { BOT_STATUS } from '@/consts';

const STATUS_ICON_MAP = {
  [BOT_STATUS.PREPARING.TITLE]: {
    title: BOT_STATUS.PREPARING.TITLE,
    color: BOT_STATUS.PREPARING.COLOR,
    icon: <PendingOutlinedIcon htmlColor={BOT_STATUS.PREPARING.COLOR} />,
  },
  [BOT_STATUS.RUNNING.TITLE]: {
    title: BOT_STATUS.RUNNING.TITLE,
    color: BOT_STATUS.RUNNING.COLOR,
    icon: <RunCircleOutlinedIcon htmlColor={BOT_STATUS.RUNNING.COLOR} />,
  },
  [BOT_STATUS.TRADING.TITLE]: {
    title: BOT_STATUS.TRADING.TITLE,
    color: BOT_STATUS.TRADING.COLOR,
    icon: <CurrencyExchangeOutlinedIcon htmlColor={BOT_STATUS.TRADING.COLOR} />,
  },
  [BOT_STATUS.PAUSED.TITLE]: {
    title: BOT_STATUS.PAUSED.TITLE,
    color: BOT_STATUS.PAUSED.COLOR,
    icon: <PauseCircleOutlinedIcon htmlColor={BOT_STATUS.PAUSED.COLOR} />,
  },
  [BOT_STATUS.ERROR.TITLE]: {
    title: BOT_STATUS.ERROR.TITLE,
    color: BOT_STATUS.ERROR.COLOR,
    icon: <ReportGmailerrorredOutlinedIcon htmlColor={BOT_STATUS.ERROR.COLOR} />,
  },
  [BOT_STATUS.TERMINATING.TITLE]: {
    title: BOT_STATUS.TERMINATING.TITLE,
    color: BOT_STATUS.TERMINATING.COLOR,
    icon: <IndeterminateCheckBoxOutlinedIcon htmlColor={BOT_STATUS.TERMINATING.COLOR} />,
  },
};

const StyledDiv = styled('div')(() => ({
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
}));

const STATUS_AVATAR_SIZE = 30;

function Status({ status }) {
  const { title, color, icon } = STATUS_ICON_MAP[status];

  return (
    <Tooltip title={title}>
      <StyledDiv>
        <Avatar
          sx={{
            bgcolor: 'transparent',
            border: `1px solid ${color}`,
            width: STATUS_AVATAR_SIZE,
            height: STATUS_AVATAR_SIZE,
          }}
        >
          {icon}
        </Avatar>
      </StyledDiv>
    </Tooltip>
  );
}

export default Status;
