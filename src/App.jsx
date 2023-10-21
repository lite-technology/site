import { ThemeProvider } from "styled-components";

import Router from "./routes";
import { dark, GlobalStyle } from "./styles";

function App() {
    return (
        <ThemeProvider theme={dark}>
            <GlobalStyle />
            <Router />
        </ThemeProvider>
    );
}

export default App;
