import { Flex, HStack, Stack } from "@chakra-ui/layout";
import React from "react";
import "./App.css";
import ChartBox from "./components/ChartBox";
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
          <Flex>
            <ChartBox
              data={logs}
              name="Temperature"
              dataKey="temperature"
              lineColor="red"
            />
          </Flex>
          <Flex>
            <ChartBox
              data={logs}
              name="Humidity"
              dataKey="humidity"
              lineColor="blue"
            />
          </Flex>
        </HStack>
        <HStack>
          <Flex>
            <ChartBox
              data={logs}
              name="Soil Moisture"
              dataKey="soilMoisture"
              lineColor="orange"
            />
          </Flex>
          <Flex>
            <ChartBox
              data={logs}
              name="Motion"
              dataKey="motion"
              lineColor="white"
            />
          </Flex>
        </HStack>
      </Stack>
    </div>
  );
}

export default App;
