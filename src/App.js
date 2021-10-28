import { Route, Switch, Redirect } from 'react-router-dom';
import AllQuotes from './Pages/AllQuotes';
import QuoteDetail from './Pages/QuoteDetail';
import NewQuote from './Pages/NewQuote';
import Layout from './components/layout/Layout';
import NotFound from './Pages/NotFound';

function App() {
  return (
    <Layout>
      <Switch>
        <Route path='/' exact>
          <Redirect to='/quotes' />
        </Route>
        <Route exact path='/quotes'>
          <AllQuotes />
        </Route>
        <Route path='/quotes/:quoteId'>
          <QuoteDetail />
        </Route>
        <Route path='/new-quote'>
          <NewQuote />
        </Route>
        <Route path='*'>
          <NotFound />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
