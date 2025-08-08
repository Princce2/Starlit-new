// import React from 'react';
// import { Link } from 'react-router-dom';
// import Logo from './images/logo.png';
// import { useState } from 'react';

// const Admission = () => {

//     const [immunizationFile, setImmunizationFile] = useState(null);

//     const [formData, setFormData] = useState({
//       studentName: '',
//       address: '',
//       dateOfBirth: '',
//       gradeLevel: '',
//       parentName: '',
//       parentContact: '',
//       parentEmail: '',
//       parentAddress: '',
//       emergencyContactName: '',
//       emergencyContactRelation: '',
//       emergencyContactNumber: '',
//       emergencyContactAddress: '',
//     });
  
//     const handleFileChange = (e) => {
//       const file = e.target.files[0];
//       setImmunizationFile(file);
//     };
  
//     const handleSubmit = (e) => {
//       e.preventDefault();
//       const { studentName, address, dateOfBirth, gradeLevel, parentName, parentContact, parentEmail, parentAddress, emergencyContactName, emergencyContactRelation, emergencyContactNumber, emergencyContactAddress } = formData;
//       if (!studentName || !address || !dateOfBirth || !gradeLevel || !parentName || !parentContact || !parentEmail || !parentAddress || !emergencyContactName || !emergencyContactRelation || !emergencyContactNumber || !emergencyContactAddress) {
//         alert('Please fill in all required fields.');
//         return;
//       }
//       if (!immunizationFile) {
//         alert('Please upload the immunization card before submitting.');
//         return;
//       }
//       console.log('Form submitted');
//     };

//     return (
//       <div className="min-h-screen flex justify-center items-start bg-[#dbeafe] py-10 px-4">
//         <div className="bg-white rounded-3xl shadow-lg p-10 w-full max-w-4xl">
//           <div className="flex justify-center mb-8">
//             <img
//               src={Logo}
//               alt="Starlit Academy Logo"
//               className="w-40 h-40 object-contain"
//             />
//           </div>

//           <form className="space-y-6" onSubmit={handleSubmit}>
//             {/* Student Info */}
//             <h2 className="text-xl font-semibold text-gray-700">
//               Student Information
//             </h2>

//             <div>
//               <label className="block text-sm font-medium">
//                 Student's Full Name
//               </label>
//               <input
//                 type="text"
//                 placeholder="Enter Student's Full Name"
//                 className="mt-1 block w-full rounded-md border border-gray-300 p-2 focus:border-blue-500 focus:ring focus:ring-blue-200"
//               />
//             </div>

//             <div>
//               <label className="block text-sm font-medium">Address</label>
//               <input
//                 type="text"
//                 placeholder="Enter Address"
//                 className="mt-1 block w-full rounded-md border border-gray-300 p-2 focus:border-blue-500 focus:ring"
//               />
//             </div>

//             <div>
//               <label className="block text-sm font-medium">Date of Birth</label>
//               <input
//                 type="date"
//                 className="mt-1 block w-full rounded-md border border-gray-300 p-2 focus:border-blue-500 focus:ring"
//               />
//             </div>

//             <div>
//               <label className="block text-sm font-medium">Age</label>
//               <input
//                 type="number"
//                 placeholder="Enter Age"
//                 className="mt-1 block w-full rounded-md border border-gray-300 p-2 focus:border-blue-500 focus:ring"
//               />
//             </div>

//             <div>
//               <label className="block text-sm font-medium">
//                 Proposed Class
//               </label>
//               <input
//                 type="text"
//                 placeholder="Enter Proposed Class"
//                 className="mt-1 block w-full rounded-md border border-gray-300 p-2 focus:border-blue-500 focus:ring"
//               />
//             </div>

//             {/* Guardian/Parent Info */}
//             <h2 className="text-xl font-semibold text-gray-700">
//               Parent / Guardian Information
//             </h2>

//             <div>
//               <label className="block text-sm font-medium">
//                 Full Name of Guardian/Parent
//               </label>
//               <input
//                 type="text"
//                 placeholder="Enter Name of Guardian/Parent"
//                 className="mt-1 block w-full rounded-md border border-gray-300 p-2"
//               />
//             </div>

//             <div>
//               <label className="block text-sm font-medium">Occupation</label>
//               <input
//                 type="text"
//                 placeholder="Enter Occupation"
//                 className="mt-1 block w-full rounded-md border border-gray-300 p-2"
//               />
//             </div>

//             <div>
//               <label className="block text-sm font-medium">Religion</label>
//               <input
//                 type="text"
//                 placeholder="Enter Religion"
//                 className="mt-1 block w-full rounded-md border border-gray-300 p-2"
//               />
//             </div>

//             <div>
//               <label className="block text-sm font-medium">Address</label>
//               <input
//                 type="text"
//                 placeholder="Enter Address"
//                 className="mt-1 block w-full rounded-md border border-gray-300 p-2"
//               />
//             </div>

//             <div>
//               <label className="block text-sm font-medium">Phone Number</label>
//               <input
//                 type="tel"
//                 placeholder="Enter Phone Number"
//                 className="mt-1 block w-full rounded-md border border-gray-300 p-2"
//               />
//             </div>

//             <div>
//               <label className="block text-sm font-medium">Email</label>
//               <input
//                 type="email"
//                 placeholder="Enter Email"
//                 className="mt-1 block w-full rounded-md border border-gray-300 p-2"
//               />
//             </div>

//             <div>
//               <label className="block text-sm font-medium">Date</label>
//               <input
//                 type="text"
//                 defaultValue="13/Jun/2025"
//                 className="mt-1 block w-full rounded-md border border-gray-300 p-2"
//               />
//             </div>

//             {/* Emergency Contacts */}
//             <h2 className="text-xl font-semibold text-gray-700">
//               Emergency Contacts
//             </h2>

//             <div>
//               <label className="block text-sm font-medium">
//                 Emergency Contact Name
//               </label>
//               <input
//                 type="text"
//                 placeholder="Enter Contact Name"
//                 className="mt-1 block w-full rounded-md border border-gray-300 p-2"
//               />
//             </div>

//             <div>
//               <label className="block text-sm font-medium">
//                 Emergency Contact Phone
//               </label>
//               <input
//                 type="tel"
//                 placeholder="Enter Contact Phone"
//                 className="mt-1 block w-full rounded-md border border-gray-300 p-2"
//               />
//             </div>

//             <div>
//               <label className="block text-sm font-medium">
//                 Alternative Emergency Contact Name
//               </label>
//               <input
//                 type="text"
//                 placeholder="Enter Contact Name"
//                 className="mt-1 block w-full rounded-md border border-gray-300 p-2"
//               />
//             </div>

//             <div>
//               <label className="block text-sm font-medium">
//                 Alternative Emergency Contact Phone
//               </label>
//               <input
//                 type="tel"
//                 placeholder="Enter Contact Phone"
//                 className="mt-1 block w-full rounded-md border border-gray-300 p-2"
//               />
//             </div>

//             {/* Authorized Pickup */}
//             <h2 className="text-xl font-semibold text-gray-700">
//               Authorized Pickup
//             </h2>

//             <div>
//               <label className="block text-sm font-medium">
//                 Authorized Person
//               </label>
//               <input
//                 type="text"
//                 placeholder="Enter Contact Name"
//                 className="mt-1 block w-full rounded-md border border-gray-300 p-2"
//               />
//               <input
//                 type="text"
//                 placeholder="Relationship"
//                 className="mt-2 block w-full rounded-md border border-gray-300 p-2"
//               />
//             </div>

//             <div>
//               <label className="block text-sm font-medium">
//                 Alternative Authorized Person
//               </label>
//               <input
//                 type="text"
//                 placeholder="Enter Contact Name"
//                 className="mt-1 block w-full rounded-md border border-gray-300 p-2"
//               />
//               <input
//                 type="text"
//                 placeholder="Relationship"
//                 className="mt-2 block w-full rounded-md border border-gray-300 p-2"
//               />
//             </div>

//             <div>
//               <label className="block text-sm font-medium">
//                 Alternative Authorized Person
//               </label>
//               <input
//                 type="text"
//                 placeholder="Enter Contact Name"
//                 className="mt-1 block w-full rounded-md border border-gray-300 p-2"
//               />
//               <input
//                 type="text"
//                 placeholder="Relationship"
//                 className="mt-2 block w-full rounded-md border border-gray-300 p-2"
//               />
//             </div>

//             {/* Health */}
//             <h2 className="text-xl font-semibold text-gray-700">
//               Health Information
//             </h2>

//             <div>
//               <label className="block text-sm font-medium">
//                 Health Information (Include Allergies)
//               </label>
//               <textarea
//                 placeholder="Specify any health issues or allergies"
//                 className="mt-1 block w-full rounded-md border border-gray-300 p-2 h-24 resize-none"
//               />
//             </div>

//             <div>
//               <label className="block text-sm font-medium">Immunization</label>
//               <p className="text-sm text-gray-500 mt-1">
//                 Please attach a copy of your child/ward's immunization card to
//                 the printout.
//               </p>
//               <input
//                 type="file"
//                 accept="image/*,.pdf"
//                 onChange={handleFileChange}
//                 className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
//               />
//               {immunizationFile && (
//                 <p className="mt-2 text-sm text-green-700">
//                   File selected: {immunizationFile.name}
//                 </p>
//               )}
//             </div>

//             <div>
//               <label className="block text-sm font-medium">Special Needs</label>
//               <textarea
//                 placeholder="Specify any special needs or care your child may need"
//                 className="mt-1 block w-full rounded-md border border-gray-300 p-2 h-20 resize-none"
//               />
//             </div>

//             <div>
//               <label className="block text-sm font-medium">
//                 Additional Information
//               </label>
//               <textarea
//                 placeholder="Please specify any additional information"
//                 className="mt-1 block w-full rounded-md border border-gray-300 p-2 h-20 resize-none"
//               />
//             </div>

//             {/* Verify & Submit */}
//             <div className="flex items-center gap-2">
//               <input type="checkbox" id="verify" className="w-4 h-4" />
//               <label htmlFor="verify" className="text-sm text-gray-700">
//                 I'm a human (verify)
//               </label>
//             </div>

//             <button
//               type="submit"
//               className="mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md shadow-md transition"
//               onSubmit={handleSubmit}
//             >
//               Submit
//             </button>
//           </form>
//         </div>
//       </div>
//     );
// }

// export default Admission;


import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "./images/logo.png";

const Admission = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [immunizationFile, setImmunizationFile] = useState(null);
  const [formData, setFormData] = useState({
    studentName: "",
    address: "",
    dateOfBirth: "",
    age: "",
    gradeLevel: "",
    parentName: "",
    parentOccupation: "",
    parentReligion: "",
    parentAddress: "",
    parentContact: "",
    parentEmail: "",
    date: "13/Jun/2025",
    emergencyContactName: "",
    emergencyContactPhone: "",
    altEmergencyContactName: "",
    altEmergencyContactPhone: "",
    authorizedPerson: "",
    authorizedPersonRelation: "",
    altAuthorizedPerson1: "",
    altAuthorizedPerson1Relation: "",
    altAuthorizedPerson2: "",
    altAuthorizedPerson2Relation: "",
    healthInfo: "",
    specialNeeds: "",
    additionalInfo: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setImmunizationFile(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const requiredFields = [
      "studentName",
      "address",
      "dateOfBirth",
      "age",
      "gradeLevel",
      "parentName",
      "parentOccupation",
      "parentReligion",
      "parentAddress",
      "parentContact",
      "parentEmail",
      "emergencyContactName",
      "emergencyContactPhone",
    ];
    const missingFields = requiredFields.filter((field) => !formData[field]);
    if (missingFields.length > 0) {
      alert("Please fill in all required fields.");
      return;
    }
    if (!immunizationFile) {
      alert("Please upload the immunization card before submitting.");
      return;
    }
    console.log("Form submitted:", formData, immunizationFile);
  };

  const nextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    setCurrentStep(currentStep - 1);
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <h2 className="text-xl font-semibold text-gray-700">
              Student Information
            </h2>
            <div>
              <label className="block text-sm font-medium">
                Student's Full Name
              </label>
              <input
                type="text"
                name="studentName"
                value={formData.studentName}
                onChange={handleInputChange}
                placeholder="Enter Student's Full Name"
                className="mt-1 block w-full rounded-md border border-gray-300 p-2 focus:border-blue-500 focus:ring focus:ring-blue-200"
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Address</label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                placeholder="Enter Address"
                className="mt-1 block w-full rounded-md border border-gray-300 p-2 focus:border-blue-500 focus:ring"
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Date of Birth</label>
              <input
                type="date"
                name="dateOfBirth"
                value={formData.dateOfBirth}
                onChange={handleInputChange}
                className="mt-1 block w-full rounded-md border border-gray-300 p-2 focus:border-blue-500 focus:ring"
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Age</label>
              <input
                type="number"
                name="age"
                value={formData.age}
                onChange={handleInputChange}
                placeholder="Enter Age"
                className="mt-1 block w-full rounded-md border border-gray-300 p-2 focus:border-blue-500 focus:ring"
              />
            </div>
            <div>
              <label className="block text-sm font-medium">
                Proposed Class
              </label>
              <input
                type="text"
                name="gradeLevel"
                value={formData.gradeLevel}
                onChange={handleInputChange}
                placeholder="Enter Proposed Class"
                className="mt-1 block w-full rounded-md border border-gray-300 p-2 focus:border-blue-500 focus:ring"
              />
            </div>
            <div className="flex justify-end">
              <button
                type="button"
                onClick={nextStep}
                className="mt-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md shadow-md transition"
              >
                Next
              </button>
            </div>
          </div>
        );
      case 2:
        return (
          <div className="space-y-6">
            <h2 className="text-xl font-semibold text-gray-700">
              Parent / Guardian Information
            </h2>
            <div>
              <label className="block text-sm font-medium">
                Full Name of Guardian/Parent
              </label>
              <input
                type="text"
                name="parentName"
                value={formData.parentName}
                onChange={handleInputChange}
                placeholder="Enter Name of Guardian/Parent"
                className="mt-1 block w-full rounded-md border border-gray-300 p-2"
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Occupation</label>
              <input
                type="text"
                name="parentOccupation"
                value={formData.parentOccupation}
                onChange={handleInputChange}
                placeholder="Enter Occupation"
                className="mt-1 block w-full rounded-md border border-gray-300 p-2"
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Religion</label>
              <input
                type="text"
                name="parentReligion"
                value={formData.parentReligion}
                onChange={handleInputChange}
                placeholder="Enter Religion"
                className="mt-1 block w-full rounded-md border border-gray-300 p-2"
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Address</label>
              <input
                type="text"
                name="parentAddress"
                value={formData.parentAddress}
                onChange={handleInputChange}
                placeholder="Enter Address"
                className="mt-1 block w-full rounded-md border border-gray-300 p-2"
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Phone Number</label>
              <input
                type="tel"
                name="parentContact"
                value={formData.parentContact}
                onChange={handleInputChange}
                placeholder="Enter Phone Number"
                className="mt-1 block w-full rounded-md border border-gray-300 p-2"
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Email</label>
              <input
                type="email"
                name="parentEmail"
                value={formData.parentEmail}
                onChange={handleInputChange}
                placeholder="Enter Email"
                className="mt-1 block w-full rounded-md border border-gray-300 p-2"
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Date</label>
              <input
                type="text"
                name="date"
                value={formData.date}
                onChange={handleInputChange}
                className="mt-1 block w-full rounded-md border border-gray-300 p-2"
              />
            </div>
            <div className="flex justify-between">
              <button
                type="button"
                onClick={prevStep}
                className="mt-4 bg-gray-600 hover:bg-gray-700 text-white font-semibold py-2 px-4 rounded-md shadow-md transition"
              >
                Previous
              </button>
              <button
                type="button"
                onClick={nextStep}
                className="mt-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md shadow-md transition"
              >
                Next
              </button>
            </div>
          </div>
        );
      case 3:
        return (
          <div className="space-y-6">
            <h2 className="text-xl font-semibold text-gray-700">
              Emergency Contacts
            </h2>
            <div>
              <label className="block text-sm font-medium">
                Emergency Contact Name
              </label>
              <input
                type="text"
                name="emergencyContactName"
                value={formData.emergencyContactName}
                onChange={handleInputChange}
                placeholder="Enter Contact Name"
                className="mt-1 block w-full rounded-md border border-gray-300 p-2"
              />
            </div>
            <div>
              <label className="block text-sm font-medium">
                Emergency Contact Phone
              </label>
              <input
                type="tel"
                name="emergencyContactPhone"
                value={formData.emergencyContactPhone}
                onChange={handleInputChange}
                placeholder="Enter Contact Phone"
                className="mt-1 block w-full rounded-md border border-gray-300 p-2"
              />
            </div>
            <div>
              <label className="block text-sm font-medium">
                Alternative Emergency Contact Name
              </label>
              <input
                type="text"
                name="altEmergencyContactName"
                value={formData.altEmergencyContactName}
                onChange={handleInputChange}
                placeholder="Enter Contact Name"
                className="mt-1 block w-full rounded-md border border-gray-300 p-2"
              />
            </div>
            <div>
              <label className="block text-sm font-medium">
                Alternative Emergency Contact Phone
              </label>
              <input
                type="tel"
                name="altEmergencyContactPhone"
                value={formData.altEmergencyContactPhone}
                onChange={handleInputChange}
                placeholder="Enter Contact Phone"
                className="mt-1 block w-full rounded-md border border-gray-300 p-2"
              />
            </div>
            <div className="flex justify-between">
              <button
                type="button"
                onClick={prevStep}
                className="mt-4 bg-gray-600 hover:bg-gray-700 text-white font-semibold py-2 px-4 rounded-md shadow-md transition"
              >
                Previous
              </button>
              <button
                type="button"
                onClick={nextStep}
                className="mt-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md shadow-md transition"
              >
                Next
              </button>
            </div>
          </div>
        );
      case 4:
        return (
          <div className="space-y-6">
            <h2 className="text-xl font-semibold text-gray-700">
              Authorized Pickup
            </h2>
            <div>
              <label className="block text-sm font-medium">
                Authorized Person
              </label>
              <input
                type="text"
                name="authorizedPerson"
                value={formData.authorizedPerson}
                onChange={handleInputChange}
                placeholder="Enter Contact Name"
                className="mt-1 block w-full rounded-md border border-gray-300 p-2"
              />
              <input
                type="text"
                name="authorizedPersonRelation"
                value={formData.authorizedPersonRelation}
                onChange={handleInputChange}
                placeholder="Relationship"
                className="mt-2 block w-full rounded-md border border-gray-300 p-2"
              />
            </div>
            <div>
              <label className="block text-sm font-medium">
                Alternative Authorized Person
              </label>
              <input
                type="text"
                name="altAuthorizedPerson1"
                value={formData.altAuthorizedPerson1}
                onChange={handleInputChange}
                placeholder="Enter Contact Name"
                className="mt-1 block w-full rounded-md border border-gray-300 p-2"
              />
              <input
                type="text"
                name="altAuthorizedPerson1Relation"
                value={formData.altAuthorizedPerson1Relation}
                onChange={handleInputChange}
                placeholder="Relationship"
                className="mt-2 block w-full rounded-md border border-gray-300 p-2"
              />
            </div>
            <div>
              <label className="block text-sm font-medium">
                Alternative Authorized Person
              </label>
              <input
                type="text"
                name="altAuthorizedPerson2"
                value={formData.altAuthorizedPerson2}
                onChange={handleInputChange}
                placeholder="Enter Contact Name"
                className="mt-1 block w-full rounded-md border border-gray-300 p-2"
              />
              <input
                type="text"
                name="altAuthorizedPerson2Relation"
                value={formData.altAuthorizedPerson2Relation}
                onChange={handleInputChange}
                placeholder="Relationship"
                className="mt-2 block w-full rounded-md border border-gray-300 p-2"
              />
            </div>
            <div className="flex justify-between">
              <button
                type="button"
                onClick={prevStep}
                className="mt-4 bg-gray-600 hover:bg-gray-700 text-white font-semibold py-2 px-4 rounded-md shadow-md transition"
              >
                Previous
              </button>
              <button
                type="button"
                onClick={nextStep}
                className="mt-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md shadow-md transition"
              >
                Next
              </button>
            </div>
          </div>
        );
      case 5:
        return (
          <div className="space-y-6">
            <h2 className="text-xl font-semibold text-gray-700">
              Health Information
            </h2>
            <div>
              <label className="block text-sm font-medium">
                Health Information (Include Allergies)
              </label>
              <textarea
                name="healthInfo"
                value={formData.healthInfo}
                onChange={handleInputChange}
                placeholder="Specify any health issues or allergies"
                className="mt-1 block w-full rounded-md border border-gray-300 p-2 h-24 resize-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Immunization</label>
              <p className="text-sm text-gray-500 mt-1">
                Please attach a copy of your child/ward's immunization card to
                the printout.
              </p>
              <input
                type="file"
                accept="image/*,.pdf"
                onChange={handleFileChange}
                className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
              />
              {immunizationFile && (
                <p className="mt-2 text-sm text-green-700">
                  File selected: {immunizationFile.name}
                </p>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium">Special Needs</label>
              <textarea
                name="specialNeeds"
                value={formData.specialNeeds}
                onChange={handleInputChange}
                placeholder="Specify any special needs or care your child may need"
                className="mt-1 block w-full rounded-md border border-gray-300 p-2 h-20 resize-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium">
                Additional Information
              </label>
              <textarea
                name="additionalInfo"
                value={formData.additionalInfo}
                onChange={handleInputChange}
                placeholder="Please specify any additional information"
                className="mt-1 block w-full rounded-md border border-gray-300 p-2 h-20 resize-none"
              />
            </div>
            <div className="flex items-center gap-2">
              <input type="checkbox" id="verify" className="w-4 h-4" />
              <label htmlFor="verify" className="text-sm text-gray-700">
                I'm a human (verify)
              </label>
            </div>
            <div className="flex justify-between">
              <button
                type="button"
                onClick={prevStep}
                className="mt-4 bg-gray-600 hover:bg-gray-700 text-white font-semibold py-2 px-4 rounded-md shadow-md transition"
              >
                Previous
              </button>
              <button
                type="submit"
                onClick={handleSubmit}
                className="mt-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md shadow-md transition"
              >
                Submit
              </button>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-start bg-[#dbeafe] py-10 px-4">
      <div className="bg-white rounded-3xl shadow-lg p-10 w-full max-w-4xl">
        <div className="flex justify-center mb-8">
          <img
            src={Logo}
            alt="Starlit Academy Logo"
            className="w-40 h-40 object-contain"
          />
        </div>
        <form className="space-y-6" onSubmit={handleSubmit}>
          {renderStep()}
        </form>
      </div>
    </div>
  );
};

export default Admission;
