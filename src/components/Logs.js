import {
  Box,
  HStack,
  ListItem,
  Stack,
  Text,
  UnorderedList,
} from "@chakra-ui/layout";
import React from "react";

const Logs = (props) => {
  return (
    <Stack maxHeight="300px" overflowY="scroll">
      <Text fontSize="xl">{props.title}</Text>
      <Box>
        <UnorderedList styleType="none">
          {props.logs.map((item, index) => {
            return (
              <ListItem color="yellow" key={index}>
                <HStack>
                  <Text>{item.date + ""}</Text>
                  <Text>{item.type}</Text>
                  <Text>{item.status}</Text>
                </HStack>
              </ListItem>
            );
          })}
        </UnorderedList>
      </Box>
    </Stack>
  );
};
export default Logs;
