import photoBn from '../assets/gallery/photo-bn.jpg'
import photoCn from '../assets/gallery/photo-cn.jpg'
import photoHn from '../assets/gallery/photo-hn.jpg'
import photoKn from '../assets/gallery/photo-kn.jpg'
import photoMn from '../assets/gallery/photo-mn.jpg'
import photoVn from '../assets/gallery/photo-vn.jpg'
import photoXn from '../assets/gallery/photo-xn.jpg'
import photoImages from '../assets/gallery/photo-images.jpg'
import photoImages1 from '../assets/gallery/photo-images-1.jpg'
import dj3Photo from '../assets/friends/dj-3.jpg'
import dj5Photo from '../assets/friends/dj-5.jpg'
import aboutDj1 from '../assets/about/dj-1.jpg'
import aboutDj2 from '../assets/about/dj-2.jpg'
import aboutDj4 from '../assets/about/dj-4.jpg'
import aboutDj6 from '../assets/about/dj-6.jpg'
import spotifyPlatform from '../assets/music/spotify.png'
import soundcloudPlatform from '../assets/music/soundcloud.png'
import youtubePlatform from '../assets/music/youtube.png'

export const brand = {
  name: 'LudoSoul & Friends',
  shortName: 'LUDOSOUL',
  friends: '& FRIENDS',
  tagline: 'Sound. Culture. Connection.',
}

export const links = {
  instagram: 'https://www.instagram.com/official_ludosoul/',
  spotify: 'https://open.spotify.com/artist/7FBbot7zucCEe8KfcphWJO',
  soundcloud: 'https://soundcloud.com/ludosoul-dj',
  tiktok: 'https://www.tiktok.com/@official_ludosoul',
  youtube: 'https://www.youtube.com/channel/UCBEhr4BI30OkF0PtN_caW6g',
}

export const socials = [
  {
    id: 'instagram',
    name: 'Instagram',
    handle: '@official_ludosoul',
    href: links.instagram,
    icon: 'instagram',
    blurb: 'The first word on new sound, dates and behind the scenes.',
  },
  {
    id: 'tiktok',
    name: 'TikTok',
    handle: '@official_ludosoul',
    href: links.tiktok,
    icon: 'tiktok',
    blurb: 'Clips, sets and moments from the movement.',
  },
  {
    id: 'youtube',
    name: 'YouTube',
    handle: 'LudoSoul & Friends',
    href: links.youtube,
    icon: 'youtube',
    blurb: 'Visuals, live cuts and future uploads.',
  },
  {
    id: 'spotify',
    name: 'Spotify',
    handle: 'LudoSoul',
    href: links.spotify,
    icon: 'spotify',
    blurb: 'Follow the artist page for confirmed releases.',
  },
  {
    id: 'soundcloud',
    name: 'SoundCloud',
    handle: 'ludosoul-dj',
    href: links.soundcloud,
    icon: 'soundcloud',
    blurb: 'Mixes and DJ sets when they land.',
  },
]

export const navItems = [
  { to: '/', label: 'Home', icon: 'home' },
  { to: '/music', label: 'Music', icon: 'music' },
  { to: '/events', label: 'Events', icon: 'events' },
  { to: '/about', label: 'About', icon: 'about' },
  { to: '/gallery', label: 'Gallery', icon: 'gallery' },
]

export const pageMeta = {
  home: {
    title: 'LudoSoul & Friends — Sound. Culture. Connection.',
    description:
      'LudoSoul & Friends is a music and entertainment movement. Afro-House, deep house, live events and creative collaboration.',
  },
  music: {
    title: 'Music — LudoSoul & Friends',
    description:
      'Releases, mixes and videos from LudoSoul, an Afro-House DJ and producer.',
  },
  events: {
    title: 'Events — LudoSoul & Friends',
    description:
      'Upcoming LudoSoul & Friends dates and the visual archive of past nights, posters and photographs.',
  },
  about: {
    title: 'About — LudoSoul & Friends',
    description:
      'The story of LudoSoul & Friends, a growing music and entertainment platform, and founder Butjilo Dube.',
  },
  gallery: {
    title: 'Gallery — LudoSoul & Friends',
    description:
      'A visual record of LudoSoul & Friends: performances, crowds and behind the scenes.',
  },
}

export const home = {
  hero: {
    kicker: brand.tagline,
    title: brand.shortName,
    titleAccent: brand.friends,
    chips: ['Afro-House', 'Deep House', 'Electronic', 'Live'],
    intro:
      'A music and entertainment movement built for the dancefloor and the culture around it. DJs, producers and creative collaboration.',
    primary: { label: 'Explore Music', to: '/music' },
    secondary: { label: 'Discover Events', to: '/events' },
  },
  culture: {
    kicker: 'The culture',
    heading: 'Built on the dancefloor.',
    intro:
      'Four ideas shape everything we do. The sound comes first; the people make it move.',
    tiles: [
      {
        id: 'sound',
        label: 'Sound',
        note: 'Afro-House / Deep House / Electronic',
        tone: 'tile--slate-1',
        image: photoHn,
      },
      {
        id: 'culture',
        label: 'Culture',
        note: 'Rooted in sound and people',
        tone: 'tile--slate-2',
        image: photoCn,
      },
      {
        id: 'connection',
        label: 'Connection',
        note: 'DJs, producers and creatives',
        tone: 'tile--slate-3',
        image: photoXn,
      },
      {
        id: 'movement',
        label: 'Movement',
        note: 'Built to travel.',
        tone: 'tile--slate-4',
        image: photoVn,
      },
    ],
  },
  featured: {
    kicker: 'Featured sound',
    heading: 'Press play on LudoSoul.',
    body:
      'Follow the artist pages for confirmed releases, mixes and visuals. New sound will be announced there first — no invented tracklists, no filler.',
    artworkAlt: 'Featured LudoSoul & Friends artwork',
    platforms: [
      { id: 'spotify', label: 'Spotify', href: links.spotify, icon: 'spotify' },
      { id: 'soundcloud', label: 'SoundCloud', href: links.soundcloud, icon: 'soundcloud' },
      { id: 'youtube', label: 'YouTube', href: links.youtube, icon: 'youtube' },
    ],
  },
  experience: {
    kicker: 'The experience',
    heading: 'Nights. Sets. People.',
    body:
      'The room, the selection and the energy between them. Live moments will be documented here as the movement grows.',
    imageAlt: 'Live moment from the LudoSoul & Friends archive',
    imageFlag: 'From the archive',
    links: [
      { label: 'See the gallery', to: '/gallery' },
      { label: 'View events', to: '/events' },
    ],
  },
  friends: {
    kicker: 'The friends',
    heading: 'DJs, producers, creatives.',
    body:
      'The wider circle is still taking shape. Collaborators will be introduced here when they are confirmed.',
    cards: [
      {
        id: 'djs',
        title: 'DJs',
        note: 'Selectors who understand the room.',
        image: dj3Photo,
      },
      {
        id: 'producers',
        title: 'Producers',
        note: 'New sound in the making.',
        image: photoImages,
      },
      {
        id: 'creatives',
        title: 'Creatives',
        note: 'Designers, filmmakers, photographers.',
        image: dj5Photo,
      },
    ],
  },
  events: {
    kicker: 'Live',
    heading: 'Events: Next up.',
    empty:
      'Dates and venues will be announced here. Follow Instagram for the first word.',
    instagramLabel: 'Follow on Instagram',
  },
  closing: {
    kicker: 'Join the movement',
    heading: 'Come through.',
    body:
      'Sound, culture and connection — built to travel. Follow along and be part of the next chapter.',
    buttons: [
      { id: 'instagram', label: 'Instagram', href: links.instagram, icon: 'instagram' },
      { id: 'tiktok', label: 'TikTok', href: links.tiktok, icon: 'tiktok' },
    ],
  },
}

export const musicPage = {
  kicker: 'Sound',
  heading: 'Music',
  intro:
    'Releases, mixes and visuals from LudoSoul. Everything below links to the official platform pages; confirmed listings will be added as they arrive.',
  tabs: [
    {
      id: 'releases',
      label: 'Releases',
      heading: 'Releases on Spotify',
      platform: 'Spotify',
      icon: 'spotify',
      image: spotifyPlatform,
      href: links.spotify,
      body:
        'Original music and confirmed releases will appear on the official Spotify artist page.',
      cta: 'Open Spotify',
    },
    {
      id: 'mixes',
      label: 'Mixes',
      heading: 'Mixes on SoundCloud',
      platform: 'SoundCloud',
      icon: 'soundcloud',
      image: soundcloudPlatform,
      href: links.soundcloud,
      body:
        'DJ mixes and extended sets will live on the official SoundCloud page when they are ready.',
      cta: 'Open SoundCloud',
    },
    {
      id: 'videos',
      label: 'Videos',
      heading: 'Videos on YouTube',
      platform: 'YouTube',
      icon: 'youtube',
      image: youtubePlatform,
      href: links.youtube,
      body:
        'Visuals, live cuts and future uploads will be shared on the official YouTube channel.',
      cta: 'Open YouTube',
    },
  ],
}

export const eventsPage = {
  kicker: 'Live',
  heading: 'Events',
  intro:
    'Nights, sets and gatherings will be announced here. Until then, the official social channels are the place to watch.',
  tabs: [
    {
      id: 'upcoming',
      label: 'Upcoming',
      heading: 'No dates announced yet.',
      body:
        'Dates and venues will be announced here. Follow Instagram for the first word.',
      note: 'Check back soon.',
      icon: 'calendar',
      link: { label: 'Follow on Instagram', href: links.instagram, icon: 'instagram' },
    },
    {
      id: 'archive',
      label: 'Archive',
      heading: 'The archive is being assembled.',
      body:
        'The visual archive of posters and photos will live here once there are official moments to share.',
      note: 'No archive entries yet.',
      icon: 'gallery',
      link: { label: 'Visit the gallery', to: '/gallery', icon: 'arrow' },
    },
  ],
}

export const aboutPage = {
  kicker: 'The movement',
  heading: 'LudoSoul & Friends',
  intro:
    'LudoSoul & Friends is a growing music and entertainment platform for music, DJs, producers, creative collaboration and live experiences.',
  body:
    'It is a home for sound and the culture around it: records selected with care, rooms built on connection, and a wider circle of creative people moving in the same direction.',
  platformKicker: 'What we build',
  platformHeading: 'A platform for the movement.',
  logoAlt: 'LudoSoul & Friends full logo',
  tiles: [
    { id: 'djs', label: 'DJs', note: 'Selectors and performers', image: aboutDj1 },
    {
      id: 'producers',
      label: 'Producers',
      note: 'Music makers and collaborators',
      image: aboutDj2,
    },
    { id: 'live', label: 'Live', note: 'Events and experiences', image: aboutDj4 },
    {
      id: 'creatives',
      label: 'Creatives',
      note: 'Visuals, design and film',
      image: aboutDj6,
    },
  ],
  founder: {
    kicker: 'The founder',
    name: 'Butjilo Dube',
    aka: 'LudoSoul',
    role: 'Afro-House DJ and music producer',
    born: '31 December 2004',
    body:
      'Butjilo Dube, known as LudoSoul, was born on 31 December 2004. An Afro-House DJ and music producer, he is part of a growing generation of African electronic music talent.',
  },
}

export const galleryPage = {
  kicker: 'Visuals',
  heading: 'Gallery',
  intro:
    'A visual record of the movement — performances, crowds and the moments behind the scenes.',
  filters: [
    { id: 'all', label: 'All' },
    { id: 'performances', label: 'Performances' },
    { id: 'crowd', label: 'Crowd' },
    { id: 'behind-the-scenes', label: 'Behind the scenes' },
  ],
  items: [
    {
      id: 'g1',
      src: photoBn,
      width: 1169,
      height: 729,
      category: 'performances',
      categoryLabel: 'Performance',
      alt: 'Performance photograph from the LudoSoul & Friends archive',
      caption: 'Archive photograph 01',
    },
    {
      id: 'g2',
      src: photoMn,
      width: 1170,
      height: 1137,
      category: 'crowd',
      categoryLabel: 'Crowd',
      alt: 'Crowd photograph from the LudoSoul & Friends archive',
      caption: 'Archive photograph 02',
    },
    {
      id: 'g3',
      src: photoHn,
      width: 1170,
      height: 677,
      category: 'performances',
      categoryLabel: 'Performance',
      alt: 'Performance photograph from the LudoSoul & Friends archive',
      caption: 'Archive photograph 03',
    },
    {
      id: 'g4',
      src: photoXn,
      width: 1170,
      height: 1133,
      category: 'crowd',
      categoryLabel: 'Crowd',
      alt: 'Crowd photograph from the LudoSoul & Friends archive',
      caption: 'Archive photograph 04',
    },
    {
      id: 'g5',
      src: photoKn,
      width: 1170,
      height: 489,
      category: 'performances',
      categoryLabel: 'Performance',
      alt: 'Performance photograph from the LudoSoul & Friends archive',
      caption: 'Archive photograph 05',
    },
    {
      id: 'g6',
      src: photoImages,
      width: 387,
      height: 516,
      category: 'behind-the-scenes',
      categoryLabel: 'Behind the scenes',
      alt: 'Behind the scenes photograph from the LudoSoul & Friends archive',
      caption: 'Archive photograph 06',
    },
    {
      id: 'g7',
      src: photoVn,
      width: 923,
      height: 679,
      category: 'performances',
      categoryLabel: 'Performance',
      alt: 'Performance photograph from the LudoSoul & Friends archive',
      caption: 'Archive photograph 07',
    },
    {
      id: 'g8',
      src: photoImages1,
      width: 596,
      height: 335,
      category: 'behind-the-scenes',
      categoryLabel: 'Behind the scenes',
      alt: 'Behind the scenes photograph from the LudoSoul & Friends archive',
      caption: 'Archive photograph 08',
    },
    {
      id: 'g9',
      src: photoCn,
      width: 1170,
      height: 698,
      category: 'crowd',
      categoryLabel: 'Crowd',
      alt: 'Crowd photograph from the LudoSoul & Friends archive',
      caption: 'Archive photograph 09',
    },
  ],
}

export const footer = {
  logoAlt: 'LudoSoul & Friends logo',
  tagline: brand.tagline,
  copyright: '© 2026 LudoSoul & Friends',
  links: [
    { label: 'Instagram', href: links.instagram },
    { label: 'TikTok', href: links.tiktok },
    { label: 'Spotify', href: links.spotify },
  ],
}

export const ui = {
  connect: 'Connect',
  connectTitle: 'Find LudoSoul & Friends.',
  connectKicker: 'Connect',
  connectIntro: 'Follow the movement across the platforms below.',
  close: 'Close',
  menu: 'Primary',
  previous: 'Previous image',
  next: 'Next image',
  closeLightbox: 'Close lightbox',
}
