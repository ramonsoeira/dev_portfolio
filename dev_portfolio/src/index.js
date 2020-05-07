import React, { useEffect } from 'react';
import Header from './components/header/header';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min.js';
// import Routes from './routes/routes';
import ReactDOM from 'react-dom';
import './index.css';
function App () {

    useEffect(() => {
        callBackendAPI()
        .then(res => res)
        .catch(err => console.log(err)); 
      });

        // Fetches our GET route from the Express server. (Note the route we are fetching matches the GET route from server.js
    const callBackendAPI = async() => {
        const response = await fetch('/dev_portfolio');
        const body = await response.json();

        if (response.status !== 200) {
            throw Error(body.message)
        }
        return body;
    };

        return ( <div className = "App">
            <Header/>
            </div>
        );
}

ReactDOM.render( < App / > , document.getElementById('root'));
export default App;