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
					url: "/products/edit/:productId",
					templateUrl: "app/products/productEditView.html",
					controller: "ProductEditCtrl as vm"
				});
		}]
	);

}());
