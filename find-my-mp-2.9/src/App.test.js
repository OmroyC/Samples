import React from "react";
import { act } from "react-dom/test-utils";
import ReactDOM, { unmountComponentAtNode } from "react-dom";
import App from './App';
import SearchForMP from './searchformp';
import fetchData from "./testFetch";
import {fireEvent, render} from '@testing-library/react';
import MPInfoMainResult from "./mpinfomain";
import testData from './bramptonwestdata.json';

const url = "https://represent.opennorth.ca/boundaries/federal-electoral-districts/?limit=338";

test("Check input text field exist and its value is blank", () => {


  let MockData = ['Brampton West', 'Brampton North', 'Brampton South']
  const query = render(<SearchForMP city={MockData} />);

  let input = query.queryByDisplayValue('');

  expect(input).toHaveDisplayValue('');

});

test("Check that the MP of Brampton West has a picture, correct name, gender, langauge, email, district name, party name", () => {
  
  const cityValue = 'Brampton West';

  let div = document.createElement('div');
          
  ReactDOM.render(<MPInfoMainResult city={cityValue} mpProfile={testData} />, div)

  const MPpic =  div.querySelector("#mpProfilePic");
  const MPname = div.querySelector('#mpProfileName');
  const MPgender = div.querySelector('#mpProfileGender');
  const MPlanguage = div.querySelector('#mpProfileLanguage');
  const MPemail = div.querySelector('#mpProfileEmail');
  const MPdistrict = div.querySelector('#mpProfileDistrict');
  const MPparty = div.querySelector('#mpProfileParty');

  expect(MPpic).toHaveAttribute('alt', 'Kamal Khera');
  expect(MPname).toHaveTextContent('Kamal Khera');
  expect(MPgender).toHaveTextContent('F');
  expect(MPlanguage).toHaveTextContent('English');
  expect(MPemail).toHaveTextContent('Kamal.Khera@parl.gc.ca');
  expect(MPdistrict).toHaveTextContent('Brampton West');
  expect(MPparty).toHaveTextContent('Liberal');

});