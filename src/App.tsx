import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import * as React from 'react';
import Homepage from './screens/Homepage';
import ProductPage from './screens/ProductPage';
import Header from './components/Header';
import { Box, Flex } from '@chakra-ui/react';
import AdminPage from './screens/AdminPage';

function App(): JSX.Element {
  return (
    <Router>
      <Flex direction="column" minHeight="100vh">
        <Header />
        <Box flex="1" bg="blue.50" pt="4">
          <Switch>
            <Route path="/admin">
              <AdminPage />
            </Route>
            <Route path="/product/:productId">
              <ProductPage />
            </Route>
            <Route path="/">
              <Homepage />
            </Route>
          </Switch>
        </Box>
      </Flex>
    </Router>
  );
}

export default App;
