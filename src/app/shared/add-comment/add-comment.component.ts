import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {GuestbookService} from '../../services/guestbook.service';
import {Router} from '@angular/router';
// import {blogTitleValidator} from './blog-title.validator';

@Component({
  selector: 'app-add-comment',
  templateUrl: './add-comment.component.html',
  styleUrls: ['./add-comment.component.scss']
})
export class AddCommentComponent implements OnInit {
    public readonly formConstants = {
        title: 'title',
        content: 'content'
    };

    public form: FormGroup = this.fb.group({
        [this.formConstants.title]: ['', {
            validators: [Validators.required, Validators.minLength(3)],
            // asyncValidators: blogTitleValidator(this.guestbookService),
            updateOn: 'blur'
        }],
        [this.formConstants.content]: ['', Validators.required]
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

    publishBlog(): void {
        // this.guestbookService.postBlogEntry(this.form.value).subscribe(() => this.router.navigate(['/']));
    }

    isTitleAlreadyUsed(): boolean | undefined {
        return this.form.get(this.formConstants.title)?.hasError('titleAlreadyUsed');
    }
}
