import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {GuestbookService} from '../services/guestbook.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-make-guestbook-entry',
  templateUrl: './make-guestbook-entry.component.html',
  styleUrls: ['./make-guestbook-entry.component.scss']
})
export class MakeGuestbookEntryComponent implements OnInit {
    public readonly formConstants = {
        author: 'author',
        message: 'message'
    };

    public form: FormGroup = this.fb.group({
        [this.formConstants.author]: ['', {
            validators: [Validators.required, Validators.minLength(3)],
            // asyncValidators: blogTitleValidator(this.guestbookService),
            updateOn: 'blur'
        }],
        [this.formConstants.message]: ['', Validators.required],
    });

    constructor(
        private readonly fb: FormBuilder,
        private readonly guestbookService: GuestbookService,
        private readonly router: Router
    ) {
    }

    ngOnInit(): void {
        this.form.valueChanges.subscribe(value => console.log(value));
    }

    publishEntry(): void {
        this.guestbookService.postGuestbookEntry(this.form.value).subscribe();
    }

    // isTitleAlreadyUsed(): boolean | undefined {
    //     return this.form.get(this.formConstants.title)?.hasError('titleAlreadyUsed');
    // }
}
