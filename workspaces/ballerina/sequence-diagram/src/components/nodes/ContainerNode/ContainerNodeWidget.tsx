/**
 * Copyright (c) 2025, WSO2 LLC. (https://www.wso2.com) All Rights Reserved.
 *
 * WSO2 LLC. licenses this file to you under the Apache License,
 * Version 2.0 (the "License"); you may not use this file except
 * in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied. See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

import React from "react";
import styled from "@emotion/styled";
import { DiagramEngine } from "@projectstorm/react-diagrams-core";
import { ContainerNodeModel } from "./ContainerNodeModel";
import { ThemeColors } from "@wso2/ui-toolkit";
// this node is represent the if-else block of a sequence diagram

namespace ContainerNodeStyles {
    export type BoxStyleProp = {
        width: number;
        height: number;
    };
    export const Box = styled.div<BoxStyleProp>`
        display: flex;
        justify-content: center;
        align-items: center;
        width: ${(props: BoxStyleProp) => props.width}px;
        height: ${(props: BoxStyleProp) => props.height}px;
    `;
}

interface ContainerNodeWidgetProps {
    node: ContainerNodeModel;
    engine: DiagramEngine;
}

export function ContainerNodeWidget(props: ContainerNodeWidgetProps) {
    const { node } = props;

    return (
        <ContainerNodeStyles.Box width={node.width} height={node.height}>
            <svg width={node.width} height={node.height}>
                <rect
                    width={node.width}
                    height={node.height}
                    stroke={ThemeColors.PRIMARY}
                    strokeWidth={2.5}
                    fill="none"
                    rx="10"
                    ry="10"
                    strokeDasharray="5,5"
                />
                {node.label && (
                    <text
                        x={10}
                        y={14}
                        textAnchor="left"
                        dominantBaseline="middle"
                        fill={ThemeColors.PRIMARY}
                        fontFamily="monospace"
                    >
                        {node.label}
                    </text>
                )}
                {node.breakpointPercent > 0 && (
                    <line
                        x1="0"
                        y1={(node.height * node.breakpointPercent) / 100}
                        x2={node.width}
                        y2={(node.height * node.breakpointPercent) / 100}
                        stroke={ThemeColors.PRIMARY}
                        strokeWidth={2}
                        strokeDasharray="5,5"
                    />
                )}
            </svg>
        </ContainerNodeStyles.Box>
    );
}
