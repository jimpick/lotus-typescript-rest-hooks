import React from "react";
import { useResource } from "rest-hooks";
import { Card } from "antd";
import VersionResource from "../resources/VersionResource";

export default function Version() {
  const { version, apiVersion, blockDelay } = useResource(VersionResource.currentShape(), {});
  return (
    <React.Fragment>
      <Card>
        Version: {version}<br />
        API Version: {apiVersion}<br />
        Block Delay: {blockDelay}<br />
      </Card>
    </React.Fragment>
  );
}
