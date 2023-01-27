{% raw %}
import * as React from 'react';
import * as ReactDOM from "react-dom";
import { Week, Month, TimelineViews, TimelineMonth, Agenda, ScheduleComponent, ViewsDirective, ViewDirective, ResourcesDirective, ResourceDirective, Inject } from '@syncfusion/ej2-react-schedule';
import { doctorData } from './datasource';
import { extend } from '@syncfusion/ej2-base';
function App() {
    function getDoctorName(value) {
        return ((value.resourceData) ?
            value.resourceData[value.resource.textField] :
            value.resourceName);
    }
    function getDoctorLevel(value) {
        let resourceName = getDoctorName(value);
        return (resourceName === 'Will Smith') ? 'Cardiologist' : (resourceName === 'Alice') ? 'Neurologist' : 'Orthopedic Surgeon';
    }
    const data = extend([], doctorData, null, true);
    const resourceData = [
        { text: 'Will Smith', id: 1, color: '#ea7a57', designation: 'Cardioligst' },
        { text: 'Alice', id: 2, color: '#7fa900', designation: 'Neurologist' },
        { text: 'Robson', id: 3, color: '#7fa900', designation: 'Orthopedic Surgeon' }
    ];
    function resourceHeaderTemplate(props) {
        return (<div className="template-wrap">
      <div className="resource-detail"><div className="resource-name">{getDoctorName(props)}</div>
        <div className="resource-designation">{getDoctorLevel(props)}</div></div></div>);
    }
    return (<ScheduleComponent width='100%' height='550px' selectedDate={new Date(2018, 3, 1)} currentView='WorkWeek' resourceHeaderTemplate={resourceHeaderTemplate} eventSettings={{ dataSource: data }} group={{ resources: ['Doctors'] }}>
    <ResourcesDirective>
      <ResourceDirective field='DoctorId' title='Doctor' name='Doctors' dataSource={resourceData} textField='text' idField='id' DesignationField='designation' colorField='color'>
      </ResourceDirective>
    </ResourcesDirective>
    <ViewsDirective>
      <ViewDirective option='Week'/>
      <ViewDirective option='Month'/>
      <ViewDirective option='TimelineWeek'/>
      <ViewDirective option='TimelineMonth'/>
      <ViewDirective option='Agenda'/>
    </ViewsDirective>
    <Inject services={[Week, Month, TimelineViews, TimelineMonth, Agenda]}/>
  </ScheduleComponent>);
}
;
const root = ReactDOM.createRoot(document.getElementById('schedule'));
root.render(<App />);
{% endraw %}