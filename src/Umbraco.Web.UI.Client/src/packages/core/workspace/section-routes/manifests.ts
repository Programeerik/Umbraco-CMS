import type { ManifestTypes } from '@umbraco-cms/backoffice/extension-registry';

export const manifests: Array<ManifestTypes> = [
	{
		type: 'sectionRoute',
		alias: 'Umb.SectionRoute.Workspace',
		name: 'Section Workspace Route',
		element: () => import('../workspace.element.js'),
		api: () => import('./workspace-section-route.api.js'),
	},
];
