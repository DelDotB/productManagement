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

	app.config(["$stateProvider", "$urlRouterProvider",
		function ($stateProvider, $urlRouterProvider) {
			$urlRouterProvider.otherwise("/");

			$stateProvider
				.state("home", {
					url: "/",
					templateUrl: "app/welcomeView.html"
				})
				// products
				.state("productList", {
					url: "/products",
					templateUrl: "app/products/productListView.html",
					controller: "ProductListCtrl as vm"
				})
				.state("productEdit", {
					abstract: true,
					url: "/products/edit/:productId",
					templateUrl: "app/products/productEditView.html",
					controller: "ProductEditCtrl as vm",
					resolve: {
						productResource: "productResource",
						product: function (productResource, $stateParams) {
							var productId = $stateParams.productId;
							return productResource.get({productId: productId}).$promise;
						}
					}
				})
				// sub-states or nested states
				.state("productEdit.info", {
					url: "/info",
					templateUrl: "app/products/productEditInfoView.html"
				})
				.state("productEdit.price", {
					url: "/price",
					templateUrl: "app/products/productEditPriceView.html"
				})
				.state("productEdit.tags", {
					url: "/tags",
					templateUrl: "app/products/productEditTagsView.html"
				})
				.state("productDetail", {
					url: "/products/:productId",
					templateUrl: "app/products/productDetailView.html",
					controller: "ProductDetailCtrl as vm",
					resolve: {
						productResource: "productResource",
						product: function (productResource, $stateParams) {
							var productId = $stateParams.productId;
							return productResource.get({productId: productId}).$promise;
						}
					}
				});
		}]
	);

}());
