import React from "react";
import { useResource } from "rest-hooks";
import { Card } from "antd";
import VersionWS1Resource from "../resources/VersionWS1Resource";

export default function VersionWS1() {
  const { version, apiVersion, blockDelay } = useResource(VersionWS1Resource.currentShape(), {});
  return (
    <React.Fragment>
      <Card>
        <b>VersionWS1</b><br />
        Version: {version}<br />
        API Version: {apiVersion}<br />
        Block Delay: {blockDelay}<br />
      </Card>
    </React.Fragment>
  );
}
