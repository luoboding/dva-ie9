
import React from 'react';
import {
  Layout,
  Input,
  Avatar,
  Badge,
  Popover,
  Row,
  Col,
} from 'antd';
import { Link } from 'dva/router';

import Dropdown from './dropdown';
import './assets/styles/index.less';
import './assets/styles/global.less';

const { Search } = Input;
export default ({
  route,
  pathname,
  messageNumber,
  messages,
  notificationNumber,
  notifications,
}) => (
  <Layout>
    <header className="g-header">
      <div className="g-header-nav">
        <Row gutter={0}>
          <Col span={17}>
            <div className="g-header-nav-left">
              <div className="logo-container">
                <Row gutter={6}>
                  <Col span={7}>
                    <Link to="/" className="title">
                      <h2>LOGO</h2>
                    </Link>
                  </Col>
                  <Col span={12}>
                    <Search
                      className="search"
                      placeholder="搜索..."
                      enterButton="搜索"
                      size="default"
                    />
                  </Col>
                </Row>
              </div>
            </div>
          </Col>
          <Col span={7}>
            <div className="g-header-nav-right">
              <Row gutter={12}>
                <Col span={4}>
                  <div className="item">
                    <Link to="/">
                      <img src={require('./assets/images/home.png')} alt="home" />
                    </Link>
                  </div>
                </Col>
                <Col span={4}>
                  <div className="item">
                    <Link to="/todo">
                      <Badge count={0}>
                        <img src={require('./assets/images/todo.png')} alt="todo" />
                      </Badge>
                    </Link>
                  </div>
                </Col>
                <Col span={4}>
                  <div className="item">
                    <Link to="/message">
                      <Popover
                        placement="bottom"
                        arrowPointAtCenter
                        content={(
                          <div className="g-head-dropdown">
                            {
                              messages.length ? messages.map(item => (
                                <Dropdown
                                  title={item.content}
                                  type={1}
                                  createTime={item.createTime}
                                  key={item.id}
                                />
                              )) : <div className="g-head-dropdown-no-content">暂无消息</div>
                            }
                          </div>
                        )}
                      >
                        <Badge count={messageNumber}>
                          <img src={require('./assets/images/message.png')} alt="message" />
                        </Badge>
                      </Popover>
                    </Link>
                  </div>
                </Col>
                <Col span={4}>
                  <div className="item">
                    <Link to="/notification">
                      <Popover
                        placement="bottom"
                        arrowPointAtCenter
                        content={(
                          <div className="g-head-dropdown">
                            {
                            notifications.length ? notifications.map(item => (
                              <Dropdown
                                title={item.title}
                                type={2}
                                createTime={item.createTime}
                                key={item.id}
                              />
                            )) : <div className="g-head-dropdown-no-content">暂无通知</div>
                            }
                          </div>
                        )}
                      >
                        <Badge count={notificationNumber}>
                          <img src={require('./assets/images/notification.png')} alt="message" />
                        </Badge>
                      </Popover>
                    </Link>
                  </div>
                </Col>
                <Col span={8} offset={0}>
                  <div className="user">
                    <Row>
                      <Col span={12}>
                        <div className="avatar">
                          <Avatar size={40} icon="user" />
                        </div>
                      </Col>
                      <Col span={12}>
                        <div className="name">
                          zhangsan
                        </div>
                      </Col>
                    </Row>
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </div>
      <div className="g-header-menus">
        <div className="menus">
          <Row>
            <Col span={20}>
              <Row>
                <Col span={4}>
                  <Link to="/" className={pathname === '/' ? 'active' : ''}>
                    HOME
                  </Link>
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
      </div>
    </header>
    <Layout>
      {
        route
      }
    </Layout>
  </Layout>
);
