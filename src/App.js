import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import './App.css';
import * as Actions from '../src/redux/actions';
import MainComponent from './components/MainComponent';
import { Route, Routes, useNavigate } from 'react-router-dom';
import ItemDetailsComponent from './components/ItemDetailsComponent';

function App({ response, getResponseAsync, error, updateResponse }) {
  const [dataResponse, setDataResponse] = useState([]);
  const [item, setItem] = useState([]);

  useEffect(() => { 
    fetchData();
  }, [getResponseAsync]);


  const fetchData = async () => {
    try {
      await getResponseAsync();
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };



  useEffect(() => {
    if (response) {
      setDataResponse(response.results || response);
    }
  }, [response]);

  return (
    error ?
      (<h3>{error}</h3>) :
      (<div>
        <Routes>
          <Route path='/' element={
            <MainComponent
              dataResponse={dataResponse}
              setDataResponse={setDataResponse}
              fetchData={fetchData}
              getResponseAsync={getResponseAsync}
              setItem={setItem}
              updateResponse={updateResponse}
            />} />
          <Route path='/details' element={<ItemDetailsComponent item={item} />} />
        </Routes>
      </div>)
  );
}

const mapStateToProps = (state) => ({
  response: state.response,
  error: state.error
});

const mapDispatchToProps = (dispatch) => ({
  getResponseAsync: () => dispatch(Actions.initResponseAsync()),
  updateResponse: (response) => dispatch(Actions.updateResponse(response)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

