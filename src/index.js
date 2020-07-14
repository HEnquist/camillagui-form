import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import devices from './devices.json';
import Form from "@rjsf/core";
import * as serviceWorker from './serviceWorker';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

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

const Component = (
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
        onError={log("errors")} />
    </TabPanel>
    <TabPanel>
      <h2>Any content 2</h2>
    </TabPanel>
    <TabPanel>
      <h2>Any content 3</h2>
    </TabPanel>
    <TabPanel>
      <h2>Any content 4</h2>
    </TabPanel>
  </Tabs>
);

ReactDOM.render(Component, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
