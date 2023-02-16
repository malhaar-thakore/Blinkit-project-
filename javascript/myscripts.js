const sidebar = document.getElementsByClassName('sidebar')[0];

const sidebarContent = [
    {
        categoryImage: 'images/potato-img.png',
        categoryText:  'All',
        categoryType: 'all'
    },

    {
        categoryImage: 'images/potato-img.png',
        categoryText:  'Fresh Vegetables',
        categoryType: 'freshVegetables'
    },

    {
        categoryImage: 'images/fresh-fruits.jpeg',
        categoryText:  'Fresh Fruits',
        categoryType: 'freshFruits'
    },

    {
        categoryImage: 'images/potato-img.png',
        categoryText:  'Exotics',
        categoryType: 'exotics'
    },

    {
        categoryImage: 'images/potato-img.png',
        categoryText:  'Seasonal',
        categoryType: 'seasonal'
    },

    {
        categoryImage: 'images/organic-hydroponic.jpeg',
        categoryText:  'Organic & Hydroponic',
        categoryType: 'organicHydroponic'
    },

    {
        categoryImage: 'images/freshly-cut-sprouts.webp',
        categoryText:  'Freshly Cut & Sprouts',
        categoryType: 'freshlyCutSprouts'
    },
]

sidebarContent.forEach(({ categoryImage, categoryText, categoryType }) => {
   const categoryButton = document.createElement('button');
   categoryButton.className = 'sidebar-button';

   const appendingImage = document.createElement('img');
   const appendingText = document.createElement('p');

   appendingImage.className = 'sidebar-image';
   appendingText.className = 'sidebar-text';

   appendingImage.src = categoryImage;
   appendingText.innerHTML = categoryText;

   categoryButton.append(appendingImage, appendingText);
   sidebar.append(categoryButton);

   categoryButton.onclick = function(){
    displayCategoryItems(categoryType);
   };
});



const DISPLAY_ITEMS_CONTENT = [
    {
        displayItemOffer: '11% OFF',
        displayItemImage: 'images/potato-img.png',
        displayItemSource: 'Sourced at 5 AM',
        displayItemTitle: 'New Potato(Aloo)',
        displayItemQuantity: '1 Kg',
        displayItemNewCost: 'Rs. 15',
        displayItemOldCost: 'Rs. 17',
        displayItemAddButton: 'ADD',
        classToBeAssigned: 'card all freshVegetables'
    },

    {
        displayItemOffer: '21% OFF',
        displayItemImage: 'images/onion-img.png',
        displayItemSource: 'Sourced at 5 AM',
        displayItemTitle: 'Onion(Pyaz)',
        displayItemQuantity: '1 Kg',
        displayItemNewCost: 'Rs. 32',
        displayItemOldCost: 'Rs. 41',
        displayItemAddButton: 'ADD',
        classToBeAssigned: 'card all freshVegetables'
    },

    {
        displayItemOffer: '10% OFF',
        displayItemImage: 'images/carrot-img.jpeg',
        displayItemSource: 'Sourced at 5 AM',
        displayItemTitle: 'Local Carrot',
        displayItemQuantity: '500 g',
        displayItemNewCost: 'Rs. 17',
        displayItemOldCost: 'Rs. 19',
        displayItemAddButton: 'ADD',
        classToBeAssigned: 'card all freshVegetables'
    },

    {
        displayItemOffer: '16% OFF',
        displayItemImage: 'images/green-chilli-img.png',
        displayItemSource: 'Sourced at 5 AM',
        displayItemTitle: 'Green Chilli(Hari Mirch)',
        displayItemQuantity: '100 g',
        displayItemNewCost: 'Rs. 10',
        displayItemOldCost: 'Rs. 12',
        displayItemAddButton: 'ADD',
        classToBeAssigned: 'card all freshVegetables'
    },

    {
        displayItemOffer: '21% OFF',
        displayItemImage: 'images/hybrid-tomato.png',
        displayItemSource: 'Sourced at 5 AM',
        displayItemTitle: 'Hybrid Tomato(Tamatar)',
        displayItemQuantity: '1 Kg',
        displayItemNewCost: 'Rs. 15',
        displayItemOldCost: 'Rs. 17',
        displayItemAddButton: 'ADD',
        classToBeAssigned: 'card all freshVegetables'
    },

    {
        displayItemOffer: '17% OFF',
        displayItemImage: 'images/cauliflower.jpeg',
        displayItemSource: 'Sourced at 5 AM',
        displayItemTitle: 'New Potato(Aloo)',
        displayItemQuantity: '500 g',
        displayItemNewCost: 'Rs. 15',
        displayItemOldCost: 'Rs. 19',
        displayItemAddButton: 'ADD',
        classToBeAssigned: 'card all freshVegetables'
    },


    {
        displayItemOffer: '11% OFF',
        displayItemImage: 'images/potato-img.png',
        displayItemSource: 'Sourced at 5 AM',
        displayItemTitle: 'Mango',
        displayItemQuantity: '1 Kg',
        displayItemNewCost: 'Rs. 15',
        displayItemOldCost: 'Rs. 17',
        displayItemAddButton: 'ADD',
        classToBeAssigned: 'card all freshFruits'
    },

    {
        displayItemOffer: '21% OFF',
        displayItemImage: 'images/onion-img.png',
        displayItemSource: 'Sourced at 5 AM',
        displayItemTitle: 'Apple',
        displayItemQuantity: '1 Kg',
        displayItemNewCost: 'Rs. 32',
        displayItemOldCost: 'Rs. 41',
        displayItemAddButton: 'ADD',
        classToBeAssigned: 'card all freshFruits'
    },

    {
        displayItemOffer: '10% OFF',
        displayItemImage: 'images/carrot-img.jpeg',
        displayItemSource: 'Sourced at 5 AM',
        displayItemTitle: 'Banana',
        displayItemQuantity: '500 g',
        displayItemNewCost: 'Rs. 17',
        displayItemOldCost: 'Rs. 19',
        displayItemAddButton: 'ADD',
        classToBeAssigned: 'card all freshFruits'
    },

    {
        displayItemOffer: '16% OFF',
        displayItemImage: 'images/green-chilli-img.png',
        displayItemSource: 'Sourced at 5 AM',
        displayItemTitle: 'Grapes',
        displayItemQuantity: '100 g',
        displayItemNewCost: 'Rs. 10',
        displayItemOldCost: 'Rs. 12',
        displayItemAddButton: 'ADD',
        classToBeAssigned: 'card all freshFruits'
    },

    {
        displayItemOffer: '21% OFF',
        displayItemImage: 'images/hybrid-tomato.png',
        displayItemSource: 'Sourced at 5 AM',
        displayItemTitle: 'Papaya',
        displayItemQuantity: '1 Kg',
        displayItemNewCost: 'Rs. 15',
        displayItemOldCost: 'Rs. 17',
        displayItemAddButton: 'ADD',
        classToBeAssigned: 'card all freshFruits'
    },


    {
        displayItemOffer: '11% OFF',
        displayItemImage: 'images/potato-img.png',
        displayItemSource: 'Sourced at 5 AM',
        displayItemTitle: 'Broccoli',
        displayItemQuantity: '1 Kg',
        displayItemNewCost: 'Rs. 15',
        displayItemOldCost: 'Rs. 17',
        displayItemAddButton: 'ADD',
        classToBeAssigned: 'card all exotics'
    },

    {
        displayItemOffer: '21% OFF',
        displayItemImage: 'images/onion-img.png',
        displayItemSource: 'Sourced at 5 AM',
        displayItemTitle: 'Shiitake Mushroom',
        displayItemQuantity: '1 Kg',
        displayItemNewCost: 'Rs. 32',
        displayItemOldCost: 'Rs. 41',
        displayItemAddButton: 'ADD',
        classToBeAssigned: 'card all exotics'
    },

    {
        displayItemOffer: '10% OFF',
        displayItemImage: 'images/carrot-img.jpeg',
        displayItemSource: 'Sourced at 5 AM',
        displayItemTitle: 'Red Capsicum',
        displayItemQuantity: '500 g',
        displayItemNewCost: 'Rs. 17',
        displayItemOldCost: 'Rs. 19',
        displayItemAddButton: 'ADD',
        classToBeAssigned: 'card all exotics'
    },

    {
        displayItemOffer: '16% OFF',
        displayItemImage: 'images/green-chilli-img.png',
        displayItemSource: 'Sourced at 5 AM',
        displayItemTitle: 'King Trumpet Mushroom',
        displayItemQuantity: '100 g',
        displayItemNewCost: 'Rs. 10',
        displayItemOldCost: 'Rs. 12',
        displayItemAddButton: 'ADD',
        classToBeAssigned: 'card all exotics'
    },


    {
        displayItemOffer: '11% OFF',
        displayItemImage: 'images/potato-img.png',
        displayItemSource: 'Sourced at 5 AM',
        displayItemTitle: 'Amla',
        displayItemQuantity: '1 Kg',
        displayItemNewCost: 'Rs. 15',
        displayItemOldCost: 'Rs. 17',
        displayItemAddButton: 'ADD',
        classToBeAssigned: 'card all seasonal'
    },

    {
        displayItemOffer: '21% OFF',
        displayItemImage: 'images/onion-img.png',
        displayItemSource: 'Sourced at 5 AM',
        displayItemTitle: 'Nagpur Orange',
        displayItemQuantity: '1 Kg',
        displayItemNewCost: 'Rs. 32',
        displayItemOldCost: 'Rs. 41',
        displayItemAddButton: 'ADD',
        classToBeAssigned: 'card all seasonal'
    },

    {
        displayItemOffer: '10% OFF',
        displayItemImage: 'images/carrot-img.jpeg',
        displayItemSource: 'Sourced at 5 AM',
        displayItemTitle: 'Groundnut',
        displayItemQuantity: '500 g',
        displayItemNewCost: 'Rs. 17',
        displayItemOldCost: 'Rs. 19',
        displayItemAddButton: 'ADD',
        classToBeAssigned: 'card all seasonal'
    },


    {
        displayItemOffer: '11% OFF',
        displayItemImage: 'images/potato-img.png',
        displayItemSource: 'Sourced at 5 AM',
        displayItemTitle: 'Organic Radish',
        displayItemQuantity: '1 Kg',
        displayItemNewCost: 'Rs. 15',
        displayItemOldCost: 'Rs. 17',
        displayItemAddButton: 'ADD',
        classToBeAssigned: 'card all organicHydroponic'
    },

    {
        displayItemOffer: '21% OFF',
        displayItemImage: 'images/onion-img.png',
        displayItemSource: 'Sourced at 5 AM',
        displayItemTitle: 'Hydroponic Baby Corn',
        displayItemQuantity: '1 Kg',
        displayItemNewCost: 'Rs. 32',
        displayItemOldCost: 'Rs. 41',
        displayItemAddButton: 'ADD',
        classToBeAssigned: 'card all organicHydroponic'
    },


    {
        displayItemOffer: '11% OFF',
        displayItemImage: 'images/potato-img.png',
        displayItemSource: 'Sourced at 5 AM',
        displayItemTitle: 'Sweet Corn - Packet',
        displayItemQuantity: '1 Kg',
        displayItemNewCost: 'Rs. 15',
        displayItemOldCost: 'Rs. 17',
        displayItemAddButton: 'ADD',
        classToBeAssigned: 'card all freshlyCutSprouts'
    }
]

//DISPLAY_ITEMS_CONTENT.forEach(addCard);

function belongsToCategory(DISPLAY_ITEM){
    if((DISPLAY_ITEM.classToBeAssigned.includes(this))){               //why and how does 'this' work?
        //DISPLAY_ITEM.isItemPresent = true;
        return true;
    }  
    else{
        return false;
    }
}

// function shouldBeRemoved(CURRENTLY_PRESENT_ITEM){
//     if(CURRENTLY_PRESENT_ITEM.className.includes(this) == false)
//         return true;
//     else
//         return false;
// }

function displayCategoryItems(categoryType){

    const CURRENTLY_PRESENT_ITEMS_CONTENT = Array.from(document.getElementsByClassName('card'));
    CURRENTLY_PRESENT_ITEMS_CONTENT.forEach(removeCard);

    const SELECTED_ITEMS_CONTENT = DISPLAY_ITEMS_CONTENT.filter(belongsToCategory, categoryType);
    SELECTED_ITEMS_CONTENT.forEach(addCard);
}

const DISPLAY_ITEMS = document.getElementsByClassName('display-items')[0];

function removeCard(cardToBeRemoved){
    cardToBeRemoved.remove();
}

function addCard({displayItemOffer, displayItemImage, displayItemSource, displayItemTitle, displayItemQuantity, displayItemNewCost, displayItemOldCost, displayItemAddButton, classToBeAssigned}) {
    
    const DISPLAY_ITEM_OFFER = document.createElement('div');
    const OFFER_TEXT = document.createElement('strong');
    const DISPLAY_ITEM_IMAGE = document.createElement('img');
    const DISPLAY_ITEM_SOURCE = document.createElement('div');
    const SOURCE_TEXT = document.createElement('strong')
    const DISPLAY_ITEM_TITLE = document.createElement('strong');
    const DISPLAY_ITEM_QUANTITY = document.createElement('p');
    const DISPLAY_ITEM_COST = document.createElement('div');
    const DISPLAY_ITEM_NEW_COST_TEXT = document.createElement('strong');
    const DISPLAY_ITEM_OLD_COST_TEXT = document.createElement('p');
    const DISPLAY_ITEM_ADD_BUTTON = document.createElement('button');
    const COST_ADD = document.createElement('div');
    
    DISPLAY_ITEM_OFFER.className = 'offer';
    DISPLAY_ITEM_IMAGE.className = 'card-images';
    DISPLAY_ITEM_SOURCE.className = 'source';
    DISPLAY_ITEM_TITLE.className = 'card-title';
    DISPLAY_ITEM_COST.className = 'cost';
    DISPLAY_ITEM_ADD_BUTTON.className = 'add-button';
    COST_ADD.className = 'cost-add';
    
    OFFER_TEXT.innerHTML = displayItemOffer;
    DISPLAY_ITEM_IMAGE.src = displayItemImage;
    SOURCE_TEXT.innerHTML = displayItemSource;
    DISPLAY_ITEM_TITLE.innerHTML = displayItemTitle;
    DISPLAY_ITEM_QUANTITY.innerHTML = displayItemQuantity;
    DISPLAY_ITEM_NEW_COST_TEXT.innerHTML = displayItemNewCost;
    DISPLAY_ITEM_OLD_COST_TEXT.innerHTML = displayItemOldCost;
    DISPLAY_ITEM_ADD_BUTTON.innerHTML = displayItemAddButton;

    const CARD = document.createElement('div');
    CARD.className = classToBeAssigned;

    DISPLAY_ITEM_COST.append(DISPLAY_ITEM_NEW_COST_TEXT, DISPLAY_ITEM_OLD_COST_TEXT);
    COST_ADD.append(DISPLAY_ITEM_COST, DISPLAY_ITEM_ADD_BUTTON);
    DISPLAY_ITEM_OFFER.append(OFFER_TEXT);
    DISPLAY_ITEM_SOURCE.append(SOURCE_TEXT);
    CARD.append(DISPLAY_ITEM_OFFER, DISPLAY_ITEM_IMAGE, DISPLAY_ITEM_SOURCE, DISPLAY_ITEM_TITLE, DISPLAY_ITEM_QUANTITY, COST_ADD);

    DISPLAY_ITEMS.append(CARD);
}

    //console.log(DISPLAY_ITEMS_CONTENT);
// 1. Was appending the [{}] (Array of objects) to HTML Element
// 2. classname is wrong, its className

// 3. Think about why className is used instead of class?