"use client"
import React, { useState, useCallback } from 'react';
import emailjs from 'emailjs-com';

const Newsletter: React.FC=()=> {
  const [statusMessage, setStatusMessage] = useState<string>(''); // Displays status messages to the user
  const handleSubmit = async (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    console.log("handleSubmit");
    event.preventDefault();
    const from_name = (document.getElementById("from_name") as HTMLInputElement).value;
    const phone_number = (document.getElementById("phone_number") as HTMLInputElement).value;
    const restaurant = (document.getElementById("restaurant") as HTMLInputElement).value;

    // const response = await fetch("/api/hello", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({ from_name, phone_number, restaurant }),
    // });
    // const responseData = await response.json();
    // if (response.status === 201) {
    //   setStatusMessage("Thanks for subscribing!");
    // } else {
      
    //   setStatusMessage(responseData.message);
    // }

    emailjs.init("Y_PSO_InvSgCPh4BB");
    var templateParams = {
        from_name: from_name,
        phone_number: phone_number,
        restaurant: restaurant
    };
    try {
      emailjs.send('service-tara', 'template_l3tr7fy', templateParams)
        .then(function(response) {
          console.log('SUCCESS!', response.status, response.text);
          setStatusMessage("Thanks for subscribing!");
        }, function(error) {
          console.log('FAILED...', error);
          setStatusMessage("Sorry");;
        });
      
    } catch (err) {
        console.log(err);
        setStatusMessage("Sorry 2");;
    }
    // set id statusMessage to display
    (document.getElementById("statusMessage") as HTMLElement).style.display = "block";
  }
  
  return (
    <section id="demo">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* CTA box */}
        <div className="relative bg-purple-600 py-10 px-8 md:py-16 md:px-12" data-aos="fade-up">

          {/* Background illustration */}
          <div className="absolute right-0 top-0 -ml-40 pointer-events-none" aria-hidden="true">
          </div>

          <div className="relative flex flex-col lg:flex-row justify-between items-center">

            {/* CTA content */}
            <div className="mb-6 lg:mr-16 lg:mb-0 text-center lg:text-left lg:w-1/2">
              <h3 className="h3 text-white mb-2">Get a demo!</h3>
              <p className="text-purple-200 text-lg">We'll come to your restaurant!</p>
            </div>

            {/* CTA form */}
            <form className="w-full lg:w-1/2">
              <div className="flex flex-col sm:flex-col justify-center max-w-xs mx-auto sm:max-w-md lg:max-w-none">
                <input type="text" className="w-full appearance-none bg-purple-700 border border-purple-500 focus:border-purple-300 rounded-sm px-4 py-3 mb-2 sm:mb-2 sm:mr-2 text-white placeholder-purple-400" placeholder="Your name" id="from_name" aria-label="Your name" />
                <input type="tel" className="w-full appearance-none bg-purple-700 border border-purple-500 focus:border-purple-300 rounded-sm px-4 py-3 mb-2 sm:mb-2 sm:mr-2 text-white placeholder-purple-400" placeholder="Phone number" id="phone_number" aria-label="Phone number" />
                <input type="text" className="w-full appearance-none bg-purple-700 border border-purple-500 focus:border-purple-300 rounded-sm px-4 py-3 mb-2 sm:mb-2 sm:mr-2 text-white placeholder-purple-400" placeholder="Restaurant name" id="restaurant" aria-label="Restaurant name" />
                
              </div>
              <button type="button" onClick={handleSubmit} className="btn text-purple-600 bg-purple-100 hover:bg-white shadow">Let's talk!</button>
              {/* Success message */}
              <p className="text-center lg:text-left lg:absolute mt-2 opacity-75 text-sm" id="statusMessage" style={{ display: 'none' }}>{statusMessage}</p>
            </form>

          </div>

        </div>

      </div>
    </section>
  )
}
export default Newsletter;