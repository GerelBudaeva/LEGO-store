import React from 'react';
import {Button, Card, CardContent, CardMedia, Grid, Typography} from '@mui/material';
import CardActions from '@mui/material/CardActions';
const CardsForm = (props) => {

    return (
        <Grid item xs={12} md={4}>
            <Card sx={{ maxWidth: 355, maxHeight: 440, m: 3}}>
                <CardMedia
                    image={props.item.image}
                    component="img"
                    alt={props.item.name}
                    title={props.item.name}
                    sx={{width: 271, m: 2}}
                />
                <CardContent>
                    <Typography
                        variant="subtitle1"
                        color="text.primary"
                    >
                        {props.item.name}
                    </Typography>
                    <Typography
                        variant="subtitle1"
                        color="text.primary"
                    >
                        {props.item.category}
                    </Typography>
                    <Typography
                    variant="body2"
                    >
                        Price: $ {props.item.price}
                    </Typography>
                </CardContent>

                <CardActions>
                    <Button
                    variant="contained"
                    color="success"
                    onClick={() => props.addToCart(props.item)}
                    >
                        Add to Cart
                    </Button>
                </CardActions>

            </Card>
        </Grid>
    );
};

export default CardsForm;
