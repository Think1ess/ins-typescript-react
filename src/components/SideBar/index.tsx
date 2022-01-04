import * as React from "react";
import { Tabs, Radio, Space } from 'antd';
import EditInfo from "../EditInfo";
const { TabPane } = Tabs;


export default function SideBar(): JSX.Element {
    return (
      <Tabs tabPosition='left'>
          <TabPane tab="Edit Homepage" key="1">
            <EditInfo/>
          </TabPane>
          <TabPane tab="Change Password" key="2">
            Content of Tab 2
          </TabPane>
          <TabPane tab="..." key="3">
            Content of Tab 3
          </TabPane>
        </Tabs>
    );
}