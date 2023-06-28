import {
  CUSTOM_ELEMENTS_SCHEMA,
  Component,
  EventEmitter,
  Output,
} from '@angular/core';
import { ChildComponent } from '../child/child.component';
import { CommonModule } from '@angular/common';
import { MyChildComponent } from '../my-child-component/my-child-component.component';

@Component({
  selector: 'app-tab-content',
  templateUrl: './tab-content.component.html',
  styleUrls: ['./tab-content.component.css'],
  standalone: true,
  imports: [ChildComponent, MyChildComponent, CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class TabContentComponent {
  activeTab: string = 'tab1';

  activeTabIndex: number = 0;
  tabData: any[] = [
    { title: 'Tab 1', content: 'Data for Tab 1', endpoint: 'api/endpoint1' },
    { title: 'Tab 2', content: 'Data for Tab 2', endpoint: 'api/endpoint2' },
    { title: 'Tab 3', content: 'Data for Tab 3', endpoint: 'api/endpoint3' },
  ];

  @Output() dataFetched: EventEmitter<any> = new EventEmitter<any>();

  fetchData() {
    const activeTab = this.tabData[this.activeTabIndex];
    const endpoint = activeTab.endpoint;

    // Call API using the endpoint variable
    // Example: You can use Angular's HttpClient to make the API request
    // httpClient.get(endpoint).subscribe((data) => { ... });

    this.dataFetched.emit(this.tabData);
  }

  setActiveTab(index: number) {
    this.activeTabIndex = index;
    this.fetchData();
  }
}
