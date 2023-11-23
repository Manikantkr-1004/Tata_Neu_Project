import { Box, Flex, Heading, Image, SimpleGrid, Text } from '@chakra-ui/react'
import logo from "../assets/logo.png"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faFacebook, faInstagram, faLinkedin, faYoutube} from "@fortawesome/free-brands-svg-icons"

export function Footer() {
    
    const facebook = <FontAwesomeIcon size='xl' icon={faFacebook} />
    const insta = <FontAwesomeIcon size='xl' icon={faInstagram} />
    const youtube = <FontAwesomeIcon size='xl' icon={faYoutube} />
    const linkdin = <FontAwesomeIcon size='xl' icon={faLinkedin} />

    return (
        <Flex w='100%' mt='30px' gap='20px' alignItems='center'
        p='40px 60px' bg='#000' color='#fff' justifyContent='space-between'
        flexDirection={{base:'column',sm:'column',md:'row',lg:'row',xl:'row'}}>

            <Box textAlign='left' p='20px 30px'>
                <Image cursor='pointer' filter='invert(100%)' w="70px" src={logo} alt="logo" /><br /><br />
                <Flex justifyContent='space-between' gap='10px'>{facebook} {insta} {youtube} {linkdin}</Flex>
            </Box>

            <SimpleGrid columns={{base:'1',sm:'1',md:'2',lg:'2',xl:'2'}} gap='20px'>
                <Box>
                    <Heading size='md'>Help & Support</Heading><br /><br />
                    <Text fontFamily='none'>Terms & Service</Text>
                    <Text fontFamily='none'>Privacy Policy</Text>
                    <Text fontFamily='none'>FAQ</Text>
                </Box>
                <Box>
                    <Heading size='md'>Customer Care</Heading><br /><br />
                    <Text fontFamily='none'>Near Hospita, Gurgao(India)</Text>
                    <Text fontFamily='none'>+91 2365435634</Text>
                    <Text fontFamily='none'>company@com.com</Text>
                </Box>
            </SimpleGrid>
        </Flex>
    )
}
