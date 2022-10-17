import { html, LitElement } from 'lit';
import { UUITextStyles } from '@umbraco-ui/uui-css/lib';
import { customElement, state } from 'lit/decorators.js';
import { Subscription, distinctUntilChanged } from 'rxjs';
import { NodeProperty, NodePropertyData } from '../../../../../../mocks/data/node.data';
import { UmbContextConsumerMixin } from '@umbraco-cms/context-api';
import { UmbNodeContext } from '../../node.context';

import '../../../../../components/node-property/node-property.element';

@customElement('umb-editor-view-node-edit')
export class UmbEditorViewNodeEditElement extends UmbContextConsumerMixin(LitElement) {
	static styles = [UUITextStyles];

	@state()
	_properties: NodeProperty[] = [];

	@state()
	_data: NodePropertyData[] = [];

	private _nodeContext?: UmbNodeContext;
	private _nodeContextSubscription?: Subscription;

	constructor() {
		super();

		this.consumeContext('umbNodeContext', (nodeContext) => {
			this._nodeContext = nodeContext;
			this._useNode();
		});
	}

	private _useNode() {
		this._nodeContextSubscription?.unsubscribe();

		this._nodeContextSubscription = this._nodeContext?.data.pipe(distinctUntilChanged()).subscribe((node) => {
			this._properties = node.properties;
			this._data = node.data;
		});
	}

	disconnectedCallback(): void {
		super.disconnectedCallback();
		this._nodeContextSubscription?.unsubscribe();
	}

	render() {
		return html`
			<uui-box>
				${this._properties.map(
					(property: NodeProperty) => html`
						<umb-node-property
							.property=${property}
							.value=${this._data.find((data) => data.alias === property.alias)?.value}></umb-node-property>
					`
				)}
			</uui-box>
		`;
	}
}

export default UmbEditorViewNodeEditElement;

declare global {
	interface HTMLElementTagNameMap {
		'umb-editor-view-node-edit': UmbEditorViewNodeEditElement;
	}
}
