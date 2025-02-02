import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Typography, Paper } from '@mui/material';
import { getItemById } from '../api/mockApi.ts';

interface Item {
  id: number;
  name: string;
  description: string;
}

const Detail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [item, setItem] = useState<Item | null>(null);

  useEffect(() => {
    if (id) {
      getItemById(parseInt(id, 10)).then((fetchedItem) => setItem(fetchedItem || null));
    }
  }, [id]);

  if (!item) {
    return <Typography>Loading...</Typography>;
  }

  return (
    <Paper elevation={3} sx={{ p: 2 }}>
      <Typography variant="h4" gutterBottom>{item.name}</Typography>
      <Typography variant="body1">{item.description}</Typography>
    </Paper>
  );
};

export default Detail;