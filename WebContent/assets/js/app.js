(function () {

    angular.module('app', [])
        .directive('toolbar', toolbar)
        .controller('Controller', function () {
        	
            var vm = this;
			vm.help = help;
			vm.clean = clean;
			vm.del = del;
			vm.save = save;
			vm.exportFile = exportFile;
			vm.print = print;
			vm.search = search;
			vm.back = back;
			vm.create = create;
			vm.btnActivate = "";
			
			function help(){
				vm.btnActivate = "click help!";
			}
			function clean(){
				vm.btnActivate = "click clean!";
			}
			function del(){
				vm.btnActivate = "click delete!";
			}
			function save(){
				vm.btnActivate = "click save!";
			}
			function exportFile(){
				vm.btnActivate = "click export!";
			}
			function print(){
				vm.btnActivate = "click print!";
			}
			function search(){
				vm.btnActivate = "click search!";
			}
			function back(){
				vm.btnActivate = "click back!";
			}
			function create(){
				vm.btnActivate = "click create!";
			}
        });
})();