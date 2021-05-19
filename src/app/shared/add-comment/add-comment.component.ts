import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {GuestbookService} from '../../services/guestbook.service';
import {Router} from '@angular/router';
import {AuthenticationService} from '../../services/authentication.service';

// import {blogTitleValidator} from './blog-title.validator';

@Component({
  selector: 'app-add-comment',
  templateUrl: './add-comment.component.html',
  styleUrls: ['./add-comment.component.scss']
})
export class AddCommentComponent implements OnInit {

    @Input()
    public detailId!: string;

    public readonly formConstants = {
        author: 'author',
        comment: 'comment'
    };

    public form: FormGroup = this.fb.group({
        [this.formConstants.author]: ['', {
            validators: [Validators.required, Validators.minLength(3)],
            // asyncValidators: blogTitleValidator(this.guestbookService),
            updateOn: 'blur'
        }],
        [this.formConstants.comment]: ['', Validators.required]
    });

    constructor(
        private readonly fb: FormBuilder,
        private readonly guestbookService: GuestbookService,
        private readonly router: Router,
        public readonly authService: AuthenticationService
    ) {
    }

    ngOnInit(): void {
    }

    publishComment(): void {
      const currentUrl = this.router.url;
      this.guestbookService.postGuestbookComment(this.detailId, this.form.value).subscribe(
        // reload page after clap had been send
        () => this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
          this.router.navigate([currentUrl]);
        }));
    }

    // isTitleAlreadyUsed(): boolean | undefined {
    //     return this.form.get(this.formConstants.title)?.hasError('titleAlreadyUsed');
    // }
}
