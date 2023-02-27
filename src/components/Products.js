import React from 'react';
import {Box, Grid} from '@mui/material';
import CardsForm from './CardsForm';

const Products = (props) => {
    return (
        <Box sx={{mt: '1.5rem'}}>
                <Grid container spacing={{xs: 2, md: 3}} columns={{xs: 4, sm: 8, md: 12}}>
                    {props.items.map(el => <CardsForm
                            key={el.id}
                            item={el}
                            addToCart={props.addToCart}
                        />
                    )}
                </Grid>
        </Box>
    );
};

export default Products;
