angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})
.controller('MainCtrl', function($scope, $ionicSideMenuDelegate, $ionicPopover, $state, $timeout) {

  $scope.user = { Id: 1, Name: 'Admin', Email: 'admin@test.domain', Phone: '13609876543', Tel: '02129807893', EmergMan1: 'AdminEmerg1', EmergMan1Phone: '13609876542',EmergMan2: 'AdminEmerg2', EmergMan2Phone: '13609876541', Addr: '浦东新区耀华路120弄121号102' };
  $scope.subUsers = [{Id:1,Name:'AdminSub1'},{Id:2,Name:'AdminSub2'},{Id:3,Name:'AdminSub3'}];

  $scope.users = [
		{ username: 'Admin', email: 'admin@test.domain', location: true, id: 'admin', avatar: 'img/men.jpg', enabled: 'true', lastLogin: 'Online' },
		{ username: 'Stacy S', email: 'stacy@test.domain', location: true, id: 'stacy', avatar: 'img/girl.jpg', enabled: 'true', lastLogin: 'Last login: 01/09/2014' },
		{ username: 'Mom', email: 'mom@test.domain', location: false, id: 'mom', avatar: 'img/noavatar.png', enabled: 'false', lastLogin: 'Last login: never' },
	];
	$scope.device = { id: null, name: 'No Device', icon: 'ion-ios7-help-empty', status: 'Offline' },
	$scope.devices = [
		{ id: '1', name: 'Thermostat (bedroom)', icon: 'ion-thermometer', status: 'Away', featured: true, userSelect: "stacy", actionSelect: "3" },
		{ id: '2', name: 'Coffee Machine', icon: 'ion-coffee', status: 'Finished', color: 'balanced', featured: true, userSelect: "mom", actionSelect: null },
		{ id: '3', name: 'Smoke Sensor', icon: 'ion-no-smoking', status: 'Idle', color: 'assertive', featured: true, userSelect: "admin", actionSelect: null },
		{ id: '4', name: 'Garage', icon: 'ion-model-s', status: 'Car Inside', featured: true, userSelect: "admin", actionSelect: "6" },
		{ id: '5', name: 'House Security', icon: 'ion-locked', status: 'Unarmed', color: 'assertive', featured: true, userSelect: "admin", actionSelect: "7"},
		{ id: '6', name: 'Fan (WC)', icon: 'ion-load-b', status: 'Working', color: 'balanced', userSelect: "admin", actionSelect: null },
		{ id: '7', name: 'Desktop PC', icon: 'ion-social-windows', status: 'Online', color: 'balanced', featured: true, userSelect: "admin", actionSelect: null },
		{ id: '8', name: 'Stacy\'s Laptop', icon: 'ion-social-apple', status: 'Online', color: 'balanced', userSelect: "stacy", actionSelect: null },
		{ id: '9', name: 'Media Center (torrent downloader)', icon: 'ion-social-tux', status: 'Online', color: 'balanced', userSelect: "admin", actionSelect: null },
		{ id: '10', name: 'Unknow Smartphone', icon: 'ion-social-android', status: 'Offline', color: 'assertive', userSelect: "admin", actionSelect: null },
		{ id: '11', name: 'Room 1 Lights', icon: 'ion-ios7-lightbulb', userSelect: "admin", actionSelect: "1" },
		{ id: '12', name: 'Room 2 Lights', icon: 'ion-ios7-lightbulb', userSelect: "admin", actionSelect: "1" },
		{ id: '13', name: 'Room 3 Lights', icon: 'ion-ios7-lightbulb', userSelect: "admin", actionSelect: "1" },
		{ id: '14', name: 'Lawn Lights', icon: 'ion-ios7-lightbulb', userSelect: "admin", actionSelect: "5" },
	];
	$scope.locations = [
		{ id: '1', name: 'Kitchen', icon: 'ion-fork', note: 'For mum', featured: true },
		{ id: '2', name: 'WC', icon: 'ion-waterdrop', note: 'Occupied', featured: true },
	];
	$scope.actions = [
		{ id: '1', name: 'Lawn Lights Brightness', type: "range", value: '68', minValue : "0", maxValue : "100", units: "%", iconBefore: 'ion-ios7-lightbulb-outline', iconAfter: 'ion-ios7-lightbulb', deviceSelect : "", script: "", featured: true },
		{ id: '2', name: 'Smart Grid Power', type: "range", value: '24', minValue : "0", maxValue : "100", units: "%", iconBefore: 'ion-ios7-bolt-outline', iconAfter: 'ion-ios7-bolt', deviceSelect : "", script: "", featured: false },
		{ id: '3', name: 'Temperature', type: "range", value: '40', minValue : "-20", maxValue : "80", units: "°", iconBefore: 'ion-ios7-snowy', iconAfter: 'ion-ios7-sunny-outline', deviceSelect : "", script: "", featured: true },
		{ id: '4', name: 'Popcorn Time', type: "toggle", featured: false },
		{ id: '5', name: 'Good Night', type: "toggle", featured: true },
		{ id: '6', name: 'Open Garage Doors', type: "toggle", featured: false },
		{ id: '7', name: 'Arm Securuty', type: "toggle", featured: false },
	];

  $scope.detectorsVM = {
    detectorType:"",
    detectors:[
                { id: '1', name: 'Door Magnet1', icon: 'ion-magnet', status: 'unarmed', detectorType: 'MEG'},
                { id: '2', name: 'Infra Sensor1', icon: 'ion-wifi', status: 'unarmed', detectorType: 'INF'},
                { id: '3', name: 'Smoke Sensor1', icon: 'ion-flame', status: 'unarmed', detectorType: 'SMK'},
                { id: '4', name: 'Smoke Sensor2', icon: 'ion-flame', status: 'unarmed', detectorType: 'SMK'},
                { id: '5', name: 'Gas Sensor1', icon: 'ion-bonfire', status: 'unarmed', detectorType: 'GAS'},
                { id: '6', name: 'Gas Sensor2', icon: 'ion-bonfire', status: 'unarmed', detectorType: 'GAS'},
              ],
    detectorList:[
                  { id: '1', name: '门磁', icon: 'ion-magnet', detectorType: 'MEG'},
                  { id: '2', name: '红外探测', icon: 'ion-wifi', detectorType: 'INF'},
                  { id: '3', name: '烟雾探测', icon: 'ion-flame',  detectorType: 'SMK'},
                  { id: '4', name: '燃气探测', icon: 'ion-bonfire',  detectorType: 'GAS'},
                  { id: '5', name: '电子钥匙', icon: 'ion-locked',  detectorType: 'SEC'},
                  { id: '6', name: '摄像监控', icon: 'ion-videocamera', detectorType: 'CAM'},
   ]};

  $scope.OverViewVM = {
    OverStatus:"normal"
  };

  $scope.ArmVM = { checked: true };
//
  $scope.Gateways = [
    { gatewayname: 'GateWay1', id: 'gw1'},
    { gatewayname: 'GateWay2', id: 'gw2'},
    { gatewayname: 'GateWay3', id: 'gw3'},
  ];  







  //


	$scope.toggleLeft = function() {
		$ionicSideMenuDelegate.toggleLeft();
	};
	$scope.deviceTap = function(route, device) {
		$scope.device = device;
		$state.go(route);
	};
  $scope.pageJump = function(route) {
    $state.go(route);
  };    
	$ionicPopover.fromTemplateUrl('templates/alerts.html', {
		scope: $scope,
	}).then(function(popover) {
		$scope.popover = popover;
	});
	$scope.openAlerts = function($event) {
		$scope.popover.show($event);
	};
	$scope.closeAlerts = function() {
		$scope.popover.hide();
	};
	$scope.$on('$destroy', function() {
		$scope.popover.remove();
	});
	$timeout(function () {
		ionic.EventController.trigger("resize", "", true, false);
	}, 1500);
})

.controller('addDevice', function($scope) {
  $scope.sensors = [
    { sensorname: 'Door Magnet', email: 'admin@test.domain', location: true, id: 'admin', avatar: 'img/men.jpg', enabled: 'true', lastLogin: 'Online',sensortype:'doormagnet' },
    { sensorname: 'Infra Sensor', email: 'stacy@test.domain', location: true, id: 'stacy', avatar: 'img/girl.jpg', enabled: 'true', lastLogin: 'Online',sensortype:'infrasensor' },
    { sensorname: 'Smoke Sensor', email: 'mom@test.domain', location: true, id: 'mom', avatar: 'img/men.png', enabled: 'true', lastLogin: 'Online' ,sensortype:'smokesensor'},
    { sensorname: 'Gas Sensor', email: 'mom@test.domain', location: true, id: 'mom', avatar: 'img/men.png', enabled: 'true', lastLogin: 'Online' ,sensortype:'gassensor'},
    { sensorname: 'E-Key', email: 'mom@test.domain', location: true, id: 'mom', avatar: 'img/men.png', enabled: 'true', lastLogin: 'Online' ,sensortype:'ekey'},
    { sensorname: 'Camera', email: 'mom@test.domain', location: true, id: 'mom', avatar: 'img/men.png', enabled: 'false', lastLogin: 'Online' ,sensortype:'camera'},
  ]; 
  $scope.gateways = [
    { gatewayname: 'GateWay1', id: 'gw1'},
    { gatewayname: 'GateWay2', id: 'gw2'},
    { gatewayname: 'GateWay3', id: 'gw3'},
  ];      
  $scope.setFormScope = function(scope){
    this.formScope = scope;
  }
  $scope.newdevice = {};
  $scope.deviceSubmit = function() {
    // if(!$scope.newdevice.name) {
    //   alert('Name required');
    //   return;
    // }
    // if(!$scope.newdevice.icon) {
    //   $scope.newdevice.icon = 'ion-alert';
    // }
    // $scope.newdevice.id = $scope.sensors.length + 2;
    // $scope.sensors.push($scope.newdevice);
    // this.formScope.addSensorForm.$setPristine();
    var defaultForm = {
      id : "",
      name : "",
      icon : "",
      sensorSelect : "",
      gatewaySelect : ""
    };
    $scope.newdevice = defaultForm;
  };
})


.controller('Dashboard', function($scope, $interval) {
  var maximum = 150;
  $scope.data = [[]];
  $scope.labels = [];
  for (var i = 0; i < maximum; i++) {
    $scope.data[0].push(0);
    $scope.labels.push("");
  }
  $scope.options =  {
    responsive: true,
    showTooltips: false,
    animation: false,
    pointDot : false,
    scaleShowLabels: true,
    showScale: true,
    maintainAspectRatio: false,
    datasetStrokeWidth : 1,
    }; 

    function getLiveChartData () {
      if ($scope.data[0].length) {
        $scope.labels = $scope.labels.slice(1);
        $scope.data[0] = $scope.data[0].slice(1);
      }

      while ($scope.data[0].length < maximum) {
        $scope.labels.push('');
        $scope.data[0].push(getRandomValue($scope.data[0]));
      }
    }
  function getRandomValue (data) {
    var l = data.length, previous = l ? data[l - 1] : 50;
    var y = previous + Math.random() * 10 - 5;
    return y < 0 ? 0 : y > 100 ? 100 : y;
  }
  // Simulate async data update
  $interval(function () {
    getLiveChartData();
  }, 500);
})

.controller('usersetting', function($scope,$state) {
  $scope.setFormScope = function(scope){
    this.formScope = scope;
  }
  $scope.pageJump = function(route) {
    $state.go(route);
  };  
  $scope.newuser = {};
  $scope.userSubmit = function() {
    if(!$scope.newuser.username) {
      alert('Username required');
      return;
    }
    if(!$scope.newuser.avatar) {
      $scope.newuser.avatar = 'img/noavatar.png';
    }
    $scope.newuser.lastLogin = 'Last login: never';
    $scope.newuser.id = $scope.users.length + 1;
    $scope.users.push($scope.newuser);
    this.formScope.addUserForm.$setPristine();
    var defaultForm = {
      id : "",
      username : "",
      avatar : "",
      location: false
    };
    $scope.newuser = defaultForm;
  };
})

.controller('updateUser', function($scope) {
  $scope.setFormScope = function(scope){
    this.formScope = scope;
    // this.formScope = $scope.user
  }
  $scope.newuser = $scope.user;
  $scope.userSubmit = function() {
    if(!$scope.newuser.Name) {
      alert('Username required');
      return;
    }
    // if(!$scope.newuser.avatar) {
    //   $scope.newuser.avatar = 'img/noavatar.png';
    // }
    // $scope.newuser.lastLogin = 'Last login: never';
    // $scope.newuser.id = $scope.users.length + 1;
    $scope.user = $scope.newuser;
    this.formScope.addUserForm.$setPristine();
  };
})

.controller('addSubUser', function($scope) {
  $scope.setFormScope = function(scope){
    this.formScope = scope;
  }
  $scope.newuser = {};
  $scope.userSubmit = function() {
    if(!$scope.newuser.username) {
      alert('Username required');
      return;
    }
    if(!$scope.newuser.avatar) {
      $scope.newuser.avatar = 'img/noavatar.png';
    }
    $scope.newuser.lastLogin = 'Last login: never';
    $scope.newuser.id = $scope.users.length + 1;
    $scope.users.push($scope.newuser);
    this.formScope.addUserForm.$setPristine();
    var defaultForm = {
      id : "",
      username : "",
      avatar : "",
      location: false
    };
    $scope.newuser = defaultForm;
  };
})
.controller('manage', function($scope,$state) {
  $scope.setFormScope = function(scope){
    this.formScope = scope;
  }
  $scope.pageJump = function(route) {
    $state.go(route);
  };  
  $scope.newuser = {};
  $scope.userSubmit = function() {
    if(!$scope.newuser.username) {
      alert('Username required');
      return;
    }
    if(!$scope.newuser.avatar) {
      $scope.newuser.avatar = 'img/noavatar.png';
    }
    $scope.newuser.lastLogin = 'Last login: never';
    $scope.newuser.id = $scope.users.length + 1;
    $scope.users.push($scope.newuser);
    this.formScope.addUserForm.$setPristine();
    var defaultForm = {
      id : "",
      username : "",
      avatar : "",
      location: false
    };
    $scope.newuser = defaultForm;
  };
})
.controller('addGateWay', function($scope) {
  $scope.setFormScope = function(scope){
    this.formScope = scope;
  }
  $scope.newuser = {};
  $scope.userSubmit = function() {
    if(!$scope.newuser.username) {
      alert('Username required');
      return;
    }
    if(!$scope.newuser.avatar) {
      $scope.newuser.avatar = 'img/noavatar.png';
    }
    $scope.newuser.lastLogin = 'Last login: never';
    $scope.newuser.id = $scope.users.length + 1;
    $scope.users.push($scope.newuser);
    this.formScope.addUserForm.$setPristine();
    var defaultForm = {
      id : "",
      username : "",
      avatar : "",
      location: false
    };
    $scope.newuser = defaultForm;
  };
})

.controller('notifies', function($scope,$state) {
  $scope.setFormScope = function(scope){
    this.formScope = scope;
  }
  $scope.pageJump = function(route) {
    $state.go(route);
  };  
  $scope.newuser = {};
  $scope.userSubmit = function() {
    if(!$scope.newuser.username) {
      alert('Username required');
      return;
    }
    if(!$scope.newuser.avatar) {
      $scope.newuser.avatar = 'img/noavatar.png';
    }
    $scope.newuser.lastLogin = 'Last login: never';
    $scope.newuser.id = $scope.users.length + 1;
    $scope.users.push($scope.newuser);
    this.formScope.addUserForm.$setPristine();
    var defaultForm = {
      id : "",
      username : "",
      avatar : "",
      location: false
    };
    $scope.newuser = defaultForm;
  };
})

.controller('VibrationCtrl', function($scope,$cordovaVibration){ 
 
  $scope.startVib=function(){ 
    // 震动 1000ms 
    $cordovaVibration.vibrate(1000); 
  };
})

.controller('OverViewCtrl', function($q,$scope, $ionicSideMenuDelegate, $ionicPopover, $state, $timeout,$http) {
  $scope.DataReq = function(){
    var newuuid = UUID.prototype.createUUID();
    var aesKey = "XinLaiWitHome___";
    var newAesKey = null;
    var aesEncrypt = function(data, keyStr, ivStr) {
                var sendData = CryptoJS.enc.Utf8.parse(data);
                var key = CryptoJS.enc.Utf8.parse(keyStr);
                var iv  = CryptoJS.enc.Utf8.parse(ivStr);
                var encrypted = CryptoJS.AES.encrypt(sendData, key,{iv:iv,mode:CryptoJS.mode.CBC,padding:CryptoJS.pad.Iso10126});
                //return CryptoJS.enc.Base64.stringify(encrypted.toString(CryptoJS.enc.Utf8));
                return CryptoJS.enc.Base64.stringify(encrypted.ciphertext);
    };
    var aesDecrypt = function(data, keyStr, ivStr) {
    var key = CryptoJS.enc.Utf8.parse(keyStr);
                var iv  = CryptoJS.enc.Utf8.parse(ivStr);
                //解密的是基于BASE64的数据，此处data是BASE64数据
                var decrypted = CryptoJS.AES.decrypt(data, key, {iv: iv, mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Iso10126});
                return decrypted.toString(CryptoJS.enc.Utf8);
    };
      var code = aesEncrypt(newuuid, aesKey, aesKey);    
    
    var headers = {
      'Access-Control-Allow-Origin' : '*',
      'Access-Control-Allow-Methods' : 'POST, GET, OPTIONS, PUT',
				'Content-Type': 'application/json',
				'Accept': 'application/json'
  };
    var requestData = {
      cust_id : 740089105671409664
    };

    var req = {
      method: 'POST',
      url: 'http://139.196.13.82/xinlai/account/detail?req_no=' + code,
      headers: headers
    };

// //if it is a GET request set the parameters like this
//   req.params = requestData;
//if it is a POST request set the parameters like this 
      req.data = requestData;

    var deferred = $q.defer();
    $http(req).then(function(response) {
      var ssss = response;
      
      
        deferred.resolve();
    }, function(error) {
        deferred.reject();
    });

  }

  $scope.toggleLeft = function() {
    $ionicSideMenuDelegate.toggleLeft();
  };
  $scope.deviceTap = function(route, detectors, detType) {
    $scope.detectorsVM.detectors = detectors;
    $scope.detectorsVM.detectorType = detType;
    $state.go(route);
  };
  $scope.pageJump = function(route) {
    $state.go(route);
  };    
  $ionicPopover.fromTemplateUrl('templates/alerts.html', {
    scope: $scope,
  }).then(function(popover) {
    $scope.popover = popover;
  });
  $scope.openAlerts = function($event) {
    $scope.popover.show($event);
  };
  $scope.closeAlerts = function() {
    $scope.popover.hide();
  };
  $scope.$on('$destroy', function() {
    $scope.popover.remove();
  });
  $timeout(function () {
    ionic.EventController.trigger("resize", "", true, false);
  }, 1500);  
})
.controller('Arm', function($scope) {
  $scope.pushNotificationChange = function() {
    console.log('Push Notification Change', $scope.ArmVM.checked);
  };
})
.controller('subUserCtrl', function($scope,$state) {

  $scope.delete = function(item){
    //删除子账号业务
  }
  $scope.edit = function(item){
    //编辑子账号业务
  }  

  $scope.pageJump = function(route) {
    $state.go(route);
  };  
})
  

.directive('wrapOwlcarousel', function () {
    return {
        restrict: 'E',
        link: function (scope, element, attrs) {
            var options = scope.$eval($(element).attr('data-options'));
            $(element).owlCarousel(options);
        }
    };
})
;
