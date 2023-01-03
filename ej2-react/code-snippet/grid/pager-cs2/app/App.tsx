

import { ColumnDirective, ColumnsDirective } from '@syncfusion/ej2-react-grids';
import { Grid, GridComponent, Inject, Page } from '@syncfusion/ej2-react-grids'
import * as React from 'react';
import { data } from './datasource';

function App() {
  const onLoad = () => {
    let gridElement = document.getElementById('grid');
    if (gridElement && gridElement.ej2_instances[0]) {
      let gridInstance = gridElement.ej2_instances[0];
      /** height of the each row */
      const rowHeight: number = gridInstance.getRowHeight();
      /** Grid height */
      const gridHeight: number = gridInstance.height as number;
      /** initial page size */
      const pageSize: number = gridInstance.pageSettings.pageSize as number;
      /** new page size is obtained here */
      const pageResize: any = (gridHeight - (pageSize * rowHeight)) / rowHeight;
      gridInstance.pageSettings.pageSize = pageSize + Math.round(pageResize);
    }
  }
    return <GridComponent id="grid" dataSource={data} allowPaging={true} height={325} load={onLoad}>
              <ColumnsDirective>
                <ColumnDirective field='OrderID' headerText='Order ID' width='120' textAlign="Right"/>
                <ColumnDirective field='CustomerID' headerText='Customer ID' width='150'/>
                <ColumnDirective field='ShipCity' headerText='Ship City' width='150'/>
                <ColumnDirective field='ShipName' headerText='Ship Name' width='150'/>
            </ColumnsDirective>
            <Inject services={[Page]}/>
        </GridComponent>
};
export default App;


