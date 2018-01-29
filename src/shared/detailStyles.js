import glamorous from 'glamorous';
import propStyles from 'prop-styles';
// Global Styles
import {colors} from './globalStyles.js';
// Images
import ninlaroBackground from '../images/ninlaro.jpg';
import davidoffBackground from '../images/davidoff.jpeg';
import mentosBackground from '../images/mentos.png';
import heroBackground from '../images/hero.jpg';
import schwartauBackground from '../images/schwartau.jpg';
import iffrBackground from '../images/iffr.jpg';
import jgzBackground from '../images/jgz.jpg';
import jamstudioBackground from '../images/jamstudio.jpg';
import juvelaBackground from '../images/juvela.jpg';
import kritischBackground from '../images/blockchain.jpg';
import ticketsBackground from '../images/personal/teamMeeting.jpg';
import hackathonBackground from '../images/personal/hackathon.png';
import burstBackground from '../images/burst-groupphoto.jpg';
import prefaceBackground from '../images/personal/mondayMeeting.jpg';
import conclusionBackground from '../images/personal/pingPong.jpg';

const Title = glamorous.div(
  propStyles({
    ninlaro: {
      backgroundImage: `url(${ninlaroBackground})`,
      color: colors.projects.ninlaro,
      borderBottom: `8px solid ${colors.projects.ninlaro}`
    },
    davidoff: {
      backgroundImage: `url(${davidoffBackground})`,
      color: colors.projects.davidoff,
      borderBottom: `8px solid ${colors.projects.davidoff}`
    },
    mentos: {
      backgroundImage: `url(${mentosBackground})`,
      color: colors.projects.mentos,
      borderBottom: `8px solid ${colors.projects.mentos}`
    },
    hero: {
      backgroundImage: `url(${heroBackground})`,
      color: colors.projects.hero,
      borderBottom: `8px solid ${colors.projects.hero}`
    },
    schwartau: {
      backgroundImage: `url(${schwartauBackground})`,
      color: colors.projects.schwartau,
      borderBottom: `8px solid ${colors.projects.schwartau}`
    },
    iffr: {
      backgroundImage: `url(${iffrBackground})`,
      color: colors.projects.iffr,
      borderBottom: `8px solid ${colors.projects.iffr}`
    },
    jgz: {
      backgroundImage: `url(${jgzBackground})`,
      color: colors.projects.iffr,
      borderBottom: `8px solid ${colors.projects.jgz}`
    },
    jamstudio: {
      backgroundImage: `url(${jamstudioBackground})`,
      color: colors.projects.jamstudio,
      borderBottom: `8px solid ${colors.projects.jamstudio}`
    },
    juvela: {
      backgroundImage: `url(${juvelaBackground})`,
      color: colors.projects.juvela,
      borderBottom: `8px solid ${colors.projects.juvela}`
    },
    kritisch: {
      backgroundImage: `url(${kritischBackground})`,
      color: colors.projects.kritisch,
      borderBottom: `8px solid ${colors.projects.kritisch}`
    },
    tickets: {
      backgroundImage: `url(${ticketsBackground})`,
      color: colors.projects.tickets,
      borderBottom: `8px solid ${colors.projects.tickets}`
    },
    headlessninja: {
      backgroundImage: `url(${hackathonBackground})`,
      color: colors.projects.headlessninja,
      borderBottom: `8px solid ${colors.projects.headlessninja}`
    },
    burst: {
      backgroundImage: `url(${burstBackground})`,
      color: colors.projects.burst,
      borderBottom: `8px solid ${colors.projects.burst}`
    },
    preface: {
      backgroundImage: `url(${prefaceBackground})`,
      color: colors.projects.preface,
      borderBottom: `8px solid ${colors.projects.preface}`
    },
    conclusion: {
      backgroundImage: `url(${conclusionBackground})`,
      color: colors.projects.preface,
      borderBottom: `8px solid ${colors.projects.preface}`
    }
  }),
  {
    fontFamily: 'Avenir Next',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    fontSize: '6em',
    padding: '2%',
    fontWeight: 'bold',
    height: '25vh',
    lineHeight: '25vh',
    textAlign: 'center',
  });

const DetailPageTopBar = glamorous.div({
  width: '100%',
  textAlign: 'center',
});

const Attachments = glamorous.div({
  position: 'absolute',
  color: colors.general.red,
  fontFamily: 'medium-content-sans-serif-font,"Lucida Grande","Lucida Sans Unicode","Lucida Sans",Geneva,Arial,sans-serif',
  margin: '0 0 0 5%',
  fontSize: '1.8em',
})

const AttachmentList = glamorous.ul({
  margin: '4vh 0 0 0',
})

const AttachmentListItem = glamorous.li({
  lineHeight: '1.58',
  transitionDuration: '0.4s',
  ':before': {
    content: "› ",
    color: colors.general.red,
  },
  ':hover': {
    cursor: 'pointer',
    padding: '0 0 0 4%',
  }
})

const AttachmentListItemText = glamorous.a({
  fontSize: '0.8em',
  color: colors.general.gray,
  display: 'inline-block',
  transitionDuration: '0.4s',
  ':hover': {
    color: colors.general.red,
  }
})

const Content = glamorous.div({
  fontFamily: 'medium-content-sans-serif-font,"Lucida Grande","Lucida Sans Unicode","Lucida Sans",Geneva,Arial,sans-serif',
  fontSize: '1.5em',
  fontSmoothing: 'antialiased',
  fontWeight: '100',
  padding: '0 25% 0 25%',
  lineHeight: '1.58',
  letterSpacing: '-.003em'
});

const SubTitle = glamorous.h2({
  color: colors.general.red,
  fontFamily: 'medium-content-sans-serif-font,"Lucida Grande","Lucida Sans Unicode","Lucida Sans",Geneva,Arial,sans-serif',
  fontSize: '2.5em',
  padding: '2% 0 2% 27%',
  fontWeight: 'bold',
});

const CirteriaTitle = glamorous.h2({
  color: colors.general.gray,
  fontFamily: 'medium-content-sans-serif-font,"Lucida Grande","Lucida Sans Unicode","Lucida Sans",Geneva,Arial,sans-serif',
  fontSize: '1.5em',
  padding: '1% 0 1% 24%',
  fontWeight: 'bold',
});

const Quote = glamorous.div({
  fontFamily: 'medium-content-sans-serif-font,"Lucida Grande","Lucida Sans Unicode","Lucida Sans",Geneva,Arial,sans-serif',
  fontSmoothing: 'antialiased',
  fontSize: '1.2em',
  fontStyle: 'italic',
  padding: '0 20% 2% 20%',
  textAlign: 'center',
  lineHeight: '1.1',
});

const List = glamorous.ul({
  color: colors.general.gray,
  fontFamily: 'medium-content-sans-serif-font,"Lucida Grande","Lucida Sans Unicode","Lucida Sans",Geneva,Arial,sans-serif',
  fontSmoothing: 'antialiased',
  fontSize: '2em',
  padding: '0 0 2% 25%',
});

const Name = glamorous.div({
  display: 'inline-block',
  fontWeight: 'bold',
  padding: '0 1% 0 0'
})

const Role = glamorous.div({
  display: 'inline-block',
  fontStyle: 'italic',
})

export {
  Title,
  DetailPageTopBar,
  Attachments,
  AttachmentList,
  AttachmentListItem,
  AttachmentListItemText,
  Content,
  SubTitle,
  CirteriaTitle,
  Quote,
  List,
  Name,
  Role
}
