import { ColumnDirective, ColumnsDirective, GridComponent, Inject, Edit, Page, Toolbar } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';
function App() {
    const editSettings = { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Normal' };
    const toolbarOptions = ['Add', 'Edit', 'Delete', 'Update', 'Cancel'];
    const load = () => {
        let instance = document.getElementById('Grid').ej2_instances[0];
        if (instance) {
            instance.element.addEventListener('mouseup', function (e) {
                if (e.target.classList.contains("e-rowcell")) {
                    if (instance.isEdit)
                        instance.endEdit();
                    let index = parseInt(e.target.getAttribute("Index"));
                    instance.selectRow(index);
                    instance.startEdit();
                }
                ;
            });
        }
    };
    return <GridComponent dataSource={data} id="Grid" toolbar={toolbarOptions} allowPaging={true} editSettings={editSettings} load={load}>
    <ColumnsDirective>
      <ColumnDirective field='OrderID' headerText='Order ID' textAlign='Right' width='100' isPrimaryKey={true}></ColumnDirective>
      <ColumnDirective field='CustomerID' headerText='Customer ID' width='120'></ColumnDirective>
      <ColumnDirective field='Freight' headerText='Freight' textAlign='Right' width='120' format='C2'></ColumnDirective>
      <ColumnDirective field='ShipCountry' headerText='Ship Country' width='150'></ColumnDirective>
    </ColumnsDirective>
    <Inject services={[Page, Toolbar, Edit]}/>
  </GridComponent>;
}
;
export default App;
