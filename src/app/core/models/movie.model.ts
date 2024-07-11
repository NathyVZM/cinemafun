export interface Movie {
	readonly id: number
	title: string
	poster: string
	backdrop: string
	genre: string[]
	runtime: number
	classification: Classification
	banner: string
	logo: string
}

export interface Classification {
	readonly id: string
	classification: string
	meaning: string
}
