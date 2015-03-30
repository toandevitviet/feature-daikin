'use strict';

/* Controllers */

angular.module('myApp.controllers', [])

/*1.Airflow_3d*/

.controller('Airflow_3d',['$scope', '$rootScope', '$location', function($scope, $rootScope, $location) {
    
    $rootScope.bubbleText = "Tap the next button to browse other features for this model";
    
    $rootScope.back = function(){
        $location.path("/airflow_3d");
    }
    
    $rootScope.next = function(){
            $location.path("/elnverte");
    }
}])

/*2.Elnverte*/

.controller('Elnverte',['$scope', '$rootScope', '$location', function($scope, $rootScope, $location) {
    
    $rootScope.bubbleText = "Tap the next button to browse other features for this model";
    
    $rootScope.back = function(){
        $location.path("/airflow_3d");
    }
    
    $rootScope.next = function(){
            $location.path("/intelligent_eye");
    }
}])

/*3.Intelligent_eye*/

.controller('Intelligent_eye',['$scope', '$rootScope', '$location', function($scope, $rootScope, $location) {
    
    $rootScope.bubbleText = "Tap the next button to browse other features for this model";
    
    $rootScope.back = function(){
        $location.path("/elnverte");
    }
    
    $rootScope.next = function(){
            $location.path("/airflow_powerful");
    }
}])

/*4.Airflow_powerful*/

.controller('Airflow_powerful',['$scope', '$rootScope', '$location', function($scope, $rootScope, $location) {
    
    $rootScope.bubbleText = "Tap the next button to browse other features for this model";
    
    $rootScope.back = function(){
        $location.path("/intelligent_eye");
    }
    
    $rootScope.next = function(){
            $location.path("/cooling_powerful");
    }
}])

/*5.Cooling_powerful*/

.controller('Cooling_powerful',['$scope', '$rootScope', '$location', function($scope, $rootScope, $location) {
    
    $rootScope.bubbleText = "Tap the next button to browse other features for this model";
    
    $rootScope.back = function(){
        $location.path("/airflow_powerful");
    }
    
    $rootScope.next = function(){
            $location.path("/air_clean");
    }
}])

/*6.Air_clean*/

.controller('Air_clean',['$scope', '$rootScope', '$location', function($scope, $rootScope, $location) {
    
    $rootScope.bubbleText = "Tap the next button to browse other features for this model";
    
    $rootScope.back = function(){
        $location.path("/cooling_powerful");
    }
    
    $rootScope.next = function(){
            $location.path("/saving_energy");
    }
}])

/*7.Saving_energy*/

.controller('Saving_energy',['$scope', '$rootScope', '$location', function($scope, $rootScope, $location) {
    
    $rootScope.bubbleText = "Tap the next button to browse other features for this model";
    
    $rootScope.back = function(){
        $location.path("/air_clean");
    }
    
    $rootScope.next = function(){
            $location.path("/quiet_super");
    }
}])

/*8.Quiet_super*/

.controller('Quiet_super',['$scope', '$rootScope', '$location', function($scope, $rootScope, $location) {
    
    $rootScope.bubbleText = "Tap the next button to browse other features for this model";
    
    $rootScope.back = function(){
        $location.path("/saving_energy");
    }
    
    $rootScope.next = function(){
            $location.path("/quiet_super");
    }
}])

;

