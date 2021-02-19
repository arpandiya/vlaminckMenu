const menu = [
    {   
        page: '2 of 8', 
        category:'hapjes/snacks/drinks', 
        item: 'Homemade Sauce',
        price: 50, 
        desc_en: 'This is my custom english description of the food.', 
        desc_fr: 'Lorem ipsum dolar sit in french. This is awkwared to write random words just to fill the spaces for testing purposes.', 
        desc_bl: 'Lorem ipsum dolar sit in spanish. his is awkwared to write random words just to fill the spaces for testing purposes. his is awkwared to write random words just to fill the spaces for testing purposes.'
    },
    {   
        item: 'sandwich',
        price: 20, 
        desc_en: 'Lorem ipsum dolar sit in english. This is awkwared to write random words just to fill the spaces for testing purposes.', 
        desc_fr: 'Lorem ipsum dolar sit in french. This is awkwared to write random words just to fill the spaces for testing purposes.', 
        desc_bl: 'Lorem ipsum dolar sit in spanish'
    },
    {   
        item: 'Sausage',
        price: 10, 
        desc_en: 'Lorem ipsum dolar sit in english. This is awkwared to write random words just to fill the spaces for testing purposes.', 
        desc_fr: 'Lorem ipsum dolar sit in french. This is awkwared to write random words just to fill the spaces for testing purposes.', 
        desc_bl: 'Lorem ipsum dolar sit in spanish'
    },
    {   
        item: 'Hot dog',
        price: 12, 
        desc_en: 'Lorem ipsum dolar sit in english. This is awkwared to write random words just to fill the spaces for testing purposes.', 
        desc_fr: 'Lorem ipsum dolar sit in french. This is awkwared to write random words just to fill the spaces for testing purposes.', 
        desc_bl: 'Lorem ipsum dolar sit in spanish'
    },
    

    {   
        item: 'sandwich',
        price: 20, 
        desc_en: 'Lorem ipsum dolar sit in english. This is awkwared to write random words just to fill the spaces for testing purposes.', 
        desc_fr: 'Lorem ipsum dolar sit in french. This is awkwared to write random words just to fill the spaces for testing purposes.', 
        desc_bl: 'Lorem ipsum dolar sit in spanish'
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



