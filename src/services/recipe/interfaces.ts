export interface ICreateRecipe {
	title: string;
	body: string;
	cover?: string;
	tags?: string[];
	published?: boolean;
}

export interface IUpdateRecipe {
	title?: string;
	body?: string;
	cover?: string;
	tags?: string[];
	published?: boolean;
}

export interface IRecipe {
	id: string;
	author: string;
	title: string;
	body: string;
	cover: string;
	tags: string[];
	hearts: string[];
	reviews: string[];
	published: boolean;
	createdAt: Date;
	updatedAt: Date;
}
