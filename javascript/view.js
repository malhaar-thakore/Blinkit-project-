const displayProductsView = {
    init(DISPLAY_PRODUCTS_CONTENT){
        this.productsToBeSold = document.getElementById('productsToBeSold');
        this.DISPLAY_PRODUCTS_CONTENT = DISPLAY_PRODUCTS_CONTENT;
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
        }
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
    },

    assignInnerContent(){
        this.offer.innerHTML = this.DISPLAY_PRODUCTS_CONTENT[this.i].offer;
        this.image.src = this.DISPLAY_PRODUCTS_CONTENT[this.i].image;
        this.sourceText.innerHTML = this.DISPLAY_PRODUCTS_CONTENT[this.i].source;
        this.title.innerHTML = this.DISPLAY_PRODUCTS_CONTENT[this.i].title;
        this.quantity.innerHTML = this.DISPLAY_PRODUCTS_CONTENT[this.i].quantity;
        this.newCost.innerHTML = this.DISPLAY_PRODUCTS_CONTENT[this.i].newCost;
        this.oldCost.innerHTML = this.DISPLAY_PRODUCTS_CONTENT[this.i].oldCost;
        this.addButton.innerHTML = this.DISPLAY_PRODUCTS_CONTENT[this.i].addButton;
    },

    appendingToElements(){
        this.cost.append(this.newCost, this.oldCost);
        this.costAdd.append(this.cost, this.addButton);
        this.offer.append(this.offerText);
        this.source.append(this.sourceText);
        this.card.append(this.offer, this.image, this.source, this.title, this.quantity, this.costAdd);
        this.productsToBeSold.append(this.card);
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

            this.categoryButton.addEventListener("click", function(){
                this.ALL_PRODUCTS = document.getElementsByClassName('card');
            for(this.i=0; this.i < this.ALL_PRODUCTS.length; this.i++){
            // console.log(this.ALL_PRODUCTS[this.i].classList);
            // console.log(assignedCategory);
                if(this.ALL_PRODUCTS[this.i].classList.contains(assignedCategory))
                {
                 this.ALL_PRODUCTS[this.i].style.display = "initial";
                }
                else
                {
                    this.ALL_PRODUCTS[this.i].style.display = "none";
                }
            }
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
            console.log(assignedCategory);
            // if(this.ALL_PRODUCTS[this.i].classList.contains(this.assignedCategory))
            // {
            //     this.ALL_PRODUCTS[this.i].style.display = "initial";
            // }
            // else
            // {
            //     this.ALL_PRODUCTS[this.i].style.display = "none";
            // }
        }
    }
}
export {sidebarView, displayProductsView};