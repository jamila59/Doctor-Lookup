import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from 'jquery';
import { Doctor } from './doctor';


$(document).ready(function() {
  // $(".formOne").submit(function (event) {
  //   event.preventDefault();
  //   // let query = $("#doctorInput").val();
  //   $("#doctorInput").cal('');
  // })

  (async () => {
    let doctor = new Doctor();
    const response = await doctor.getDoctor();
    let answerDoctor = getElements(response);
    console.log(answerDoctor);
  })();
  const getElements = function(response) {
    $("#doctorInput").text(`${response.data[0].practices[0].name}`);
   };
});
