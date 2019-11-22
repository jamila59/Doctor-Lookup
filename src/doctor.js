export class Doctor {

  getDoctor(name, medicalIssue) {
    return new Promise(function(resolve, reject) {
      let request = new XMLHttpRequest();
      // const url = `https://api.betterdoctor.com/2016-03-01/doctors?name=${name}&query=${medicalIssue}&location=wa-seattle&skip=0&limit=10&user_key=${process.env.API_KEY}`;
      const url = `https://api.betterdoctor.com/2016-03-01/doctors?name=${name}&query=${medicalIssue}&location=wa-seattle&skip=0&limit=10&user_key=872f90d07969b706a5a39f922422b30a`;
      request.onload = function() {
        if (this.status === 200) {
          resolve(request.response);
        } else {
          reject(Error(request.statusText));
        }
      };
      request.open("GET", url, true);
      request.send();
    });
  }
}
