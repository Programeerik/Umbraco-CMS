import { UmbMultipleColorPickerItemInputElement } from './multiple-color-picker-item-input.element.js';
import type { UmbSwatchDetails } from '@umbraco-cms/backoffice/models';
import {
	css,
	html,
	nothing,
	repeat,
	customElement,
	property,
	state,
	ifDefined,
} from '@umbraco-cms/backoffice/external/lit';
import { FormControlMixin } from '@umbraco-cms/backoffice/external/uui';
import { UmbInputEvent, UmbChangeEvent, UmbDeleteEvent } from '@umbraco-cms/backoffice/event';
import { UmbLitElement } from '@umbraco-cms/internal/lit-element';
import { UMB_DATA_TYPE_WORKSPACE_CONTEXT } from '../../data-type/workspace/data-type-workspace.context.js';

/**
 * @element umb-multiple-color-picker-input
 */
@customElement('umb-multiple-color-picker-input')
export class UmbMultipleColorPickerInputElement extends FormControlMixin(UmbLitElement) {
	/**
	 * This is a minimum amount of selected items in this input.
	 * @type {number}
	 * @attr
	 * @default undefined
	 */
	@property({ type: Number })
	min?: number;

	/**
	 * Min validation message.
	 * @type {boolean}
	 * @attr
	 * @default
	 */
	@property({ type: String, attribute: 'min-message' })
	minMessage = 'This field need more items';

	/**
	 * This is a maximum amount of selected items in this input.
	 * @type {number}
	 * @attr
	 * @default undefined
	 */
	@property({ type: Number })
	max?: number;

	/**
	 * Max validation message.
	 * @type {boolean}
	 * @attr
	 * @default
	 */
	@property({ type: String, attribute: 'min-message' })
	maxMessage = 'This field exceeds the allowed amount of items';

	/**
	 * Disables the input
	 * @type {boolean}
	 * @attr
	 * @default false
	 */
	@property({ type: Boolean, reflect: true })
	disabled = false;

	/**
	 * Makes the input readonly
	 * @type {boolean}
	 * @attr
	 * @default false
	 */
	@property({ type: Boolean, reflect: true })
	readonly = false;

	@property({ type: Boolean })
	showLabels = true;

	constructor() {
		super();
		this.addValidator(
			'rangeUnderflow',
			() => this.minMessage,
			() => !!this.min && this._items.length < this.min,
		);
		this.addValidator(
			'rangeOverflow',
			() => this.maxMessage,
			() => !!this.max && this._items.length > this.max,
		);

		this.consumeContext(UMB_DATA_TYPE_WORKSPACE_CONTEXT, (instance) => {
			const workspace = instance;
			this.observe(workspace.data, (data) => {
				const property = data?.values.find((setting) => setting.alias === 'useLabel');
				if (property) this.showLabels = property.value as boolean;
			});
		});
	}

	@state()
	private _items: Array<UmbSwatchDetails> = [];

	@property({ type: Array })
	public get items(): Array<UmbSwatchDetails> {
		return this._items;
	}
	public set items(items: Array<UmbSwatchDetails>) {
		// TODO: when we have a way to overwrite the missing value validator we can remove this
		this.value = items?.length > 0 ? 'some value' : '';
		this._items = items ?? [];
	}

	#onAdd() {
		this._items = [...this._items, { value: '', label: '' }];
		this.pristine = false;
		this.dispatchEvent(new UmbChangeEvent());
		this.#focusNewItem();
	}

	#onInput(event: UmbInputEvent, currentIndex: number) {
		event.stopPropagation();
		const target = event.currentTarget as UmbMultipleColorPickerItemInputElement;
		const value = target.value as string;
		const label = target.label as string;

		this.items = this._items.map((item, index) => (index === currentIndex ? { value, label } : item));

		this.dispatchEvent(new UmbChangeEvent());
	}

	async #focusNewItem() {
		await this.updateComplete;
		const items = this.shadowRoot?.querySelectorAll(
			'umb-multiple-color-picker-item-input',
		) as NodeListOf<UmbMultipleColorPickerItemInputElement>;
		const newItem = items[items.length - 1];
		newItem.focus();
	}

	#deleteItem(event: UmbDeleteEvent, itemIndex: number) {
		event.stopPropagation();
		this._items = this._items.filter((item, index) => index !== itemIndex);
		this.pristine = false;
		this.dispatchEvent(new UmbChangeEvent());
	}

	protected getFormElement() {
		return undefined;
	}

	render() {
		return html`${this.#renderItems()} ${this.#renderAddButton()} `;
	}

	#renderItems() {
		return html`
			${repeat(
				this._items,
				(item, index) => index,
				(item, index) =>
					html` <umb-multiple-color-picker-item-input
						?showLabels=${this.showLabels}
						value=${item.value}
						label=${ifDefined(item.label)}
						name="item-${index}"
						@input=${(event: UmbInputEvent) => this.#onInput(event, index)}
						@delete="${(event: UmbDeleteEvent) => this.#deleteItem(event, index)}"
						?disabled=${this.disabled}
						?readonly=${this.readonly}
						required
						required-message="Item ${index + 1} is missing a value"></umb-multiple-color-picker-item-input>`,
			)}
		`;
	}

	#renderAddButton() {
		return html`
			${this.disabled || this.readonly
				? nothing
				: html`<uui-button
						id="action"
						label="Add"
						look="placeholder"
						color="default"
						@click="${this.#onAdd}"
						?disabled=${this.disabled}></uui-button>`}
		`;
	}

	static styles = [
		css`
			#action {
				display: block;
			}
		`,
	];
}

export default UmbMultipleColorPickerInputElement;

declare global {
	interface HTMLElementTagNameMap {
		'umb-multiple-color-picker-input': UmbMultipleColorPickerInputElement;
	}
}
