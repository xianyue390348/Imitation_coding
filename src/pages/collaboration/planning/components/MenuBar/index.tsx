import { Button } from 'antd';
import TabMenu, { TabMenuOptions } from "src/components/Menu/TabMenu";
import styles from "./index.less";
import { PlusOutlined } from "@ant-design/icons";

const MenuBar: React.FC = () => {
  // 计划 迭代 全部事项 需求 任务 缺陷
  const options: Array<TabMenuOptions> = [
    { title: "计划", type: "Menu" },
    { title: "迭代", type: "Menu" },
    { type: "Separator" },
    { title: "全部事项", type: "Menu" },
    { title: "需求", type: "Menu" },
    { title: "任务", type: "Menu" },
    { title: "缺陷", type: "Menu" },
  ];

  return (
    <div className={styles.menuBar}>
      <TabMenu options={options} />
      <div style={{ marginRight: "24px", lineHeight: "48px" }}>
        <Button type='primary'>
          <PlusOutlined style={{marginRight: '4px'}}/>
          创建迭代
        </Button>
      </div>
    </div>
  );
};

export default MenuBar;
