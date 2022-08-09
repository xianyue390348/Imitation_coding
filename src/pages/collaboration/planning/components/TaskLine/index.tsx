import moment from "moment";
import React from "react";
import {ITaskData} from "../type";
import styles from "./index.less";


interface IGanttRowProps {
  rowData?: ITaskData;
  monthList: moment.Moment[]
}

function GanttRow(props: IGanttRowProps) {
  if (!props.rowData) {
    return <div className={styles.ganttTaskLine}></div>
  }
  // 宽度为开始到结束日期 * 44px
  const beginMoment = moment(props.rowData.beginDate);
  const endMoment = moment(props.rowData.endDate);
  const width = (endMoment.diff(beginMoment, "days") + 1) * 44;
  // 当前偏移X长度，用当前开始时间，减去monthList的第一个的，计算剩余天数 * 44
  const offsetX = beginMoment.diff(props.monthList[0], "days") * 44;
  // 根据当前时间，与任务的结束时间进行比较，如果大于，颜色为#929eaf，如果在开始和结束时间之间，为#47a3ff，如果当前时间大于结束时间，颜色为#ff5b5b
  const color = moment().isAfter(endMoment) ? "#ff5b5b" : moment().isAfter(beginMoment) ? "#47a3ff" : "#929eaf";
  // 如果开始时间在monthList最后一个之后，则不显示
  const isHide = beginMoment.isAfter(props.monthList[props.monthList.length - 1]);
  if (isHide) {
    return null;
  }
  const backgroundColor = 'rgba(233,235,237, 08)'

  let backgroundColorVarStyle = {}
  backgroundColorVarStyle = {
    '--background-color': backgroundColor
  }

  return (
      <div className={styles.ganttTaskLine} style={backgroundColorVarStyle}>
        {/*包裹整个row的div，包括了当前任务是否逾期以显示不同的颜色的背景的逻辑*/}
        <div className={styles.ganttRowWrap}
             style={{width: `${width}px`, background: color, transform: `translateX(${offsetX}px)`}}>
          <div className="ganttRowContainer">
            {/* 这里存放整个控制条的内容，包括左右添加，resize，信息，以及显示的内容条 */}
            <div className="ganttRowBar">

            </div>
          </div>
        </div>
      </div>
  );
}

interface ITaskLineProps {
  taskData: ITaskData[];
  monthList: moment.Moment[]
}

const TaskLine: React.FC<ITaskLineProps> = (props: ITaskLineProps) => {
  const {taskData} = props;
  const maxLineNumber = taskData.reduce((max, cur) => {
    return cur.yIndex > max ? cur.yIndex : max;
  }, 0);
  const lines = Array(maxLineNumber + 1).fill(0).map((item, index) => taskData.find(item => item.yIndex === index));

  return (
      <div style={{position: 'absolute', top: 0}}>
        {lines.map((item, index) => {
          return <GanttRow key={index} monthList={props.monthList} rowData={item}></GanttRow>;
        })}
      </div>
  );
};

export default TaskLine;
