import {Flex, Image, Input, InputGroup, InputLeftElement, Text} from "@chakra-ui/react";
import logo from "../assets/logo.png"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faBell, faMapMarker, faSearch, faShoppingCart, faUser} from "@fortawesome/free-solid-svg-icons"

export function Navbar() {

    const search = <FontAwesomeIcon size='md' icon={faSearch} />
    const map = <FontAwesomeIcon flip size='md' icon={faMapMarker} />
    const cart = <FontAwesomeIcon size='md' icon={faShoppingCart} />
    const bellIcon = <FontAwesomeIcon fade size='md' icon={faBell} />
    const user = <FontAwesomeIcon size='md' icon={faUser} />
    const bars = <FontAwesomeIcon size='lg' icon={faBars} />

    return (
        <Flex w="100%" justifyContent="space-between" p="0 30px" alignItems="center" h="80px" gap='10px' 
        boxShadow="rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px" position="fixed" top="0" zIndex='999' bg='transparent' backdropFilter='blur(20px)'>
            
            <Image cursor='pointer' display={{base:'block',sm:'block',md:'block',lg:'none',xl:'none'}} w="55px" src={logo} alt="logo" />

            <Flex justifyContent="space-between" alignItems="center" gap="20px"
            display={{base:'none',sm:'none',md:'none',lg:'flex',xl:'flex'}}>

                <Image cursor='pointer' w="55px" src={logo} alt="logo" />
                <p style={{cursor:"pointer"}}>Offers</p>
                <p style={{cursor:"pointer"}}>Stories</p>
                <p style={{cursor:"pointer"}}>Tata Pay</p>
                <p style={{cursor:"pointer"}}>NeuPass</p>
            </Flex>

            <Flex justifyContent="space-between" alignItems="center" gap="20px"
            display={{base:'none',sm:'flex',md:'flex',lg:'flex',xl:'flex'}}>

                <InputGroup bg='#e6e6e6' borderRadius="5px" >
                    <InputLeftElement>{search}</InputLeftElement>
                    <Input type="text" placeholder="Search Tata Neu" />
                </InputGroup>
                <Flex cursor='pointer' alignItems="center" gap="5px">122018{map}</Flex>
                <p style={{cursor:"pointer"}}>{cart}</p>
                <p style={{cursor:"pointer"}}>{bellIcon}</p>
                <p style={{cursor:"pointer"}}>{user}</p>
            </Flex>

            <Text cursor='pointer' fontWeight='bold'
            display={{base:'block',sm:'none',md:'none',lg:'none',xl:'none'}} >{bars}</Text>

        </Flex>
    )
}
