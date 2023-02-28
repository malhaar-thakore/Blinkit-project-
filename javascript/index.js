//import { displayProductsView } from "./view";

function makeSidebarContent(categoryImage, categoryText, categoryType){
    this.categoryImage = categoryImage;
    this.categoryText = categoryText;
    this.categoryType = categoryType
}

function makeDisplayProducts(offer, image, source, title, quantity, newCost, oldCost, addButton, categories, minusButton, plusButton, productCount){
    this.offer = offer;
    this.image = image;
    this.source = source;
    this.title = title;
    this.quantity = quantity;
    this.newCost = newCost;
    this.oldCost = oldCost;
    this.addButton = addButton;
    this.categories = categories;
    this.minusButton = minusButton;
    this.plusButton = plusButton;
    this.productCount = productCount; 
}

const model = {
    init(){
        this.sidebar();
        this.displayProducts();
    },

    sidebar(){
        this.SIDEBAR_CONTENTS = [
            new makeSidebarContent('images/potato-img.png', 'All', 'all'),
            new makeSidebarContent('images/potato-img.png', 'Fresh Vegetables', 'freshVegetables'),
            new makeSidebarContent('images/fresh-fruits.jpeg', 'Fresh Fruits', 'freshFruits'),
            new makeSidebarContent('images/potato-img.png', 'Exotics', 'exotics'),
            new makeSidebarContent('images/potato-img.png', 'Seasonal', 'seasonal'),
            new makeSidebarContent('images/organic-hydroponic.jpeg', 'Organic & Hydroponic', 'organicHydroponic'),
            new makeSidebarContent('images/freshly-cut-sprouts.webp', 'Freshly Cut & Sprouts', 'freshlyCutSprouts')
        ]
    },

    displayProducts(){
        this.DISPLAY_PRODUCTS_CONTENT = [
            new makeDisplayProducts('11% OFF', 'images/potato-img.png', 'Sourced at 5 AM', 'New Potato(Aloo)', '1 Kg', 'Rs. 15', 'Rs. 17', 'ADD', 'card all freshVegetables', '-', '+', 0),
            new makeDisplayProducts('21% OFF', 'images/onion-img.png', 'Sourced at 5 AM', 'Onion(Pyaz)', '1 Kg', 'Rs. 32', 'Rs. 41', 'ADD', 'card all freshVegetables', '-', '+', 0),
            new makeDisplayProducts('10% OFF', 'images/carrot-img.jpeg', 'Sourced at 5 AM', 'Local Carrot', '500 g', 'Rs. 17', 'Rs. 19', 'ADD', 'card all freshVegetables', '-', '+', 0),
            new makeDisplayProducts('16% OFF', 'images/green-chilli-img.png', 'Sourced at 5 AM', 'Green Chilli(Hari Mirch)', '100 g', 'Rs. 10', 'Rs. 12', 'ADD', 'card all freshVegetables', '-', '+', 0),
            new makeDisplayProducts('21% OFF', 'images/hybrid-tomato.png', 'Sourced at 5 AM', 'Hybrid Tomato(Tamatar)', '1 Kg', 'Rs. 15', 'Rs. 17', 'ADD', 'card all freshVegetables', '-', '+', 0),
            new makeDisplayProducts('17% OFF', 'images/cauliflower.jpeg', 'Sourced at 5 AM', 'Cauliflower', '500 g', 'Rs. 15', 'Rs. 19', 'ADD', 'card all freshVegetables', '-', '+', 0),
            
            new makeDisplayProducts('11% OFF', 'images/potato-img.png', 'Sourced at 5 AM', 'Mango', '1 Kg', 'Rs. 15', 'Rs. 17', 'ADD', 'card all freshFruits', '-', '+', 0),
            new makeDisplayProducts('21% OFF', 'images/onion-img.png', 'Sourced at 5 AM', 'Apple', '1 Kg', 'Rs. 32', 'Rs. 41', 'ADD', 'card all freshFruits', '-', '+', 0),
            new makeDisplayProducts('10% OFF', 'images/carrot-img.jpeg', 'Sourced at 5 AM', 'Banana', '500 g', 'Rs. 17', 'Rs. 19', 'ADD', 'card all freshFruits', '-', '+', 0),
            new makeDisplayProducts('16% OFF', 'images/green-chilli-img.png', 'Sourced at 5 AM', 'Grapes', '100 g', 'Rs. 10', 'Rs. 12', 'ADD', 'card all freshFruits', '-', '+', 0),
            new makeDisplayProducts('21% OFF', 'images/hybrid-tomato.png', 'Sourced at 5 AM', 'Papaya', '1 Kg', 'Rs. 15', 'Rs. 17', 'ADD', 'card all freshFruits', '-', '+', 0),

            new makeDisplayProducts('11% OFF', 'images/potato-img.png', 'Sourced at 5 AM', 'Broccoli', '1 Kg', 'Rs. 15', 'Rs. 17', 'ADD', 'card all exotics', '-', '+', 0),
            new makeDisplayProducts('21% OFF', 'images/onion-img.png', 'Sourced at 5 AM', 'Shiitake Mushroom', '1 Kg', 'Rs. 32', 'Rs. 41', 'ADD', 'card all exotics', '-', '+', 0),
            new makeDisplayProducts('10% OFF', 'images/carrot-img.jpeg', 'Sourced at 5 AM', 'Red Capsicum', '500 g', 'Rs. 17', 'Rs. 19', 'ADD', 'card all exotics', '-', '+', 0),
            new makeDisplayProducts('16% OFF', 'images/green-chilli-img.png', 'Sourced at 5 AM', 'King Trumpet Mushroom', '100 g', 'Rs. 10', 'Rs. 12', 'ADD', 'card all exotics', '-', '+', 0),

            new makeDisplayProducts('11% OFF', 'images/potato-img.png', 'Sourced at 5 AM', 'Amla', '1 Kg', 'Rs. 15', 'Rs. 17', 'ADD', 'card all seasonal', '-', '+', 0),
            new makeDisplayProducts('21% OFF', 'images/onion-img.png', 'Sourced at 5 AM', 'Nagpur Orange', '1 Kg', 'Rs. 32', 'Rs. 41', 'ADD', 'card all seasonal', '-', '+', 0),
            new makeDisplayProducts('10% OFF', 'images/carrot-img.jpeg', 'Sourced at 5 AM', 'Groundnut', '500 g', 'Rs. 17', 'Rs. 19', 'ADD', 'card all seasonal', '-', '+', 0),

            new makeDisplayProducts('11% OFF', 'images/potato-img.png', 'Sourced at 5 AM', 'Organic Radish', '1 Kg', 'Rs. 15', 'Rs. 17', 'ADD', 'card all organicHydroponic', '-', '+', 0),
            new makeDisplayProducts('21% OFF', 'images/onion-img.png', 'Sourced at 5 AM', 'Hydroponic Baby Corn', '1 Kg', 'Rs. 32', 'Rs. 41', 'ADD', 'card all organicHydroponic', '-', '+', 0),

            new makeDisplayProducts('11% OFF', 'images/potato-img.png', 'Sourced at 5 AM', 'Sweet Corn - Packet', '1 Kg', 'Rs. 15', 'Rs. 17', 'ADD', 'card all freshlyCutSprouts', '-', '+', 0)
        ]
    },

    getFilteredProducts(categoryType){
        //this.categoryType = categoryType;
        //console.log(this.categoryType);
        const productsToBeDisplayed = this.DISPLAY_PRODUCTS_CONTENT.filter(this.belongsToCategory, categoryType);
        return productsToBeDisplayed;
    },

    belongsToCategory(currentProduct){
        //console.log(this.categoryType);
        if(currentProduct.categories.includes(this))
        {
            return true;
        }
        else
        {
            return false;
        }
    }
}


const view = {

    init(){
        this.sidebarView.init();
        this.displayProductsView.init();
    },

    sidebarView : {
        init(){
            this.sidebar = document.getElementById('sidebar');
            this.render();
        },

        render(){
            const sidebarElements = controller.getSidebarElements();
            for(let i=0; i<sidebarElements.length; i++){
                const currentElement = sidebarElements[i];
                const categoryButtonImage = this.makeCategoryButtonImage(currentElement.categoryImage);
                const categoryButtonText = this.makeCategoryButtonText(currentElement.categoryText);
                const categoryButton = this.makeCategoryButton(categoryButtonImage, categoryButtonText);
                categoryButton.addEventListener('click', function(){
                    controller.renderDisplayProductsView(currentElement.categoryType);
                })
                this.sidebar.append(categoryButton);
            }
        },

        makeCategoryButtonImage(categoryImage){
            const categoryButtonImage = document.createElement('img');
            categoryButtonImage.className = 'sidebarImage';
            categoryButtonImage.src = categoryImage;
            return categoryButtonImage;
        },

        makeCategoryButtonText(categoryText){
            const categoryButtonText = document.createElement('p');
            categoryButtonText.className = 'sidebarText';
            categoryButtonText.innerHTML = categoryText;
            return categoryButtonText;
        },

        makeCategoryButton(categoryButtonImage, categoryButtonText){
            const categoryButton = document.createElement('button');
            categoryButton.className = 'sidebarButton';
            categoryButton.append(categoryButtonImage, categoryButtonText);
            return categoryButton;
        }
    },

    displayProductsView : {
        init(){
            this.productsToBeSold = document.getElementById('productsToBeSold');
            this.render('all');
        },

        render(categoryType){
            const displayProductsContent = controller.getDisplayProductsContent(categoryType);
            this.productsToBeSold.innerHTML = '';
            for(let i=0; i<displayProductsContent.length; i++){
                const currentContent = displayProductsContent[i];
                const offerText = this.makeOfferText();
                const offer = this.makeOffer(currentContent.offer, offerText);
                const image = this.makeImage(currentContent.image);
                const sourceText = this.makeSourceText(currentContent.source);
                const source = this.makeSource(sourceText);
                const title = this.makeTitle(currentContent.title);
                const quantity = this.makeQuantity(currentContent.quantity);
                const newCost = this.makeNewCost(currentContent.newCost);
                const oldCost = this.makeOldCost(currentContent.oldCost);
                const cost = this.makeCost(newCost, oldCost);
                const addButton = this.makeAddButton(currentContent.addButton);
                const minusButton = this.makeMinusButton(currentContent.minusButton);
                const productCount = this.makeProductCount(currentContent.productCount);
                const plusButton = this.makeProductCount(currentContent.plusButton);
                const minusProductCountPlus = this.makeMinusProductCountPlus(minusButton, productCount, plusButton);
                const costAdd = this.makeCostAdd(cost, addButton, minusProductCountPlus);
                const card = this.makeCard(offer, image, source, title, quantity, costAdd, currentContent.categories);

                this.productsToBeSold.append(card);
            }
        },

        makeOfferText(){
            const offerText = document.createElement('strong');
            return offerText;
        },

        makeOffer(offerInnerContent, offerText){
            const offer = document.createElement('div');
            offer.className = 'offer';
            offer.innerHTML = offerInnerContent;
            offer.append = 'offerText';
            return offer
        },

        makeImage(imageSrc){
            const image = document.createElement('img');
            image.className = 'cardImages';
            image.src = imageSrc;
            return image;
        },

        makeSourceText(sourceTextInnerContent){
            const sourceText = document.createElement('strong');
            sourceText.innerHTML = sourceTextInnerContent;
            return sourceText;
        },

        makeSource(sourceText){
            const source = document.createElement('div');
            source.className = 'source';
            source.append(sourceText);
            return source;
        },

        makeTitle(titleInnerContent){
            const title = document.createElement('strong');
            title.className = 'cardTitle';
            title.innerHTML = titleInnerContent;
            return title;
        },

        makeQuantity(quantityInnerContent){
            const quantity = document.createElement('p');
            quantity.innerHTML = quantityInnerContent;
            return quantity;
        },

        makeNewCost(newCostInnerContent){
            const newCost = document.createElement('strong');
            newCost.innerHTML = newCostInnerContent;
            return newCost;
        },

        makeOldCost(oldCostInnerContent){
            const oldCost = document.createElement('p');
            oldCost.innerHTML = oldCostInnerContent;
            return oldCost;
        },

        makeCost(newCost, oldCost){
            const cost = document.createElement('div');
            cost.className = 'cost';
            cost.append(newCost, oldCost);
            return cost;
        },

        makeAddButton(addButtonInnerContent){
            const addButton = document.createElement('button');
            addButton.className = 'addButton';
            addButton.innerHTML = addButtonInnerContent;
            return addButton;
        },

        makeMinusButton(minusButtonInnerContent){
            const minusButton = document.createElement('button');
            minusButton.innerHTML = minusButtonInnerContent;
            return minusButton;
        },

        makeProductCount(productCountInnerContent){
            const productCount = document.createElement('p');
            productCount.innerHTML = productCountInnerContent;
            return productCount;
        },

        makePlusButton(plusButtonInnerContent){
            const plusButton = document.createElement('button');
            plusButton.innerHTML = plusButtonInnerContent;
            return plusButton;
        },

        makeMinusProductCountPlus(minusButton, productCount, plusButton){
            const minusProductCountPlus = document.createElement('div');
            minusProductCountPlus.className = 'minusProductCountPlus';
            minusProductCountPlus.append(minusButton, productCount, plusButton);
            minusProductCountPlus.style.display = 'none';
            return minusProductCountPlus;
        },

        makeCostAdd(cost, addButton, minusProductCountPlus){
            const costAdd = document.createElement('div');
            costAdd.className = 'costAdd';
            costAdd.append(cost, addButton, minusProductCountPlus);
            return costAdd;
        },

        makeCard(offer, image, source, title, quantity, costAdd, categories){
            const card = document.createElement('div');
            card.className = categories;
            card.append(offer, image, source, title, quantity, costAdd);
            return card;
        }
    }

}



const controller = {
    init(){
        model.init();
        view.init();
    },

    getSidebarElements(){

        //console.log(model)
        return model.SIDEBAR_CONTENTS;
    },

    getDisplayProductsContent(categoryType){
        //console.log(model.DISPLAY_PRODUCTS_CONTENT);
        return model.getFilteredProducts(categoryType);
    },

    renderDisplayProductsView(categoryType){
        return view.displayProductsView.render(categoryType);
    }
}

controller.init();