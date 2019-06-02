import React from "react";
import Bounce from "react-reveal/Bounce";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
import { 
    Container, 
    Row, 
    Column, 
    Text,
    ChildDiv,
    Icon,
    ImgDiv,
    Img
} from "./styled";
import img from "../../images/chevron.png";
import moabImg from "../../images/utah.jpg";
import grenadaImg from "../../images/Grenada.jpg";
import yellowstoneImg from "../../images/Yellowstone.jpg";
import castleImg from "../../images/Castle.JPG";

class MyTravels extends React.Component {

    state = {
        photoIndex: 0,
        isOpen: false,
        travels: [
            {
            img: yellowstoneImg,
            destin: "Yellowstone"
            },
            {
            img: grenadaImg,
            destin: "Spain"
            },
            {
                img: castleImg,
                destin: "England"
            },
            {
            img: moabImg,
            destin: "Utah"
            }
        ]
    }

    renderCards = () => {
        return this.state.travels.map((travel, index) => {
            return (
            <Column key={index} lg="6" md="6" sm="6" xs="12" style={{marginBottom: "90px"}}>
                <Bounce bottom>
                    <ImgDiv>
                        <Img onClick={() => this.setState({ isOpen: true, photoIndex: index})} src={travel.img} alt="travel photos"/>
                    </ImgDiv>
                </Bounce>
                <Bounce bottom>
                        <Text destination>{travel.destin}</Text>
                </Bounce>
            </Column>
            )
        })
    }

    render() {
    const { photoIndex, isOpen } = this.state;

    const images = [
        yellowstoneImg,
        grenadaImg,
        castleImg,
        moabImg
    ]

    const descrip = [
        "The best destination in the lower fifty is without a doubt Yellowstone National Park. It is my second home. Personally I've made 25 visits to the park and still going strong!",
        "Ah but there is no place like Spain. It has it all; history, architecture, bullfights, food, and Real Madrid! Its crowning glory is the Alhambra, which is the beautiful structure behind me in this photo.",
        "England is an amazing destination. Full of history, and well-preserved architecture, it is hard to be a little jealous of a place where castles pepper the countryside.",
        "As they say though, there's no place quite like home. Utah is full of beautiful and fun destinations. Southern Utah is a favorite of mine."
    ]

    return (
    <div>
        <Container>
            <ChildDiv>
                <Row>
                    <Column lg="12" md="12" sm="12" xs="12">
                        <Text header><b>My Travels</b></Text>
                    </Column>
                </Row>
                <Row>
                    <Column lg="12" md="12" sm="12" xs="12">
                        <Icon src={img} alt="icon separator"/>
                    </Column>
                </Row>
                <Row style={{width: "80%", margin: "0 auto"}}>
                    {this.renderCards()}
                </Row>
            </ChildDiv>
        </Container>
        {isOpen && (
          <Lightbox
            mainSrc={images[photoIndex]}
            imageCaption={descrip[photoIndex]}
            nextSrc={images[(photoIndex + 1) % images.length]}
            prevSrc={images[(photoIndex + images.length - 1) % images.length]}
            onCloseRequest={() => this.setState({ isOpen: false })}
            onMovePrevRequest={() =>
              this.setState({
                photoIndex: (photoIndex + images.length - 1) % images.length
              })
            }
            onMoveNextRequest={() =>
              this.setState({
                photoIndex: (photoIndex + 1) % images.length
              })
            }
          />
        )}
    </div>
    )
  };
};

export default MyTravels;