import { Box, Button, Flex, Heading, Image, Text } from '@chakra-ui/react'
import refer from "../assets/refer.png";

export function Mid7() {
    

    return (
        <Flex w='90%' m='auto' justifyContent='space-between' gap='20px' mt='50px' alignItems='center'
        flexDirection={{base:'column',sm:'column',md:'column',lg:'row',xl:'row'}}>

            <Box w={{base:'100%',sm:'100%',md:'100%',lg:'50%',xl:'50%'}} p='10px'>
                <Heading size='lg' mb='20px'>Refer & Earn Now</Heading>
                <Text>Get a ₹500 Big Basket Gift Card</Text>
                <Button variant='styled' letterSpacing='3px' m='20px 0' bg="#8800ec" color='white' w='250px' p='25px 0'>REFER AND EARN</Button>
                <Text fontFamily='none' textDecoration='underline'>Terms and Conditions Apply</Text>
            </Box>

            <Box w={{base:'100%',sm:'100%',md:'100%',lg:'50%',xl:'50%'}} p='10px'>
                <Image w='100%' src={refer} alt="refer" />
            </Box>

        </Flex>
    )
}
