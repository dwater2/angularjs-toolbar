(function() {

	angular.module('app').directive('toolbar', toolbar);

	var dirScope;
	
	function toolbar() {
		return {
			restrict : 'EA',
            scope: {
            	type: '@',
            	controller: '='
            },
			templateUrl : 'template/toolbar.html',
			link : function(scope, element, attrs) {
				let arrBtn = attrs.type.split(",");
				dirScope = scope;
				arrBtn.forEach(activate);
			}
		}
	}

	function activate(item , index){

		switch(item) {
		    case "help":
		    	dirScope.showBtnHelp = true;
		        break;
		    case "clean":
		    	dirScope.showBtnClean = true;
		        break;
		    case "delete":
		    	dirScope.showBtnDelete = true;
		    	break;
		    case "save":
		    	dirScope.showBtnSave = true;
		    	break;
		    case "export":
		    	dirScope.showBtnExport = true;
		    	break;
		    case "print":
		    	dirScope.showBtnPrint = true;
		    	break;
		    case "search":
		    	dirScope.showBtnSearch = true;
		    	break;
		    case "create":
		    	dirScope.showBtnCreate = true;
		    	break;
		    case "back":
		    	dirScope.showBtnBack = true;
		    	break;		    	
		}
	}
	
})();