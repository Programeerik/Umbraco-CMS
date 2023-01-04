import { UUITextStyles } from '@umbraco-ui/uui-css/lib';
import { css, CSSResultGroup, html } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { repeat } from 'lit/directives/repeat.js';
import { UmbModalHandler, UmbModalService } from '../../../../core/modal';
import { UmbLitElement } from 'src/core/element/lit-element.element';

@customElement('umb-backoffice-modal-container')
export class UmbBackofficeModalContainer extends UmbLitElement {
	static styles: CSSResultGroup = [
		UUITextStyles,
		css`
			:host {
				position: absolute;
			}
		`,
	];

	@state()
	private _modals?: UmbModalHandler[];

	private _modalService?: UmbModalService;

	constructor() {
		super();

		this.consumeContext('umbModalService', (modalService: UmbModalService) => {
			this._modalService = modalService;
			this._observeModals();
		});
	}

	private _observeModals() {
		if (!this._modalService) return;

		this.observe<UmbModalHandler[]>(this._modalService.modals, (modals) => {
			this._modals = modals || undefined;
		});
	}

	render() {
		return html`
			<uui-modal-container>
				${this._modals ? repeat(this._modals, (modalHandler) => html`${modalHandler.element}`) : ''}
			</uui-modal-container>
		`;
	}
}

declare global {
	interface HTMLElementTagNameMap {
		'umb-backoffice-modal-container': UmbBackofficeModalContainer;
	}
}
