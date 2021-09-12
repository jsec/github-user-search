import {
  Component,
  EventEmitter,
  Output
} from '@angular/core';
import {
  FormControl
} from '@angular/forms';

@Component({
  selector: 'search-bar',
  templateUrl: 'search-bar.component.html',
  styleUrls: ['search-bar.component.scss']
})
export class SearchBarComponent {
  @Output() searchText = new EventEmitter<string>();

  public searchControl: FormControl = new FormControl();

  public search(): void {
    console.log(this.searchControl.value);
    this.searchText.emit(this.searchControl.value);
  }
}
