const menu = [
    {   
        id: 1, 
        category:'lunch', 
        item: 'Burger',
        price: 20, 
        desc_en: 'Lorem ipsum dolar sit in english', 
        desc_fr: 'Lorem ipsum dolar sit in french', 
        desc_nl: 'Lorem ipsum dolar sit in spanish'
    },

    {   
        id: 2, 
        category:'dinner', 
        item: 'Pizza',
        price: 20, 
        desc_en: 'Lorem ipsum dolar sit in english', 
        desc_fr: 'Lorem ipsum dolar sit in french', 
        desc_nl: 'Lorem ipsum dolar sit in spanish'
    },

    {   
        id: 3, 
        category:'brunch', 
        item: 'sandwich',
        price: 20, 
        desc_en: 'Lorem ipsum dolar sit in english', 
        desc_fr: 'Lorem ipsum dolar sit in french', 
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



