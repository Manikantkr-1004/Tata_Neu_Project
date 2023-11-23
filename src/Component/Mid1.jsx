import {Box, Button, Flex, Heading, Image, SimpleGrid, Text} from "@chakra-ui/react"
import family from "../assets/family.png";

import { faBoltLightning, faCreditCard, faHandHoldingUsd, faPager } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export function Mid1() {

    const credit = <FontAwesomeIcon size='md' icon={faCreditCard} />
    const quick = <FontAwesomeIcon size="md" icon={faBoltLightning} />
    const hand = <FontAwesomeIcon size="md" icon={faHandHoldingUsd} />
    const page = <FontAwesomeIcon size="md" icon={faPager} />

    return (
        <Flex w='90%' m='auto' justifyContent='space-between' gap='20px' 
        mt={{base:'110px',sm:'110px',md:'120px',lg:'140px',xl:'140px'}}
        flexDirection={{base:'column',sm:'column',md:'column',lg:'row',xl:'row'}}>
            
            <Box w={{base:'100%',sm:'100%',md:'100%',lg:'50%',xl:'50%'}} p='10px'>
                <Heading lineHeight={{base:'40px',sm:'40px',md:'50px',lg:'80px',xl:'80px'}} 
                fontSize={{base:'30px',sm:'30px',md:'40px',lg:'50px',xl:'50px'}}>Turn Dreams Into Reality With <span style={{color:"#ff0096"}}>Personal Loans</span></Heading>
                
                <SimpleGrid w='100%' columns={{base:'1',sm:'2',md:'2',lg:'2',xl:'2'}} columnGap='20px' rowGap='40px' m='20px 0'>
                    <Flex justifyContent='space-between' gap='5px' w='170px'>
                        <Text fontSize='25px' color='green' bg='#b0ffa9' borderRadius='10px' p='5px 10px'>{credit}</Text>
                        <Box>
                            <Heading size='md'>Avail Zero</Heading>
                            <Text>Processing Fee</Text>
                        </Box>
                    </Flex>
                    <Flex justifyContent='space-between' gap='5px'  w='170px'>
                        <Text fontSize='25px' color='green' bg='#b0ffa9' borderRadius='10px' p='5px 10px'>{quick}</Text>
                        <Box>
                            <Heading size='md'>Quick</Heading>
                            <Text>Personal Loan</Text>
                        </Box>
                    </Flex>
                    <Flex justifyContent='space-between' gap='5px'  w='170px'>
                        <Text fontSize='25px' color='green' bg='#b0ffa9' borderRadius='10px' p='5px 10px'>{hand}</Text>
                        <Box>
                            <Heading size='md'>Lowest</Heading>
                            <Text>Interest Rates</Text>
                        </Box>
                    </Flex>
                    <Flex justifyContent='space-between' gap='5px'  w='170px'>
                        <Text fontSize='25px' color='green' bg='#b0ffa9' borderRadius='10px' p='5px 10px'>{page}</Text>
                        <Box>
                            <Heading size='md'>Minimal</Heading>
                            <Text>Documentation</Text>
                        </Box>
                    </Flex>
                </SimpleGrid>

                <Button variant='styled' letterSpacing='3px' bg="#8800ec" color='white' w='170px' p='25px 0'>APPLY NOW</Button>
            </Box>

            <Box w={{base:'100%',sm:'100%',md:'100%',lg:'50%',xl:'50%'}} p='10px'>
                <Image w='90%' src={family} alt="family" />
            </Box>

        </Flex>
    )
}
