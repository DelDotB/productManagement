/**
 * Created by rocooley on 9/2/2016.
 */

(function () {
    "use strict";

    angular
        .module("common.services")
        .factory("productResource",
        ["$resource", //min-safe array
        productResource]);

    function productResource($resource) {
        return $resource("/api/products/:productId");
    }
}());