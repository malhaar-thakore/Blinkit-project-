//import { displayProductsView } from "./view";

//import { DISPLAY_PRODUCTS_CONTENT } from "./models/displayProducts";

function makeSidebarContent(categoryImage, categoryText, categoryType){
    this.categoryImage = categoryImage;
    this.categoryText = categoryText;
    this.categoryType = categoryType
};

function belongsToCategory(currentProduct){
    //console.log(this.categoryType);
    if(currentProduct.categories.includes(this)){
        return true;
    }
    else{
        return false;
    }
};

function getProductCountFromLocalStorage(cartContent){
    this.productCount = parseInt(localStorage.getItem(this.title));
    cartContent.push(new createNewCartProduct(this.title, this.productCount));
}



function makeDisplayProducts(offer, image, source, title, quantity, newCost, oldCost, addButton, categories, minusButton, plusButton, productCount, cartContent){
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
    if(localStorage.getItem(title) == null || localStorage.getItem(title) == '0'){
        this.productCount = productCount;
    } 
    else{
        // this.productCount = parseInt(localStorage.getItem(title));
        // cartContent.push(new createNewCartProduct(this.title, this.productCount));
        function getFromLocalStorage(){
            getProductCountFromLocalStorage.call(this, cartContent);
            //console.log(this.productCount);
        };
        let bindedGetFromLocalStorage = getFromLocalStorage.bind(this);
        setTimeout(bindedGetFromLocalStorage, 1000)

        // function handleProductSubtraction(){
        //     this.onClickMinusButton(titleInnerContent, categoryType)
        // };
        // let bindedHandleProductSubtraction = handleProductSubtraction.bind(this);
        // minusButton.addEventListener("click", bindedHandleProductSubtraction);
    }
};

function createNewCartProduct(currentProductTitle, productCount){
    this.productTitle = currentProductTitle;
    this.productCount = productCount;
};

function isAddedToCart(currentProduct) {
    if (currentProduct.productCount > 0) {
        return true;
    }
    else {
        return false;
    }
};



const model = {
    init(){
        this.createCartContent();
        this.createSidebarData();
        this.createDisplayProducts();
        //this.updateDisplayProductsFromLocalStorage();
    },

    createSidebarData(){
        this.sidebarContents = [
            new makeSidebarContent('images/potato-img.png', 'All', 'all'),
            new makeSidebarContent('images/potato-img.png', 'Fresh Vegetables', 'freshVegetables'),
            new makeSidebarContent('images/fresh-fruits.jpeg', 'Fresh Fruits', 'freshFruits'),
            new makeSidebarContent('images/potato-img.png', 'Exotics', 'exotics'),
            new makeSidebarContent('images/potato-img.png', 'Seasonal', 'seasonal'),
            new makeSidebarContent('images/organic-hydroponic.jpeg', 'Organic & Hydroponic', 'organicHydroponic'),
            new makeSidebarContent('images/freshly-cut-sprouts.webp', 'Freshly Cut & Sprouts', 'freshlyCutSprouts')
        ]
    },

    createDisplayProducts(){
        this.displayProductsContent = [
            new makeDisplayProducts('11% OFF', 'images/potato-img.png', 'Sourced at 5 AM', 'New Potato(Aloo)', '1 Kg', 'Rs. 15', 'Rs. 17', 'ADD', 'card all freshVegetables', '-', '+', 0, this.cartContent),
            new makeDisplayProducts('21% OFF', 'images/onion-img.png', 'Sourced at 5 AM', 'Onion(Pyaz)', '1 Kg', 'Rs. 32', 'Rs. 41', 'ADD', 'card all freshVegetables', '-', '+', 0, this.cartContent),
            new makeDisplayProducts('10% OFF', 'images/carrot-img.jpeg', 'Sourced at 5 AM', 'Local Carrot', '500 g', 'Rs. 17', 'Rs. 19', 'ADD', 'card all freshVegetables', '-', '+', 0, this.cartContent),
            new makeDisplayProducts('16% OFF', 'images/green-chilli-img.png', 'Sourced at 5 AM', 'Green Chilli(Hari Mirch)', '100 g', 'Rs. 10', 'Rs. 12', 'ADD', 'card all freshVegetables', '-', '+', 0, this.cartContent),
            new makeDisplayProducts('21% OFF', 'images/hybrid-tomato.png', 'Sourced at 5 AM', 'Hybrid Tomato(Tamatar)', '1 Kg', 'Rs. 15', 'Rs. 17', 'ADD', 'card all freshVegetables', '-', '+', 0, this.cartContent),
            new makeDisplayProducts('17% OFF', 'images/cauliflower.jpeg', 'Sourced at 5 AM', 'Cauliflower', '500 g', 'Rs. 15', 'Rs. 19', 'ADD', 'card all freshVegetables', '-', '+', 0, this.cartContent),
            
            new makeDisplayProducts('11% OFF', 'images/potato-img.png', 'Sourced at 5 AM', 'Mango', '1 Kg', 'Rs. 15', 'Rs. 17', 'ADD', 'card all freshFruits', '-', '+', 0, this.cartContent),
            new makeDisplayProducts('21% OFF', 'images/onion-img.png', 'Sourced at 5 AM', 'Apple', '1 Kg', 'Rs. 32', 'Rs. 41', 'ADD', 'card all freshFruits', '-', '+', 0, this.cartContent),
            new makeDisplayProducts('10% OFF', 'images/carrot-img.jpeg', 'Sourced at 5 AM', 'Banana', '500 g', 'Rs. 17', 'Rs. 19', 'ADD', 'card all freshFruits', '-', '+', 0, this.cartContent),
            new makeDisplayProducts('16% OFF', 'images/green-chilli-img.png', 'Sourced at 5 AM', 'Grapes', '100 g', 'Rs. 10', 'Rs. 12', 'ADD', 'card all freshFruits', '-', '+', 0, this.cartContent),
            new makeDisplayProducts('21% OFF', 'images/hybrid-tomato.png', 'Sourced at 5 AM', 'Papaya', '1 Kg', 'Rs. 15', 'Rs. 17', 'ADD', 'card all freshFruits', '-', '+', 0, this.cartContent),

            new makeDisplayProducts('11% OFF', 'images/potato-img.png', 'Sourced at 5 AM', 'Broccoli', '1 Kg', 'Rs. 15', 'Rs. 17', 'ADD', 'card all exotics', '-', '+', 0, this.cartContent),
            new makeDisplayProducts('21% OFF', 'images/onion-img.png', 'Sourced at 5 AM', 'Shiitake Mushroom', '1 Kg', 'Rs. 32', 'Rs. 41', 'ADD', 'card all exotics', '-', '+', 0, this.cartContent),
            new makeDisplayProducts('10% OFF', 'images/carrot-img.jpeg', 'Sourced at 5 AM', 'Red Capsicum', '500 g', 'Rs. 17', 'Rs. 19', 'ADD', 'card all exotics', '-', '+', 0, this.cartContent),
            new makeDisplayProducts('16% OFF', 'images/green-chilli-img.png', 'Sourced at 5 AM', 'King Trumpet Mushroom', '100 g', 'Rs. 10', 'Rs. 12', 'ADD', 'card all exotics', '-', '+', 0, this.cartContent),

            new makeDisplayProducts('11% OFF', 'images/potato-img.png', 'Sourced at 5 AM', 'Amla', '1 Kg', 'Rs. 15', 'Rs. 17', 'ADD', 'card all seasonal', '-', '+', 0, this.cartContent),
            new makeDisplayProducts('21% OFF', 'images/onion-img.png', 'Sourced at 5 AM', 'Nagpur Orange', '1 Kg', 'Rs. 32', 'Rs. 41', 'ADD', 'card all seasonal', '-', '+', 0, this.cartContent),
            new makeDisplayProducts('10% OFF', 'images/carrot-img.jpeg', 'Sourced at 5 AM', 'Groundnut', '500 g', 'Rs. 17', 'Rs. 19', 'ADD', 'card all seasonal', '-', '+', 0, this.cartContent),

            new makeDisplayProducts('11% OFF', 'images/potato-img.png', 'Sourced at 5 AM', 'Organic Radish', '1 Kg', 'Rs. 15', 'Rs. 17', 'ADD', 'card all organicHydroponic', '-', '+', 0, this.cartContent),
            new makeDisplayProducts('21% OFF', 'images/onion-img.png', 'Sourced at 5 AM', 'Hydroponic Baby Corn', '1 Kg', 'Rs. 32', 'Rs. 41', 'ADD', 'card all organicHydroponic', '-', '+', 0, this.cartContent),

            new makeDisplayProducts('11% OFF', 'images/potato-img.png', 'Sourced at 5 AM', 'Sweet Corn - Packet', '1 Kg', 'Rs. 15', 'Rs. 17', 'ADD', 'card all freshlyCutSprouts', '-', '+', 0, this.cartContent)
        ]
    },

    getSidebarContents(){
        return this.sidebarContents;
    },

    getDisplayProductsContent(){
        return this.displayProductsContent;
    },

    getProductsFilteredByCategories(categoryType){
        //this.categoryType = categoryType;
        //console.log(this.categoryType);
        const productsToBeDisplayed = this.displayProductsContent.filter(belongsToCategory, categoryType);
        return productsToBeDisplayed;
    },

    getProductsFilteredByCount(){
        const productsInCart = this.displayProductsContent.filter(isAddedToCart);
        return productsInCart;
    },

    updateCurrentProductContent(ind, val){
        this.displayProductsContent[ind].productCount+=val;
        localStorage.setItem(this.displayProductsContent[ind].title, this.displayProductsContent[ind].productCount);
    },

    createCartContent(){
        this.cartContent = [];
    },

    addToCart(currentProductTitle){
        this.cartContent.push(new createNewCartProduct(currentProductTitle, 1));
    },

    updateCartContent(productTitle, val){
        for(let index=0; index < this.cartContent.length; index++){
            if(productTitle == this.cartContent[index].productTitle)
            {
                this.cartContent[index].productCount+=val;
                if(this.cartContent[index].productCount == 0){
                    this.removeProductFromCart(index);
                }
                break;
            }
        }
    },

    removeProductFromCart(pos){
        for(let index=pos; index<this.cartContent.length-1; index++){
            this.cartContent[index] = this.cartContent[index+1];
        }
        this.cartContent.pop()
    },

    getCartContent(){
        return this.cartContent;
    }

    // getTotalCost(){
    //     let totalCost = 0;
    //     for(let i=0; i<this.DISPLAY_PRODUCTS_CONTENT.length; i++){
    //         totalCost = totalCost + ((this.DISPLAY_PRODUCTS_CONTENT[i].newCost) * (this.DISPLAY_PRODUCTS_CONTENT[i].productCount));
    //     }
    //     return totalCost;
    // }
}


const view = {

    init(){
        this.sidebarView.init();
        this.displayProductsView.init();
        this.cartView.init();
    },

    sidebarView : {
        init(){
            this.sidebar = document.getElementById('sidebar');
            this.render();
        },

        // render(){
        //     const sidebarElements = controller.getSidebarElements();
        //     for(let i=0; i<sidebarElements.length; i++){
        //         const currentElement = sidebarElements[i];
        //         const categoryButtonImage = this.makeCategoryButtonImage(currentElement.categoryImage);
        //         const categoryButtonText = this.makeCategoryButtonText(currentElement.categoryText);
        //         const categoryButton = this.makeCategoryButton(categoryButtonImage, categoryButtonText);
        //         categoryButton.addEventListener('click', function(){
        //             controller.renderDisplayProductsView(currentElement.categoryType);
        //         })
        //         this.sidebar.append(categoryButton);
        //     }
        // },

        // makeCategoryButtonImage(categoryImage){
        //     const categoryButtonImage = document.createElement('img');
        //     categoryButtonImage.className = 'sidebarImage';
        //     categoryButtonImage.src = categoryImage;
        //     return categoryButtonImage;
        // },

        // makeCategoryButtonText(categoryText){
        //     const categoryButtonText = document.createElement('p');
        //     categoryButtonText.className = 'sidebarText';
        //     categoryButtonText.innerHTML = categoryText;
        //     return categoryButtonText;
        // },

        // makeCategoryButton(categoryButtonImage, categoryButtonText){
        //     const categoryButton = document.createElement('button');
        //     categoryButton.className = 'sidebarButton';
        //     categoryButton.append(categoryButtonImage, categoryButtonText);
        //     return categoryButton;
        // }

        render(){
            const sidebarElements = controller.getSidebarElements();
            for(let index=0; index<sidebarElements.length; index++){
                const currentElement = sidebarElements[index];
                const categoryButton = this.createCategoryButton(currentElement);
                this.sidebar.append(categoryButton)
            }
        },

        createCategoryButton(currentElement){
            const categoryButton = document.createElement('button');
            categoryButton.className = 'sidebarButton';
            const categoryButtonImage = this.createCategoryButtonImage(currentElement.categoryImage);
            const categoryButtonText = this.createCategoryButtonText(currentElement.categoryText);
            categoryButton.append(categoryButtonImage, categoryButtonText);

            categoryButton.addEventListener('click', function(){
                controller.renderDisplayProductsView(currentElement.categoryType);
            })

            return categoryButton;
        },

        createCategoryButtonImage(categoryImageSrc){
            const categoryButtonImage = document.createElement('img');
            categoryButtonImage.className = 'sidebarImage';
            categoryButtonImage.src = categoryImageSrc;
            return categoryButtonImage;
        },

        createCategoryButtonText(categoryTextInnerHtml){
            const categoryButtonText = document.createElement('p');
            categoryButtonText.className = 'sidebarText';
            categoryButtonText.innerHTML = categoryTextInnerHtml;
            return categoryButtonText;
        }
    },

    displayProductsView : {
        init(){
            this.productsToBeSold = document.getElementById('productsToBeSold');
            this.render('all');
        },

        // render(categoryType){
        //     const displayProductsContent = controller.getCategoryDisplayProductsContent(categoryType);
        //     this.productsToBeSold.innerHTML = '';
        //     for(let i=0; i<displayProductsContent.length; i++){
        //         const currentContent = displayProductsContent[i];
        //         const offerText = this.makeOfferText();
        //         const offer = this.makeOffer(currentContent.offer, offerText);
        //         const image = this.makeImage(currentContent.image);
        //         const sourceText = this.makeSourceText(currentContent.source);
        //         const source = this.makeSource(sourceText);
        //         const title = this.makeTitle(currentContent.title);
        //         const quantity = this.makeQuantity(currentContent.quantity);
        //         const newCost = this.makeNewCost(currentContent.newCost);
        //         const oldCost = this.makeOldCost(currentContent.oldCost);
        //         const cost = this.makeCost(newCost, oldCost);
        //         const addButton = this.makeAddButton(currentContent.addButton, currentContent.productCount);
        //         const minusButton = this.makeMinusButton(currentContent.minusButton);
        //         const productCount = this.makeProductCount(currentContent.productCount);
        //         const plusButton = this.makePlusButton(currentContent.plusButton);
        //         const minusProductCountPlus = this.makeMinusProductCountPlus(minusButton, productCount, plusButton, currentContent.productCount);
        //         const costAdd = this.makeCostAdd(cost, addButton, minusProductCountPlus);
        //         const card = this.makeCard(offer, image, source, title, quantity, costAdd, currentContent.categories);

        //         function callingClickingAddOrPlusButton() {
        //             this.clickingAddOrPlusButton(currentContent.title, categoryType);
        //         };
        //         let bindingCallingClickingAddOrPlusButton = callingClickingAddOrPlusButton.bind(this);
        //         addButton.addEventListener("click", bindingCallingClickingAddOrPlusButton);
        //         plusButton.addEventListener("click", bindingCallingClickingAddOrPlusButton);

        //         function callingClickingMinusButton(){
        //             this.clickingMinusButton(currentContent.title, categoryType);
        //         };
        //         let bindingCallingClickingMinusButton = callingClickingMinusButton.bind(this);
        //         minusButton.addEventListener("click", bindingCallingClickingMinusButton);
                
        //         this.productsToBeSold.append(card);
        //     }
        // },

        // makeOfferText(){
        //     const offerText = document.createElement('strong');
        //     return offerText;
        // },

        // makeOffer(offerInnerContent, offerText){
        //     const offer = document.createElement('div');
        //     offer.className = 'offer';
        //     offer.innerHTML = offerInnerContent;
        //     offer.append = offerText;
        //     return offer
        // },

        // makeImage(imageSrc){
        //     const image = document.createElement('img');
        //     image.className = 'cardImages';
        //     image.src = imageSrc;
        //     return image;
        // },

        // makeSourceText(sourceTextInnerContent){
        //     const sourceText = document.createElement('strong');
        //     sourceText.innerHTML = sourceTextInnerContent;
        //     return sourceText;
        // },

        // makeSource(sourceText){
        //     const source = document.createElement('div');
        //     source.className = 'source';
        //     source.append(sourceText);
        //     return source;
        // },

        // makeTitle(titleInnerContent){
        //     const title = document.createElement('strong');
        //     title.className = 'cardTitle';
        //     title.innerHTML = titleInnerContent;
        //     return title;
        // },

        // makeQuantity(quantityInnerContent){
        //     const quantity = document.createElement('p');
        //     quantity.innerHTML = quantityInnerContent;
        //     return quantity;
        // },

        // makeNewCost(newCostInnerContent){
        //     const newCost = document.createElement('strong');
        //     newCost.innerHTML = newCostInnerContent;
        //     return newCost;
        // },

        // makeOldCost(oldCostInnerContent){
        //     const oldCost = document.createElement('p');
        //     oldCost.innerHTML = oldCostInnerContent;
        //     return oldCost;
        // },

        // makeCost(newCost, oldCost){
        //     const cost = document.createElement('div');
        //     cost.className = 'cost';
        //     cost.append(newCost, oldCost);
        //     return cost;
        // },

        // makeAddButton(addButtonInnerContent, productCount){
        //     const addButton = document.createElement('button');
        //     addButton.className = 'addButton';
        //     addButton.innerHTML = addButtonInnerContent;
        //     if(productCount != 0)
        //         addButton.style.display = 'none';
        //     return addButton;
        // },

        // makeMinusButton(minusButtonInnerContent){
        //     const minusButton = document.createElement('button');
        //     minusButton.innerHTML = minusButtonInnerContent;
        //     return minusButton;
        // },

        // makeProductCount(productCountInnerContent){
        //     const productCount = document.createElement('p');
        //     productCount.innerHTML = productCountInnerContent;
        //     return productCount;
        // },

        // makePlusButton(plusButtonInnerContent){
        //     const plusButton = document.createElement('button');
        //     plusButton.innerHTML = plusButtonInnerContent;
        //     return plusButton;
        // },

        // makeMinusProductCountPlus(minusButton, productCount, plusButton, productCountValue){
        //     const minusProductCountPlus = document.createElement('div');
        //     minusProductCountPlus.className = 'minusProductCountPlus';
        //     minusProductCountPlus.append(minusButton, productCount, plusButton);
        //     if(productCountValue == 0){
        //         minusProductCountPlus.style.display = 'none';
        //     }
        //     return minusProductCountPlus;
        // },

        // makeCostAdd(cost, addButton, minusProductCountPlus){
        //     const costAdd = document.createElement('div');
        //     costAdd.className = 'costAdd';
        //     costAdd.append(cost, addButton, minusProductCountPlus);
        //     return costAdd;
        // },

        // makeCard(offer, image, source, title, quantity, costAdd, categories){
        //     const card = document.createElement('div');
        //     card.className = categories;
        //     card.append(offer, image, source, title, quantity, costAdd);
        //     return card;
        // },

        // clickingAddOrPlusButton(currentProductTitle, categoryType){
        //     controller.incrementProductCount(currentProductTitle, categoryType);
        // },

        // clickingMinusButton(currentProductTitle, categoryType){
        //     controller.decrementProductCount(currentProductTitle, categoryType);
        // }

        render(categoryType){
            this.productsToBeSold.innerHTML = '';
            const displayProductsContent = controller.getCategoryDisplayProductsContent(categoryType);
            for(let index=0; index<displayProductsContent.length; index++){
                const currentContent = displayProductsContent[index];
                const card = this.createCard(currentContent, categoryType);
                this.productsToBeSold.append(card);
            }
        },

        createCard(currentContent, categoryType){
            const card = document.createElement('div');
            card.className = currentContent.categories;
            const offer = this.createOffer(currentContent.offer);
            const image = this.createImage(currentContent.image);
            const source = this.createSource(currentContent.source);
            const title = this.createTitle(currentContent.title);
            const quantity = this.createQuantity(currentContent.quantity);
            const costAdd = this.createCostAdd(currentContent.newCost, currentContent.oldCost, currentContent.addButton, currentContent.minusButton, currentContent.productCount, currentContent.plusButton, currentContent.title, categoryType);
            card.append(offer, image, source, title, quantity, costAdd);
            return card;
        },

        createOffer(offerInnerContent){
            const offer = document.createElement('div');
            offer.className = 'offer';
            const offerText = this.createOfferText();
            offer.innerHTML = offerInnerContent;
            offer.append = offerText;
            return offer
        },

        createOfferText(){
            const offerText = document.createElement('strong');
            return offerText;
        },

        createImage(imageSource){
            const image = document.createElement('img');
            image.className = 'cardImages';
            image.src = imageSource;
            return image;
        },

        createSource(sourceInnerContent){
            const source = document.createElement('div');
            source.className = 'source';
            const sourceText = this.createSourceText(sourceInnerContent);
            source.append(sourceText);
            return source;
        },

        createSourceText(sourceInnerContent){
            const sourceText = document.createElement('strong');
            sourceText.innerHTML = sourceInnerContent;
            return sourceText;
        },

        createTitle(titleInnerContent){
            const title = document.createElement('strong');
            title.className = 'cardTitle';
            title.innerHTML = titleInnerContent;
            return title;
        },

        createQuantity(quantityInnerContent){
            const quantity = document.createElement('p');
            quantity.innerHTML = quantityInnerContent;
            return quantity;
        },

        createCostAdd(newCostInnerContent, oldCostInnerContent, addButtonInnerContent, minusButtonInnerContent, productCountInnerContent, plusButtonInnerContent, titleInnerContent, categoryType){
            const costAdd = document.createElement('div');
            costAdd.className = 'costAdd';
            const cost = this.createCost(newCostInnerContent, oldCostInnerContent);
            const addButton = this.createAddButton(addButtonInnerContent, productCountInnerContent, titleInnerContent, categoryType);
            const minusProductCountPlus = this.createMinusProductCountPlus(minusButtonInnerContent, productCountInnerContent, plusButtonInnerContent, titleInnerContent, categoryType);
            costAdd.append(cost, addButton, minusProductCountPlus);
            return costAdd;
        },

        createCost(newCostInnerContent, oldCostInnerContent){
            const cost = document.createElement('div');
            cost.className = 'cost';
            const newCost = this.createNewCost(newCostInnerContent);
            const oldCost = this.createOldCost(oldCostInnerContent);
            cost.append(newCost, oldCost);
            return cost;
        },

        createNewCost(newCostInnerContent){
            const newCost = document.createElement('strong');
            newCost.innerHTML = newCostInnerContent;
            return newCost;
        },

        createOldCost(oldCostInnerContent){
            const oldCost = document.createElement('p');
            oldCost.innerHTML = oldCostInnerContent;
            return oldCost;
        },

        createAddButton(addButtonInnerContent, productCountInnerContent, titleInnerContent, categoryType){
            const addButton = document.createElement('button');
            addButton.className = 'addButton';
            addButton.innerHTML = addButtonInnerContent;

            if(productCountInnerContent != 0)
                addButton.style.display = 'none';

            function handleProductAddition(){
                this.onClickAddButton(titleInnerContent, categoryType)
            };
            let bindedHandleProductAddition = handleProductAddition.bind(this);
            addButton.addEventListener("click", bindedHandleProductAddition);

            return addButton;
        },

        createMinusProductCountPlus(minusButtonInnerContent, productCountInnerContent, plusButtonInnerContent, titleInnerContent, categoryType){
            const minusProductCountPlus = document.createElement('div');
            minusProductCountPlus.className = 'minusProductCountPlus';
            const minusButton = this.createMinusButton(minusButtonInnerContent, titleInnerContent, categoryType);
            const productCount = this.createProductCount(productCountInnerContent);
            const plusButton = this.createPlusButton(plusButtonInnerContent, titleInnerContent, categoryType); 
            minusProductCountPlus.append(minusButton, productCount, plusButton);
            if(productCountInnerContent == 0){
                minusProductCountPlus.style.display = 'none';
            }
            return minusProductCountPlus;  
        },

        createMinusButton(minusButtonInnerContent, titleInnerContent, categoryType){
            const minusButton = document.createElement('button');
            minusButton.innerHTML = minusButtonInnerContent;

            function handleProductSubtraction(){
                this.onClickMinusButton(titleInnerContent, categoryType)
            };
            let bindedHandleProductSubtraction = handleProductSubtraction.bind(this);
            minusButton.addEventListener("click", bindedHandleProductSubtraction);

            return minusButton;
        },

        createProductCount(productCountInnerContent){
            const productCount = document.createElement('p');
            productCount.innerHTML = productCountInnerContent;
            return productCount;
        },

        createPlusButton(plusButtonInnerContent, titleInnerContent, categoryType){
            const plusButton = document.createElement('button');
            plusButton.innerHTML = plusButtonInnerContent;

            function handleProductAddition(){
                this.onClickPlusButton(titleInnerContent, categoryType)
            };
            let bindedHandleProductAddition = handleProductAddition.bind(this);
            plusButton.addEventListener("click", bindedHandleProductAddition);

            return plusButton;
        },

        onClickAddButton(currentProductTitle, categoryType){
            controller.addToCart(currentProductTitle);
            controller.incrementProductCount(currentProductTitle, categoryType);
        },

        onClickMinusButton(currentProductTitle, categoryType){
            controller.updateCart(currentProductTitle, -1);
            controller.decrementProductCount(currentProductTitle, categoryType);
        },

        onClickPlusButton(currentProductTitle, categoryType){
            controller.updateCart(currentProductTitle, 1);
            controller.incrementProductCount(currentProductTitle, categoryType);
        }
    },

    cartView : {
        init(){
            this.productsInCart = document.createElement('div');
            this.productsInCart.style.display = 'none';

            this.addToCartButton = document.getElementById('myCartButton');
            
            function callingRenderButton(){
                this.render();
            };
            let bindingCallingRenderButton = callingRenderButton.bind(this)
            this.addToCartButton.addEventListener("click", bindingCallingRenderButton);
        },

        render(){
            this.mainContentDetails = document.getElementById('mainContentDetails');
            this.mainContentDetails.style.display = 'none';
            this.productsInCart.style.display = 'initial';
            this.productsInCart.innerHTML = '';
            const cartProductsHeader = document.createElement('strong');
            cartProductsHeader.innerHTML = 'Items in Cart';
            this.productsInCart.append(cartProductsHeader);

            const cartProductsContent = controller.getProductsInCart();
            for(let i=0; i<cartProductsContent.length; i++){
                const currentContent = cartProductsContent[i];
                const title = this.makeTitle(currentContent.productTitle);
                const productCount = this.makeProductCount(currentContent.productCount);
                const currentProduct = this.makeCurrentProduct(title, productCount);
                this.productsInCart.append(currentProduct);
            }
            const showAllProducts = this.makeShowAllProducts();
            // this.productsInCart.append(controller.getTotalCost());
            this.productsInCart.append(showAllProducts);

            function callingClickingShowAllProducts(){
                this.clickingShowAllProducts();
            };
            let bindingCallingClickingShowAllProducts = callingClickingShowAllProducts.bind(this);
            showAllProducts.addEventListener("click", bindingCallingClickingShowAllProducts);
            
            
            const flexContainer = document.getElementById('flexContainer');
            flexContainer.append(this.productsInCart);
        },

        makeTitle(titleInnerContent){
            const title = document.createElement('span');
            title.innerHTML = titleInnerContent;
            return title;
        },

        makeProductCount(productCountInnerContent){
            const productCount = document.createElement('span');
            productCount.innerHTML = productCountInnerContent;
            return productCount;
        },

        makeCurrentProduct(title, productCount){
            const currentProduct = document.createElement('div');
            currentProduct.append(title, productCount);
            return currentProduct;
        },

        makeShowAllProducts(){
            const showAllProducts = document.createElement('button');
            showAllProducts.innerHTML = 'Back To Products';
            return showAllProducts;
        },

        clickingShowAllProducts(){
            this.productsInCart.style.display = 'none';
            this.mainContentDetails.style.display = 'flex';
        }
    }

}



const controller = {
    init(){
        model.init();
        view.init();
    },

    getSidebarElements(){
        return model.getSidebarContents();;
    },

    getCategoryDisplayProductsContent(categoryType){
        return model.getProductsFilteredByCategories(categoryType);
    },

    renderDisplayProductsView(categoryType){
        return view.displayProductsView.render(categoryType);
    },

    getProductsFilteredByCount(){
        return model.getProductsFilteredByCount();
    },

    incrementProductCount(currentProductTitle, categoryType){
        let ind = this.findIndexOfProduct(currentProductTitle);
        //model.DISPLAY_PRODUCTS_CONTENT[ind].productCount++;
        model.updateCurrentProductContent(ind, 1)
        this.renderDisplayProductsView(categoryType);
    },

    decrementProductCount(currentProductTitle, categoryType){
        let ind = this.findIndexOfProduct(currentProductTitle);
        //model.DISPLAY_PRODUCTS_CONTENT[ind].productCount--;
        model.updateCurrentProductContent(ind, -1);
        this.renderDisplayProductsView(categoryType);
    },

    addToCart(productTitle){
        model.addToCart(productTitle);
    },

    updateCart(productTitle, val){
        model.updateCartContent(productTitle, val);
    },

    getProductsInCart(){
        return model.getCartContent();
    },

    findIndexOfProduct(currentProductTitle){
        const displayProductsContent = model.getDisplayProductsContent();
        for(let index=0; index<displayProductsContent.length; index++){
            //console.log(model.DISPLAY_PRODUCTS_CONTENT[i].title);
            if(displayProductsContent[index].title == currentProductTitle)
                return index;
        }
        return -1;
    },

    // getTotalCost(){
    //     return model.getTotalCost();
    // }
}

controller.init();