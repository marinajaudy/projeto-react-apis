import { GlobalContext } from "./contexts/GlobalContext";
import { Router } from "./Router/Router";
import { GlobalStyles } from "./GlobalStyles";
import { ChakraProvider } from "@chakra-ui/react";
import GlobalState from "./contexts/GlobalState";

function App() {

  const context = GlobalState()

  return (
    <GlobalContext.Provider value={context}>
      <GlobalStyles />
      <ChakraProvider>
        <Router />
      </ChakraProvider>
    </GlobalContext.Provider>
  );
}

export default App;
