if ('addEventListener' in window) {
    window.addEventListener('load', 
        function() { 
            document.body.className = document.body.className.replace(/\bis-preload\b/, ''); 
        });
    document.body.className += (navigator.userAgent.match(/(MSIE|rv:11\.0)/) ? ' is-ie' : '');
}

var app = angular.module("myApp",[]);
    app.controller("myController",function($scope){
        $.getJSON("script/data.json", function(res) {
            $scope.$apply(function(){
                $scope.ME = res;
            });
        });
    });