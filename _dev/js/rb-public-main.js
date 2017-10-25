var vm = {
    bgImg : $("#backgroundImage"),
    window : $(window),
    body: $('body')
};

vm.utils = {
    gettime : function () {
       return new Date().getHours();
    },
    isitNite : function () {
        var hour = vm.utils.gettime();
        if (hour >= 14 || hour < 8) {
            vm.body.addClass('night');
        } else {
            vm.body.addClass('day');
        }
    }
};

vm.updateBgImage = function () {
    var currentBg = $(vm.bgImg).css('background-image');
    var i = 1;
    setInterval(function() {
        i++;
        $("#backgroundImage").remove();
        $('<div id="backgroundImage" style="background-image: url(https://www.glerl.noaa.gov/metdata/mkg/mkg01.jpg)"></div>').prependTo('.site');
    }, 30000 );
};
vm.update = function () {

};

vm.loaded = function () {
    vm.updateBgImage();
    vm.body.addClass('loaded');
    vm.utils.isitNite();

};

vm.window.on( 'load' , vm.loaded );

// ko.applyBindings(vm);
