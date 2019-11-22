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
            $('.showDoctors').append(
              `${doctorProfile.data[i].profile.first_name}
              ${doctorProfile.data[i].profile.last_name}
              <li>Name of Practice: ${doctorProfile.data[i].practices[0].name}</li>
              <li>Phone Number: ${doctorProfile.data[i].practices[0].phones[0].number}</li>
              <li>Address: ${doctorProfile.data[i].practices[0].visit_address.street}
          }
        } else { $('.showDoctors').text('no doctors meet the criteria.');
      }
    })
  });
});
