import { Component } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent {
  employeeDetails:any=[
    {
      empId:"101",
      empName:"Manikandan",
      designation:"Developer",
      dateOfBirth:"05/10/2001",
      dateOfJoining:"18/10/2021",
      gender:"Male",
      address:"Salem",
      salary:"50000"
    },
    {
      empId:"102",
      empName:"Dhivya",
      designation:"Analyst",
      dateOfBirth:"15/07/1998",
      dateOfJoining:"01/10/2019",
      gender:"Female",
      address:"Bangalore",
      salary:"60000"
    },
    {
      empId:"103",
      empName:"Vinoth",
      designation:"TL",
      dateOfBirth:"15/02/1996",
      dateOfJoining:"15/08/2007",
      gender:"Male",
      address:"Bangalore",
      salary:"60000"
    },
    {
      empId:"104",
      empName:"Sathish kumar S",
      designation:"Front end developer",
      dateOfBirth:"02/06/2000",
      dateOfJoining:"08/12/2021",
      gender:"Male",
      address:"Salem",
      salary:"65000"
    },
    {
      empId:"105",
      empName:"Mythili T",
      designation:"Data Engineer",
      dateOfBirth:"16/07/1996",
      dateOfJoining:"07/05/2006",
      gender:"Female",
      address:"Erode",
      salary:"82000"
    },
    {
      empId:"106 ",
      empName:"Ravi kumar V",
      designation:"Data Scientist",
      dateOfBirth:"15/07/1997",
      dateOfJoining:"05/02/2010",
      gender:"Male",
      address:"Nellai",
      salary:"60000"
    },
    {
      empId:"107",
      empName:"Subramani M",
      designation:"Developer",
      dateOfBirth:"11/07/1990",
      dateOfJoining:"05/02/2021",
      gender:"Male",
      address:"Madurai",
      salary:"100000"
    },
    {
      empId:"108 ",
      empName:"Ravi",
      designation:"Senior Developer",
      dateOfBirth:"15/07/1978",
      dateOfJoining:"05/07/2001",
      gender:"Male",
      address:"Coimbatore",
      salary:"80000"
    },
    {
      empId:"109",
      empName:"Vimala K",
      designation:"Python Developer",
      dateOfBirth:"19/07/1997",
      dateOfJoining:"05/02/2010",
      gender:"Male",
      address:"Tiruchi",
      salary:"70000"
    },
    {
      empId:"110",
      empName:"Ravi kumar V",
      designation:"Data Scientist",
      dateOfBirth:"15/07/1989",
      dateOfJoining:"05/02/2007",
      gender:"Male",
      address:"Erode",
      salary:"90000"
    }
  ]


showSalaryColumn: boolean = true;

toggleSalaryColumn() {
    this.showSalaryColumn = !this.showSalaryColumn;
  }
}

