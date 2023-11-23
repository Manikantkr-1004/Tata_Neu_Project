import { Box, Button, Flex, Heading, Image, Text } from '@chakra-ui/react'
import mobile from "../assets/mobile.png";
import progress_bar from "../assets/process_bar.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBoltLightning } from '@fortawesome/free-solid-svg-icons';

export function Mid3() {
    
    const quick = <FontAwesomeIcon size="md" icon={faBoltLightning} />

    return (
        <Flex w='90%' m='auto' justifyContent='space-between' gap='20px' mt='40px'
        flexDirection={{base:'column',sm:'column',md:'column',lg:'row',xl:'row'}}>

            <Box w={{base:'100%',sm:'100%',md:'100%',lg:'50%',xl:'50%'}} p='10px'>
                <Image w='100%' src={mobile} alt="mobile" />
            </Box>

            <Box display='flex' flexDirection='column' justifyContent='center' alignItems='center'
            w={{base:'100%',sm:'100%',md:'100%',lg:'50%',xl:'50%'}} p='10px'>
                <Heading size='lg'>{quick} Lightning Fast Process</Heading>
                <Image m='30px 0' w='90%' src={progress_bar} alt='progress_bar' />
                <Text fontSize='20px' mb='40px'>Customer Share Basic Details</Text>
                <Button variant='styled' letterSpacing='3px' bg="#8800ec" color='white' w='170px' p='25px 0'>APPLY NOW</Button>
            </Box>

        </Flex>
    )
}
