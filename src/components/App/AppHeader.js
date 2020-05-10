import React from 'react';
import { Layout } from "antd";
import style from './App.module.less';

const { Header } = Layout;

const AppHeader = () => (
  <Header className={style.header}>
    <h1 className={style.title}>To Do App</h1>
  </Header>
);

export default AppHeader;