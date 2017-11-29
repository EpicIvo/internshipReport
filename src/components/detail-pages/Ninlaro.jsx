import React from 'react';
// styles
import {Title, Content, SubTitle} from './../../shared/detailStyles.js';
// Components
import BackButton from '../common/BackButton/BackButton.jsx';

class Ninlaro extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <Title ninlaro>
          <BackButton value="<"/>
          Ninlaro
        </Title>
        <Content>
          Oorspronkelijk stond ik maar twee dagen ingepland op Ninlaro, dit werden alleen wel wat meer dagen na wat misverstanden.
          Aan mij was de taak gegeven ervoor te zorgen dat alle content dat geüpload moest worden op de goede plek stond en ook echt
          goed geüpload werd. Ik moest dit doen aangezien Roël en Daan die de content hebben geüpload beide op vakantie gingen.
          <br/><br/>
          De klant had in een google drive folder alle content gezet met daarbij informatie over waar het moest komen te staan. Dit was
          de data dat ik gebruikte om te checken of alles goed stond. En na dit alles te zijn doorgelopen leek het allemaal zeker goed te
          staan.
        </Content>
        <SubTitle ninlaro>
          >_ Meeting
        </SubTitle>
        <Content>
          De projectmanager met wie ik dit project samen deed was de maandag waarop de klant voor een opleveringsmeeting kwam niet aanwezig. In
          het weekend vroeg ze of ik dit op mij wilde nemen aangezien er niemand anders (die bij het project betrokken was geweest) op kantoor
          zou zijn. Ik had de website al aardig doorgenomen tegen deze tijd en wist dus dat ik de klant wel goed te woord kon staan.
          <br/><br/>
          Tegen het eind van de middag kwamen twee
        </Content>
        <SubTitle ninlaro>
          >_ Subtitle
        </SubTitle>
      </div>
    )
  }
}

export default Ninlaro;
