import {sidebarView, displayProductsView} from './view.js';
import {SIDEBAR_CONTENT} from './models/sidebarModel.js';
import {DISPLAY_PRODUCTS_CONTENT} from './models/displayProducts.js';

const controller = {
    controllerInit()
    {
        sidebarView.init(SIDEBAR_CONTENT);
        //console.log(DISPLAY_PRODUCTS_CONTENT[0].categories);
        displayProductsView.init(DISPLAY_PRODUCTS_CONTENT);
    }
}

controller.controllerInit();

//export default controller;