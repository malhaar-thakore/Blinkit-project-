const displayProductsView = {
    init(DISPLAY_PRODUCTS_CONTENT){
        this.productsToBeSold = document.getElementById('productsToBeSold');
        this.DISPLAY_PRODUCTS_CONTENT = DISPLAY_PRODUCTS_CONTENT;

        this.addProductToCart = this.addProductToCart.bind(this);

        //console.log(this.DISPLAY_PRODUCTS_CONTENT[0].categories);
        this.render();
    },

    render(){
        for(this.i=0; this.i < this.DISPLAY_PRODUCTS_CONTENT.length; this.i++)
        {
            this.assignElement();

            this.assignClassName();

            this.assignInnerContent();

            this.appendingToElements();

            this.initialDisplayProperty();

            let assignedProduct = this.DISPLAY_PRODUCTS_CONTENT[this.i].title;

            this.addButton.addEventListener('click', () => {
                this.addProductToCart(assignedProduct);
            })
        }
        
        this.putButtonsinArray();
    },

    assignElement(){
        this.offer = document.createElement('div');
        this.offerText = document.createElement('strong');
        this.image = document.createElement('img');
        this.source = document.createElement('div');
        this.sourceText = document.createElement('strong');
        this.title = document.createElement('strong');
        this.quantity = document.createElement('p');
        this.cost = document.createElement('div');
        this.newCost = document.createElement('strong');
        this.oldCost = document.createElement('p');
        this.addButton = document.createElement('button');
        this.costAdd = document.createElement('div');
        this.card = document.createElement('div');
        this.minusButton = document.createElement('button');
        this.productCount = document.createElement('p');
        this.plusButton = document.createElement('button');
        this.minusProductCountPlus = document.createElement('div');
    },

    assignClassName(){
        this.offer.className = 'offer';
        this.image.className = 'cardImages';
        this.source.className = 'source';
        this.title.className = 'cardTitle';
        this.cost.className = 'cost';
        this.addButton.className = 'addButton';
        this.costAdd.className = 'costAdd';
        this.card.className = this.DISPLAY_PRODUCTS_CONTENT[this.i].categories;
        this.minusProductCountPlus.className = 'minusProductCountPlus';
    },

    assignInnerContent(){
        this.offerText.innerHTML = this.DISPLAY_PRODUCTS_CONTENT[this.i].offer;
        this.image.src = this.DISPLAY_PRODUCTS_CONTENT[this.i].image;
        this.sourceText.innerHTML = this.DISPLAY_PRODUCTS_CONTENT[this.i].source;
        this.title.innerHTML = this.DISPLAY_PRODUCTS_CONTENT[this.i].title;
        this.quantity.innerHTML = this.DISPLAY_PRODUCTS_CONTENT[this.i].quantity;
        this.newCost.innerHTML = this.DISPLAY_PRODUCTS_CONTENT[this.i].newCost;
        this.oldCost.innerHTML = this.DISPLAY_PRODUCTS_CONTENT[this.i].oldCost;
        this.addButton.innerHTML = this.DISPLAY_PRODUCTS_CONTENT[this.i].addButton;
        this.minusButton.innerHTML = this.DISPLAY_PRODUCTS_CONTENT[this.i].minusButton;
        this.productCount.innerHTML = this.DISPLAY_PRODUCTS_CONTENT[this.i].productCount;
        this.plusButton.innerHTML = this.DISPLAY_PRODUCTS_CONTENT[this.i].plusButton;
    },

    appendingToElements(){
        this.cost.append(this.newCost, this.oldCost);
        this.offer.append(this.offerText);
        this.source.append(this.sourceText);
        this.minusProductCountPlus.append(this.minusButton, this.productCount, this.plusButton);
        this.costAdd.append(this.cost, this.addButton, this.minusProductCountPlus);
        this.card.append(this.offer, this.image, this.source, this.title, this.quantity, this.costAdd);
        this.productsToBeSold.append(this.card);
    },

    initialDisplayProperty(){
        this.minusProductCountPlus.style.display = 'none';
    },

    putButtonsinArray()
    {
        this.ALL_PRODUCTS = document.getElementsByClassName('card');
        for(let i=0; i<this.ALL_PRODUCTS.length; i++)
        {
            this.allCostAdd[i] = this.ALL_PRODUCTS[i].getElementsByClassName('costAdd');
            // for(let j=0; j<this.allCostAdd.length; j++)
            // {
            //     this.allAddButton = this.allCostAdd[j].getElementsByClassName('addButton');
            //     this.allMinusProductCountPlus = this.allCostAdd[j].getElementsByClassName('minusProductCountPlus');
            // }
        }
    },

    addProductToCart(assignedProduct){
        console.log(this.allMinusProductCountPlus[0]);
        this.currentProductIndex = this.findAssignedProduct(assignedProduct);
        //console.log(this.currentProductIndex);
        this.displayPropertyAfterAddButton();
    },

    findAssignedProduct(assignedProduct){
        for(let i=0; i < this.DISPLAY_PRODUCTS_CONTENT.length; i++)
        {
            if(this.DISPLAY_PRODUCTS_CONTENT[i].title == assignedProduct)
                return i;
        }
        return -1;
    },

    displayPropertyAfterAddButton(){
        this.allAddButton[this.currentProductIndex].style.display = 'none';
        this.allMinusProductCountPlus[this.currentProductIndex].style.display = 'none';
    }
}

const sidebarView = {
    init(SIDEBAR_CONTENT){
        this.sidebar = document.getElementById('sidebar');
        this.SIDEBAR_CONTENT = SIDEBAR_CONTENT;
        this.render();
    },

    render(){
        for(this.i=0; this.i<this.SIDEBAR_CONTENT.length; this.i++){
            this.assignElement();

            this.assignClassName();

            this.assignInnerContent();

            this.appendingToElements();

            let assignedCategory = this.SIDEBAR_CONTENT[this.i].categoryType

            this.categoryButton.addEventListener("click", () => {
                this.displayCategoryProducts(assignedCategory);
            });
        }
    },

    assignElement(){
        this.categoryButton = document.createElement('button');
        this.categoryButtonImage = document.createElement('img');
        this.categoryButtonText = document.createElement('p');
    },

    assignClassName(){
        this.categoryButton.className = 'sidebarButton';
        this.categoryButtonImage.className = 'sidebarImage';
        this.categoryButtonText.className = 'sidebarText';
    },

    assignInnerContent(){
        this.categoryButtonImage.src = this.SIDEBAR_CONTENT[this.i].categoryImage;
        this.categoryButtonText.innerHTML = this.SIDEBAR_CONTENT[this.i].categoryText;
    },

    appendingToElements(){
        this.categoryButton.append(this.categoryButtonImage, this.categoryButtonText);
        this.sidebar.append(this.categoryButton);
    },

    displayCategoryProducts(assignedCategory){
        this.ALL_PRODUCTS = document.getElementsByClassName('card');
        for(this.i=0; this.i < this.ALL_PRODUCTS.length; this.i++){
            //console.log(this.ALL_PRODUCTS[this.i].classList);
            //console.log(assignedCategory);
            if(this.ALL_PRODUCTS[this.i].classList.contains(assignedCategory))
            {
                this.ALL_PRODUCTS[this.i].style.display = "initial";
            }
            else
            {
                this.ALL_PRODUCTS[this.i].style.display = "none";
            }
        }
    }
}
export {sidebarView, displayProductsView};



// function(){
//     this.ALL_PRODUCTS = document.getElementsByClassName('card');
// for(this.i=0; this.i < this.ALL_PRODUCTS.length; this.i++){
// // console.log(this.ALL_PRODUCTS[this.i].classList);
// // console.log(assignedCategory);
//     if(this.ALL_PRODUCTS[this.i].classList.contains(assignedCategory))
//     {
//      this.ALL_PRODUCTS[this.i].style.display = "initial";
//     }
//     else
//     {
//         this.ALL_PRODUCTS[this.i].style.display = "none";
//     }
// }
// }