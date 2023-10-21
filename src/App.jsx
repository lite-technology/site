import Router from "./routes";
import { PaletteProvider } from "./contexts/theme.context";

function App() {
    return (
        <PaletteProvider>
            <Router />
        </PaletteProvider>
    );
}

export default App;
