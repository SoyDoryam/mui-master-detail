import React from 'react'
import { Drawer, Link, List, ListItem, ListItemText } from '@mui/material';

const drawerWidht = 240;

const Sidebar = () => {
  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidht,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: drawerWidht  ,
          boxSizing: 'border-box',
        },
      }}
    >
      <List>
        {['Home','List','About','Contact'].map((text) => (
          <ListItem button key={text} component={Link} to={`/${text.toLowerCase()}`}>
            <ListItemText primary={text} />
          </ListItem>
         ))}
      </List>
    </Drawer>
  )
}

export default Sidebar