import type {
	HealthCheckGroupPresentationModel,
	HealthCheckGroupWithResultResponseModel,
} from '@umbraco-cms/backoffice/external/backend-api';
import { HealthCheckResource } from '@umbraco-cms/backoffice/external/backend-api';
import { UmbContextToken } from '@umbraco-cms/backoffice/context-api';
import { tryExecuteAndNotify } from '@umbraco-cms/backoffice/resources';
import type { UmbApi } from '@umbraco-cms/backoffice/extension-api';
import { UmbControllerBase } from '@umbraco-cms/backoffice/class-api';
import { UmbBasicState } from '@umbraco-cms/backoffice/observable-api';

export class UmbHealthCheckContext extends UmbControllerBase implements UmbApi {
	#checks = new UmbBasicState<HealthCheckGroupPresentationModel | undefined>(undefined);
	public readonly checks = this.#checks.asObservable();

	#results = new UmbBasicState<HealthCheckGroupWithResultResponseModel | undefined>(undefined);
	public readonly results = this.#results.asObservable();

	async getGroupChecks(name: string) {
		const { data } = await tryExecuteAndNotify(this, HealthCheckResource.getHealthCheckGroupByName({ name }));

		if (data) {
			this.#checks.setValue(data);
		} else {
			this.#checks.setValue(undefined);
		}
	}

	async checkGroup(name: string) {
		const { data } = await tryExecuteAndNotify(this, HealthCheckResource.postHealthCheckGroupByNameCheck({ name }));

		if (data) {
			this.#results.setValue(data);
		} else {
			this.#results.setValue(undefined);
		}
	}

	static isInstanceLike(instance: unknown): instance is UmbHealthCheckContext {
		return typeof instance === 'object' && (instance as UmbHealthCheckContext).results !== undefined;
	}
}

export default UmbHealthCheckContext;

export const UMB_HEALTHCHECK_CONTEXT = new UmbContextToken<UmbHealthCheckContext>('UmbHealthCheckContext');
