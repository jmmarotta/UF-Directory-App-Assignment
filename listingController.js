angular.module('listings').controller('ListingsController', ['$scope', 'Listings',
  function($scope, Listings) {
    $scope.listings = Listings;
    $scope.detailedInfo = undefined;

    /*
      Implement these functions in the controller to make your application function
      as described in the assignment spec.
     */

    $scope.addListing = function() {
      var entryToAdd = {
        'code': $scope.code,
        'name': $scope.name,
        'coordinates': {
          'latitude': $scope.latitude,
          'longitude': $scope.longitude
        },
        'address': $scope.address
      };
      $scope.listings.push(entryToAdd);

      $scope.code = '';
      $scope.name = '';
      $scope.latitude = '';
      $scope.longitude = '';
      $scope.address = '';
    };

    $scope.deleteListing = function(index) {
      delete $scope.listings.splice(index, 1);
    };

    $scope.showDetails = function(index) {

      $scope.detailedInfo = {
        'code': '',
        'name': '',
        'coordinates': {
          'latitude': '',
          'longitude': ''
        },
        'address': ''
      };

      var details = $scope.listings[index];
      for (detail in details) {
        $scope.detailedInfo[detail] = details[detail];
      }

    };
  }
]);
