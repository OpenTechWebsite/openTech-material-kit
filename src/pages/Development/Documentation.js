import * as React from 'react';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import FavoriteIcon from '@mui/icons-material/Favorite';
import NavigationIcon from '@mui/icons-material/Navigation';

export function FloatingActionButtons({ currentPage = 'Documentation' }) {
  const [currentId, setCurrentId] = React.useState(null);

  const handleMouseOver = (e) => {
    setCurrentId(`${e.target.id}`);
  };

  return (
    <Box sx={{ '& > :not(style)': { m: 1, mb: 3 } }}>
      <Fab variant="extended" id="addButton" color="primary" onMouseOver={handleMouseOver}>
        <AddIcon sx={{ m: 'auto' }} />
        New {currentPage === 'Sprints' ? 'Sprint' : currentPage}
      </Fab>

      <Fab variant="extended" id="feedbackButton" color="light" onMouseOver={handleMouseOver}>
        <NavigationIcon sx={{ m: 'auto', mx: '5px' }} />
        Feedback? Let's Chat!
      </Fab>

      <Fab variant="extended" id="likeButton" color="error" onMouseOver={handleMouseOver}>
        <FavoriteIcon sx={{ m: 'auto', mx: '5px' }} />
      </Fab>
    </Box>
  );
}

export default function CollapsibleTable() {
  const [visible, setVisible] = React.useState(false);

  return <FloatingActionButtons />;
}
