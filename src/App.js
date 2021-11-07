import { lazy, Suspense } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Layout from './components/layout/Layout';
import LoadingSpinner from './components/UI/LoadingSpinner';

const NewQuote = lazy(() => import('./Pages/NewQuote'));
const QuoteDetail = lazy(() => import('./Pages/QuoteDetail'));
const NotFound = lazy(() => import('./Pages/NotFound'));
const AllQuotes = lazy(() => import('./Pages/AllQuotes'));

function App() {
  return (
    <Layout>
      <Suspense
        fallback={
          <div className={'centered'}>
            <LoadingSpinner />
          </div>
        }
      >
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
      </Suspense>
    </Layout>
  );
}

export default App;
