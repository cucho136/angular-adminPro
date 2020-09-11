import { Component, Input} from '@angular/core';
import { Color, Label, MultiDataSet } from 'ng2-charts';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styles: [
  ]
})
export class DonaComponent{

  // tslint:disable-next-line: no-inferrable-types
  @Input() title: string = 'sin titulos';

  // Doughnut
  // tslint:disable-next-line: no-input-rename
  @Input('labels') doughnutChartLabels: Label[] = ['Data1', 'Data2', 'Data3'];
  // tslint:disable-next-line: no-input-rename
  @Input('data') doughnutChartData: MultiDataSet = [
    [350, 450, 100],
  ];
  public colors: Color[] = [
    {backgroundColor: ['#6857E6', '#009FEE', '#F02059']}

  ];

}
