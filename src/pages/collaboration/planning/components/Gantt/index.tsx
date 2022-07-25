import Calendar from "../Calendar/index";
import React from "react";
import styles from './index.less'
import moment from "moment";
import GanttBottomLayer from "../GanttBottomLayer/index";


interface GanttProps {
  monthList: moment.Moment[]
}

const Gantt: React.FC<GanttProps> = (props: GanttProps) => {
    // Gantt 最外层，内部包含一堆小组件，返回按钮之类的东西
    return <div className={styles.gantt}>
      {/* body */}
      <div className={styles.ganttList}>
        {/* 这里有个div，计算了高度，弹性布局，定位为relative */}
        <div>
          {/* 同上，只是没有了弹性布局 */}
          <div>
            {/* gantt-body-header 其作为日期的部分 */}
            <Calendar monthList={ props.monthList }></Calendar>
          </div>
          {/* 一个计算了宽高的div，position为relative，用存放内容 */}
          <div>
            {/* gantt-bottom-layer 用来画网格的部分 */}
            <GanttBottomLayer monthList={ props.monthList }></GanttBottomLayer>
            {/* table 同行的线，用来标识具体的时间 */}
          </div>
        </div>
      </div>
    </div>
}

export default Gantt