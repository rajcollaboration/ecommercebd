import React, { useState } from 'react';
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  IconButton,
  Grid,
} from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { animated, useSpring } from '@react-spring/web'

const Product = ({ product }: { product: any }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const { transform, opacity } = useSpring({
    opacity: isFavorite ? 1 : 0,
    transform: `scale(${isFavorite ? 1.2 : 1})`,
  });

  const handleFavoriteClick = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <Card>
      <CardMedia
        component="img"
        height="250"
        alt={product.title}
        src={product.image}
      />
      <CardContent>
        <Typography variant="h6" component="div">
          {product.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {product.description}
        </Typography>
        <Grid container spacing={1} alignItems="center">
          <Grid item xs={6}>
            <Typography variant="body2" color="text.secondary">
              Colors: red
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="body2" color="text.secondary">
              Sizes: 40
            </Typography>
          </Grid>
        </Grid>
        <Typography variant="body2" color="text.secondary">
          Price: {product.price}
        </Typography>
      </CardContent>
      <animated.div
        style={{
          transform,
          opacity,
          position: 'absolute',
          top: '10px',
          right: '10px',
          zIndex: 1,
        }}
      >
        <IconButton
          aria-label="toggle favorite"
          onClick={handleFavoriteClick}
          color={isFavorite ? 'secondary' : 'default'}
        >
          {isFavorite ? <FavoriteIcon /> : <FavoriteBorderIcon />}
        </IconButton>
      </animated.div>
    </Card>
  );
};

export default Product;