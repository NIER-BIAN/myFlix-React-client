// import statement to indicate files that parcel needs to bundle

// stylesheets
import Container from 'react-bootstrap/Container';
import './index.scss';

// components
import { createRoot } from 'react-dom/client';
import { MainView } from './components/main-view/main-view';

// main component (will eventually use all the others)
const App = () => {
    // Container wraps around MainView (essentially the whole app) in index.jsx
    // so that MainView can have rows and cols
    return (
	<Container>
	    <MainView />
	</Container>
    )
};

// finds root of  app
const container = document.querySelector("#root");
const root = createRoot(container);

// tells React to render your app in the root DOM element
root.render(<App />);
