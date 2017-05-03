import {Component} from '@angular/core';
import {PostService} from './services/post.service'

@Component({
    moduleId: module.id,
    selector: 'user',
    templateUrl: 'user.component.html', // to use template url we need to add moduleId statement
    providers: [PostService]
})


export class UserComponent {

    // class properties
    names = '';
    email = '';
    address: address;
    hobbies: string[];
    showHobbies: boolean;
    posts: Posts[];

    // class constructor
    // Injecting postService variable
    constructor(private postService: PostService) {
        this.names = 'User';
        this.email = 'User@gmail.com';
        this.address = {
            street: "House # 100",
            city: "Karachi",
            state: "Sindh"
        };
        this.hobbies = ['Music', 'Movies'];
        this.showHobbies = true;

        this.postService.getPosts().subscribe(posts => {
            this.posts = posts;
        })
    }

    // Toggle the hobbies
    toggleHobbies() {
        this.showHobbies = !this.showHobbies;
    }


    // // Adding new hobbies
    saveHobby(value:string){
        this.hobbies.push(value)
    }

    // deleting hobby
    deleteHobby(index:number){
        this.hobbies.splice(index, 1);
    }
}


// This is custom type
interface address {
    street: string;
    city: string;
    state: string;
}

// This is custom type
interface Posts{
    id: number;
    title:string;
    body:string;
}