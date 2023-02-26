const CATEGORY_TYPES = {
    all : 'all',
    freshVegetables : 'freshVegetables',
    freshFruits : 'freshFruits',
    exotics : 'exotics',
    seasonal : 'seasonal',
    organicHydroponic : 'organicHydroponic',
    freshlyCutSprouts : 'freshlyCutSprouts',
    card: 'card'
}

const DISPLAY_PRODUCTS_CONTENT = [
    {
        offer: '11% OFF',
        image: 'images/potato-img.png',
        source: 'Sourced at 5 AM',
        title: 'New Potato(Aloo)',
        quantity: '1 Kg',
        newCost: 'Rs. 15',
        oldCost: 'Rs. 17',
        addButton: 'ADD',
        categories: CATEGORY_TYPES.card + ' ' + CATEGORY_TYPES.all + ' ' + CATEGORY_TYPES.freshVegetables
    },

    {
        offer: '21% OFF',
        image: 'images/onion-img.png',
        source: 'Sourced at 5 AM',
        title: 'Onion(Pyaz)',
        quantity: '1 Kg',
        newCost: 'Rs. 32',
        oldCost: 'Rs. 41',
        addButton: 'ADD',
        categories: CATEGORY_TYPES.card + ' ' + CATEGORY_TYPES.all + ' ' + CATEGORY_TYPES.freshVegetables
    },

    {
        offer: '10% OFF',
        image: 'images/carrot-img.jpeg',
        source: 'Sourced at 5 AM',
        title: 'Local Carrot',
        quantity: '500 g',
        newCost: 'Rs. 17',
        oldCost: 'Rs. 19',
        addButton: 'ADD',
        categories: CATEGORY_TYPES.card + ' ' + CATEGORY_TYPES.all + ' ' + CATEGORY_TYPES.freshVegetables
    },

    {
        offer: '16% OFF',
        image: 'images/green-chilli-img.png',
        source: 'Sourced at 5 AM',
        title: 'Green Chilli(Hari Mirch)',
        quantity: '100 g',
        newCost: 'Rs. 10',
        oldCost: 'Rs. 12',
        addButton: 'ADD',
        categories: CATEGORY_TYPES.card + ' ' + CATEGORY_TYPES.all + ' ' + CATEGORY_TYPES.freshVegetables
    },

    {
        offer: '21% OFF',
        image: 'images/hybrid-tomato.png',
        source: 'Sourced at 5 AM',
        title: 'Hybrid Tomato(Tamatar)',
        quantity: '1 Kg',
        newCost: 'Rs. 15',
        oldCost: 'Rs. 17',
        addButton: 'ADD',
        categories: CATEGORY_TYPES.card + ' ' + CATEGORY_TYPES.all + ' ' + CATEGORY_TYPES.freshVegetables
    },

    {
        offer: '17% OFF',
        image: 'images/cauliflower.jpeg',
        source: 'Sourced at 5 AM',
        title: 'New Potato(Aloo)',
        quantity: '500 g',
        newCost: 'Rs. 15',
        oldCost: 'Rs. 19',
        addButton: 'ADD',
        categories: CATEGORY_TYPES.card + ' ' + CATEGORY_TYPES.all + ' ' + CATEGORY_TYPES.freshVegetables
    },


    {
        offer: '11% OFF',
        image: 'images/potato-img.png',
        source: 'Sourced at 5 AM',
        title: 'Mango',
        quantity: '1 Kg',
        newCost: 'Rs. 15',
        oldCost: 'Rs. 17',
        addButton: 'ADD',
        categories: CATEGORY_TYPES.card + ' ' + CATEGORY_TYPES.all + ' ' + CATEGORY_TYPES.freshFruits
    },

    {
        offer: '21% OFF',
        image: 'images/onion-img.png',
        source: 'Sourced at 5 AM',
        title: 'Apple',
        quantity: '1 Kg',
        newCost: 'Rs. 32',
        oldCost: 'Rs. 41',
        addButton: 'ADD',
        categories: CATEGORY_TYPES.card + ' ' + CATEGORY_TYPES.all + ' ' + CATEGORY_TYPES.freshFruits
    },

    {
        offer: '10% OFF',
        image: 'images/carrot-img.jpeg',
        source: 'Sourced at 5 AM',
        title: 'Banana',
        quantity: '500 g',
        newCost: 'Rs. 17',
        oldCost: 'Rs. 19',
        addButton: 'ADD',
        categories: CATEGORY_TYPES.card + ' ' + CATEGORY_TYPES.all + ' ' + CATEGORY_TYPES.freshFruits
    },

    {
        offer: '16% OFF',
        image: 'images/green-chilli-img.png',
        source: 'Sourced at 5 AM',
        title: 'Grapes',
        quantity: '100 g',
        newCost: 'Rs. 10',
        oldCost: 'Rs. 12',
        addButton: 'ADD',
        categories: CATEGORY_TYPES.card + ' ' + CATEGORY_TYPES.all + ' ' + CATEGORY_TYPES.freshFruits
    },

    {
        offer: '21% OFF',
        image: 'images/hybrid-tomato.png',
        source: 'Sourced at 5 AM',
        title: 'Papaya',
        quantity: '1 Kg',
        newCost: 'Rs. 15',
        oldCost: 'Rs. 17',
        addButton: 'ADD',
        categories: CATEGORY_TYPES.card + ' ' + CATEGORY_TYPES.all + ' ' + CATEGORY_TYPES.freshFruits
    },


    {
        offer: '11% OFF',
        image: 'images/potato-img.png',
        source: 'Sourced at 5 AM',
        title: 'Broccoli',
        quantity: '1 Kg',
        newCost: 'Rs. 15',
        oldCost: 'Rs. 17',
        addButton: 'ADD',
        categories: CATEGORY_TYPES.card + ' ' + CATEGORY_TYPES.all + ' ' + CATEGORY_TYPES.exotics
    },

    {
        offer: '21% OFF',
        image: 'images/onion-img.png',
        source: 'Sourced at 5 AM',
        title: 'Shiitake Mushroom',
        quantity: '1 Kg',
        newCost: 'Rs. 32',
        oldCost: 'Rs. 41',
        addButton: 'ADD',
        categories: CATEGORY_TYPES.card + ' ' + CATEGORY_TYPES.all + ' ' + CATEGORY_TYPES.exotics
    },

    {
        offer: '10% OFF',
        image: 'images/carrot-img.jpeg',
        source: 'Sourced at 5 AM',
        title: 'Red Capsicum',
        quantity: '500 g',
        newCost: 'Rs. 17',
        oldCost: 'Rs. 19',
        addButton: 'ADD',
        categories: CATEGORY_TYPES.card + ' ' + CATEGORY_TYPES.all + ' ' + CATEGORY_TYPES.exotics
    },

    {
        offer: '16% OFF',
        image: 'images/green-chilli-img.png',
        source: 'Sourced at 5 AM',
        title: 'King Trumpet Mushroom',
        quantity: '100 g',
        newCost: 'Rs. 10',
        oldCost: 'Rs. 12',
        addButton: 'ADD',
        categories: CATEGORY_TYPES.card + ' ' + CATEGORY_TYPES.all + ' ' + CATEGORY_TYPES.exotics
    },


    {
        offer: '11% OFF',
        image: 'images/potato-img.png',
        source: 'Sourced at 5 AM',
        title: 'Amla',
        quantity: '1 Kg',
        newCost: 'Rs. 15',
        oldCost: 'Rs. 17',
        addButton: 'ADD',
        categories: CATEGORY_TYPES.card + ' ' + CATEGORY_TYPES.all + ' ' + CATEGORY_TYPES.seasonal
    },

    {
        offer: '21% OFF',
        image: 'images/onion-img.png',
        source: 'Sourced at 5 AM',
        title: 'Nagpur Orange',
        quantity: '1 Kg',
        newCost: 'Rs. 32',
        oldCost: 'Rs. 41',
        addButton: 'ADD',
        categories: CATEGORY_TYPES.card + ' ' + CATEGORY_TYPES.all + ' ' + CATEGORY_TYPES.seasonal
    },

    {
        offer: '10% OFF',
        image: 'images/carrot-img.jpeg',
        source: 'Sourced at 5 AM',
        title: 'Groundnut',
        quantity: '500 g',
        newCost: 'Rs. 17',
        oldCost: 'Rs. 19',
        addButton: 'ADD',
        categories: CATEGORY_TYPES.card + ' ' + CATEGORY_TYPES.all + ' ' + CATEGORY_TYPES.seasonal
    },


    {
        offer: '11% OFF',
        image: 'images/potato-img.png',
        source: 'Sourced at 5 AM',
        title: 'Organic Radish',
        quantity: '1 Kg',
        newCost: 'Rs. 15',
        oldCost: 'Rs. 17',
        addButton: 'ADD',
        categories: CATEGORY_TYPES.card + ' ' + CATEGORY_TYPES.all + ' ' + CATEGORY_TYPES.organicHydroponic
    },

    {
        offer: '21% OFF',
        image: 'images/onion-img.png',
        source: 'Sourced at 5 AM',
        title: 'Hydroponic Baby Corn',
        quantity: '1 Kg',
        newCost: 'Rs. 32',
        oldCost: 'Rs. 41',
        addButton: 'ADD',
        categories: CATEGORY_TYPES.card + ' ' + CATEGORY_TYPES.all + ' ' + CATEGORY_TYPES.organicHydroponic
    },


    {
        offer: '11% OFF',
        image: 'images/potato-img.png',
        source: 'Sourced at 5 AM',
        title: 'Sweet Corn - Packet',
        quantity: '1 Kg',
        newCost: 'Rs. 15',
        oldCost: 'Rs. 17',
        addButton: 'ADD',
        categories: CATEGORY_TYPES.card + ' ' + CATEGORY_TYPES.all + ' ' + CATEGORY_TYPES.freshlyCutSprouts
    }
]

export {DISPLAY_PRODUCTS_CONTENT};