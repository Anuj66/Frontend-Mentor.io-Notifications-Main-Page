import avatarAngelaGray from '../assets/images/avatar-angela-gray.webp';
import avatarAnnaKim from '../assets/images/avatar-anna-kim.webp';
import avatarJacobThompson from '../assets/images/avatar-jacob-thompson.webp';
import avatarKimberlySmith from '../assets/images/avatar-kimberly-smith.webp';
import avatarMarkWebber from '../assets/images/avatar-mark-webber.webp';
import avatarNathanPeterson from '../assets/images/avatar-nathan-peterson.webp';
import avatarRizkyHasanuddin from '../assets/images/avatar-rizky-hasanuddin.webp';

export const notifications = [
  {
    avatar: avatarMarkWebber,
    sentBy: 'Mark Webber',
    message: 'reacted to your recent post',
    highlightedMessage: 'My First Tournament Today!',
    privateMessage: null,
    isRead: false,
    sentAt: '1 m ago',
    color: 'darkBlue',
  },
  {
    avatar: avatarAngelaGray,
    sentBy: 'Angela Gray',
    message: 'followed you',
    privateMessage: null,
    highlightedMessage: null,
    isRead: false,
    sentAt: '5 m ago',
    color: null,
  },
  {
    avatar: avatarJacobThompson,
    sentBy: 'Jacob Thompson',
    message: 'has joined your group',
    highlightedMessage: 'Chess Club',
    privateMessage: null,
    isRead: false,
    sentAt: '1 day ago',
    color: 'blue',
  },
  {
    avatar: avatarRizkyHasanuddin,
    sentBy: 'Rizky Hasanuddin',
    message: 'sent you a private message',
    highlightedMessage: null,
    privateMessage:
      "Hello, thanks for setting up the chess club. I've been a member for a few weeks now and I'm already having lots of fun and improving my game.",
    isRead: true,
    sentAt: '5 days ago',
    color: null,
  },
  {
    avatar: avatarKimberlySmith,
    sentBy: 'Kimberly Smith',
    message: 'commented on your picture',
    highlightedMessage: null,
    privateMessage: null,
    isRead: true,
    sentAt: '1 week ago',
    color: null,
  },
  {
    avatar: avatarNathanPeterson,
    sentBy: 'Nathan Peterson',
    message: 'reacted to your recent post',
    highlightedMessage: '5 end-game strategies to increase your winrate',
    isRead: true,
    sentAt: '2 weeks ago',
    color: 'darkBlue',
  },
  {
    avatar: avatarAnnaKim,
    sentBy: 'Anna Kim',
    message: 'left the group',
    highlightedMessage: 'Chess Club',
    isRead: true,
    sentAt: '2 weeks ago',
    color: 'blue',
  },
];
