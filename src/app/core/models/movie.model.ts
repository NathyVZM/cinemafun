export interface Movie {
	readonly id: number
	title: string
	poster: string
	banner: string
	genre: string[]
	runtime: number
	classification: Classification
}

export interface Classification {
	readonly id: string
	classification: string
	meaning: string
}
