import * as React from "react";
import SideBar from "../../components/SideBar";
import { Card, Avatar, Row, Col } from "antd";

export default function Edit(): JSX.Element {
    return (
        <>
            <Card
                style={{ width: "50%", marginLeft: "25%", marginTop: "50px" }}
            >
                <SideBar />
            </Card>
        </>
    );
}
