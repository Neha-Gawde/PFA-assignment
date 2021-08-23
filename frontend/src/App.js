import './App.css';
import AdminRoutes from './routes/Routes';
import { Provider } from 'react-redux';
import { Switch, BrowserRouter } from "react-router-dom";
import store from './store';
import { Suspense } from 'react';
import './index.css'

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        
        <BrowserRouter>
        <Suspense>
          <Switch>
            <AdminRoutes></AdminRoutes>
          </Switch>
        </Suspense>
          
        </BrowserRouter>
   
    </Provider>

    </div>
  );
}

export default App;
