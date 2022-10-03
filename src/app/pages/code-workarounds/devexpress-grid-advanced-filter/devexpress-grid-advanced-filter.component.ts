import { Component, OnInit } from '@angular/core';
import { Employee, EmployeesService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-devexpress-grid-advanced-filter',
  templateUrl: './devexpress-grid-advanced-filter.component.html',
  styleUrls: ['./devexpress-grid-advanced-filter.component.css']
})
export class DevexpressGridAdvancedFilterComponent implements OnInit {

  employees: Employee[] = [];
  dxToolbar: any = {};
  dxAdvancedToolbar: any = {};
  advancedToolbarVisible : boolean = false;
  advancedToolbarRows: number = 0;
  toolbarContainer: HTMLElement = document.createElement('div');
  advancedToolbarContainer: HTMLElement = document.createElement('div');
 
  constructor(service: EmployeesService) {
      this.employees = service.getEmployees();
      this.dxToolbar.items = [];
      this.dxAdvancedToolbar.items = [];

    this.setUpToolbar();
    this.setUpAdvancedToolbar();
      
  }

  ngOnInit(): void {
  }

  onContentReady($event:any){
    if(this.dxAdvancedToolbar.items.length > 0 && !$event.element.querySelector(".dx-toolbar-advanced")){
      let advancedItems = $event.element.querySelectorAll(".dx-item-advanced");
      this.toolbarContainer = $event.element.querySelector(".dx-toolbar-items-container");

      this.advancedToolbarContainer.classList.add('dx-toolbar-advanced');

      advancedItems.forEach((e:any) => {
        this.advancedToolbarContainer.appendChild(e);
      });

      if(this.toolbarContainer){
        this.toolbarContainer.appendChild(this.advancedToolbarContainer);

        let items = document.getElementsByClassName('dx-item-advanced');
        let toolbar = document.getElementsByClassName('dx-toolbar')[0];
        let itemsTotalSize = 0;
        let toolbarSize = (toolbar as HTMLElement).offsetWidth;
        for(let i = 0; i < items.length; ++i){
          itemsTotalSize += (items[i] as HTMLElement).offsetWidth;
        }

        this.advancedToolbarRows = Math.ceil(itemsTotalSize/toolbarSize);
      }

      if(!this.advancedToolbarVisible){
        this.advancedToolbarContainer.classList.add('dx-hidden-container');
      }else{
        this.expandToolbarSize();
      }
    }

  }

  expandToolbarSize(){
    this.toolbarContainer.style.height = `calc(${this.advancedToolbarRows} * 40px + 40px)`;
  }

  hideAdvancedToolbar(){
    this.advancedToolbarContainer.classList.add('dx-hidden-container');
    this.advancedToolbarVisible = false;
  }

  showAdvancedToolbar(){
    this.advancedToolbarContainer.classList.remove('dx-hidden-container');
    this.advancedToolbarVisible = true;
  }

  shrinkToolbarSize(){
    this.toolbarContainer.style.height = '36px';
  }

  setUpAdvancedToolbar(){
    for(let i = 1; i <= 12; ++i){
      this.dxAdvancedToolbar.items.push({
        location:'before',
        widget: 'dxTextBox',
        options: {
          placeholder: `Field ${i}`,
          name: `field-${i}`,
          width: `${i*2 + 5}vw`,
          visible: true
        }
      });
    }
  }

  setUpToolbar(){
    this.dxToolbar.items.push({
      location:'after',
      name: 'searchPanel',
      visible: true
    });
    
    this.dxToolbar.items.push({
      location:'before',
      widget: 'dxDateBox',
      options: {
        placeholder: "Data Nasc. Inicial",
        name: "birthStartDate",
        type: "date", 
        displayFormat: "dd/MM/yyyy"
      }
    });

    this.dxToolbar.items.push({
      location:'after',
      widget: 'dxButton',
      options:{
        name: "advancedFilter",
        icon: 'filter',
        hind: 'Filtro Avançado',
        onClick: this.toogleAdvancedToolbar.bind(this)
      }
    });
  }

  toogleAdvancedToolbar(){
    if(this.advancedToolbarVisible){
      this.hideAdvancedToolbar();
      this.shrinkToolbarSize();
    }else{
      this.showAdvancedToolbar();
      this.expandToolbarSize();
    }
  }

}
