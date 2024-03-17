import { useState } from "react";
import {
  Flex,
  Heading,
  Input,
  Button,
  InputGroup,
  Stack,
  InputLeftElement,
  chakra,
  Box,
  Link,
  Avatar,
  FormControl,
  FormHelperText,
  InputRightElement,
  useToast
} from "@chakra-ui/react";
import { FaUserAlt, FaLock } from "react-icons/fa";
import NavBar from "./navbar";
import { useAuth } from "../auth";
import { useNavigate } from "react-router-dom";

const CFaUserAlt = chakra(FaUserAlt);
const CFaLock = chakra(FaLock);

const Registration = () => {
  const toast = useToast();

  const { register } = useAuth();
  const [showPassword, setShowPassword] = useState(false);
  const [pass, setPass] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
const navigate=useNavigate()
  const handleShowClick = () => setShowPassword(!showPassword);
  const handleRegister = () => {
    if (email.length && pass.length && username.length) {
      register(email,  username,pass);
      navigate('/login')

    } else {
      toast({
        title: "Invalid Input",
        description: "",
        status: "warning",
        duration: 9000,
        isClosable: true,
      });
    }
  };

  return (
    <>
      <NavBar />
      <Flex
        flexDirection="column"
        width="100wh"
        height="100vh"
        justifyContent="center"
        alignItems="center"
        marginTop={0}
      >
        <Stack
          flexDir="column"
          mb="2"
          justifyContent="center"
          alignItems="center"
        >
          <Avatar bg="teal.500" />
          <Heading color="teal.400">Create an Account</Heading>
          <Box minW={{ base: "90%", md: "468px" }}>
            
              <Stack
                spacing={4}
                p="1rem"
                backgroundColor="whiteAlpha.900"
                boxShadow="md"
              >
                <FormControl>
                  <InputGroup>
                    <InputLeftElement
                      pointerEvents="none"
                      children={<CFaUserAlt color="gray.300" />}
                    />
                    <Input
                      type="text"
                      value={username}
                      placeholder="Username"
                      onChange={(e) => setUsername(e.target.value)}
                    />
                  </InputGroup>
                </FormControl>
                <FormControl>
                  <InputGroup>
                    <InputLeftElement
                      pointerEvents="none"
                      children={<CFaUserAlt color="gray.300" />}
                    />
                    <Input
                      type="email"
                      value={email}
                      placeholder="Email address"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </InputGroup>
                </FormControl>
                <FormControl>
                  <InputGroup>
                    <InputLeftElement
                      pointerEvents="none"
                      color="gray.300"
                      children={<CFaLock color="gray.300" />}
                    />
                    <Input
                      type={showPassword ? "text" : "password"}
                      placeholder="Password"
                      onChange={(e) => setPass(e.target.value)}
                    />
                    <InputRightElement width="4.5rem">
                      <Button h="1.75rem" size="sm" onClick={handleShowClick}>
                        {showPassword ? "Hide" : "Show"}
                      </Button>
                    </InputRightElement>
                  </InputGroup>
                </FormControl>
                <Button
                  borderRadius={0}
                  type="submit"
                  variant="solid"
                  colorScheme="teal"
                  width="full"
                  onClick={handleRegister}
                >
                  Register
                </Button>
              </Stack>
            
          </Box>
        </Stack>
        <Box>
          Already have an account?{" "}
          <Link color="teal.500" href="#">
            Log In
          </Link>
        </Box>
      </Flex>
    </>
  );
};

export default Registration;
