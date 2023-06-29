import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "./index.css";
import { AuthContextProvider } from './context/AuthContext';
import { CountryCodeProvider } from './context/countryCodeContext';
import { TrendingVdoProvider } from './context/TrendingVdoContext';
import SearchDataContextProvider from './context/SearchDataContext';
import { UserDataContextProvider } from './context/UserDataContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AuthContextProvider>
    <CountryCodeProvider>
      <SearchDataContextProvider>
        <TrendingVdoProvider>
          <UserDataContextProvider>
            <App />
          </UserDataContextProvider>
        </TrendingVdoProvider>
      </SearchDataContextProvider>
    </CountryCodeProvider>
  </AuthContextProvider>
);