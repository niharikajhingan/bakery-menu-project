import React, { Component } from 'react';
import './App.css';
import Filters from './Filters';

/*
This list of produce that is passed into the FilteredList component.
Notice that it is a list of javascript objects where {key: value}.
*/

const bakedItems = [
{name:"The Devil's Cake", type: "Cakes", flavor: "Chocolate", price: "45", image: "https://www.irishtimes.com/polopoly_fs/1.3644691.1538139961!/image/image.jpg_gen/derivatives/landscape_620/image.jpg"},
{name:"Graveyard Cake", type: "Cakes", flavor: "Chocolate", price: "55" , image: "https://hips.hearstapps.com/wdy.h-cdn.co/assets/cm/15/09/54ef8fb28e424_-_graveyard-cake-recipe-lg.jpg"},
{name:"Rainbow Birthday Cake", type: "Cakes", flavor: "Vanilla", price: "60" , image: "https://www.thelittlekitchen.net/wp-content/uploads/2014/08/rainbow-birthday-cake-the-little-kitchen-16905.jpg"},
{name:"Mango Mousse Cake" , type: "Cakes", flavor: "Fruit", price: "50", image: "https://img.taste.com.au/9rcBnF9W/taste/2016/11/mango-mousse-cake-106754-1.jpeg"},
{name:"Coconut Cake" , type: "Cakes", flavor: "Special Flavors", price: "45", image: "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2007/2/14/0/ig0806_cocunutcake.jpg.rend.hgtvcom.826.620.suffix/1384540895951.jpeg"},

{name:"Cheesecake Cupcakes" , type: "Cupcakes", flavor: "Special Flavors", price: "40", image: "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2012/5/24/0/WS0602H_new-york-cheesecake-cupcakes_s4x3.jpg.rend.hgtvcom.616.462.suffix/1393013412639.jpeg"},
{name:"Chocolate Cupcakes" , type: "Cupcakes", flavor: "Chocolate", price: "35", image: "https://iambaker.net/wp-content/uploads/2015/09/chocolate-cupcake.jpg"},
{name:"Strawberry Shortcake Cupcakes" , type: "Cupcakes", flavor: "Fruit", price: "40", image: "https://www.cupcakediariesblog.com/wp-content/uploads/2016/07/strawberry-shortcake-cupcakes.jpg"},
{name:"Lemon Meringue Cupcakes" , type: "Cupcakes", flavor: "Fruit", price: "40", image: "https://img.taste.com.au/E5E46vJ3/taste/2016/11/lemon-meringue-cupcakes-100055-1.jpeg"},

{name:"Grasshopper Pie" , type: "Other Desserts", flavor: "Chocolate", price: "40", image: "https://www.sugarhero.com/wp-content/uploads/2015/03/fresh-mint-grasshopper-pie-6.jpg"},
{name:"Fruit Salad Trifle" , type: "Other Desserts", flavor: "Fruit", price: "17", image: "https://cdn-image.foodandwine.com/sites/default/files/styles/medium_2x/public/1478200795/fruit-trifle-XL-RECIPE1216.jpg?itok=eEx3CBN5"},
{name:"Galaxy Donuts" , type: "Other Desserts", flavor: "Special Flavors", price: "20", image: "https://truffle-assets.imgix.net/pxqrocxwsjcc_6coThPOEpi0us0Mm6guuMw_galaxy-doughnuts_landscapeThumbnail_en-US.png"},
{name:"Pineapple Tarts" , type: "Other Desserts", flavor: "Fruit", price: "35", image: "https://www.theburningkitchen.com/wp-content/uploads/2018/01/Pineapple-Tarts-2-500x500.jpg"},

{name:"Butter Vanilla cookies" , type: "Cookies", flavor: "Vanilla", price: "20", image: "https://images.meredith.com/content/dam/bhg/Images/2015/12/11/RU269650.jpg.rendition.largest.jpg"},
{name:"Smores cookies" , type: "Cookies", flavor: "Special Flavors", price: "30", image: "https://blogghetti.com/wp-content/uploads/2017/08/Smores-Cookies-1.jpg"},
{name:"Red Velvet cookies" , type: "Cookies", flavor: "Special Flavors", price: "37", image: "https://images-gmi-pmc.edge-generalmills.com/ffafa772-2ee1-4460-a68a-9d0cc373bbe9.jpg"},
{name:"Brownie cookies" , type: "Cookies", flavor: "Chocolate", price: "25", image: "https://cdn-image.foodandwine.com/sites/default/files/styles/medium_2x/public/201211-xl-chocolate-brownie-cookies.jpg?itok=sZ9yTpv9"},
];

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Sugar on Wheels</h1>
        <h5>A catalogue of the desserts offered at our Dessert Food Truck</h5>
        <h3>Scroll through this Season's Cakes, Cupcakes (and more)! </h3>  
        <Filters items={bakedItems} />
      </div>
      );
    }
  }

export default App;