import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from 'jquery';
import { Doctor } from './doctor';


$(document).ready(function() {
  let query = $("#doctorInput")
  let doctor = new Doctor();
  (async () => {
    const response = await doctor.getDoctor();
    let answerDoctor = getElements(response);
    console.log(answerDoctor);
  })();
  const getElements = function(response) {
    return response.data[0].practices[0].name;
   };
});
