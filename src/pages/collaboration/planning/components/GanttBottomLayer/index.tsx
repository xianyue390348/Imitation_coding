import {FC} from 'react'
import styles from './index.less'
import React from 'react'
import moment from "moment";

interface DayBarProps {
  time: moment.Moment
}

const DayBar: React.FC<DayBarProps> = (props: DayBarProps) => {
  const result = []
  const days = props.time.daysInMonth();
  const time = props.time.clone();
  for (let i = 0; i < days; i++) {
    result.push({time: time, isWeekend: time.isoWeekday() > 5, today: time.isSame(moment(), 'day')})
    time.add(1, "day");
  }
  return (
      <div className={styles.dayBarGroup}>
        {result.map((item, index) => {
          return <div key={index} className={`${styles.dayItem} ${item.isWeekend ? styles.dayItemWeekend : null} ${item.today ? styles.dayItemToday : null}`}>
          </div>
        })}
      </div>
  )
}

interface Props {
  monthList: moment.Moment[]
}

const GanttBottomLayer: FC<Props> = (props) => {
  const {monthList} = props
  return <>
    <div className={styles.ganttBottomLayerBarDay}>
      {/* 每一天的竖线 */}
      {monthList.map((month, index) => {
        return <DayBar key={index} time={month}></DayBar>;
      })}
    </div>
  </>
}


export default GanttBottomLayer;