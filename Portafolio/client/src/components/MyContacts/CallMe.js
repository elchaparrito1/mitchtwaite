import React from 'react';
import {
    Row,
    Column,
    Box,
    Head,
    Text,
    A
} from './styled';

const CallMe = () => {
    return (
        <div style={{margin: "10px"}}>
            <Box>
                <Row>
                    <Column lg="12" md="12" sm="12" xs="12">
                        <Head>CALL</Head>
                    </Column>
                </Row>
                <br />
                <Row>
                    <Column lg="12" md="12" sm="12" xs="12">
                        <Text>
                            Give me a call: <A href="tel:+1-801-719-7331"> 801-719-7331</A>. Note that 
                            if the time and date below are red, I'm not available. You can leave me a 
                            message and I'll respond as soon as possible.
                        </Text>
                    </Column>
                </Row>
            </Box>
        </div>
    )
};

export default CallMe;