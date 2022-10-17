import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {Settings} from "./components/Settings/Settings";
import {News} from "./components/News/News";

function App(props: any) {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <Routes>
                    <Route path="/profile" element={<Profile appState={props.appState.profilePage.posts}/>}/>
                    <Route path="/dialogs/*" element={<Dialogs appState={props.appState.dialogPage}/>}/>
                    <Route path="/news" element={<News/>}/>
                    <Route path="/settings" element={<Settings/>}/>
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
