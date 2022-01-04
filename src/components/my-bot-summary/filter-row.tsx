import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import { Button, Menu, MenuItem, Typography, TableRow, TextField } from '@mui/material';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import { BOT_STATUS } from '@/consts';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
    fontWeight: 700,
    fontSize: 15,
  },
}));

function FilterRow() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = !!anchorEl;
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <TableRow>
      <StyledTableCell align="left" colSpan={4}>
        <Button
          id="basic-button"
          aria-controls={open ? 'basic-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}
        >
          FILTER
        </Button>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            'aria-labelledby': 'basic-button',
          }}
        >
          {Object.keys(BOT_STATUS).map(status => {
            return (
              <MenuItem key={status} onClick={handleClose}>
                <Typography color={BOT_STATUS[status].color}>{status}</Typography>
              </MenuItem>
            );
          })}
        </Menu>
      </StyledTableCell>
      <StyledTableCell align="right" colSpan={4}>
        <TextField label="bot name" id="outlined-size-small" size="small" sx={{ width: '50%' }} />
      </StyledTableCell>
    </TableRow>
  );
}

export default FilterRow;
