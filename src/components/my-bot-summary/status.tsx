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
  [BOT_STATUS.preparing.title]: {
    title: BOT_STATUS.preparing.title,
    color: BOT_STATUS.preparing.color,
    icon: <PendingOutlinedIcon htmlColor={BOT_STATUS.preparing.color} />,
  },
  [BOT_STATUS.running.title]: {
    title: BOT_STATUS.running.title,
    color: BOT_STATUS.running.color,
    icon: <RunCircleOutlinedIcon htmlColor={BOT_STATUS.running.color} />,
  },
  [BOT_STATUS.trading.title]: {
    title: BOT_STATUS.trading.title,
    color: BOT_STATUS.trading.color,
    icon: <CurrencyExchangeOutlinedIcon htmlColor={BOT_STATUS.trading.color} />,
  },
  [BOT_STATUS.paused.title]: {
    title: BOT_STATUS.paused.title,
    color: BOT_STATUS.paused.color,
    icon: <PauseCircleOutlinedIcon htmlColor={BOT_STATUS.paused.color} />,
  },
  [BOT_STATUS.error.title]: {
    title: BOT_STATUS.error.title,
    color: BOT_STATUS.error.color,
    icon: <ReportGmailerrorredOutlinedIcon htmlColor={BOT_STATUS.error.color} />,
  },
  [BOT_STATUS.terminating.title]: {
    title: BOT_STATUS.terminating.title,
    color: BOT_STATUS.terminating.color,
    icon: <IndeterminateCheckBoxOutlinedIcon htmlColor={BOT_STATUS.terminating.color} />,
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
