import styles from "./index.less";
import React from 'react'
import moment from "moment";

interface DateProps {
    time: moment.Moment;
}

const preDayWidth = 44;

const Day: React.FC<DateProps> = (props: DateProps) => {
    // 获取当前月份一共多少天
    const result = []
    const days = props.time.daysInMonth();
    const time = props.time.clone();
    for (let i = 0; i < days; i++) {
        // 补足两位的日份
        const day = time.format("DD");
        let week: number | string | null = time.day() ;
        switch (week) {
            case 1:
                week = '一'
                break;
            case 2:
                week = '二'
                break;
            case 3:
                week = '三'
                break;
            case 4:
                week = '四'
                break;
            case 5:
                week = '五'
                break;
            case 6:
                week = '六'
                break;
            case 0:
                week = '日'
                break;
        }
        // 如果日期是今天，则active为true
        result.push({days: day, week: week, active: time.isSame(moment(), 'day')})
        time.add(1, "day");
    }
    // 显示中文的月份
    return (
        <div className={[styles.dayItem].join(' ')}>
            {result.map((item, index) => {
                return <div key={index} className={[styles.dayTitle, index === 0 ? styles.lineLeft: null].join(' ')}>
                  <div style={{ marginBottom: '11px' }} className={[item.active ?styles.active : null].join(' ')}>
                    <span className={styles.dayTitleWeek}>{item.week}</span><span className={styles.dayTitleDate}>{item.days}</span>
                  </div>
                </div>
            })}
        </div>
    );
};

const Date: React.FC<DateProps> = (props: DateProps) => {
    // 获取当前月份一共多少天
    const days = props.time.daysInMonth();
    const width = days * preDayWidth;
    // 显示中文的月份
    return (
        <div className={styles.month} style={{width: `${width}px`}}>
            <span className={styles.monthTitle}>
              {props.time.format("MMMM")}
            </span>
        </div>
    );
};

interface CalendarProps {
  monthList: moment.Moment[]
}

const Calendar: React.FC<CalendarProps> = (props: CalendarProps) => {
    const { monthList } = props
    const allMonthDayCount = monthList.map(item => item.daysInMonth()).reduce((prev, curr) => prev + curr);
    return (
        <>
            <div className={styles.calendar} style={{width: `${allMonthDayCount * 44}px`}}>
                {/* 月份框框 */}
                <div className={styles.date}>
                    {monthList.map((month, index) => {
                        return <Date key={index} time={month}></Date>;
                    })}
                </div>
                {/* 具体的日期内容 */}
                <div className={styles.day}>
                    {monthList.map((month, index) => {
                        return <Day key={index} time={month}></Day>;
                    })}
                </div>
            </div>
        </>
    );
};

export default Calendar;
