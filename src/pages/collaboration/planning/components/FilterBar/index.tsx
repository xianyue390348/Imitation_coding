import { SearchOutlined } from "@ant-design/icons";
import { Input } from "antd";
import styles from "./index.less"
import "./customer.less"

const FilterBar: React.FC = () => {
    return <div className={styles.filterBar}>
        <Input placeholder="事项 ID 或标题" style={{width: '168px'}} addonAfter={<SearchOutlined />}/>
    </div>
}

export default FilterBar;