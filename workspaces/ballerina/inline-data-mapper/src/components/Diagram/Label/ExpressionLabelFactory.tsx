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
import * as React from 'react';

import { AbstractReactFactory, GenerateWidgetEvent } from '@projectstorm/react-canvas-core';
import { DiagramEngine } from '@projectstorm/react-diagrams';

import { ExpressionLabelModel } from './ExpressionLabelModel';
import { ExpressionLabelWidget } from './ExpressionLabelWidget';
import { QueryExprLabelWidget } from './QueryExprLabelWidget';
import { ArrayMappingOptionsWidget } from './ArrayMappingOptionsWidget';

export class ExpressionLabelFactory extends AbstractReactFactory<ExpressionLabelModel, DiagramEngine> {
	constructor() {
		super('expression-label');
	}

	generateModel(): ExpressionLabelModel {
		return new ExpressionLabelModel();
	}

	generateReactWidget(event: GenerateWidgetEvent<ExpressionLabelModel>): JSX.Element {
		if (event.model.isQuery) {
			return <QueryExprLabelWidget model={event.model} />;
		}
		if (event.model.link?.pendingMappingType) {
			return <ArrayMappingOptionsWidget model={event.model} />;
		}
		return <ExpressionLabelWidget model={event.model} />;
	}
}
