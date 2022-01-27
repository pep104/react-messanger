import React, { useState } from 'react';
import {
  Switch,
  Route,
  Redirect
} from 'react-router-dom';

import { Authorization } from 'components/Authorization/Authorization';
import { Chat } from 'components/Chat/Chat';
import {
  TDataAuthors
} from 'components/Chat/Chat';
import {
  AUTHORS
} from 'components/Chat/Chat.mock'

import './App.css';

export const App = () => {
  const [userLogin, setUserLogin] = useState('');
  const [userName, setUserName] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [userPasswordConfirm, setUserPasswordConfirm] = useState('');
  const [isAuthorization, setAuthorization] = useState(false);
  const [authors, addNewAuthor] = useState<TDataAuthors>(AUTHORS);
  const [currentUserId, setCurrentUser] = useState(0);

  return (
    <div className="app">
      {isAuthorization
          ? (
            <Switch>
                <Route
                  path='/chat'
                  render={
                    (props) => (
                      <Chat
                        {...props}
                        currentUserId={currentUserId}
                        authors={authors}
                      />
                    )
                  }
                />
                <Route
                  path='*'
                  render={() => <Redirect to='/chat' />}
                />
            </Switch>
          )
          : (
             <Switch>
              <Route
                path='/authorization'
                render={
                  (props) => (
                    <Authorization
                      {...props}
                      authors={authors}
                      userLogin={userLogin}
                      userName={userName}
                      userPassword={userPassword}
                      userPasswordConfirm={userPasswordConfirm}
                      setUserLogin={setUserLogin}
                      setUserPasswordConfirm={setUserPasswordConfirm}
                      addNewAuthor={addNewAuthor}
                      setUserName={setUserName}
                      setUserPassword={setUserPassword}
                      setAuthorization={setAuthorization}
                      setCurrentUser={setCurrentUser}
                      isAuthorization={isAuthorization}
                    />
                  )
                }/>
              <Route
                path='*'
                render={() => <Redirect to='/authorization' />}
              />
            </Switch>
          )
      }
    </div>
  );
}