import {FilterOutlined, SearchOutlined, StockOutlined} from "@ant-design/icons";
import {Input, Popover, Space} from "antd";
import styles from "./index.less"
import "./customer.less"
import React from 'react'

const FilterBar: React.FC = () => {
  return <div className={styles.filterBar}>
    <Space style={{ justifyContent: 'center', alignItems: 'center' }}>
      <Input placeholder="事项 ID 或标题" style={{width: '168px', marginTop: '8px'}} addonAfter={<SearchOutlined/>}/>
      <Popover placement="topLeft" content={'123'} trigger="click">
        <div className={styles.buttonLike}>
          <FilterOutlined style={{ marginRight: '6px' }}/>更多筛选
        </div>
      </Popover>
      <Popover placement="topLeft" content={'123'} trigger="click">
        <div className={styles.buttonLike}>
          <StockOutlined style={{ marginRight: '6px' }}/>阻塞关系
        </div>
      </Popover>
    </Space>
  </div>
}

export default FilterBar;