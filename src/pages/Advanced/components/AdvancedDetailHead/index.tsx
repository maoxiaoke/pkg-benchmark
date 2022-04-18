import * as React from 'react';
import { Box, Form, Typography, Avatar, Tab, MenuButton, Button, Card, Step, Table, Divider } from '@alifd/next';

import styles from './index.module.css';

export interface LogItem {
  opStatus?: string;
  operator?: string;
  opResult?: string;
  opTime?: string;
}

export interface DataSource {
  logs?: LogItem[];
  person?: {
    avatar?: string;
    surname?: string;
    name?: string;
    phone?: string;
    email?: string;
    region?: string;
    address?: string;
    workTime?: number;
    education?: string;
    rank?: string;
    position?: string;
    department?: string;
    workAddress?: string;
  };
  preJob?: {
    company?: string;
    position?: string;
    address?: string;
    description?: string;
  };
  salary?: {
    month?: string;
    monthNumber?: string;
    bonus?: string;
    rsu?: string;
  };
}

const DEFAULT_DATA: DataSource = {
  logs: [
    ['主管审批', '梅长苏'],
    ['HRG', '叶周全'],
    ['C&B审核人', '吴永辉'],
    ['业务线审批', '倩倩'],
    ['HR线审批', '叶俊'],
  ].map((item): LogItem => ({
    opStatus: item[0],
    operator: item[1],
    opResult: '同意',
    opTime: '2019-11-11 09:36',
  })),
  person: {
    avatar: 'https://img.alicdn.com/tfs/TB10Kr8orj1gK0jSZFOXXc7GpXa-1000-1000.png',
    surname: '谢',
    name: '莉莉',
    phone: '13676349585',
    email: 'Xielili@aliwork-inc.com',
    region: '中国/浙江',
    address: '杭州',
    workTime: 3,
    education: 'Singapore University of Technology and Design',
    rank: 'P10',
    position: 'Senior Director',
    department: 'aliwork&EHR',
    workAddress: '杭州',
  },
  preJob: {
    company: '浙江杭州天猫有限公司',
    position: '高级研发专家',
    address: '中国/浙江',
    description: 'Fusion 是一套企业级中后台设计系统解决方案，致力于解决产品体验一致性问题、设计研发协同问题，以及UI开发效率问题。',
  },
  salary: {
    month: '20,000 USD',
    monthNumber: '13',
    bonus: '5,000 USD',
    rsu: 'No',
  },
};
interface AdvancedDetailProps {
  dataSource: DataSource;
  onTabChange: () => void;
  onTableTabChange: () => void;
}
const AdvancedDetail: React.FunctionComponent<AdvancedDetailProps> = (props: AdvancedDetailProps): JSX.Element => {
  const {
    dataSource = DEFAULT_DATA,
    onTabChange = (): void => { },
    onTableTabChange = (): void => { },
  } = props;

  const renderTab = (): JSX.Element => {
    return (
      <Tab navClassName={styles.tabBar} onChange={onTableTabChange}>
        <Tab.Item title={<span className={styles.tabItemTitle}>操作日志一</span>} key="1" className={styles.tabItem} />
        <Tab.Item title={<span className={styles.tabItemTitle}>操作日志二</span>} key="2" className={styles.tabItem} />
        <Tab.Item title={<span className={styles.tabItemTitle}>操作日志三</span>} key="3" />
      </Tab>
    );
  };

  return (
    <>
      <Card free className={styles.advancedDetailHead}>
        <Box spacing={10}>
          <Tab navClassName={styles.tabBar} onChange={onTabChange}>
            <Tab.Item
              title={<span className={styles.tabItemTitle}>选项卡一</span>}
              key="1"
              className={styles.tabItem}
            />
            <Tab.Item
              title={<span className={styles.tabItemTitle}>选项卡二</span>}
              key="2"
              className={styles.tabItem}
            />
            <Tab.Item title={<span className={styles.tabItemTitle}>选项卡三</span>} key="3" />
          </Tab>
        </Box>
      </Card>
      <Box spacing={20}>
        <Card contentHeight="auto">
          <Step shape="dot" current={1} className={styles.step}>
            <Step.Item title="审批" content={<a className={styles.stepA}>张三</a>} />
            <Step.Item title="接受" />
            <Step.Item title="合同发送" />
            <Step.Item title="合同接受" />
            <Step.Item title="入职准备" />
            <Step.Item title="完成" />
          </Step>
        </Card>
        <Card free>
          <Card.Header title="基础信息" />
          <Card.Divider />
          <Card.Content>
            <div className={styles.Content} />
          </Card.Content>
        </Card>
        <Card free showHeadDivider={false}>
          <Card.Header title="工作经历" />
          <Card.Divider />
          <Card.Content>
            <Box>
              <Typography.Text className={styles.subTitle}>分类标题</Typography.Text>
            </Box>
            <Divider dashed />
            <Typography.Text className={styles.subTitle}>分类标题</Typography.Text>
            <Box />
          </Card.Content>
        </Card>
        <Card free>
          <Card.Header title={renderTab()} className={styles.tableCardHeader} />
          <Card.Divider />
          <Card.Content>
            <div className={styles.content}>
              <Table dataSource={dataSource.logs} hasBorder={false} className={styles.mainTable}>
                <Table.Column title="操作进程" dataIndex="opStatus" />
                <Table.Column title="操作人" dataIndex="operator" />
                <Table.Column title="执行结果" dataIndex="opResult" />
                <Table.Column title="操作时间" dataIndex="opTime" />
              </Table>
            </div>
          </Card.Content>
        </Card>
      </Box>
    </>
  );
};

export default AdvancedDetail;
