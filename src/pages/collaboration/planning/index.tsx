// 模仿页面 https://fhxy123.coding.net/p/test/collaboration/planning
// 首先是顶部一个菜单条，点击会触发跳转

import FilterBar from "./components/FilterBar";
import MenuBar from "./components/MenuBar";
import React from "react";
import Gantt from "./components/Gantt/index";
import moment from "moment";
import "moment/locale/zh-cn";

function Planning() {
  const monthList: Array<moment.Moment> = [];
  // moment 设置中文
  moment.locale("zh-cn");
  const now = moment();
  // 获取最近的12个月，加入列表里. now设置为今年年初
  now.set("month", 0);
  for (let i = 0; i < 12; i++) {
    monthList.push(now.clone());
    now.add(1, "M")
  }

  return (
      <div>
        <MenuBar></MenuBar>
        <FilterBar></FilterBar>
        <Gantt monthList={monthList}></Gantt>
      </div>
  );
}

export default Planning;
