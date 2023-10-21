import { ThemeProvider } from "styled-components";

import Router from "./routes";
import { dark, GlobalStyle, palette } from "./styles";

function App() {
    return (
        <ThemeProvider theme={{ ...dark, ...palette }}>
            <GlobalStyle />
            <Router />
        </ThemeProvider>
    );
}

export default App;
