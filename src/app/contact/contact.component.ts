import { Component } from '@angular/core';
import { SectionHeaderComponent } from '../section-header/section-header.component';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
    selector: 'app-contact',
    templateUrl: './contact.component.html',
    styleUrl: './contact.component.css',
    imports: [SectionHeaderComponent, TranslatePipe]
})
export class ContactComponent {
}
