{% raw %}
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { SpreadsheetComponent, SheetsDirective, SheetDirective, RangesDirective } from '@syncfusion/ej2-react-spreadsheet';
import { getComponent } from '@syncfusion/ej2-base';
import { RangeDirective, ColumnsDirective, ColumnDirective } from '@syncfusion/ej2-react-spreadsheet';
import { defaultData } from './datasource';
import { DropDownButtonComponent } from '@syncfusion/ej2-react-splitbuttons';
export default class App extends React.Component {
    spreadsheet;
    items = [
        {
            text: "Cut"
        },
        {
            text: "Copy"
        },
        {
            text: "Paste"
        }
    ];
    oncreated() {
        this.spreadsheet.cellFormat({ fontWeight: 'bold', textAlign: 'center', verticalAlign: 'middle' }, 'A1:H1');
    }
    itemSelect(args) {
        let spreadsheet = getComponent(document.getElementById("spreadsheet"), "spreadsheet");
        if (args.item.text === 'Cut')
            spreadsheet.cut();
        if (args.item.text === 'Copy')
            spreadsheet.copy();
        if (args.item.text === 'Paste')
            spreadsheet.paste();
    }
    render() {
        return (<div>
        <DropDownButtonComponent id="element" items={this.items} select={this.itemSelect}> Clipboard </DropDownButtonComponent>
             <SpreadsheetComponent id="spreadsheet" ref={(ssObj) => { this.spreadsheet = ssObj; }} created={this.oncreated.bind(this)} enableClipboard={true}>
                        <SheetsDirective>
                            <SheetDirective>
                                <RangesDirective>
                                    <RangeDirective dataSource={defaultData}></RangeDirective>
                                </RangesDirective>
                                <ColumnsDirective>
                                    <ColumnDirective width={130}></ColumnDirective>
                                    <ColumnDirective width={92}></ColumnDirective>
                                    <ColumnDirective width={96}></ColumnDirective>
                                </ColumnsDirective>
                            </SheetDirective>
                        </SheetsDirective>
                    </SpreadsheetComponent> </div>);
    }
}
ReactDOM.render(<App />, document.getElementById('root'));
{% endraw %}