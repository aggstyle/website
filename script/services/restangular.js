(function() {
	angular.module("aggstyleapp", ["restangular"]).config(function(RestangularProvider) {
                //set the base url for api calls on our RESTful services
		var newBaseUrl = "";
		if (window.location.hostname == "localhost") {
			newBaseUrl = "http://localhost:8080/api/rest/register";
		} else {
			var deployedAt = window.location.href.substring(0, window.location.href);
			newBaseUrl = deployedAt + "/api/rest/register";
		}
		RestangularProvider.setBaseUrl(newBaseUrl); 
	});
}());