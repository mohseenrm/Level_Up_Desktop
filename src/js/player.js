/**
 * Player Class File
 * Author: Mohseen Mukaddam
 */
//this is the base class
class Player{

	constructor(**kwargs){
		this.name = name;
		this.age = age;
		console.log("player created " + this.name);
	}

	set_experience(exp){
		this.exp = exp;
	}
	set_health(health){
		this.health = health;
	}
	to_level_up(exp){	
		//override in child class
		//logic for level up
		//return Boolean
	}
	update_experience(exp){
		//reset exp to 0 or whatever
	}
	level_up(value){
		//value should be provided by to_value_up function of player
		if(value == true){
			this.level = value + 1;
			//update_experience
			return true
		}
		return false;
	}

}