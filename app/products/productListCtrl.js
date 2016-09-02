/**
 * Created by rocooley on 9/1/2016.
 */


(function () {
    "use strict";
    angular
        .module("productManagement")
        .controller("ProductListCtrl",
                    ["productResource",
                    ProductListCtrl] );

    function ProductListCtrl (productResource) {
        var vm = this;

        productResource.query( function(data) {
            vm.products = data;
        });


        vm.showImage = false;

/*        vm.testList = function productResource($resource) {
            return $resource("https://odatatest.utmb.edu/histedit/HistoricalEdits?$top=5");
        }*/

        vm.toggleImage = function () {
          vm.showImage = !vm.showImage;
        };
    }

}());