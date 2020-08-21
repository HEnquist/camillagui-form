import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import devices from './devices.json';
import filters from './filters.json';

import test1 from './arraytest.json';
import Form from "@rjsf/core";

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';
//import { withTheme } from '@rjsf/core';
//import { Theme as AntDTheme } from '@rjsf/antd';

// Make modifications to the theme with your own fields and widgets



//import Form from "@rjsf/antd";
import * as serviceWorker from './serviceWorker';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';


//const Form = withTheme(AntDTheme);
//const Form = JSONSchemaForm.default;
//const schema = {
//  title: "Todo",
//  type: "object",
//  required: ["title"],
//  properties: {
//    title: {type: "string", title: "Title", default: "A new task"},
//    done: {type: "boolean", title: "Done?", default: false}
//  }
//};

const log = (type) => console.log.bind(console, type);

function CustomFieldTemplate(props) {
  const {id, classNames, label, help, required, description, errors, children} = props;
  return (
    <div className={classNames}>
      <label htmlFor={id}>{label}{required ? "*" : null}</label>
      {description}
      {children}
      {errors}
      {help}
    </div>
  );
}

function CustomFieldTemplate2(props) {
  const {id, classNames, label, help, required, description, errors, children} = props;
  return (
    <div className={classNames} class="form-group row">
      <label htmlFor={id} class="col-sm-2 col-form-label" className="col-lg-2 col-md-4 col-sm-6 col-xs-12">{label}{required ? "*" : null}</label>
      {description}
      <div class="col-md-8">
      {children}
      {errors}
      {help}
      </div>
    </div>
  );
}

function CustomFieldTemplate3(props) {
  const {id, classNames, label, help, required, description, errors, children} = props;
  console.log(props);
  return (
    <div className={classNames} class="form-group row">
      <label htmlFor={id} class="col-lg-2 col-md-4 col-sm-6 col-xs-12 col-form-label">{label}{required ? "*" : null}</label>
      {description}
      <div className={classNames} class="col-lg-10">
      {children}
        {errors}
        {help}
      </div>
    </div>
  );
}

function ObjectFieldTemplate({ TitleField, properties, title, description }) {
  return (
    <div>
      <TitleField title={title} />
      <div className="row">
        {properties.map(prop => (
          <div
            className="col-lg-2 col-md-4 col-sm-6 col-xs-12"
            key={prop.content.key}>
            {prop.content}
          </div>
        ))}
      </div>
      {description}
    </div>
  );
}

//<div class="form-group row">
//<label for="staticEmail" class="col-sm-2 col-form-label">Email</label>
//<div class="col-sm-10">
//  <input type="text" readonly class="form-control-plaintext" id="staticEmail" value="email@example.com">
//</div>
//</div>

const uiSchema = {
  "additionalProperties": {
    "type": {
      "ui:FieldTemplate": CustomFieldTemplate3
    },
    "parameters": {
      "type": {
        "ui:FieldTemplate": CustomFieldTemplate3
      },
      "freq": {
        "ui:FieldTemplate": CustomFieldTemplate3
      },
      "q": {
        "ui:FieldTemplate": CustomFieldTemplate3
      },
      "slope": {
        "ui:FieldTemplate": CustomFieldTemplate3
      },
      "gain": {
        "ui:FieldTemplate": CustomFieldTemplate3
      },
      "freq_act": {
        "ui:FieldTemplate": CustomFieldTemplate3
      },
      "q_act": {
        "ui:FieldTemplate": CustomFieldTemplate3
      },
      "freq_target": {
        "ui:FieldTemplate": CustomFieldTemplate3
      },
      "q_target": {
        "ui:FieldTemplate": CustomFieldTemplate3
      }
    }
  }
}

const uiSchema2 = {
  "properties": {
    "ui:FieldTemplate": ObjectFieldTemplate
  }
}

// className="form-inline" />
const Component = (
<div>
<Tabs>
    <TabList>
      <Tab>Devices</Tab>
      <Tab>Filters</Tab>
      <Tab>Mixers</Tab>
      <Tab>Pipeline</Tab>
    </TabList>

    <TabPanel>
    <Form schema={devices}
        onChange={log("changed")}
        onSubmit={log("submitted")}
        onError={log("errors")} 
        FieldTemplate={CustomFieldTemplate2}/>
    </TabPanel>
    <TabPanel>
    <Form schema={filters}
        onChange={log("changed")}
        onSubmit={log("submitted")}
        onError={log("errors")}
        FieldTemplate={CustomFieldTemplate3}/>
    </TabPanel>
    <TabPanel>
    <Form schema={test1}
        onChange={log("changed")}
        onSubmit={log("submitted")}
        onError={log("errors")}
        FieldTemplate={CustomFieldTemplate2}
        ObjectTemplate={ObjectFieldTemplate}/>
    </TabPanel>
    <TabPanel>
    <Form schema={filters}
        uiSchema={uiSchema}
        onChange={log("changed")}
        onSubmit={log("submitted")}
        onError={log("errors")}/>
    </TabPanel>
  </Tabs>
  </div>
);

ReactDOM.render(Component, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
