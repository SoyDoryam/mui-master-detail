import React, { useEffect, useState } from 'react';
import { List, ListItem, ListItemText, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { getItems } from '../api/mockApi.ts';
import { useAppContext } from '../context/AppContext.tsx';

interface Item {
  id: number;
  name: string;
}

const ItemList: React.FC = () => {
  const [items, setItems] = useState<Item[]>([]);
  const { setSelectedItem } = useAppContext();

  useEffect(() => {
    getItems().then(setItems);
  }, []);

  return (
    <>
      <Typography variant="h4" gutterBottom>Item List</Typography>
      <List>
        {items.map((item) => (
          <ListItem
            key={item.id}
            component={Link}
            to={`/detail/${item.id}`}
            onClick={() => setSelectedItem(item.id)}
          >
            <ListItemText primary={item.name} />
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default ItemList;