import { Flex, HStack, Stack } from "@chakra-ui/layout";
import React from "react";
import "./App.css";
import Logs from "./components/Logs";
import { firebasedb } from "./firebase";

function App() {
  const [logs, setLogs] = React.useState([]);
  React.useEffect(() => {
    const rootRef = firebasedb.ref("FirebaseIOT");
    rootRef.on("value", (snapshot) => {
      const log = snapshot.val();
      setLogs((logs) => {
        return logs.concat({ ...log, date: new Date() }).reverse();
      });
    });
  }, []);
  return (
    <div className="App">
      <Stack
        w="100vw"
        h="100vh"
        justifyContent="space-around"
        alignItems="center"
      >
        <HStack>
          <Flex>
            <Logs
              title="Temperature"
              logs={logs.map((log) => ({
                date: log.date,
                type: "",
                status: log.temperature,
              }))}
            />
          </Flex>
          <Flex>
            <Logs
              title="Soil Moisture"
              logs={logs.map((log) => ({
                date: log.date,
                type: "",
                status: log.soilMoisture,
              }))}
            />
          </Flex>
        </HStack>
        <HStack>
          <Flex>Temperature</Flex>
          <Flex>Humidity</Flex>
        </HStack>
      </Stack>
    </div>
  );
}

export default App;
