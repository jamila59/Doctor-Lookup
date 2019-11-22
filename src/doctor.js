export class Doctor {
  async getDoctor(){
      let response = await fetch (`https://api.betterdoctor.com/2016-03-01/doctors?name=john&query=heart&location=wa-seattle&skip=0&user_key=872f90d07969b706a5a39f922422b30a`);
      let jsonifiedResponse = await response.json();
      return jsonifiedResponse;
    }
