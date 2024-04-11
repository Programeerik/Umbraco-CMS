import { UMB_MEDIA_RECYCLE_BIN_ROOT_ENTITY_TYPE } from '../entity.js';
import {
	UMB_MEDIA_RECYCLE_BIN_TREE_ALIAS,
	UMB_MEDIA_RECYCLE_BIN_TREE_REPOSITORY_ALIAS,
	UMB_MEDIA_RECYCLE_BIN_TREE_STORE_ALIAS,
} from './constants.js';
import { UmbMediaRecycleBinTreeRepository } from './media-recycle-bin-tree.repository.js';
import { UmbMediaRecycleBinTreeStore } from './media-recycle-bin-tree.store.js';
import { manifests as reloadTreeItemChildrenManifests } from './reload-tree-item-children/manifests.js';
import type {
	ManifestRepository,
	ManifestTree,
	ManifestTreeItem,
	ManifestTreeStore,
} from '@umbraco-cms/backoffice/extension-registry';

const treeRepository: ManifestRepository = {
	type: 'repository',
	alias: UMB_MEDIA_RECYCLE_BIN_TREE_REPOSITORY_ALIAS,
	name: 'Media Recycle Bin Tree Repository',
	api: UmbMediaRecycleBinTreeRepository,
};

const treeStore: ManifestTreeStore = {
	type: 'treeStore',
	alias: UMB_MEDIA_RECYCLE_BIN_TREE_STORE_ALIAS,
	name: 'Media Recycle Bin Tree Store',
	api: UmbMediaRecycleBinTreeStore,
};

const tree: ManifestTree = {
	type: 'tree',
	kind: 'default',
	alias: UMB_MEDIA_RECYCLE_BIN_TREE_ALIAS,
	name: 'Media Recycle Bin Tree',
	meta: {
		repositoryAlias: UMB_MEDIA_RECYCLE_BIN_TREE_REPOSITORY_ALIAS,
	},
};

const treeItem: ManifestTreeItem = {
	type: 'treeItem',
	kind: 'default',
	alias: 'Umb.TreeItem.Media.RecycleBin',
	name: 'Media Recycle Bin Tree Item',
	forEntityTypes: [UMB_MEDIA_RECYCLE_BIN_ROOT_ENTITY_TYPE],
};

export const manifests = [treeRepository, treeStore, tree, treeItem, ...reloadTreeItemChildrenManifests];
