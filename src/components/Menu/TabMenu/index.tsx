import { useState } from "react";
import styles from "./index.less";

interface MenuOptions {
  title: string;
  type: "Menu";
  isActive?: (record: TabMenuOptions) => boolean;
  onClick?: (record: TabMenuOptions) => void;
}

interface DashOptions {
  type: "Separator";
}

export type TabMenuOptions = MenuOptions | DashOptions;

interface TabMenuProps {
  options: TabMenuOptions[];
}

const TabMenu: React.FC<TabMenuProps> = (props: TabMenuProps) => {
  const [activityMenu, setActivityMenu] = useState("");
  // 默认选中第一个
  if (
    props.options.filter((item) => item.type === "Menu").length &&
    activityMenu === ""
  ) {
    setActivityMenu(
      (props.options.filter((item) => item.type === "Menu")[0] as MenuOptions)
        .title
    );
  }

  return (
    <div className={styles.tabMenuWrap}>
      {props.options.map((item, index) => {
        if (item.type === "Menu") {
          return (
            <div
              key={item.title}
              className={[
                styles.tabMenu,
                item.title === activityMenu ? styles.active : "",
              ].join(" ")}
              onClick={() => {
                setActivityMenu(item.title);
              }}
            >
              {item.title}
            </div>
          );
        } else {
          return <div key={index} className={styles.tabSeparator} />;
        }
      })}
    </div>
  );
};

export default TabMenu;
