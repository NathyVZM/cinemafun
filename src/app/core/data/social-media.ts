import { v4 as uuid } from 'uuid'
import { SocialMedia } from '@models'

export const SOCIAL_MEDIA: SocialMedia[] = [
	{ id: uuid(), icon: 'github-logo', link: 'https://github.com/NathyVZM' },
	{ id: uuid(), icon: 'instagram-logo', link: 'https://www.instagram.com/nathievzm' },
	{ id: uuid(), icon: 'linkedin-logo', link: 'https://www.linkedin.com/in/nathalie-zambrano-571997230' },
	{ id: uuid(), icon: 'telegram-logo', link: 'https://t.me/white_desertfox' }
]
