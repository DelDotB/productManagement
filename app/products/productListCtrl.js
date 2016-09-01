/**
 * Created by rocooley on 9/1/2016.
 */


(function () {
    "use strict";
    angular
        .module("productManagement")
        .controller("ProductListCtrl", ProductListCtrl );

    function ProductListCtrl () {
        var vm = this;
        vm.products= [
            {
                "productId": 1,
                "productName": "Leaf Rake",
                "productCode": "GDN-0011",
                "releaseDate": "March 19, 2009",
                "description": "Leaf rake with 48-inch wooden handle.",
                "cost": 9.00,
                "price": 19.95,
                "category": "garden",
                "tags": ["leaf", "tool"],
                "imageUrl": "http://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png"
            },
            {
                "productId": 2,
                "productName": "Garden Cart",
                "productCode": "GDN-0023",
                "releaseDate": "March 18, 2010",
                "description": "15 gallon capacity rolling garden cart",
                "cost": 20.00,
                "price": 32.99,
                "category": "garden",
                "tags": ["barrow", "cart", "wheelbarrow"],
                "imageUrl": "http://openclipart.org/image/300px/svg_to_png/58471/garden_cart.png"
            }];
        vm.showImage = false;

        vm.toggleImage = function () {
          vm.showImage = !vm.showImage;
        };
    }

}());