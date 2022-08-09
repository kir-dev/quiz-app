import { FaFacebook, FaGithub, FaHome, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'
import { IconType } from 'react-icons/lib'
import { environment } from './configurations'

type SocialId = 'web' | 'github' | 'youtube' | 'facebook' | 'insta' | 'twitter'
type SocialItem = {
  id: SocialId
  url: string
  Icon: IconType
  shortText: string
  longText: string
}
const SOCIALS: SocialItem[] = [
  { id: 'web', url: 'https://kir-dev.sch.bme.hu', Icon: FaHome, shortText: 'Weblapunk', longText: 'Kir-Dev weblapja' },
  { id: 'github', url: environment.socials.githubOrgUrl, Icon: FaGithub, shortText: 'GitHub', longText: 'GitHub szervezetünk' },
  { id: 'youtube', url: environment.socials.youtubeUrl, Icon: FaYoutube, shortText: 'YouTube', longText: 'YouTube csatornánk' },
  { id: 'facebook', url: environment.socials.facebookUrl, Icon: FaFacebook, shortText: 'Facebook', longText: 'Facebook oldalunk' },
  { id: 'insta', url: environment.socials.instagramUrl, Icon: FaInstagram, shortText: 'Instagram', longText: 'Instagram oldalunk' },
  {
    id: 'twitter',
    url: `https://twitter.com/${environment.socials.twitterUsername}`,
    Icon: FaTwitter,
    shortText: 'Twitter',
    longText: 'Twitter oldalunk'
  }
]

export const getSocials = (socialIds: SocialId[] = []) => {
  if (socialIds.length === 0) return SOCIALS
  else return SOCIALS.filter((social) => socialIds.includes(social.id))
}
