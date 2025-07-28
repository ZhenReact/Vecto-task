import React from "react";
import { Layout } from "antd";
import { BrowserRouter } from "react-router-dom";
import Router from "../routes/Router";

const { Content } = Layout;

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Layout className="min-h-screen">
        <Content className=" min-h-screen">
          <Router />
        </Content>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
