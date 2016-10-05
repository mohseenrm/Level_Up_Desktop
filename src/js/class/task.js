'use strict';
/**
 * Task Class File
 * Author: Mohseen Mukaddam
 * @param {[Object]} task_list [List of all tasks to work on]
 */
let Task = function( params ){
	this._task_name = params.name || "Name not provided";
	this._task_desc = params.desc || "Description not provided";
	this._skillset  = params.skillset || "List of skillsets to modify";
	this._update    = params.update || "No Update object provided";
}

Task.prototype = {
	constructor: Task,
	get_attr: function(){
		return{
			name     : this._task_name,
			desc     : this._task_desc,
			skillset : this._skillset,
			update   : this._update
		};
	},
	set_attr: function( params ){
		this._task_name = params.name || this._task_name;
		this._task_desc = params.desc || this._task_desc;
		this._skillset  = params.skillset || this._skillset;
		this._update    = params.update || this._update;
	}
};
export = { Task };