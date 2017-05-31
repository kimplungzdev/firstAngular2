import { Component } from '@angular/core';
import { PostsService } from '../services/posts.service';

@Component({
	moduleId : module.id,
  	selector: 'user',
  	templateUrl : 'user.component.html',
  	providers : [PostsService],
})
export class UserComponent  { 
	name : string; 
	email : string;
	address : address;
	hobbies : string[];
	showHobbies : boolean;
	posts : Post[];

	constructor( private postsService : PostsService ){
		this.name = 'Abdurrahman Hakim'; 
		this.email = 'hakim@gmail.com';
		this.address = {
			street : 'Jl. Rajawali No, 1',
			city : 'Bandung',
			state : 'Jawa Barat'
		};
		this.hobbies = ['Singing', 'Swimming', 'Ngising'];
		this.showHobbies = false;

		this.postsService.getPosts().subscribe(post => {
			this.posts = post;
		})
	}

	toggleHobbies(){
		if(this.showHobbies == true) {
			this.showHobbies = false;
		} else {
			this.showHobbies = true;
		}
	}

	addHobby(hobby){
		this.hobbies.push(hobby);
	}

	deleteHobby(i){
		this.hobbies.splice(i, 1);
	}
}

interface address {
	street : string;
	city : string;
	state : string;
}

interface Post {
	id : number;
	title : string:
	body : string;
}