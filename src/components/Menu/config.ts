import { MenuEntry } from '@ggbbest/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: 'https://vpoker.c4ei.net/',
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    initialOpenState: true,
    status: {
      text: 'MIGRATE',
      color: 'warning',
    },
    items: [
      {
        label: 'LP Migration',
        href: '/migrate',
      },
      {
        label: 'Exchange',
        href: 'https://vpoker.c4ei.net/#/swap',
      },
      {
        label: 'Liquidity',
        href: 'https://vpoker.c4ei.net/#/pool',
      },
      {
        label: 'V1 Liquidity (Old)',
        href: '/pool',
      },
    ],
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: 'https://vpoker.c4ei.net/farms',
  },
  {
    label: 'Pools',
    icon: 'PoolIcon',
    href: 'https://vpoker.c4ei.net/pools',
  },
  {
    label: 'Prediction (BETA)',
    icon: 'PredictionsIcon',
    href: 'https://vpoker.c4ei.net/prediction',
  },
  {
    label: 'Lottery',
    icon: 'TicketIcon',
    href: 'https://vpoker.c4ei.net/lottery',
  },
  {
    label: 'Collectibles',
    icon: 'NftIcon',
    href: 'https://vpoker.c4ei.net/nft',
  },
  {
    label: 'Team Battle',
    icon: 'TeamBattleIcon',
    href: 'https://vpoker.c4ei.net/competition',
  },
  {
    label: 'Teams & Profile',
    icon: 'GroupsIcon',
    items: [
      {
        label: 'Leaderboard',
        href: 'https://vpoker.c4ei.net/teams',
      },
      {
        label: 'Task Center',
        href: 'https://vpoker.c4ei.net/profile/tasks',
      },
      {
        label: 'Your Profile',
        href: 'https://vpoker.c4ei.net/profile',
      },
    ],
  },
  {
    label: 'Info',
    icon: 'InfoIcon',
    items: [
      {
        label: 'Overview',
        href: 'https://pancakeswap.info',
      },
      {
        label: 'Tokens',
        href: 'https://pancakeswap.info/tokens',
      },
      {
        label: 'Pairs',
        href: 'https://pancakeswap.info/pairs',
      },
      {
        label: 'Accounts',
        href: 'https://pancakeswap.info/accounts',
      },
    ],
  },
  {
    label: 'IFO',
    icon: 'IfoIcon',
    href: 'https://vpoker.c4ei.net/ifo',
  },
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      {
        label: 'Contact',
        href: 'https://docs.vpoker.c4ei.net/contact-us',
      },
      {
        label: 'Voting',
        href: 'https://voting.vpoker.c4ei.net',
      },
      {
        label: 'Github',
        href: 'https://github.com/pancakeswap',
      },
      {
        label: 'Docs',
        href: 'https://docs.vpoker.c4ei.net',
      },
      {
        label: 'Blog',
        href: 'https://pancakeswap.medium.com',
      },
      {
        label: 'Merch',
        href: 'https://pancakeswap.creator-spring.com/',
      },
    ],
  },
]

export default config
