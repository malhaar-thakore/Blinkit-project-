const CATEGORY_TYPES = {
    all : 'all',
    freshVegetables : 'freshVegetables',
    freshFruits : 'freshFruits',
    exotics : 'exotics',
    seasonal : 'seasonal',
    organicHydroponic : 'organicHydroponic',
    freshlyCutSprouts : 'freshlyCutSprouts'
}

const SIDEBAR_CONTENT = [
    {
        categoryImage: 'images/potato-img.png',
        categoryText:  'All',
        categoryType: CATEGORY_TYPES.all
    },

    {
        categoryImage: 'images/potato-img.png',
        categoryText:  'Fresh Vegetables',
        categoryType: CATEGORY_TYPES.freshVegetables
    },

    {
        categoryImage: 'images/fresh-fruits.jpeg',
        categoryText:  'Fresh Fruits',
        categoryType: CATEGORY_TYPES.freshFruits
    },

    {
        categoryImage: 'images/potato-img.png',
        categoryText:  'Exotics',
        categoryType: CATEGORY_TYPES.exotics
    },

    {
        categoryImage: 'images/potato-img.png',
        categoryText:  'Seasonal',
        categoryType: CATEGORY_TYPES.seasonal
    },

    {
        categoryImage: 'images/organic-hydroponic.jpeg',
        categoryText:  'Organic & Hydroponic',
        categoryType: CATEGORY_TYPES.organicHydroponic
    },

    {
        categoryImage: 'images/freshly-cut-sprouts.webp',
        categoryText:  'Freshly Cut & Sprouts',
        categoryType: CATEGORY_TYPES.freshlyCutSprouts
    }
]

export {SIDEBAR_CONTENT};