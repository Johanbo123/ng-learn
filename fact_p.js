/* global angular */
angular.module('app', []);

(function () {
    'use strict';
    console.log('slltart');
    var tblDirective;
    var directive;

    tblDirective = function () {
        var link_function;

        link_function = function (scope, element, attrs, ngModel) {
            if (!ngModel) return; // do nothing if no ng-model        
            var link;
            var show_elem;
            
            show_elem = function () {
                console.log(element.prop('offsetLeft'));
                console.log(ngModel);
            };
            link = {
                show_elem: show_elem
            };
            
            element.on('mouseover', link.show_elem);
        };

        directive = {
            restrict: 'A',
            require: '?ngModel',
            link: link_function
        };

        return directive;
    };

    angular
        .module('app')
        .directive('tblDirective', tblDirective);

} ());