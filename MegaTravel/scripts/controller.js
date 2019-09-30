angular
    .module('reservationApp')
    .controller('reservationController', function($scope){
        $scope.destinations = [
            {
                city: 'Brisbane',
                activities: ['City Tour', 'Sporting Event','Cycling Trip', 'Museum Visit', 'Boating Adventure']
            },
            {
                city: 'Vancouver',
                activities: ['Museum Trip', 'Sailing', 'Beach Trip', 'Hiking Trails', 'Boating Excursion']
            },
            {
                city: 'New York City',
                activities: ['Museum Trip', 'Theatre Day', 'Parks and Recreation', 'Historic City Tour']
            },
            {
                city: 'Berlin',
                activities: ['City Tour', 'Museum Trip', 'Cycling Day']
            },
            {
                city: 'Cancun',
                activities: ['Parks and Recreation', 'Beach Day', 'Banana Boat Excursion', 'Snorkeling Trip']
            }
        ]
    })