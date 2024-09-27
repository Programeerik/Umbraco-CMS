import type {
	ManifestTiptapToolbarExtension,
	ManifestTiptapToolbarExtensionButtonKind,
} from '../tiptap-toolbar-extension.js';

export const manifests: Array<ManifestTiptapToolbarExtension | ManifestTiptapToolbarExtensionButtonKind> = [
	{
		type: 'tiptapToolbarExtension',
		kind: 'button',
		alias: 'Umb.Tiptap.Toolbar.Blockquote',
		name: 'Blockquote Tiptap Extension',
		api: () => import('./blockquote.extension.js'),
		weight: 995,
		meta: {
			alias: 'blockquote',
			icon: 'icon-blockquote',
			label: 'Blockquote',
			isDefault: true,
		},
	},
	{
		type: 'tiptapToolbarExtension',
		kind: 'button',
		alias: 'Umb.Tiptap.Toolbar.Bold',
		name: 'Bold Tiptap Extension',
		api: () => import('./bold.extension.js'),
		weight: 999,
		meta: {
			alias: 'bold',
			icon: 'icon-bold',
			label: 'Bold',
			isDefault: true,
		},
	},
	{
		type: 'tiptapToolbarExtension',
		kind: 'button',
		alias: 'Umb.Tiptap.Toolbar.CodeBlock',
		name: 'Code Block Tiptap Extension',
		api: () => import('./code-block.extension.js'),
		weight: 994,
		meta: {
			alias: 'codeBlock',
			icon: 'icon-code',
			label: 'Code Block',
			isDefault: true,
		},
	},
	{
		type: 'tiptapToolbarExtension',
		kind: 'button',
		alias: 'Umb.Tiptap.Toolbar.BulletList',
		name: 'Bullet List Tiptap Extension',
		api: () => import('./bullet-list.extension.js'),
		weight: 993,
		meta: {
			alias: 'bulletList',
			icon: 'icon-bulleted-list',
			label: 'Bullet List',
			isDefault: true,
		},
	},
	{
		type: 'tiptapToolbarExtension',
		kind: 'button',
		alias: 'Umb.Tiptap.Toolbar.OrderedList',
		name: 'Ordered List Tiptap Extension',
		api: () => import('./ordered-list.extension.js'),
		weight: 992,
		meta: {
			alias: 'orderedList',
			icon: 'icon-ordered-list',
			label: 'Ordered List',
			isDefault: true,
		},
	},
	{
		type: 'tiptapToolbarExtension',
		kind: 'button',
		alias: 'Umb.Tiptap.Toolbar.Strike',
		name: 'Strike Tiptap Extension',
		api: () => import('./strike.extension.js'),
		weight: 996,
		meta: {
			alias: 'strike',
			icon: 'icon-strikethrough',
			label: 'Strike',
			isDefault: true,
		},
	},
	{
		type: 'tiptapToolbarExtension',
		kind: 'button',
		alias: 'Umb.Tiptap.Toolbar.Table',
		name: 'Table Tiptap Extension',
		api: () => import('./table.extension.js'),
		weight: 909,
		meta: {
			alias: 'table',
			icon: 'icon-table',
			label: 'Table',
		},
	},
	{
		type: 'tiptapToolbarExtension',
		kind: 'button',
		alias: 'Umb.Tiptap.Toolbar.Heading1',
		name: 'Heading 1 Tiptap Extension',
		api: () => import('./heading1.extension.js'),
		weight: 949,
		meta: {
			alias: 'heading1',
			icon: 'icon-heading-1',
			label: 'Heading 1',
			isDefault: true,
		},
	},
	{
		type: 'tiptapToolbarExtension',
		kind: 'button',
		alias: 'Umb.Tiptap.Toolbar.Heading2',
		name: 'Heading 2 Tiptap Extension',
		api: () => import('./heading2.extension.js'),
		weight: 948,
		meta: {
			alias: 'heading2',
			icon: 'icon-heading-2',
			label: 'Heading 2',
			isDefault: true,
		},
	},
	{
		type: 'tiptapToolbarExtension',
		kind: 'button',
		alias: 'Umb.Tiptap.Toolbar.Heading3',
		name: 'Heading 3 Tiptap Extension',
		api: () => import('./heading3.extension.js'),
		weight: 947,
		meta: {
			alias: 'heading3',
			icon: 'icon-heading-3',
			label: 'Heading 3',
			isDefault: true,
		},
	},
	{
		type: 'tiptapToolbarExtension',
		kind: 'button',
		alias: 'Umb.Tiptap.Toolbar.HorizontalRule',
		name: 'Horizontal Rule Tiptap Extension',
		api: () => import('./horizontal-rule.extension.js'),
		weight: 991,
		meta: {
			alias: 'horizontalRule',
			icon: 'icon-horizontal-rule',
			label: 'Horizontal Rule',
		},
	},
	{
		type: 'tiptapToolbarExtension',
		kind: 'button',
		alias: 'Umb.Tiptap.Toolbar.Italic',
		name: 'Italic Tiptap Extension',
		api: () => import('./italic.extension.js'),
		weight: 998,
		meta: {
			alias: 'italic',
			icon: 'icon-italic',
			label: 'Italic',
			isDefault: true,
		},
	},
	{
		type: 'tiptapToolbarExtension',
		kind: 'button',
		alias: 'Umb.Tiptap.Toolbar.TextAlignCenter',
		name: 'Text Align Center Tiptap Extension',
		api: () => import('./text-align-center.extension.js'),
		weight: 918,
		meta: {
			alias: 'text-align-center',
			icon: 'icon-text-align-center',
			label: 'Text Align Center',
			isDefault: true,
		},
	},
	{
		type: 'tiptapToolbarExtension',
		kind: 'button',
		alias: 'Umb.Tiptap.Toolbar.TextAlignJustify',
		name: 'Text Align Justify Tiptap Extension',
		api: () => import('./text-align-justify.extension.js'),
		weight: 916,
		meta: {
			alias: 'text-align-justify',
			icon: 'icon-text-align-justify',
			label: 'Text Align Justify',
		},
	},
	{
		type: 'tiptapToolbarExtension',
		kind: 'button',
		alias: 'Umb.Tiptap.Toolbar.TextAlignLeft',
		name: 'Text Align Left Tiptap Extension',
		api: () => import('./text-align-left.extension.js'),
		weight: 919,
		meta: {
			alias: 'text-align-left',
			icon: 'icon-text-align-left',
			label: 'Text Align Left',
			isDefault: true,
		},
	},
	{
		type: 'tiptapToolbarExtension',
		kind: 'button',
		alias: 'Umb.Tiptap.Toolbar.TextAlignRight',
		name: 'Text Align Right Tiptap Extension',
		api: () => import('./text-align-right.extension.js'),
		weight: 917,
		meta: {
			alias: 'text-align-right',
			icon: 'icon-text-align-right',
			label: 'Text Align Right',
			isDefault: true,
		},
	},
	{
		type: 'tiptapToolbarExtension',
		kind: 'button',
		alias: 'Umb.Tiptap.Toolbar.Underline',
		name: 'Underline Tiptap Extension',
		api: () => import('./underline.extension.js'),
		weight: 997,
		meta: {
			alias: 'underline',
			icon: 'icon-underline',
			label: 'Underline',
			isDefault: true,
		},
	},
	{
		type: 'tiptapToolbarExtension',
		kind: 'button',
		alias: 'Umb.Tiptap.Toolbar.Unlink',
		name: 'Unlink Tiptap Extension',
		api: () => import('./unlink.extension.js'),
		element: () => import('../../components/toolbar/tiptap-toolbar-button-disabled.element.js'),
		weight: 101,
		meta: {
			alias: 'unlink',
			icon: 'icon-unlink',
			label: 'Unlink',
		},
	},
];
