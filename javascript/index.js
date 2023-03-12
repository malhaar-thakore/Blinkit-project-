const SIDEBAR_CATEGORY_TYPES = {
    all : 'all',
    freshVegetables : 'freshVegetables',
    freshFruits : 'freshFruits',
    exotics : 'exotics',
    seasonal : 'seasonal',
    organicHydroponic : 'organicHydroponic',
    freshlyCutSprouts : 'freshlyCutSprouts'
}

const DISPLAY_PRODUCTS_CATEGORY_TYPES = {
    all : 'all',
    freshVegetables : 'freshVegetables',
    freshFruits : 'freshFruits',
    exotics : 'exotics',
    seasonal : 'seasonal',
    organicHydroponic : 'organicHydroponic',
    freshlyCutSprouts : 'freshlyCutSprouts',
    card: 'card'
}

function sidebarContent(categoryImage, categoryText, categoryType){
    this.categoryImage = categoryImage;
    this.categoryText = categoryText;
    this.categoryType = categoryType
};

function belongsToCategory(currentProduct){
    if(currentProduct.categories.includes(this)){
        return true;
    }
    else{
        return false;
    }
};

function getProductCountFromLocalStorage(cartContent){
    this.productCount = parseInt(localStorage.getItem(this.title));
    cartContent.push(new cartProduct(this.title, this.productCount));
}



function displayProduct({offer, image, source, title, quantity, newCost, oldCost,categories, productCount, cartContent}){
    this.offer = offer;
    this.image = image;
    this.source = source;
    this.title = title;
    this.quantity = quantity;
    this.newCost = newCost;
    this.oldCost = oldCost;
    this.categories = categories;
    if(localStorage.getItem(title) == null || localStorage.getItem(title) == '0'){
        this.productCount = productCount;
    } 
    else{
        
        this.productCount = parseInt(localStorage.getItem(this.title));
        cartContent.push(new cartProduct(this.title, this.productCount));
        
    }
};

function cartProduct(currentProductTitle, productCount){
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
        
    },

    createSidebarData(){
        this.sidebarContents = [
            new sidebarContent('images/potato-img.png', 'All', SIDEBAR_CATEGORY_TYPES.all),
            new sidebarContent('images/potato-img.png', 'Fresh Vegetables', SIDEBAR_CATEGORY_TYPES.freshVegetables),
            new sidebarContent('images/fresh-fruits.jpeg', 'Fresh Fruits', SIDEBAR_CATEGORY_TYPES.freshFruits),
            new sidebarContent('images/potato-img.png', 'Exotics', SIDEBAR_CATEGORY_TYPES.exotics),
            new sidebarContent('images/potato-img.png', 'Seasonal', SIDEBAR_CATEGORY_TYPES.seasonal),
            new sidebarContent('images/organic-hydroponic.jpeg', 'Organic & Hydroponic', SIDEBAR_CATEGORY_TYPES.organicHydroponic),
            new sidebarContent('images/freshly-cut-sprouts.webp', 'Freshly Cut & Sprouts', SIDEBAR_CATEGORY_TYPES.freshlyCutSprouts)
        ]
    },

    createDisplayProducts(){
        this.displayProductsContent = [
            new displayProduct({
                offer: 11, 
                image: 'images/potato-img.png', 
                source: 5, 
                title: 'New Potato(Aloo)', 
                quantity: '1 Kg', 
                newCost: 15, 
                oldCost: 17, 
                categories: DISPLAY_PRODUCTS_CATEGORY_TYPES.card + ' ' + DISPLAY_PRODUCTS_CATEGORY_TYPES.all + ' ' + DISPLAY_PRODUCTS_CATEGORY_TYPES.freshVegetables, 
                productCount: 0, 
                cartContent: this.cartContent}),

            new displayProduct({
                offer: 21,
                image: 'images/onion-img.png',
                source: 5, 
                title: 'Onion(Pyaz)',
                quantity: '1 Kg',
                newCost: 32,
                oldCost: 41,
                categories: DISPLAY_PRODUCTS_CATEGORY_TYPES.card + ' ' + DISPLAY_PRODUCTS_CATEGORY_TYPES.all + ' ' + DISPLAY_PRODUCTS_CATEGORY_TYPES.freshVegetables,
                productCount: 0,
                cartContent: this.cartContent}),

            new displayProduct({
                offer: 10,
                image: 'images/carrot-img.jpeg', source: 5,
                title: 'Local Carrot',
                quantity: '500 g', 
                newCost: 17,
                oldCost: 19,
                categories: DISPLAY_PRODUCTS_CATEGORY_TYPES.card + ' ' + DISPLAY_PRODUCTS_CATEGORY_TYPES.all + ' ' + DISPLAY_PRODUCTS_CATEGORY_TYPES.freshVegetables,
                productCount: 0,
                cartContent: this.cartContent}),

            new displayProduct({
                offer: 16,
                image: 'images/green-chilli-img.png',
                source: 5, 
                title: 'Green Chilli(Hari Mirch)',
                quantity: '100 g',
                newCost: 10,
                oldCost: 12,
                categories: DISPLAY_PRODUCTS_CATEGORY_TYPES.card + ' ' + DISPLAY_PRODUCTS_CATEGORY_TYPES.all + ' ' + DISPLAY_PRODUCTS_CATEGORY_TYPES.freshVegetables,
                productCount: 0,
                cartContent: this.cartContent}),

            new displayProduct({
                offer: 21,
                image: 'images/hybrid-tomato.png',
                source: 5,
                title: 'Hybrid Tomato(Tamatar)',
                quantity: '1 Kg',
                newCost: 15,
                oldCost: 17, 
                categories: DISPLAY_PRODUCTS_CATEGORY_TYPES.card + ' ' + DISPLAY_PRODUCTS_CATEGORY_TYPES.all + ' ' + DISPLAY_PRODUCTS_CATEGORY_TYPES.freshVegetables,
                productCount: 0,
                cartContent: this.cartContent}),

            new displayProduct({
                offer: 17,
                image: 'images/cauliflower.jpeg',
                source: 5,
                title: 'Cauliflower',
                quantity: '500 g',
                newCost: 15,
                oldCost: 19,
                categories: DISPLAY_PRODUCTS_CATEGORY_TYPES.card + ' ' + DISPLAY_PRODUCTS_CATEGORY_TYPES.all + ' ' + DISPLAY_PRODUCTS_CATEGORY_TYPES.freshVegetables,
                productCount: 0,
                cartContent: this.cartContent}),
            
            new displayProduct({
                offer: 11,
                image: 'images/potato-img.png',
                source: 5,
                title: 'Mango',
                quantity: '1 Kg',
                newCost: 15,
                oldCost: 17,
                categories: DISPLAY_PRODUCTS_CATEGORY_TYPES.card + ' ' + DISPLAY_PRODUCTS_CATEGORY_TYPES.all + ' ' + DISPLAY_PRODUCTS_CATEGORY_TYPES.freshFruits,
                productCount: 0,
                cartContent: this.cartContent}),

            new displayProduct({
                offer: 21,
                image: 'images/onion-img.png',
                source: 5,
                title: 'Apple',
                quantity: '1 Kg',
                newCost: 32,
                oldCost: 41,
                categories: DISPLAY_PRODUCTS_CATEGORY_TYPES.card + ' ' + DISPLAY_PRODUCTS_CATEGORY_TYPES.all + ' ' + DISPLAY_PRODUCTS_CATEGORY_TYPES.freshFruits,
                productCount: 0,
                cartContent: this.cartContent}),

            new displayProduct({
                offer: 10,
                image: 'images/carrot-img.jpeg',
                source: 5,
                title: 'Banana',
                quantity: '500 g',
                newCost: 17,
                oldCost: 19,
                categories: DISPLAY_PRODUCTS_CATEGORY_TYPES.card + ' ' + DISPLAY_PRODUCTS_CATEGORY_TYPES.all + ' ' + DISPLAY_PRODUCTS_CATEGORY_TYPES.freshFruits,
                productCount: 0,
                cartContent: this.cartContent}),

            new displayProduct({
                offer: 16,
                image: 'images/green-chilli-img.png',
                source: 5,
                title: 'Grapes',
                quantity: '100 g',
                newCost: 10,
                oldCost: 12,
                categories: DISPLAY_PRODUCTS_CATEGORY_TYPES.card + ' ' + DISPLAY_PRODUCTS_CATEGORY_TYPES.all + ' ' + DISPLAY_PRODUCTS_CATEGORY_TYPES.freshFruits,
                productCount: 0,
                cartContent: this.cartContent}),

            new displayProduct({
                offer: 21,
                image: 'images/hybrid-tomato.png',
                source: 5,
                title: 'Papaya',
                quantity: '1 Kg',
                newCost: 15,
                oldCost: 17,
                categories: DISPLAY_PRODUCTS_CATEGORY_TYPES.card + ' ' + DISPLAY_PRODUCTS_CATEGORY_TYPES.all + ' ' + DISPLAY_PRODUCTS_CATEGORY_TYPES.freshFruits,
                productCount: 0,
                cartContent: this.cartContent}),

            new displayProduct({
                offer: 11,
                image: 'images/potato-img.png',
                source: 5,
                title: 'Broccoli',
                quantity: '1 Kg',
                newCost: 15,
                oldCost: 17,
                categories: DISPLAY_PRODUCTS_CATEGORY_TYPES.card + ' ' + DISPLAY_PRODUCTS_CATEGORY_TYPES.all + ' ' + DISPLAY_PRODUCTS_CATEGORY_TYPES.exotics,
                productCount: 0,
                cartContent: this.cartContent}),

            new displayProduct({
                offer: 21,
                image: 'images/onion-img.png',
                source: 5,
                title: 'Shiitake Mushroom',
                quantity: '1 Kg',
                newCost: 32,
                oldCost: 41,
                categories: DISPLAY_PRODUCTS_CATEGORY_TYPES.card + ' ' + DISPLAY_PRODUCTS_CATEGORY_TYPES.all + ' ' + DISPLAY_PRODUCTS_CATEGORY_TYPES.exotics,
                productCount: 0,
                cartContent: this.cartContent}),

            new displayProduct({
                offer:10,
                image: 'images/carrot-img.jpeg',
                source: 5,
                title: 'Red Capsicum',
                quantity: '500 g',
                newCost: 17,
                oldCost: 19,
                categories: DISPLAY_PRODUCTS_CATEGORY_TYPES.card + ' ' + DISPLAY_PRODUCTS_CATEGORY_TYPES.all + ' ' + DISPLAY_PRODUCTS_CATEGORY_TYPES.exotics,
                productCount: 0,
                cartContent: this.cartContent}),

            new displayProduct({
                offer: 16,
                image: 'images/green-chilli-img.png',
                source: 5,
                title: 'King Trumpet Mushroom',
                quantity: '100 g',
                newCost: 10,
                oldCost: 12,
                categories: DISPLAY_PRODUCTS_CATEGORY_TYPES.card + ' ' + DISPLAY_PRODUCTS_CATEGORY_TYPES.all + ' ' + DISPLAY_PRODUCTS_CATEGORY_TYPES.exotics,
                productCount: 0,
                cartContent: this.cartContent}),

            new displayProduct({
                offer: 11,
                image: 'images/potato-img.png',
                source: 5,
                title: 'Amla',
                quantity: '1 Kg',
                newCost: 15,
                oldCost: 17,
                categories: DISPLAY_PRODUCTS_CATEGORY_TYPES.card + ' ' + DISPLAY_PRODUCTS_CATEGORY_TYPES.all + ' ' + DISPLAY_PRODUCTS_CATEGORY_TYPES.seasonal,
                productCount: 0,
                cartContent: this.cartContent}),

            new displayProduct({
                offer: 21,
                image: 'images/onion-img.png',
                source: 5,
                title: 'Nagpur Orange',
                quantity: '1 Kg',
                newCost: 32,
                oldCost: 41,
                categories: DISPLAY_PRODUCTS_CATEGORY_TYPES.card + ' ' + DISPLAY_PRODUCTS_CATEGORY_TYPES.all + ' ' + DISPLAY_PRODUCTS_CATEGORY_TYPES.seasonal,
                productCount: 0,
                cartContent: this.cartContent}),

            new displayProduct({
                offer: 10,
                image: 'images/carrot-img.jpeg',
                source: 5,
                title: 'Groundnut',
                quantity: '500 g',
                newCost: 17,
                oldCost: 19,
                categories: DISPLAY_PRODUCTS_CATEGORY_TYPES.card + ' ' + DISPLAY_PRODUCTS_CATEGORY_TYPES.all + ' ' + DISPLAY_PRODUCTS_CATEGORY_TYPES.seasonal,
                productCount: 0,
                cartContent: this.cartContent}),

            new displayProduct({
                offer: 11,
                image: 'images/potato-img.png',
                source: 5,
                title: 'Organic Radish',
                quantity: '1 Kg',
                newCost: 15,
                oldCost: 17,
                categories: DISPLAY_PRODUCTS_CATEGORY_TYPES.card + ' ' + DISPLAY_PRODUCTS_CATEGORY_TYPES.all + ' ' + DISPLAY_PRODUCTS_CATEGORY_TYPES.organicHydroponic,
                productCount: 0,
                cartContent: this.cartContent}),

            new displayProduct({
                offer: 21,
                image: 'images/onion-img.png',
                source: 5,
                title: 'Hydroponic Baby Corn',
                quantity: '1 Kg',
                newCost: 32,
                oldCost: 41,
                categories: DISPLAY_PRODUCTS_CATEGORY_TYPES.card + ' ' + DISPLAY_PRODUCTS_CATEGORY_TYPES.all + ' ' + DISPLAY_PRODUCTS_CATEGORY_TYPES.organicHydroponic,
                productCount: 0,
                cartContent: this.cartContent}),

            new displayProduct({
                offer: 11,
                image: 'images/potato-img.png',
                source: 5,
                title: 'Sweet Corn - Packet',
                quantity: '1 Kg',
                newCost: 15,
                oldCost: 17,
                categories: DISPLAY_PRODUCTS_CATEGORY_TYPES.card + ' ' + DISPLAY_PRODUCTS_CATEGORY_TYPES.all + ' ' + DISPLAY_PRODUCTS_CATEGORY_TYPES.freshlyCutSprouts,
                productCount: 0,
                cartContent: this.cartContent})
        ]
    },

    getSidebarContents(){
        return this.sidebarContents;
    },

    getDisplayProductsContent(){
        return this.displayProductsContent;
    },

    getProductsFilteredByCategories(categoryType){
        
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
        this.cartContent.push(new cartProduct(currentProductTitle, 1));
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
}


const view = {

    init(){
        this.mainPageView.init();
        this.cartView.init();
    },

    displayProductsViewRender(categoryType){
        this.mainPageView.displayProductsViewRender(categoryType);
    },

    mainPageView: {
        init(){
            this.showLoadingView.init();
            const areProductsRetrievedPromise = new Promise((resolve, reject) => {
                setTimeout(() => {
                const sidebarElements = controller.getSidebarElements();
                const displayProductsContent = controller.getProductsFilteredByCategories('all');
                if(sidebarElements && displayProductsContent){
                    resolve();
                }
                else{
                    reject();
                }
                },"1000")
            });

            areProductsRetrievedPromise.
            then(() => this.initializeSidebarAndProducts()).
            catch(() => this.displayRejectionOfRetrievingData());
           
        },

        

        initializeSidebarAndProducts(){
            
            const loadingText = document.getElementById('loadingText');
            loadingText.style.display = 'none';
            this.sidebarView.init();
            this.displayProductsView.init();
        },

        displayRejectionOfRetrievingData(){
            const failedMsg = document.createElement('p');
            failedMsg.innerHTML = 'Failed to load data';
            const centerBar = document.getElementById('centerBar');
            centerBar.append(failedMsg);
        },

        displayProductsViewRender(categoryType){
            this.displayProductsView.render(categoryType);
        },

    showLoadingView: {
        init(){
            const centerBar = document.getElementById('centerBar');
            this.render(centerBar);
        },

        render(centerBar){
            const loadingText = document.createElement('p');
            loadingText.id = 'loadingText';
            loadingText.innerHTML = 'Loading the Products...';
            centerBar.append(loadingText);
        }
    },

    sidebarView : {
        init(){
            this.sidebar = document.getElementById('sidebar');
            this.render();
        },

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


        render(categoryType){
            
            this.productsToBeSold.innerHTML = '';
            const displayProductsContent = controller.getProductsFilteredByCategories(categoryType);
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
            const costAndAddButtonDiv = this.mergeCostAndAddButton({
                newCostInnerContent: currentContent.newCost,
                oldCostInnerContent: currentContent.oldCost,
                productCountInnerContent: currentContent.productCount,
                titleInnerContent: currentContent.title,
                categoryType: categoryType
            });
            card.append(offer, image, source, title, quantity, costAndAddButtonDiv);
            return card;
        },

        createOffer(offerInnerContent){
            const offer = document.createElement('div');
            offer.className = 'offer';
            const offerText = this.createOfferText();
            offer.innerHTML = offerInnerContent + '% OFF';
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
            sourceText.innerHTML = 'Sourced at ' + sourceInnerContent + 'AM';
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

        mergeCostAndAddButton({newCostInnerContent, oldCostInnerContent, productCountInnerContent, titleInnerContent, categoryType}){
            const costAndAddButtonDiv = document.createElement('div');
            costAndAddButtonDiv.className = 'costAdd';
            const cost = this.createCost(newCostInnerContent, oldCostInnerContent);
            const addButton = this.createAddButton(productCountInnerContent, titleInnerContent, categoryType);
            const minusProductCountPlus = this.createMinusProductCountPlus(productCountInnerContent, titleInnerContent, categoryType);
            costAndAddButtonDiv.append(cost, addButton, minusProductCountPlus);
            return costAndAddButtonDiv;
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
            newCost.innerHTML = 'Rs. ' + newCostInnerContent;
            return newCost;
        },

        createOldCost(oldCostInnerContent){
            const oldCost = document.createElement('p');
            oldCost.innerHTML = 'Rs. ' + oldCostInnerContent;
            return oldCost;
        },

        createAddButton(productCountInnerContent, titleInnerContent, categoryType){
            const addButton = document.createElement('button');
            addButton.className = 'addButton';
            addButton.innerHTML = 'ADD';

            if(productCountInnerContent != 0)
                addButton.style.display = 'none';

            function handleProductAddition(){
                this.onClickAddButton(titleInnerContent, categoryType)
            };
            let bindedHandleProductAddition = handleProductAddition.bind(this);
            addButton.addEventListener("click", bindedHandleProductAddition);

            return addButton;
        },

        createMinusProductCountPlus(productCountInnerContent, titleInnerContent, categoryType){
            const minusProductCountPlus = document.createElement('div');
            minusProductCountPlus.className = 'minusProductCountPlus';
            const minusButton = this.createMinusButton(titleInnerContent, categoryType);
            const productCount = this.createProductCount(productCountInnerContent);
            const plusButton = this.createPlusButton(titleInnerContent, categoryType); 
            minusProductCountPlus.append(minusButton, productCount, plusButton);
            if(productCountInnerContent == 0){
                minusProductCountPlus.style.display = 'none';
            }
            return minusProductCountPlus;  
        },

        createMinusButton(titleInnerContent, categoryType){
            const minusButton = document.createElement('button');
            minusButton.innerHTML = '-';

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

        createPlusButton(titleInnerContent, categoryType){
            const plusButton = document.createElement('button');
            plusButton.innerHTML = '+';

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
},

    cartView : {
        init(){
            this.myCartButton = document.getElementById('myCartButton');
            let bindedRender = this.render.bind(this);
            this.myCartButton.addEventListener("click", bindedRender);
        },

        render(){
            this.mainContentDetails = document.getElementById('mainContentDetails');
            this.mainContentDetails.style.display = 'none';

            this.productsInCart = this.createProductsInCart();

            const showAllProducts = this.createShowAllProducts();
            this.productsInCart.append(showAllProducts);

            const flexContainer = document.getElementById('flexContainer');
            flexContainer.append(this.productsInCart);
        },

        createProductsInCart(){
            const productsInCart = document.createElement('div');
            productsInCart.innerHTML = '';
            
            const cartProductsHeader = this.createCartProductsHeader();
            productsInCart.append(cartProductsHeader);
            
            const cartProductsContent = controller.getProductsInCart();

            for(let index=0; index<cartProductsContent.length; index++){
                const currentProduct = this.createCurrentProduct(cartProductsContent[index]);
                productsInCart.append(currentProduct);
            }
            
            
            return productsInCart;
        },

        createCartProductsHeader(){
            const cartProductsHeader = document.createElement('strong');
            cartProductsHeader.innerHTML = 'Items in Cart';
            return cartProductsHeader;
        },

        createCurrentProduct(currentContent){
            const currentProduct = document.createElement('div');
            const productTitle = this.createProductTitle(currentContent.productTitle);
            const productCount = this.createProductCount(currentContent.productCount);
            currentProduct.append(productTitle, productCount);
            return currentProduct;
        },

        createProductTitle(productTitleInnerContent){
            const productTitle = document.createElement('span');
            productTitle.innerHTML = productTitleInnerContent;
            return productTitle;
        },

        createProductCount(productCountInnerContent){
            const productCount = document.createElement('span');
            productCount.innerHTML = productCountInnerContent;
            return productCount;
        },

        createShowAllProducts(){
            const showAllProducts = document.createElement('button');
            showAllProducts.innerHTML = 'Back To Products';

            let bindedOnClickShowAllProducts = this.onClickShowAllProducts.bind(this);
            showAllProducts.addEventListener("click", bindedOnClickShowAllProducts);

            return showAllProducts;
        },

        onClickShowAllProducts(productsInCart){
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

    getProductsFilteredByCategories(categoryType){
        return model.getProductsFilteredByCategories(categoryType);
    },

    renderDisplayProductsView(categoryType){
        return view.displayProductsViewRender(categoryType);
    },

    getProductsFilteredByCount(){
        return model.getProductsFilteredByCount();
    },

    incrementProductCount(currentProductTitle, categoryType){
        let ind = this.findIndexOfProduct(currentProductTitle);
        model.updateCurrentProductContent(ind, 1)
        this.renderDisplayProductsView(categoryType);
    },

    decrementProductCount(currentProductTitle, categoryType){
        let ind = this.findIndexOfProduct(currentProductTitle);
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
           
            if(displayProductsContent[index].title == currentProductTitle)
                return index;
        }
        return -1;
    },

   
}

controller.init();