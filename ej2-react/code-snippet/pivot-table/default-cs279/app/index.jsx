import { GroupingBar, Inject, PivotViewComponent } from '@syncfusion/ej2-react-pivotview';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { alphanumeric_data } from './datasource';
function App() {
    let dataSourceSettings = {
        dataSource: alphanumeric_data,
        rows: [{ name: 'ProductID', dataType: 'number' }],
        columns: [{ name: 'Country' }],
        values: [{ name: 'Sold', caption: 'Units Sold' }, { name: 'Amount', caption: 'Sold Amount' }],
        formatSettings: [{ name: 'Amount', format: 'C0' }],
        filters: []
    };
    let pivotObj;
    return (<PivotViewComponent ref={d => pivotObj = d} id='PivotView' height={350} showGroupingBar={true} dataSourceSettings={dataSourceSettings}><Inject services={[GroupingBar]}/></PivotViewComponent>);
}
;
export default App;
ReactDOM.render(<App />, document.getElementById('sample'));
