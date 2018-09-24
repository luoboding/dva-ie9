import React from 'react';
import { Layout } from 'antd';
import './assets/styles/index.less';

const { Content } = Layout;

export default () => (
  <div className="g-container">
    <Content className="page-notfound">
      <div className="page-notfound-box">
        <img src={require('./assets/images/account-advert-rabbit.svg')} alt="not found" />
        <div className="title">你要找的页面飞走啦...</div>
      </div>
    </Content>
  </div>
);
