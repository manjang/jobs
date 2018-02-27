var app = angular.module('App', []);


app.controller('JobController', ['$scope', '$http', function ($scope, $http) {

	// Add new job
    $scope.addJob = function () {
        $http.post('script/create.php', {
            job: $scope.job
        })
            .then(function success(e) {

                $scope.errors = [];

                $scope.jobs.push(e.data.job);

                var modal_element = angular.element('#add_new_job_modal');
                modal_element.modal('hide');

            }, function error(e) {
                $scope.errors = e.data.errors;
            });
    };

    // update the job
    $scope.updateJob = function () {
        $http.post('script/update.php', {
            job: $scope.job_details
        })
            .then(function success(e) {

                $scope.errors = [];

                var modal_element = angular.element('#modal_update_job');
                modal_element.modal('hide');

            }, function error(e) {
                $scope.errors = e.data.errors;
            });
    };

    // delete the job
    $scope.delete = function (index) {

        var conf = confirm("Do you really want to delete the job?");

        if (conf == true) {
            $http.post('script/delete.php', {
                job: $scope.jobs[index]
            })
                .then(function success(e) {

                    $scope.errors = [];

                    $scope.jobs.splice(index, 1);

                }, function error(e) {
                    $scope.errors = e.data.errors;
                });
        }
    };
}]);