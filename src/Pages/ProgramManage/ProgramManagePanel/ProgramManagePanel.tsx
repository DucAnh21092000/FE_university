import React, { useState } from "react";
import { Table, Button, Drawer, Form, Input, Select, DatePicker } from "antd";
import styles from "./ProgramManagePanel.module.scss";

const ProgramManagePanel = () => {
  const [isDrawerVisible, setIsDrawerVisible] = useState(false);

  const showDrawer = () => {
    setIsDrawerVisible(true);
  };

  const onCloseDrawer = () => {
    setIsDrawerVisible(false);
  };

  const onFinish = (values: any) => {
    console.log("Received values:", values);
    onCloseDrawer();
  };
  return (
    <div className={styles.studentManagePanel}>
      <Button type="primary" onClick={showDrawer}>
        Edit Subject
      </Button>
      <Drawer
        title="Edit Subject Information"
        width={720}
        onClose={onCloseDrawer}
        visible={isDrawerVisible}
        bodyStyle={{ paddingBottom: 80 }}
      >
        <Form layout="vertical" onFinish={onFinish}>
          <Form.Item
            name="name"
            label="Program Name"
            rules={[{ required: true, message: "Please input Program name!" }]}
          >
            <Input placeholder="Subject Name" />
          </Form.Item>
          <Form.Item
            name="startDate"
            label="Start Date"
            rules={[{ required: true, message: "Please select start date!" }]}
            className={styles.startDate}
          >
            <DatePicker
              style={{ width: "100%" }}
              format={{
                format: "DD-MM-YYYY",
                type: "mask",
              }}
              // onChange={onChange}
            />
          </Form.Item>
          <Form.Item
            name="numberOfSession"
            label="Number of Session"
            rules={[
              { required: true, message: "Please input number of session" },
            ]}
          >
            <Input placeholder="Number of Session" type="number" />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Save
            </Button>
          </Form.Item>
        </Form>
      </Drawer>
    </div>
  );
};

export default ProgramManagePanel;
