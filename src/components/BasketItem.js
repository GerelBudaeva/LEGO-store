import React from 'react';
import {IconButton, ListItem, Typography} from '@mui/material';
import {Close} from '@mui/icons-material';

const BasketItem = (props) => {
    return (
        <ListItem>
            <Typography variant="body1" align="inherit">
                {props.name} ${props.price} x {props.quantity}
            </Typography>
            <IconButton onClick={() => props.removeFromCart(props.id)}>
                <Close/>
            </IconButton>
        </ListItem>
    );
};

export default BasketItem;
