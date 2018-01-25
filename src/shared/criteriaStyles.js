import glamorous from 'glamorous';
import {colors} from './globalStyles';

const SubText = glamorous.div({
  width: '30%',
  float: 'right',
  lineHeight: '1.2',
  color: colors.general.gray,
  fontFamily: 'Montserrat',
  fontSize: '1.5em',
  margin: '5vh 5% 5vh 0',
  padding: '2vh 2%',
  textAlign: 'center',
  backgroundColor: colors.general.white,
  border: `2px solid ${colors.general.lime}`,
  borderRadius: '75',
  boxShadow: '10px 10px 15px rgba(163,175,191,1)',
});

export {
  SubText
}
