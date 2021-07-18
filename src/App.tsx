import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import * as React from 'react';
import Homepage from './screens/Homepage';
import ProductPage from './screens/ProductPage';
import Header from './components/Header';
import { Box } from '@chakra-ui/react';

function App(): JSX.Element {
  return (
    <div>
      <Header />
      <Box pt="4">
        <Router>
          <Switch>
            <Route path="/product/:productId">
              <ProductPage />
            </Route>
            <Route path="/">
              <Homepage />
            </Route>
          </Switch>
        </Router>
      </Box>
    </div>
  );
}

export default App;
