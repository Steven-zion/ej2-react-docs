import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { SpreadsheetComponent, SheetsDirective, SheetDirective, RangesDirective } from '@syncfusion/ej2-react-spreadsheet';
import { RangeDirective, ColumnsDirective, ColumnDirective } from '@syncfusion/ej2-react-spreadsheet';
import { budgetData, salaryData } from './datasource';
import { DialogComponent } from '@syncfusion/ej2-react-popups';
export default class App extends React.Component {
    spreadsheet;
    dialogObj;
    protectSettings = { selectCells: true };
    btn = [{ click: this.lockCells.bind(this),
            buttonModel: { content: 'Ok', isPrimary: true } }];
    dataBound() {
        this.spreadsheet.cellFormat({ fontWeight: 'bold', textAlign: 'center' }, 'A1:D1');
        this.spreadsheet.cellFormat({ fontWeight: 'bold' }, 'A11:D11');
    }
    ;
    lockCells() {
        this.spreadsheet.lockCells('A1:F3', false);
        this.dialogObj.hide();
    }
    showDlg() {
        this.dialogObj.show();
    }
    render() {
        return (<div> <button className='e-btn' onClick={this.showDlg.bind(this)}>Unlock cells</button>
        <SpreadsheetComponent ref={(ssObj) => { this.spreadsheet = ssObj; }} dataBound={this.dataBound.bind(this)}>
                        <SheetsDirective>
                            <SheetDirective name={"Budget"} isProtected={true} protectSettings={this.protectSettings}>
                                <RangesDirective>
                                    <RangeDirective dataSource={budgetData}></RangeDirective>
                                </RangesDirective>
                                <ColumnsDirective>
                                    <ColumnDirective width={100}></ColumnDirective>
                                    <ColumnDirective width={100}></ColumnDirective>
                                    <ColumnDirective width={100}></ColumnDirective>
                                    <ColumnDirective width={100}></ColumnDirective>
                                </ColumnsDirective>
                            </SheetDirective>
                            <SheetDirective name={"Salary"}>
                                <RangesDirective>
                                    <RangeDirective dataSource={salaryData}></RangeDirective>
                                </RangesDirective>
                                <ColumnsDirective>
                                    <ColumnDirective width={100}></ColumnDirective>
                                    <ColumnDirective width={100}></ColumnDirective>
                                    <ColumnDirective width={100}></ColumnDirective>
                                    <ColumnDirective width={100}></ColumnDirective>
                                </ColumnsDirective>
                            </SheetDirective>
                        </SheetsDirective>
                    </SpreadsheetComponent>
                    <DialogComponent ref={(dlgObj) => { this.dialogObj = dlgObj; }} header={'Spreadsheet'} target={document.getElementById('spreadsheet')} content={'"A1:F3" range of cells has been unlocked.'} showCloseIcon={true} isModal={true} visible={false} width={'500px'} buttons={this.btn}>
                        </DialogComponent> </div>);
    }
}
ReactDOM.render(<App />, document.getElementById('root'));