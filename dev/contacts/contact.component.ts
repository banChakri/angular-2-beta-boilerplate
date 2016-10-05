import {Component} from "angular2/core";

@Component({
	selector: 'contact',
	template: `
			<div>
				<label>First Name</label>
        		<input [(ngModel)] = "contact.firstName" type="text" />
			</div>

			<div>
				<label>Last Name</label>
        		<input [(ngModel)] = "contact.lastName" type="text" />
			</div>

			<div>
				<label>Phone Number</label>
        		<input [(ngModel)] = "contact.phoneNum" type="text" />
			</div>

			<div>
				<label>Email</label>
        		<input [(ngModel)] = "contact.email" type="text" />
			</div>
	`,
	inputs: ["contact"],
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

export class ContactComponent {
	public contact = [];
}