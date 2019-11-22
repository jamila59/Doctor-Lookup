export class Doctor {
  async getDoctor(){
    try {
      let response = await fetch (`https://api.betterdoctor.com/2016-03-01/doctors?name=${name}&location=wa-seattle&skip=0&limit=15&user_key=872f90d07969b706a5a39f922422b30a`);
      let jsonifiedResponse = await response.json();
      return jsonifiedResponse;
    } catch(error) {
    console.error("There was an error handling your request: " + error.message);
    }
  }
}
