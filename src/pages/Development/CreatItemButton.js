import * as React from 'react';
import { useNavigate } from 'react-router-dom';

import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Iconify from '../../components/Iconify';

export default function CreateItemButton() {
    const navigate = useNavigate()
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleCreateSprint = (e) => {
    e.preventDefault()
    navigate('/createSprint')
  }
  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        variant="contained"
        startIcon={<Iconify icon="eva:plus-fill" />}
      >New Item</Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleCreateSprint}>Sprint</MenuItem>
        <MenuItem onClick={handleClose}>Backlog</MenuItem>
        <MenuItem onClick={handleClose}>Documentation</MenuItem>
      </Menu>
    </div>
  );
}
