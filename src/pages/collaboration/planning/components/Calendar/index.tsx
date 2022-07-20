import moment from "moment";
import "moment/locale/zh-cn";
import styles from "./index.less";

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
        let week: any = time.day() - 1;
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
            case -1:
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
                return <div className={[styles.dayTitle, item.active ?styles.active : null].join(' ')}><span className={styles.dayTitleWeek}>{item.week}</span><span className={styles.dayTitleDate}>{item.days}</span></div>
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

const Calendar: React.FC = () => {
    const monthList: Array<moment.Moment> = [];
    // moment 设置中文
    moment.locale("zh-cn");
    let now = moment();
    now.date(1)
    // 获取最近的24个月，加入列表里.
    now = now.add(-1, "year");
    for (let i = 0; i < 12; i++) {
        monthList.push(now.add(1, "M").clone());
    }

    return (
        <>
            <div className={styles.calendar}>
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
