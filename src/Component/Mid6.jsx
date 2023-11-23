import { Box, Button, Flex, Heading, Image, Input, InputGroup, InputLeftElement, Text } from '@chakra-ui/react'
import chart from "../assets/chart.png";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalculator, faCircle } from '@fortawesome/free-solid-svg-icons';

export function Mid6() {
    
    const calculator = <FontAwesomeIcon size='md' icon={faCalculator} />
    const point = <FontAwesomeIcon size='md' icon={faCircle} />

    return (
        <Box w='90%' m='auto' mt='40px'  p='0 20px'>

            <Heading size='lg' mb='40px'><span style={{color:'#8800ec'}}>{calculator}</span> EMI Calculator</Heading>

            <Flex w='100%' m='auto' justifyContent='space-between' gap='40px' 
            flexDirection={{base:'column',sm:'column',md:'column',lg:'row',xl:'row'}}>

                <Box w={{base:'100%',sm:'100%',md:'100%',lg:'40%',xl:'40%'}} p='20px' borderRadius='20px'
                boxShadow='rgba(149, 157, 165, 0.2) 0px 8px 24px'>

                    <Box mb='20px'>
                        <label>Loan Amount</label>
                        <InputGroup m='10px 0' borderRadius='10px'>
                            <InputLeftElement bg="#d8d8d8" borderRadius='10px 0 0 10px'>₹</InputLeftElement>
                            <Input borderRadius='10px' type='number' defaultValue='30000' />
                        </InputGroup>
                        <input style={{width:"100%",accentColor:"#ff0096"}} type="range" defaultValue='10000' min='1000' max='100000' step='1000' />
                    </Box>

                    <Box mb='20px'>
                        <label>Interest Rate(%)</label>
                        <InputGroup m='10px 0' borderRadius='10px'>
                            <InputLeftElement bg="#d8d8d8" borderRadius='10px 0 0 10px'>%</InputLeftElement>
                            <Input borderRadius='10px' type='number' defaultValue='10.5' />
                        </InputGroup>
                        <input style={{width:"100%",accentColor:"#ff0096"}} type="range" defaultValue='22' min='1' max='100' step='2' />
                    </Box>

                    <Box mb='20px'>
                        <label>Loan Tenure(in Months)</label>
                        <InputGroup m='10px 0' borderRadius='10px'>
                            <InputLeftElement bg="#d8d8d8" borderRadius='10px 0 0 10px'>%</InputLeftElement>
                            <Input borderRadius='10px' type='number' defaultValue='24' />
                        </InputGroup>
                        <input style={{width:"100%",accentColor:"#ff0096"}} type="range" defaultValue='5' min='1' max='24' step='1' />
                    </Box>
                </Box>

                <Flex w={{base:'100%',sm:'100%',md:'100%',lg:'60%',xl:'60%'}} p='20px' justifyContent='space-between' borderRadius='20px' alignItems='center'
                boxShadow='rgba(149, 157, 165, 0.2) 0px 8px 24px'
                flexDirection={{base:'column',sm:'column',md:'row',lg:'row',xl:'row'}}>

                    <Box w={{base:'100%',sm:'100%',md:'100%',lg:'50%',xl:'50%'}} textAlign='center'>
                        <Image w='100%' src={chart} alt='chart' /><br />
                        <Text fontSize='18px'><span style={{color:'#ff0096'}}>{point}</span> Principal Amount <span style={{color:"#8800ec"}}>₹3,00,000</span></Text><br />
                        <Text fontSize='18px'><span style={{color:'#bfbfbf'}}>{point}</span> Interest Amount <span style={{color:"#8800ec"}}>₹59,454</span></Text><br />
                        <Text fontSize='18px'>Total Amount Payable <span style={{color:"#8800ec"}}>₹3,59,454</span></Text>
                    </Box>

                    <Box w={{base:'100%',sm:'100%',md:'100%',lg:'50%',xl:'50%'}}>
                        <Box w='90%' m='auto' bg='#fcf8ff' p='50px 20px' borderRadius='20px'>
                            <Text>Eqated Monthly Instalments (EMI)</Text><br />
                            <Heading size='lg'>₹14,977</Heading>
                        </Box><br />
                        <Button variant='styled' letterSpacing='3px' bg="#8800ec" color='white' w='90%' m='auto' p='25px 0'>APPLY NOW</Button>
                    </Box>
                </Flex>

            </Flex>

        </Box>
    )
}
