export interface MovieSchema {
	readonly id: number
	adult: boolean
	backdrop_path: string
	belongs_to_collection: BelongsToCollection
	budget: number
	genres: Genre[]
	homepage: string
	imdb_id: string
	origin_country: string[]
	original_language: string
	original_title: string
	overview: string
	popularity: number
	poster_path: string
	production_companies: ProductionCompany[]
	production_countries: ProductionCountry[]
	release_date: Date
	revenue: number
	runtime: number
	spoken_languages: SpokenLanguage[]
	status: string
	tagline: string
	title: string
	video: boolean
	vote_average: number
	vote_count: number
	release_dates: ReleaseDates
}

interface BelongsToCollection {
	id: number
	name: string
	poster_path: string
	backdrop_path: string
}

interface Genre {
	readonly id: number
	name: string
}

interface ProductionCompany {
	id: number
	logo_path: string
	name: string
	origin_country: string
}

interface ProductionCountry {
	iso_3166_1: string
	name: string
}

interface ReleaseDates {
	results: Result[]
}

interface Result {
	iso_3166_1: string
	release_dates: ReleaseDate[]
}

interface ReleaseDate {
	certification: string
	descriptors: string[]
	iso_639_1: string
	note: string
	release_date: Date
	type: number
}

export interface SpokenLanguage {
	english_name: string
	iso_639_1: string
	name: string
}
