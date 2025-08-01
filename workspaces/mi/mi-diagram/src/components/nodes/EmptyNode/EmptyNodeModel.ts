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

import { NodeTypes } from "../../../resources/constants";
import { BaseNodeModel } from "../BaseNodeModel";
import { STNode } from "@wso2/mi-syntax-tree/lib/src";

export class EmptyNodeModel extends BaseNodeModel {
    readonly visible: boolean;
    constructor(stNode: STNode, documentUri:string, visible: boolean = false) {
        super(
            NodeTypes.EMPTY_NODE,
            NodeTypes.EMPTY_NODE,
            documentUri,
            stNode,
        );
        this.visible = visible;
    }
}
