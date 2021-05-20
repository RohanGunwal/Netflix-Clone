import React, { Component } from 'react';
import Row from './Row';
import requests from './request';
import './App.css';
import Banner from './Banner';

class App extends Component {
  render() {
    return (
      <div>
        {/* Navbar */}
        {/* Banner */}
        <Banner/>
        {/* Rows */}
        <Row title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals} isLargeRow/>
        <Row title="Trending Now" fetchUrl={requests.fetchTrending}/>
        <Row title="Top Rated" fetchUrl={requests.fetchTopRated}/>
        <Row title="Action" fetchUrl={requests.fetchActionMovies}/>
        <Row title="Comedy" fetchUrl={requests.fetchComedyMovies}/>
        <Row title="Horror" fetchUrl={requests.fetchHorrorMovies}/>
        <Row title="Romance" fetchUrl={requests.fetchRomanceMovies}/>
        {/* <Row title="Crime" fetchUrl={requests.fetchCrimeMovies}/> */}
        {/* <Row title="Documentries" fetchUrl={requests.fetchDocumentaries}/> */}
      </div>
    );
  }
}

export default App;
