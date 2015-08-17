# include-node

use to include absolute path or relative path file

# **Installation** #

	npm install include-node --save

# **Usage** #

	var a = Include('./libs/a');
	var b = Include('/module/driver');


If we have such directory structure as follow:


	--include
		+---libs
		|	+---A.js
		|
		|---module
		|	+---driver.js
		|
		+---run.js
		+---util.js

in run.js include files can use these ways
	
	var a = Include('./libs/a') or Include('/libs/a');
	var util = Include('./util') or Include('/util');

in a.js include files can use these ways
	
	var util = Include('/util') or Include('../util');
	var driver = Include('../module/driver') or Include('/module/driver');
