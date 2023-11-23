import { Box, Flex, Heading, Image, Text } from '@chakra-ui/react'
import customer from "../assets/cus-review.png"

import { faHandHoldingHeart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export function Mid4() {

    const HearthonHand = <FontAwesomeIcon size="md" icon={faHandHoldingHeart} />

    return (
        <Box w='100%' p='50px 30px 0 30px' bg='#f8f9fa'>

            <Heading textAlign='center' mb='60px'><span style={{color:"#8800ec"}}>{HearthonHand}</span>What Our Customer Says</Heading>

            <Flex justifyContent='space-between' gap='10px' alignItems='center'
            flexDirection={{base:'column-reverse',sm:'column-reverse',md:'column-reverse',lg:'row',xl:'row'}}>

                <Box w={{base:'100%',sm:'100%',md:'100%',lg:'50%',xl:'50%'}} p='10px'>
                    <Image w='100%' src={customer} alt="customer" />
                </Box>

                <Box w={{base:'100%',sm:'100%',md:'100%',lg:'50%',xl:'50%'}} p='10px'>
                    <Heading size='md'>SUNIL GUPTA</Heading>
                    <Text mb='20px'>Chartered Accountant</Text>

                    <Text fontFamily='none'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti modi, tempora, voluptas repellat pariatur earum quaerat eum, itaque ratione placeat culpa nulla quo repellendus nemo repudiandae quas temporibus eveniet tempore.
                    Ullam iste reiciendis commodi quod sed culpa magni natus eum provident velit, minus perspiciatis hic, quo cumque sequi officia? Nam cupiditate tempora, quam necessitatibus neque eligendi et impedit error distinctio?
                    Labore quibusdam sint porro hic suscipit nostrum voluptas nulla facere, quasi sed aut. Id error nam inventore, neque ut delectus corporis, laudantium obcaecati quisquam perspiciatis nihil harum itaque, velit numquam?
                    aboriosam blanditiis laborum, dolor odio molestias accusamus vitae tenetur. Temporibus, vero corporis. Fuga neque voluptate possimus alias eos! Deleniti ullam maxime in numquam repudiandae!</Text>
                </Box>

            </Flex>
        </Box>
    )
}
