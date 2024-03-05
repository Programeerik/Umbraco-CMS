import type { UmbInputMediaTypeElement } from '../../components/index.js';
import { html, customElement, property, state } from '@umbraco-cms/backoffice/external/lit';
import type { UmbPropertyEditorUiElement } from '@umbraco-cms/backoffice/extension-registry';
import { UmbLitElement } from '@umbraco-cms/backoffice/lit-element';
import {
	UmbPropertyValueChangeEvent,
	type UmbPropertyEditorConfigCollection,
} from '@umbraco-cms/backoffice/property-editor';

@customElement('umb-property-editor-ui-media-type-picker')
export class UmbPropertyEditorUIMediaTypePickerElement extends UmbLitElement implements UmbPropertyEditorUiElement {
	@state()
	_value?: Array<string>;

	@property({ type: Array })
	public set value(value: Array<string> | string | undefined) {
		if (Array.isArray(value)) {
			this._value = value;
		} else if (typeof value === 'string') {
			this._value = value.split(',');
		} else {
			this._value = undefined;
		}
	}
	public get value(): Array<string> | string | undefined {
		return this._value;
	}

	@property({ attribute: false })
	public set config(config: UmbPropertyEditorConfigCollection | undefined) {
		if (config) {
			const validationLimit = config.getValueByAlias<any>('validationLimit');
			this._limitMin = validationLimit?.min;
			this._limitMax = validationLimit?.max;
		}
	}

	@state()
	private _limitMin?: number;
	@state()
	private _limitMax?: number;

	private _onChange(event: CustomEvent) {
		const selectedIds = (event.target as UmbInputMediaTypeElement).selectedIds;
		this.value = selectedIds;
		this.dispatchEvent(new UmbPropertyValueChangeEvent());
	}

	render() {
		return html`
			<umb-input-media-type
				@change=${this._onChange}
				.selectedIds=${this._value ?? []}
				.min=${this._limitMin ?? 0}
				.max=${this._limitMax ?? Infinity}>
				<umb-localize key="general_add">Add</umb-localize>
			</umb-input-media-type>
		`;
	}
}

export default UmbPropertyEditorUIMediaTypePickerElement;

declare global {
	interface HTMLElementTagNameMap {
		'umb-property-editor-ui-media-type-picker': UmbPropertyEditorUIMediaTypePickerElement;
	}
}
