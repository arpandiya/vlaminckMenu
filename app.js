const menu = [
    {   
        page: '1 of 8', 
        category:'hapjes/snacks', 
        item: 'Burger',
        price: 20, 
        desc_en: 'Lorem ipsum dolar sit in english. This is awkwared to write random words just to fill the spaces for testing purposes.', 
        desc_fr: 'Lorem ipsum dolar sit in french. This is awkwared to write random words just to fill the spaces for testing purposes.', 
        desc_nl: 'Lorem ipsum dolar sit in spanish. his is awkwared to write random words just to fill the spaces for testing purposes. his is awkwared to write random words just to fill the spaces for testing purposes.'
    },

    {   
        
        item: 'Pizza',
        price: 20, 
        desc_en: 'Lorem ipsum dolar sit in english. This is awkwared to write random words just to fill the spaces for testing purposes. his is awkwared to write random words just to fill the spaces for testing purposes.', 
        desc_fr: 'Lorem ipsum dolar sit in french. This is awkwared to write random words just to fill the spaces for testing purposes.', 
        desc_nl: 'Lorem ipsum dolar sit in spanish'
    },

    {   
        item: 'sandwich',
        price: 20, 
        desc_en: 'Lorem ipsum dolar sit in english. This is awkwared to write random words just to fill the spaces for testing purposes.', 
        desc_fr: 'Lorem ipsum dolar sit in french. This is awkwared to write random words just to fill the spaces for testing purposes.', 
        desc_nl: 'Lorem ipsum dolar sit in spanish'
    },
    
];
//  import menu from './menu.js';
// Vue.component('menu-item', {
//     props: ['item'],
//     template: "<div class='item'></div>",
// });
console.log(menu);

const app = new Vue({
    el: '#app',
    data: {
        menu: menu,

    },

    
});



