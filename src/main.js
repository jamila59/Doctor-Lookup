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
          $('.showDoctors').append
            
