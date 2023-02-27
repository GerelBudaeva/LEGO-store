import React from 'react';
import {Divider, Drawer, List, ListItem, ListItemIcon, ListItemText, Typography} from '@mui/material';
import {ShoppingBasket} from '@mui/icons-material';
import BasketItem from './BasketItem';

const ShoppingCart = (props) => {

    return (
        <Drawer
            anchor="right"
            open={props.isBasketOpen}
            onClose={props.closeBusket}
        >
            <List sx={{width: '500px'}}>
                <ListItem>
                    <ListItemIcon>
                        <ShoppingBasket/>
                        <ListItemText primary="Shopping Cart"/>
                    </ListItemIcon>
                </ListItem>
                <Divider/>

                {!props.basket.length ? (
                    <ListItem>Basket is empty!</ListItem>
                ) : (
                    props.basket.map((el) =>
                        <BasketItem
                            key={el.name}
                            {...el}
                            removeFromCart={props.removeFromCart}
                        />
                    ))
                }
                <Divider/>
                <ListItem>
                    <Typography sx={{fontWeight: 700}}>
                        Total price: {' '}
                        {props.basket.reduce((acc, el) => {
                            return acc + el.price * el.quantity;
                        }, 0)} {' '}
                    </Typography>
                </ListItem>
            </List>
        </Drawer>
    );
};

export default ShoppingCart;
