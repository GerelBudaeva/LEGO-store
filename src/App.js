import Header from './components/Header';
import {nanoid} from 'nanoid';
import {useState} from 'react';
import ShoppingCart from './components/ShoppingCart';
import Products from './components/Products';
import {Container} from '@mui/material';

const items = [
    {
        id: nanoid(),
        category: 'City',
        name: 'Construction Digger',
        image: 'https://www.lego.com/cdn/cs/set/assets/blt07e93276b8dec2a3/60385_alt7.png',
        quantity: 1,
        price: 19.99,
    },
    {
        id: nanoid(),
        category: 'City',
        name: 'Emergency Vehicles HQ',
        image: 'https://www.lego.com/cdn/cs/set/assets/blte4c54da0937ffa62/60371_alt9.png',
        quantity: 1,
        price: 69.99,
    },
    {
        id: nanoid(),
        category: 'City',
        name: 'Holiday Express Passenger Train',
        image: 'https://www.lego.com/cdn/cs/set/assets/blt18a1e9a071f25512/60337_alt12.png',
        quantity: 1,
        price: 189.99,
    },
    {
        id: nanoid(),
        category: 'Classic',
        name: 'Bricks and Functions',
        image: 'https://www.lego.com/cdn/cs/set/assets/bltb5afb2a2d76700c2/11019_alt10.png',
        quantity: 1,
        price: 29.99,
    },
    {
        id: nanoid(),
        category: 'Classic',
        name: '90 Years of Play',
        image: 'https://www.lego.com/cdn/cs/set/assets/bltd7498f164b72b805/11021_alt1.png',
        quantity: 1,
        price: 49.99,
    },
    {
        id: nanoid(),
        category: 'Classic',
        name: 'Creative Fantasy Universe',
        image: 'https://www.lego.com/cdn/cs/set/assets/bltc59ff4146744a46e/11033_alt6.png',
        quantity: 1,
        price: 89.99,
    },
    {
        id: nanoid(),
        category: 'Classic',
        name: 'Lots of Bricks',
        image: 'https://www.lego.com/cdn/cs/set/assets/blt402638a7ef7ba06e/11030_alt7.png',
        quantity: 1,
        price: 59.99,
    },
    {
        id: nanoid(),
        category: 'DUPLO',
        name: 'Wild Animals of the World',
        image: 'https://www.lego.com/cdn/cs/set/assets/blt872dd178b82ee979/10975.png',
        quantity: 1,
        price: 129.99,
    },
    {
        id: nanoid(),
        category: 'DUPLO',
        name: 'Steam Train',
        image: 'https://www.lego.com/cdn/cs/set/assets/blt4763f837ab2ea094/10874_alt3.jpg',
        quantity: 1,
        price: 64.99,
    },
    {
        id: nanoid(),
        category: 'DUPLO',
        name: 'Animal Train',
        image: 'https://www.lego.com/cdn/cs/set/assets/blt7e3613bb0d6b9c34/10955_alt2.png',
        quantity: 1,
        price: 19.99,
    },
    {
        id: nanoid(),
        category: 'DUPLO',
        name: 'Fruit and Vegetable Tractor',
        image: 'https://www.lego.com/cdn/cs/set/assets/blt24aab8cdf7990845/10982_alt1.png',
        quantity: 1,
        price: 17.99,
    },
    {
        id: nanoid(),
        category: 'DUPLO',
        name: 'Family Camping Van Adventure',
        image: 'https://www.lego.com/cdn/cs/set/assets/bltc2f963435dfc55e7/10946.png',
        quantity: 1,
        price: 23.99,
    },
]

function App() {

    const [isBasketOpen, setIsBasketOpen] = useState(false);
    const [search, setSearch] = useState('');
    const [basket, setBasket] = useState([]);

    const addToCart = (choosenProduct) => {
        setBasket([...basket, choosenProduct])
    }

    const removeFromCart = (id) => {
        const remove = basket.filter(el => el.id !== id)
        setBasket(remove)
    }

    return (
        <>
            <Header
                handleBusket={() => setIsBasketOpen(true)}
                search={search}
                setSearch={setSearch}
                basketCounter={basket.length}
            />

            <Container maxWidth="lg">
                <Products
                    items={items.filter(el => el.category.toLowerCase().includes(search.toLowerCase()))}
                    addToCart={addToCart}
                />

                <ShoppingCart
                    isBasketOpen={isBasketOpen}
                    closeBusket={() => setIsBasketOpen(false)}
                    addToCart={addToCart}
                    basket={basket}
                    removeFromCart={removeFromCart}
                />
            </Container>
        </>
    );
}

export default App;
