import { v4 as uuid } from 'uuid'
import { SocialMedia } from '@models'

export const SOCIAL_MEDIA: SocialMedia[] = [
	{ id: uuid(), label: 'Github profile', icon: 'github-logo', link: 'https://github.com/NathyVZM' },
	{ id: uuid(), label: 'Instagram profile', icon: 'instagram-logo', link: 'https://www.instagram.com/nathievzm' },
	{
		id: uuid(),
		label: 'LinkedIn profile',
		icon: 'linkedin-logo',
		link: 'https://www.linkedin.com/in/nathalie-zambrano-571997230'
	},
	{ id: uuid(), label: 'Telegram profile', icon: 'telegram-logo', link: 'https://t.me/white_desertfox' }
]
