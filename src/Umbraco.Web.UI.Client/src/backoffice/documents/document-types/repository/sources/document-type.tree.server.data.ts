import type { RepositoryTreeDataSource } from '../../../../../../libs/repository/repository-tree-data-source.interface';
import { ProblemDetailsModel, DocumentTypeResource } from '@umbraco-cms/backend-api';
import { UmbControllerHostInterface } from '@umbraco-cms/controller';
import { tryExecuteAndNotify } from '@umbraco-cms/resources';

/**
 * A data source for the Document tree that fetches data from the server
 * @export
 * @class DocumentTreeServerDataSource
 * @implements {DocumentTreeDataSource}
 */
export class DocumentTypeTreeServerDataSource implements RepositoryTreeDataSource {
	#host: UmbControllerHostInterface;

	// TODO: how do we handle trashed items?
	async trashItems(keys: Array<string>) {
		// TODO: use backend cli when available.
		return tryExecuteAndNotify(
			this.#host,
			fetch('/umbraco/management/api/v1/document-type/trash', {
				method: 'POST',
				body: JSON.stringify(keys),
				headers: {
					'Content-Type': 'application/json',
				},
			})
		);
	}

	async moveItems(keys: Array<string>, destination: string) {
		// TODO: use backend cli when available.
		return tryExecuteAndNotify(
			this.#host,
			fetch('/umbraco/management/api/v1/document-type/move', {
				method: 'POST',
				body: JSON.stringify({ keys, destination }),
				headers: {
					'Content-Type': 'application/json',
				},
			})
		);
	}

	/**
	 * Creates an instance of DocumentTreeServerDataSource.
	 * @param {UmbControllerHostInterface} host
	 * @memberof DocumentTreeServerDataSource
	 */
	constructor(host: UmbControllerHostInterface) {
		this.#host = host;
	}

	/**
	 * Fetches the root items for the tree from the server
	 * @return {*}
	 * @memberof DocumentTreeServerDataSource
	 */
	async getRootItems() {
		return tryExecuteAndNotify(this.#host, DocumentTypeResource.getTreeDocumentTypeRoot({}));
	}

	/**
	 * Fetches the children of a given parent key from the server
	 * @param {(string | null)} parentKey
	 * @return {*}
	 * @memberof DocumentTreeServerDataSource
	 */
	async getChildrenOf(parentKey: string | null) {
		if (!parentKey) {
			const error: ProblemDetailsModel = { title: 'Parent key is missing' };
			return { error };
		}

		return tryExecuteAndNotify(
			this.#host,
			DocumentTypeResource.getTreeDocumentTypeChildren({
				parentKey,
			})
		);
	}

	/**
	 * Fetches the items for the given keys from the server
	 * @param {Array<string>} keys
	 * @return {*}
	 * @memberof DocumentTreeServerDataSource
	 */
	async getItems(keys: Array<string>) {
		if (keys) {
			const error: ProblemDetailsModel = { title: 'Keys are missing' };
			return { error };
		}

		return tryExecuteAndNotify(
			this.#host,
			DocumentTypeResource.getTreeDocumentTypeItem({
				key: keys,
			})
		);
	}
}
