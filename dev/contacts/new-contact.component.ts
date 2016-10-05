import {Component} from "angular2/core";
import {ContactService} from './contact.service';
import {Contact} from './contact';
import {Router} from 'angular2/router';


@Component({
	template: 
	`
			<div>
				<label>First Name</label>
        		<input type="text" #firstName />
			</div>

			<div>
				<label>Last Name</label>
        		<input type="text" #lastName />
			</div>

			<div>
				<label>Phone Number</label>
        		<input type="text" #phoneNum />
			</div>

			<div>
				<label>Email</label>
        		<input type="text" #email />
			</div>
			<button (click)="onAddContact(firstName.value, lastName.value, phoneNum.vallue, email.value)">Create Contact</button>
	`,
	providers: [ContactService],
	styles: [
	`
		label {
			display: inline-block;
			width: 140px;
		}

		input {
			width: 200px;
			margin-bottom: 10px;
		}
	`
	]
})

export class NewContactComponent {

	constructor(private _contactService: ContactService, private _router: Router){

	}

	onAddContact(firstName, lastName, phoneNum, email){
		let contact: Contact = {
					"firstName": firstName,
					"lastName": lastName,
					"phoneNum": phoneNum,
					"email": email
				};
		this._contactService.insertContact(contact);
		this._router.navigate(['Contacts']);
	}
}