// 模仿页面 https://fhxy123.coding.net/p/test/collaboration/planning
// 首先是顶部一个菜单条，点击会触发跳转

import Calendar from "./components/Calendar";
import FilterBar from "./components/FilterBar";
import MenuBar from "./components/MenuBar";
// import styles from './index.less'

function Planning() {
  return (
    <div>
      <MenuBar></MenuBar>
      <FilterBar></FilterBar>
      <Calendar></Calendar>
    </div>
  );
}

export default Planning;
