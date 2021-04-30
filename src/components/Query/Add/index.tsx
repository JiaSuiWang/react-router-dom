/*
 * @Descripttion: 
 * @Author: xiao wang
 * @Date: 2021-04-14 00:14:16
 * @LastEditors: xiao wang
 * @LastEditTime: 2021-04-14 12:01:41
 * @FilePath: \react-typescript\src\components\Query\Add\index.tsx
 */
import React, { FC, useState } from 'react';
import { Modal, Button } from 'antd';
// import SubQuery from '../SubQuery';
import Test from '../../Test'


interface Iprops{
  handleAdd: () => void
}
const Add: FC<Iprops> = ({handleAdd}) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <Button type="primary" onClick={showModal}>
        ADD
      </Button>
      <Modal title="Add a New Bee Information" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
          {/* <SubQuery 
            handleAdd = {handleAdd}
          /> */}
          <Test/>
      </Modal>
    </>
  );
};

export default Add;

