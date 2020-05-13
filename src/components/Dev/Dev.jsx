import React from 'react';
import Counter from './Counter';
import Dialog from './Dialog';
import Pages from './Pages';
import ChoiseFile from './ChoiseFile';
import UseCallback from "./useCallback/UseCallback";
import {Button, Layout} from "antd";
import classesStyle from './Dev.module.css';
import {
    HomeOutlined,
    SettingFilled,
    SmileOutlined,
    SyncOutlined,
    LoadingOutlined,
} from '@ant-design/icons';


const { Header, Footer, Sider, Content } = Layout;
const Dev = props => {

    return (
        <div>
            <h1>Developer window</h1>
            <Dialog />
            {/* <Counter /> */}
            <Pages />
            <ChoiseFile />
            <UseCallback />
            <Button type="primary">Primary</Button>
            <Button className={classesStyle.default}>Default</Button>
            <Button type="dashed">Dashed</Button>
            <Button type="link">Link</Button>
            <div>
                <Button className={classesStyle.logIn}>Log In</Button>
            </div>

            {/*<HomeOutlined />*/}
            {/*<SettingFilled />*/}
            {/*<SmileOutlined />*/}
            {/*<SyncOutlined spin />*/}
            {/*<SmileOutlined rotate={180} />*/}
            {/*<LoadingOutlined />*/}

            {/*<Layout className={classesStyle.layout}>*/}
            {/*    <Header>Header</Header>*/}
            {/*    <Layout>*/}
            {/*        <Sider>Sider</Sider>*/}
            {/*        <Content>Content</Content>*/}
            {/*    </Layout>*/}
            {/*    <Footer className={classesStyle.foot}>Footer</Footer>*/}
            {/*</Layout>*/}

        </div>
    )
}

export default Dev