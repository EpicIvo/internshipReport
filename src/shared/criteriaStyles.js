import glamorous from 'glamorous';
import {colors} from './globalStyles';

const SubText = glamorous.div({
  fontFamily: 'medium-content-sans-serif-font,"Lucida Grande","Lucida Sans Unicode","Lucida Sans",Geneva,Arial,sans-serif',
  fontSmoothing: 'antialiased',
  width: '45%',
  float: 'right',
  lineHeight: '1.58',
  color: colors.general.white,
  fontSize: '1.5em',
  margin: '5vh 5% 5vh 0',
  padding: '2vh 4%',
  textAlign: 'left',
  backgroundColor: colors.general.gray,
});

export {
  SubText
}
