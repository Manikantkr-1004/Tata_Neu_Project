import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Button, Flex, Heading, Text } from '@chakra-ui/react'
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export function Mid8() {

    const question_mark = <FontAwesomeIcon size='md' icon={faQuestionCircle} />
    const arr = new Array(10).fill(0)

    return (
        <Box w='90%' m='auto' p='30px 0px'>
            <Heading mb='30px' size='lg'><span style={{color:'#8800ec'}}>{question_mark}</span> FAQ'S</Heading>

            {
                arr.map((item,index)=>(
                    <Accordion allowMultiple  key={index}>
                    <AccordionItem border='none'>
                        <h2>
                        <AccordionButton >
                            <Box as="span" flex='1' textAlign='left'>
                            {index+1}. Section {index+1} title for This Company
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat.
                        </AccordionPanel>
                    </AccordionItem>
                    </Accordion>
                ))
            }

            <Flex w='100%' bg='#f9f2fe' justifyContent='space-between' gap='15px' p='40px' mt='30px' borderRadius='15px'
            flexDirection={{base:'column',sm:'column',md:'row',lg:'row',xl:'row'}}>
                <Box>
                    <Heading size='md'>Anything not Clear?</Heading><br />
                    <Text fontFamily='none'>You can see out details FAQ's or contact us my Team , We will provide every information. or contact us my Team , We will provide every information. </Text>
                </Box>
                <Button variant='styled' letterSpacing='3px' bg="#8800ec" color='white' w='60%' p='25px 0'>CONTACT US</Button>
            </Flex>

        </Box>
    )
}
