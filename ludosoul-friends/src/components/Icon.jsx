import { Icon as IconifyIcon } from '@iconify/react'
import arrowRightIcon from '@iconify-icons/ph/arrow-right'
import arrowUpRightIcon from '@iconify-icons/ph/arrow-up-right'
import calendarBlankIcon from '@iconify-icons/ph/calendar-blank'
import caretLeftIcon from '@iconify-icons/ph/caret-left'
import caretRightIcon from '@iconify-icons/ph/caret-right'
import houseIcon from '@iconify-icons/ph/house'
import infoIcon from '@iconify-icons/ph/info'
import instagramLogoIcon from '@iconify-icons/ph/instagram-logo'
import musicNotesIcon from '@iconify-icons/ph/music-notes'
import playIcon from '@iconify-icons/ph/play'
import soundcloudLogoIcon from '@iconify-icons/ph/soundcloud-logo'
import spotifyLogoIcon from '@iconify-icons/ph/spotify-logo'
import squaresFourIcon from '@iconify-icons/ph/squares-four'
import tiktokLogoIcon from '@iconify-icons/ph/tiktok-logo'
import xIcon from '@iconify-icons/ph/x'
import youtubeLogoIcon from '@iconify-icons/ph/youtube-logo'

const icons = {
  home: houseIcon,
  music: musicNotesIcon,
  events: calendarBlankIcon,
  about: infoIcon,
  gallery: squaresFourIcon,
  instagram: instagramLogoIcon,
  tiktok: tiktokLogoIcon,
  youtube: youtubeLogoIcon,
  spotify: spotifyLogoIcon,
  soundcloud: soundcloudLogoIcon,
  close: xIcon,
  'chevron-left': caretLeftIcon,
  'chevron-right': caretRightIcon,
  arrow: arrowRightIcon,
  'arrow-up-right': arrowUpRightIcon,
  calendar: calendarBlankIcon,
  play: playIcon,
}

export default function Icon({ name, size = 22, className = '' }) {
  return (
    <IconifyIcon
      icon={icons[name] || icons.about}
      width={size}
      height={size}
      className={className}
      aria-hidden="true"
      focusable="false"
    />
  )
}
