

import { ClickEventArgs } from '@syncfusion/ej2-navigations';
import { ColumnDirective, ColumnsDirective, GridComponent, ToolbarItems } from '@syncfusion/ej2-react-grids';
import { ExcelExport, ExcelExportProperties, Grid, Inject, Toolbar } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';

function App() {
  let grid: Grid | null;
  const toolbar: ToolbarItems[] = ['ExcelExport'];

  const toolbarClick = (args: ClickEventArgs) => {
    if (grid && args.item.id === 'grid_excelexport') {
      const excelExportProperties: ExcelExportProperties = {
        theme: {
          caption: { fontName: 'Segoe UI', fontColor: '#666666' },
          header: { fontName: 'Segoe UI', fontColor: '#666666' },
          record: { fontName: 'Segoe UI', fontColor: '#666666' }
        }
      };
      grid.excelExport(excelExportProperties);
    }
  }
  return (
    <div>
      <GridComponent id='grid' dataSource={data} height={270} toolbar={toolbar}
        allowExcelExport={true} toolbarClick={toolbarClick} ref={g => grid = g}>
        <ColumnsDirective>
          <ColumnDirective field='OrderID' headerText='Order ID' width='120' textAlign='Right' />
          <ColumnDirective field='CustomerID' headerText='Customer ID' visible={false} width='150' />
          <ColumnDirective field='Freight' width='100' textAlign='Right' />
          <ColumnDirective field='ShipCity' headerText='Ship City' width='150' />
          <ColumnDirective field='ShipName' headerText='Ship Name' width='150' />
        </ColumnsDirective>
        <Inject services={[Toolbar, ExcelExport]} />
      </GridComponent>
    </div>
  );
};
export default App;


