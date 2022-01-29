import React from 'react';
import { Component } from 'react';
import axios from 'axios';
import "./index.css"
import "./table.css"




const intialState = {
  name: "",
  dob: "",
  grade: "",
  division: "",
  gender: "",
  nameValid: "",
  dobValid: "",
  classValid: "",
  divisionValid: "",
  gendervalid: "",
  users: [],
};






class  App extends Component {
 
  
  constructor(props){
    super(props);

    this.state = intialState;
    
  }

  formValidation = () => {
    let nameValid = "";
    let dobValid = "";
    let classValid = "";
    let divisionValid = "";
    let gendervalid = "";

    if (!this.state.name) {
      nameValid = "*name cannot be blank";
    } else if (!this.state.name.match(/^[a-zA-Z\s-, ]+$/)) {
      nameValid = "only letters ";
    }
    if (!this.state.dob) {
      dobValid = "*dob cannot be blank";
    }
    if (!this.state.grade) {
      classValid = "*grade cannot be blank";
    }
    if (!this.state.division) {
      divisionValid = "*division cannot be blank";
    }
    if (!this.state.gender) {
      gendervalid = "select gender";
    }
    if (nameValid || dobValid || classValid || divisionValid || gendervalid) {
      this.setState({
        nameValid,
        dobValid,
        classValid,
        divisionValid,
        gendervalid,
      });
      return false;
    }
    return true;
  };


 


 

  handleNameChange = (event) => {
    this.setState({
      name: event.target.value,
    });
  };
  handleDobChange = (event) => {
    this.setState({
      dob: event.target.value,
    });
  };
  handleClassChange = (event) => {
    this.setState({
      grade: event.target.value,
    });
  };
  handleDivisionChange = (event) => {
    this.setState({
      division: event.target.value,
    });
  };
  handleGenderChange = (event) => {
    this.setState({
      gender: event.target.value,
    });
  };
 
  componentDidMount(){
    axios.get("http://localhost:8080/api/")
    .then((res)=>{
      this.setState({
        users:res.data,
        id:0,
        name:'',
        dob:"",
        gender:'',
        division:'',
        grade:''
      })
    })
  }



  handleSubmit = (event)=>{
  
    event.preventDefault();
    const isValid = this.formValidation();
    if (isValid){
      axios.post("http://localhost:8080/api/",{
        name: this.state.name,
        dob: this.state.dob,
        grade: this.state.grade,
        division: this.state.division,
        gender: this.state.gender
      }).then(()=>{
        this.componentDidMount();
      })
    }else{
      axios.put("http://localhost:8080/api/",{
        name: this.state.name,
        dob: this.state.dob,
        grade: this.state.grade,
        division: this.state.division,
        gender: this.state.gender
      }).then(()=>{
        this.componentDidMount();
      })
    }
  }
 
 
  render(){
    return (
      <div className="container">
        <div className="row">
          <div className="wrapper">
            <form onSubmit={this.handleSubmit}>
              <div className="input-box">
                <label >
                  Student registration
                </label>
              </div>
              <div className="input-box">
                <label className="input-box ">Name</label>
                <input
                  type="text"
                  value={this.state.name}
                  onChange={this.handleNameChange}
                  className="form-control w-30 "
                  id="text1"
                  placeholder="enter name"
                />
              </div>
              <div style={{ fontSize: 12, color: "red" }}>
                {this.state.nameValid}
              </div>
              <div className="input-box">
                <label className="input-box">date of birth</label>
                <input
                  type="date"
                  value={this.state.dob}
                  onChange={this.handleDobChange}
                  
                  id="date1"
                />
              </div>
              <div style={{ fontSize: 12, color: "red" }}>
                {this.state.dobValid}
              </div>
              <div className="input-box">
                <div className="col m-3" style={{ fontSize: 12, color: "red" }}>
                  <label className="form-label text-white">Class</label>
                  <select
                     id="optionList1"
                    selected
                    value={this.state.grade}
                    onChange={this.handleClassChange}
                  >
                    <option> select Class</option>
                    <option value="I">I</option>
                    <option value="II">II</option>
                    <option value="III">III</option>
                    <option value="IV">IV</option>
                    <option value="V">V</option>
                    <option value="VI">VI</option>
                    <option value="VII">VII</option>
                    <option value="VIII">VIII</option>
                    <option value="IX">IX</option>
                    <option value="X">X</option>
                    <option value="XI">XI</option>
                    <option value="XII">XII</option>
                  </select>
                  {this.state.classValid}
                </div>
                <div className="input-box" style={{ fontSize: 12, color: "red" }}>
                  <label className="input-box">Division</label>
                  <select
                    
                    id="optionList2"
                    selected
                    value={this.state.division}
                    onChange={this.handleDivisionChange}
                  >
                    <option> select Division</option>
                    <option value="A">A</option>
                    <option value="B">B</option>
                    <option value="C">C</option>
                  </select>
                  {this.state.divisionValid}
                </div>
              </div>

              <div >
                <label className="input-box">Gender</label>
                <label >
                  <input
                    type="radio"
                    value="Male"
                    checked={this.state.gender === "Male"}
                    onChange={this.handleGenderChange}
                  />
                  Male
                </label>
                <label >
                  <input
                    type="radio"
                    value="FeMale"
                    checked={this.state.gender === "FeMale"}
                    onChange={this.handleGenderChange}
                  />
                  FeMale
                </label>
              </div>
              <div style={{ fontSize: 12, color: "red" }}>
                {this.state.gendervalid}
              </div>
              <div className="input-box">
                <button
                  type="submit"
                  className="input-box"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
          <div className="colum">
            <table>
              <thead>
                <tr>
                  <th>Admission</th>
                  <th> Name </th>
                  <th> DOB </th>
                  <th> class </th>
                  <th> div </th>
                  <th> gender </th>
                </tr>
              </thead>

              <tbody>
                {this.state.users.map((user) => (
                  <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.dob}</td>
                    <td>{user.grade}</td>
                    <td>{user.division}</td>
                    <td>{user.gender}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

