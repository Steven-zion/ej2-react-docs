

import { GroupingBar, FieldList, IDataOptions, IDataSet, Inject, PivotViewComponent, PivotActionFailureEventArgs } from '@syncfusion/ej2-react-pivotview';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { pivotData } from './datasource';

function App() {

  let dataSourceSettings: IDataOptions = {
    dataSource: pivotData as IDataSet[],
    expandAll: false,
    columns: [{ name: 'Year', caption: 'Production Year' }, { name: 'Quarter' }],
    rows: [{ name: 'Country' }, { name: 'Products' }],
    values: [{ name: 'Sold', caption: 'Units Sold' }, { name: 'Amount', caption: 'Sold Amount' }],
    filters: [],
  }
  let pivotObj: PivotViewComponent;
  
  return (<PivotViewComponent  ref={d => pivotObj = d} id='PivotView' height={350} dataSourceSettings={dataSourceSettings} actionFailure={actionFailure.bind(this)} showFieldList={true} showGroupingBar={true}><Inject services={[FieldList, GroupingBar]} /></PivotViewComponent>);

  function actionFailure(args: PivotActionFailureEventArgs): void {
    if (args.actionName == 'Sort field' || args.actionName == 'Sort value') {
      // Triggers when the current UI action fails to achieve the desired result.
    }
  }
};

export default App;
ReactDOM.render(<App />, document.getElementById('sample'));



