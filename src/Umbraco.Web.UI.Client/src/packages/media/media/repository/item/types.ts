import type { ContentStateModel } from '@umbraco-cms/backoffice/backend-api';

export interface UmbMediaItemModel {
	unique: string;
	isTrashed: boolean;
	mediaType: {
		unique: string;
		icon: string;
		hasListView: boolean;
	};
	variants: Array<UmbMediaItemVariantModel>;
}

export interface UmbMediaItemVariantModel {
	name: string;
	culture: string | null;
	state: ContentStateModel | null;
}
