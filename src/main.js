import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from 'jquery';
import { Doctor } from './doctor';

$(document).ready(function() {
  $('#doctorButton').click(function(event) {
    event.preventDefault();
    let name = $('#doctorName').val();
    $('#doctorName').val("");
    let medicalIssue = $('#healthInput').val();
    $('#healthInput').val("");

    let doctor = new Doctor();
    let promise = doctor.getDoctor(name, medicalIssue);
    promise.then(function(response) {

      let doctorProfile = JSON.parse(response);

      if (doctorProfile.data.length > 0) {
        $('.showDoctors').empty();

        for(let i=0; i<doctorProfile.data.length; i++) {
          $('.showDoctors').append(`<div class= card><b>${doctorProfile.data[i].profile.first_name}
          ${doctorProfile.data[i].profile.last_name}</b><div>
          <li>Name of Practice: ${doctorProfile.data[i].practices[0].name}</li>
          <li>Phone Number: ${doctorProfile.data[i].practices[0].phones[0].number}</li>
          <li>Address: ${doctorProfile.data[i].practices[0].visit_address.street}
          ${doctorProfile.data[i].practices[0].visit_address.city},
          ${doctorProfile.data[i].practices[0].visit_address.state}
          ${doctorProfile.data[i].practices[0].visit_address.zip}</li>
          <li><a href="${doctorProfile.data[i].practices[0].website}">Website</a></li>
          <li>Doctor Accepts new Cliets: ${doctorProfile.data[i].practices[0].accepts_new_patients}</li></ul><br>
          <img id="profilePhoto" src="${doctorProfile.data[i].profile.image_url}">`);
          }
        } else { $('.showDoctors').text('no doctors meet the criteria.');
      }
    });
  });
});
