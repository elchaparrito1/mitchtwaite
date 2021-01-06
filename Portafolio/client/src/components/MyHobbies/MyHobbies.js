import React from 'react';
import Bounce from 'react-reveal/Bounce';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
import { 
    Container, 
    Row, 
    Column, 
    Text,
    ChildDiv,
    Button,
    Icon,
    ImgDiv,
    Img
} from './styled';
import img from '../../images/chevron.png';
import horseImg from '../../images/Horse.JPG';
import horsetwoImg from '../../images/Horsetwo.JPG';
import coachImg from '../../images/Coach.JPG';
import skiImg from '../../images/Ski.JPG';
import notredameImg from '../../images/NotreDame.JPG';
import tetonImg from '../../images/Teton.jpg';
import skiwaterImg from '../../images/Skiwater.JPG';
import buffaloImg from '../../images/Buffalo.JPG';
import bakeImg from '../../images/Bake.JPG';

const hobbies = [
    {
    img: horseImg
    },
    {
    img: horsetwoImg
    },
    {
    img: skiImg
    },
    {
    img: notredameImg
    },
    {
    img: tetonImg
    },
    {
    img: skiwaterImg
    },
    {
    img: bakeImg
    },
    {
    img: coachImg
    },
    {
    img: buffaloImg
    }
]

class MyHobbies extends React.Component {

    state = {
        photoIndex: 0,
        isOpen: false,
    }

    renderCards = () => {
        return hobbies.map((hobby, index) => {
            console.log(index);
            return (
            <Column key={index} lg="4" md="6" sm="6" xs="12" style={{marginBottom: "25px"}}>
                <Bounce bottom>
                    <ImgDiv>
                        <Button onClick={() => this.setState({ isOpen: true, photoIndex: index})}>
                            <Img 
                                src={hobby.img} alt="hobby photos"
                            />
                        </Button>
                    </ImgDiv>
                </Bounce>
            </Column>
            )
        })
    }

    render() {
    const { photoIndex, isOpen } = this.state;

    const images = [
        horseImg,
        horsetwoImg,
        skiImg,
        notredameImg,
        tetonImg,
        skiwaterImg,
        bakeImg,
        coachImg,
        buffaloImg
    ]

    const descrip = [
        'Riding and training horses is a big part of my life. It is a pastime that requires dedication and patience, but is very rewarding in the end.',
        'Horses are a big part of my life, and the family just loves to hangout at the pasture as much as we can.',
        "Growing up in the Rocky Mountains, it is tough to not take up skiing. I'm no exception and have been skiing since the age of 3.",
        "Traveling is a big part of my life but why? It's mostly due to history and culture. I love to study history, and go places where it is palpable.",
        'Hiking is secondary to riding horses, but another great hobby is hiking to the top of the Tetons.',
        'Again, skiing is in my DNA. If I had to choose a preferred type though, it would be water skiing everytime.',
        "My wife and I love to bake and cook. From various authentic Mexican dishes, to good ol'fashioned cherry pie, we are in the kitchen a lot.",
        'Both playing and teaching sports is an important pastime. Coaching little ones is especially fun.',
        "I love to to be in nature, and especially spot wildlife. It's a hobby I find both relaxing and educational."
    ]

    return (
    <div>
        <Container>
            <ChildDiv>
                <Row>
                    <Column lg="12" md="12" sm="12" xs="12">
                        <Text header><b>My Hobbies</b></Text>
                    </Column>
                </Row>
                <Row>
                    <Column lg="12" md="12" sm="12" xs="12">
                        <Icon src={img} alt="icon separator"/>
                    </Column>
                </Row>
                <Row style={{width: "100%", margin: "0 auto"}}>
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

export default MyHobbies;