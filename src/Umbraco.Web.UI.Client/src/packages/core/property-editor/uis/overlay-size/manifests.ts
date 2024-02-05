import type { ManifestPropertyEditorUi } from '@umbraco-cms/backoffice/extension-registry';

export const manifest: ManifestPropertyEditorUi = {
	type: 'propertyEditorUi',
	alias: 'Umb.PropertyEditorUi.OverlaySize',
	name: 'Overlay Size Property Editor UI',
	element: () => import('./property-editor-ui-overlay-size.element.js'),
	meta: {
		label: 'Overlay Size',
		propertyEditorSchemaAlias: '',
		icon: 'icon-document',
		group: '',
	},
};
