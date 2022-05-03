import React from 'react';
import {Navigation} from "./src/navigation";
import { Provider as PaperProvider } from 'react-native-paper';
import { AppStateProvider } from "./src/context/Context";

const App: () => JSX.Element = () => {
  return (
      <AppStateProvider>
        <PaperProvider>
            <Navigation/>
        </PaperProvider>
      </AppStateProvider>
  );
};


export default App;
