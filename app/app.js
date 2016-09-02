/**
 * Created by rocooley on 9/1/2016.
 */

(function () {
    "use strict";
    var app =
        angular
            .module(
                "productManagement", // module name
                ["common.services", "ui.router", "productResourceMock"] // dependancies
            );

    app.config(["$stateProvider",
        function ($stateProvider) {
          $stateProvider
            // products
              .state("productList", {
                  url: "/products",
                  templateUrl: "app/products/productListView.html",
                  controller: "ProductListCtrl as vm"
              });
        }]
    );
    
}());
