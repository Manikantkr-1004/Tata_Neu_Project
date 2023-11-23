import {Box, Flex, Heading, Text,Image, SimpleGrid} from "@chakra-ui/react";
import loans from "../assets/loans.png"
import hdfc from "../assets/hdfc.png";
import icici from "../assets/icici.png";
import baroda from "../assets/baroda.png"

import { faBoltLightning, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function Mid2() {

    const quick = <FontAwesomeIcon size="md" icon={faBoltLightning} />
    const star = <FontAwesomeIcon size="md" icon={faStar} />

    return (
        <>
        <Box w='90%' m='auto' mt='50px'>
            <Heading size='lg'>{quick} Personal Loan Highlights</Heading>

            <Flex justifyContent='space-between' gap='10px' mt='40px'
            flexDirection={{base:'column',sm:'column',md:'column',lg:'row',xl:'row'}}>

                <Box w={{base:'100%',sm:'100%',md:'100%',lg:'50%',xl:'50%'}} 
                display={{base:'none',sm:'none',md:'none',lg:'block',xl:'block'}}>
                    <Image w='80%' src={loans} alt="loans" />
                </Box>

                <Box w={{base:'100%',sm:'100%',md:'100%',lg:'50%',xl:'50%'}} bg='#fcf8ff' p='30px' borderRadius='15px' mb='20px'>
                    <Box mb='25px'>
                        <Heading size='md' mb='6px'><span style={{color:"#ffbb25"}}>{star}</span> Interest Rate</Heading>
                        <Text color='#464646'>Usually  <span style={{color:'#8800ec'}}>10.49% p.a.</span> onwards: some PSUs may offer lower rates</Text>
                    </Box>
                    <Box mb='25px'>
                        <Heading size='md' mb='6px'><span style={{color:"#ffbb25"}}>{star}</span> Interest Rate</Heading>
                        <Text color='#464646'>Usually  <span style={{color:'#8800ec'}}>10.49% p.a.</span> onwards: some PSUs may offer lower rates</Text>
                    </Box>
                    <Box mb='25px'>
                        <Heading size='md' mb='6px'><span style={{color:"#ffbb25"}}>{star}</span> Interest Rate</Heading>
                        <Text color='#464646'>Usually  <span style={{color:'#8800ec'}}>10.49% p.a.</span> onwards: some PSUs may offer lower rates</Text>
                    </Box>
                    <Box mb='25px'>
                        <Heading size='md' mb='6px'><span style={{color:"#ffbb25"}}>{star}</span> Interest Rate</Heading>
                        <Text color='#464646'>Usually  <span style={{color:'#8800ec'}}>10.49% p.a.</span> onwards: some PSUs may offer lower rates</Text>
                    </Box>
                </Box>

            </Flex>

        </Box>

        <SimpleGrid w='100%' p='60px' bg='#f8f9fa' gap='10px' alignItems='center' justifyContent='center'
        columns={{base:'1',sm:'2',md:'3',lg:'5',xl:'5'}}>
            <Heading size='lg'>Our Partners</Heading>
            <Image w='200px' src={hdfc} alt="hdfc" />
            <Image w='200px' src={icici} alt="icici" />
            <Image w='200px' src={icici} alt="icici" />
            <Image w='200px' src={baroda} alt="baroda" />
        </SimpleGrid>
        </>
    )
}
