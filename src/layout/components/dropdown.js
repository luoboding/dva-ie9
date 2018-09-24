import React from 'react';
import {
  Col,
  Row,
} from 'antd';
import moment from 'moment';

const getTypeName = type => ['待办', '系统消息', '通知提醒'][type];

export default ({
  type,
  title,
  createTime,
}) => (
  <div className="g-head-dropdown-item">
    <Row gutter={4}>
      <Col span={7}>
        <div className="type">[{getTypeName(type)}]</div>
      </Col>
      <Col span={17}>
        <div className="content">
          <div className="title">{title}</div>
          <div className="created_at">
            <Row>
              <Col span={11}>{moment(createTime).format('YYYY-MM-DD')}</Col>
              <Col span={12}>{moment(createTime).format('hh:mm:ss')}</Col>
            </Row>
          </div>
        </div>
      </Col>
    </Row>
  </div>
);
