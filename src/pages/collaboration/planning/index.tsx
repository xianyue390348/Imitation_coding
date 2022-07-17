// 模仿页面 https://babybus.coding.net/p/iCloud/collaboration/planning
// 首先是顶部一个菜单条，点击会触发跳转

import FilterBar from "./components/FilterBar";
import MenuBar from "./components/MenuBar";
// import styles from './index.less'

function Planning() {
  return (
    <div>
      <MenuBar></MenuBar>
      <FilterBar></FilterBar>
    </div>
  );
}

export default Planning;
