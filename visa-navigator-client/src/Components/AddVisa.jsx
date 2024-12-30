import React from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Swal from 'sweetalert2'


const AddVisa = () => {
  const handleSubmitbtn = (event) => {
    event.preventDefault();
    const form = event.target;
    const country = form["radio-flag"].value;
    console.log(country.split("<"));
    const visa = form["radio-visaType"].value;
    const processTime = form["radio-time"].value;
    const reqdDocuments = form["radio-reqdocs"].value;
    const explain = form["radio-explain"].value;
    const userAge = form.age.value;
    const userFee = form.fee.value;
    const visaExpDuration = form["radio-duration"].value;
    const agree = form["radio-yes"].value;
    const applicationMethod = form["radio-application"].value;
    const addvisa = {
      country,
      visa,
      processTime,
      reqdDocuments,
      explain,
      userAge,
      userFee,
      visaExpDuration,
      agree,
      applicationMethod,
    };
    console.log(addvisa);
    fetch("http://localhost:3000/visas", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(addvisa),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: 'Success!',
            text: 'Visa Added Successfully',
            icon: 'success',
            confirmButtonText: 'Cool'
          })
          form.reset();
        }
      });
      

    console.log(explain);

    // const country = form.name.value;
    // const country = form.name.value;
  };
  return (
    <div className="card bg-none  backdrop-blur-sm w-full shrink-0 shadow-2xl">
      <form onSubmit={handleSubmitbtn} className="card-body">
        <div className="  bg-none form-control w-full  mb-8  shadow-2xl">
          <div className="  md:flex md:flex-col     space-y-28">
            <div className="flex flex-col  mx-auto gap-4 ">
              <div className="dropdown md:mx-auto dropdown-hover">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn  btn-primary m-1 font-extrabold text-xl"
                >
                  Choose The Country You want to visit
                </div>
                <ul
                  tabIndex={0}
                  className="dropdown-content menu p-2 shadow bg-base-100 rounded-lg z-10 w-52"
                >
                  <li>
                    <a>
                      <img
                        className="max-w-11"
                        src="https://i.ibb.co.com/12Zg0jJ/flag-square-500.png"
                        alt=""
                      />
                      <span class="label-text">Germany</span>
                      <input
                        type="radio"
                        value="https://i.ibb.co.com/12Zg0jJ/flag-square-500.png"
                        name="radio-flag"
                        required
                        className="checkbox checkbox-success"
                        defaultChecked
                      />
                    </a>
                  </li>
                  <li>
                    <a>
                      <img
                        className="max-w-11"
                        src="https://i.ibb.co.com/drDQg0S/flag-square-500-1.png"
                        alt=""
                      />
                      <span class="label-text">Italy</span>
                      <input
                        type="radio"
                        name="radio-flag"
                        value="https://i.ibb.co.com/drDQg0S/flag-square-500-1.png"
                        className="checkbox checkbox-success"
                        defaultChecked
                      />
                    </a>
                  </li>
                  <li>
                    <a>
                      <img
                        className="max-w-11"
                        src="https://i.ibb.co.com/WF2dZQj/flag-square-500-2.png"
                        alt=""
                      />
                      <span class="label-text">Spain</span>
                      <input
                        type="radio"
                        value="https://i.ibb.co.com/WF2dZQj/flag-square-500-2.png"
                        name="radio-flag"
                        className="checkbox checkbox-success"
                        defaultChecked
                      />
                    </a>
                  </li>
                  <li>
                    <a>
                      <img
                        className="max-w-11"
                        src="https://i.ibb.co.com/DbF95sY/flag-square-500-3.png"
                        alt=""
                      />
                      <span class="label-text">ENGLAND</span>
                      <input
                        type="radio"
                        value="https://i.ibb.co.com/DbF95sY/flag-square-500-3.png"
                        name="radio-flag"
                        className="checkbox checkbox-success"
                        defaultChecked
                      />
                    </a>
                  </li>
                  <li>
                    <a>
                      <img
                        className="max-w-11"
                        src="https://i.ibb.co.com/yXY2Shn/flag-square-500-4.png"
                        alt=""
                      />
                      <span class="label-text">Australia</span>
                      <input
                        type="radio"
                        value="https://i.ibb.co.com/yXY2Shn/flag-square-500-4.png"
                        name="radio-flag"
                        className="checkbox checkbox-success"
                        defaultChecked
                      />
                    </a>
                  </li>
                  <li>
                    <a>
                      <img
                        className="max-w-11"
                        src="https://i.ibb.co.com/hyz2qGN/flag-square-500-5.png"
                        alt=""
                      />
                      <span class="label-text">Portugal</span>
                      <input
                        type="radio"
                        value="https://i.ibb.co.com/hyz2qGN/flag-square-500-5.png"
                        name="radio-flag"
                        className="checkbox checkbox-success"
                        defaultChecked
                      />
                    </a>
                  </li>
                  <li>
                    <a>
                      <img
                        className="max-w-11"
                        src="https://i.ibb.co.com/yPHfsYc/flag-square-500-6.png"
                        alt=""
                      />
                      <p>New-Zealand</p>
                      <input
                        type="radio"
                        value="https://i.ibb.co.com/yPHfsYc/flag-square-500-6.png"
                        name="radio-flag"
                        className="checkbox checkbox-success"
                        defaultChecked
                      />
                    </a>
                  </li>
                  <li>
                    <a>
                      <img
                        className="max-w-11"
                        src="https://i.ibb.co.com/3CRFtxq/flag-square-500-7.png"
                        alt=""
                      />
                      <p>Bangladesh</p>
                      <input
                        type="radio"
                        value="https://i.ibb.co.com/3CRFtxq/flag-square-500-7.png"
                        name="radio-flag"
                        className="checkbox checkbox-success"
                        defaultChecked
                      />
                    </a>
                  </li>
                </ul>
              </div>
              <div className="dropdown md:mx-auto  dropdown-hover">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn m-1 font-extrabold text-xl"
                >
                  Visa Type
                </div>
                <ul
                  tabIndex={0}
                  className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
                >
                  <li>
                    <a>
                      <span className="label-text">Tourist Visa</span>
                      <input
                        type="radio"
                        value="Tourist Visa"
                        name="radio-visaType"
                        className="checkbox checkbox-success"
                        defaultChecked
                      />
                    </a>
                  </li>
                  <li>
                    <a>
                      <span className="label-text">Student Visa</span>
                      <input
                        type="radio"
                        name="radio-visaType"
                        value="Student Visa"
                        className="checkbox checkbox-success"
                        defaultChecked
                      />
                    </a>
                  </li>
                  <li>
                    <a>
                      <span className="label-text">Official Visa</span>
                      <input
                        type="radio"
                        name="radio-visaType"
                        value="Official Visa"
                        className="checkbox checkbox-success"
                        defaultChecked
                      />
                    </a>
                  </li>
                </ul>
              </div>
              <div className="dropdown md:mx-auto dropdown-hover">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn m-1 font-extrabold text-xl"
                >
                  Processing Time
                </div>
                <ul
                  tabIndex={0}
                  className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
                >
                  <li>
                    <a>
                      <span className="label-text">18 - 32 MONTHS</span>
                      <input
                        type="radio"
                        value="18 - 32 MONTHS"
                        name="radio-time"
                        className="checkbox checkbox-success"
                        defaultChecked
                      />
                    </a>
                  </li>
                  <li>
                    <a>
                      <span className="label-text">5 YEARS</span>
                      <input
                        type="radio"
                        value="5 YEARS"
                        name="radio-time"
                        className="checkbox checkbox-success"
                        defaultChecked
                      />
                    </a>
                  </li>
                  <li>
                    <a>
                      <span className="label-text">10 YEARS +</span>
                      <input
                        type="radio"
                        value="10 YEARS +"
                        name="radio-time"
                        className="checkbox checkbox-success"
                        defaultChecked
                      />
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="md:flex flex-col gap-10  md:items-center">
              <div className="dropdown max-w-52 dropdown-hover md:mx-auto">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn m-1 font-extrabold text-xl"
                >
                  Required_documents
                </div>
                <ul
                  tabIndex={0}
                  className="dropdown-content  menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
                >
                  <li>
                    <a className="flex gap-9">
                      <span className="label-text">Valid passport</span>
                      <input
                        type="radio"
                        value="Valid passport"
                        name="radio-reqdocs"
                        className="checkbox checkbox-success"
                        defaultChecked
                      />
                    </a>
                  </li>
                  <li>
                    <a>
                      <span className="label-text">Visa application form</span>
                      <input
                        type="radio"
                        value="Visa application form"
                        name="radio-reqdocs"
                        className="checkbox checkbox-success"
                        defaultChecked
                      />
                    </a>
                  </li>
                  <li>
                    <a>
                      <span className="label-text">
                        Recent passport-sized photograph
                      </span>
                      <input
                        type="radio"
                        value="Recent passport-sized photograph"
                        name="radio-reqdocs"
                        className="checkbox checkbox-success"
                        defaultChecked
                      />
                    </a>
                  </li>
                </ul>
              </div>

              <textarea
                placeholder="Please explain in details why you want to apply for Visa"
                name="radio-explain"
                required
                className="textarea textarea-bordered textarea-md w-full max-w-xs"
              ></textarea>
              <div className="flex gap-6">
                <input className="bg-base-300 h-[50px] rounded-xl text-center"
                  type="number"
                  placeholder="Age"
                  required
                  name="age"
                  id=""
                />
                <input className="bg-base-300 rounded-3xl text-center"
                  type="number"
                  placeholder="Fee"
                  required
                  name="fee"
                  id=""
                />
              </div>
              <div className="dropdown md:mx-auto dropdown-hover">
                <div tabIndex={0} role="button" className="btn m-1">
                  Visa Expire Duration
                </div>
                <ul
                  tabIndex={0}
                  className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow gap-6"
                >
                  <li>
                    <a>
                      <span className="label-text">3 months</span>
                      <input
                        type="radio"
                        value="3 months"
                        name="radio-duration"
                        className="checkbox checkbox-success"
                        defaultChecked
                      />
                    </a>
                  </li>
                  <li>
                    <a>
                      <span className="label-text">1 YEAR</span>
                      <input
                        type="radio"
                        value="1 YEAR"
                        name="radio-duration"
                        className="checkbox checkbox-success"
                        defaultChecked
                      />
                    </a>
                  </li>
                  <li>
                    <a>
                      <span className="label-text">2 YEARS +</span>
                      <input
                        type="radio"
                        value="2 YEARS +"
                        name="radio-duration"
                        className="checkbox checkbox-success"
                        defaultChecked
                      />
                    </a>
                  </li>
                  <li>
                    <a>
                      <span className="label-text">5 YEARS +</span>
                      <input
                        type="radio"
                        value="5 YEARS +"
                        name="radio-duration"
                        className="checkbox checkbox-success"
                        defaultChecked
                      />
                    </a>
                  </li>
                  <li>
                    <a>
                      <span className="label-text">10 YEARS +</span>
                      <input
                        type="radio"
                        value="10 YEARS +"
                        name="radio-duration"
                        className="checkbox checkbox-success"
                        defaultChecked
                      />
                    </a>
                  </li>
                </ul>
              </div>
              <div className="dropdown dropdown-hover">
                <div tabIndex={0} role="button" className="btn m-1">
                  Visa Application Proceduce If You Completed Please click to
                  complete
                </div>
                <ul
                  tabIndex={0}
                  className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
                >
                  <li>
                    <a>
                      <span className="label-text">
                        <span className="font-extrabold ">
                          Determine Visa Type
                        </span>
                        : Identify the type of visa (tourist, work, study, etc.)
                        based on your purpose.
                      </span>
                      <input
                        type="checkbox"
                        className="checkbox"
                        disabled
                        defaultChecked
                      />
                    </a>
                  </li>
                  <li>
                    <a>
                      <span className="label-text">
                        <span className="font-extrabold ">
                          Check Requirements
                        </span>
                        : Visit the official embassy/consulate website for
                        specific requirements.
                      </span>
                      <input
                        type="checkbox"
                        className="checkbox"
                        disabled
                        defaultChecked
                      />
                    </a>
                  </li>
                  <li>
                    <a>
                      <span className="label-text">
                        <span className="font-extrabold ">
                          Complete Application Form
                        </span>
                        : Fill out the visa application form online or offline.
                      </span>
                      <input
                        type="checkbox"
                        className="checkbox"
                        disabled
                        defaultChecked
                      />
                    </a>
                  </li>
                  <li>
                    <a>
                      <span className="label-text">
                        <span className="font-extrabold ">
                          Collect Documents
                        </span>
                        : Gather required documents, e.g., passport, photo,
                        financial proof, invitation letter.
                      </span>
                      <input
                        type="checkbox"
                        className="checkbox"
                        disabled
                        defaultChecked
                      />
                    </a>
                  </li>
                  <li>
                    <a>
                      <span className="label-text">
                        <span className="font-extrabold ">
                          Collect Documents
                        </span>
                        : Gather required documents, e.g., passport, photo,
                        financial proof, invitation letter.
                      </span>
                      <input
                        type="checkbox"
                        className="checkbox"
                        disabled
                        defaultChecked
                      />
                    </a>
                  </li>
                  <li>
                    <a>
                      <span className="label-text">
                        <span className="font-extrabold ">
                          Pay Application Fee
                        </span>
                        : Pay the visa fee as instructed (online or in-person).
                      </span>
                      <input
                        type="checkbox"
                        className="checkbox"
                        disabled
                        defaultChecked
                      />
                    </a>
                  </li>
                  <li>
                    <a>
                      <span className="label-text">
                        <span className="font-extrabold ">
                          Book Appointment
                        </span>
                        : Schedule an interview or biometrics appointment, if
                        required.
                      </span>
                      <input
                        type="checkbox"
                        className="checkbox"
                        disabled
                        defaultChecked
                      />
                    </a>
                  </li>
                  <li>
                    <a>
                      <span className="label-text">
                        <span className="font-extrabold ">
                          Attend Interview
                        </span>
                        : Appear at the embassy/visa center with documents
                      </span>
                      <input
                        type="checkbox"
                        className="checkbox"
                        disabled
                        defaultChecked
                      />
                    </a>
                  </li>
                  <li>
                    <a>
                      <span className="label-text">
                        <span className="font-extrabold ">
                          Submit Biometrics
                        </span>
                        : Provide fingerprints/photos (if applicable).
                      </span>
                      <input
                        type="checkbox"
                        className="checkbox"
                        disabled
                        defaultChecked
                      />
                    </a>
                  </li>
                  <li>
                    <a>
                      <span className="label-text">
                        <span className="font-extrabold ">Track Status</span>:
                        Monitor application status online or via embassy
                        contact.
                      </span>
                      <input
                        type="checkbox"
                        className="checkbox"
                        disabled
                        defaultChecked
                      />
                    </a>
                  </li>
                </ul>
              </div>
              <div className="dropdown dropdown-hover">
                <div tabIndex={0} role="button" className="btn m-1">
                  If Tou Completed All Visa application Procdures click Yes
                  otherwise click NO
                </div>
                <ul
                  tabIndex={0}
                  className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
                >
                  <li>
                    <a>
                      <span className="label-text">Yes</span>
                      <input
                        type="radio"
                        value="Yes"
                        name="radio-yes"
                        className="radio checked:bg-red-500"
                        defaultChecked
                      />
                    </a>
                  </li>
                  <li>
                    <a>
                      <span className="label-text">No</span>
                      <input
                        type="radio"
                        value="No"
                        name="radio-yes"
                        className="radio checked:bg-red-500"
                        defaultChecked
                      />
                    </a>
                  </li>
                </ul>
              </div>
              <div className="dropdown dropdown-hover">
                <div tabIndex={0} role="button" className="btn m-1">
                  Application Method
                </div>
                <ul
                  tabIndex={0}
                  className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
                >
                  <li>
                    <a>
                      <span className="label-text">Online Application</span>
                      <input
                        type="radio"
                        value="Online Application"
                        name="radio-application"
                        className="checkbox checkbox-success"
                        defaultChecked
                      />
                    </a>
                  </li>
                  <li>
                    <a>
                      <span className="label-text">Agent OR consultancy</span>
                      <input
                        type="radio"
                        value="Agent OR consultancy"
                        name="radio-application"
                        className="checkbox checkbox-success"
                        defaultChecked
                      />
                    </a>
                  </li>
                  <li>
                    <a>
                      <span className="label-text">Referral System</span>
                      <input
                        type="radio"
                        value="Referral System"
                        name="radio-application"
                        className="checkbox checkbox-success"
                        defaultChecked
                      />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <input
            className="btn btn-success mx-auto w-[300px]  mb-8 font-extrabold text-2xl"
            type="submit"
            value="Submit"
          />
        </div>
      </form>
      {/* <ToastContainer /> */}
    </div>
  );
};

export default AddVisa;
