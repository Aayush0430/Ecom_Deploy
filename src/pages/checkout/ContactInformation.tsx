"use client";
import ContactInfoSkeleton from "@/components/ContactInfoSkeleton";
import React, { useEffect, useState } from "react";

const ContactInformation = (props: any) => {
  const { loading, register, paymentmethod, setpaymentmethod } = props;
  if (!register) return <p>Loading...</p>;
  return (
    <div className="w-[100%] h-max bg-white pb-7 mb-20 shadow-md px-10 rounded-2xl">
      {loading ? (
        <ContactInfoSkeleton />
      ) : (
        <>
          <div className="flex items-center justify-between my-4 mb-7">
            <p className="text-xl poppins">Contact Information</p>
          </div>
          <div className="name flex justify-between w-full">
            {/* first name */}
            <div className="inp-field text-sm mb-4 flex flex-col flex-1 mr-5 ">
              <p className="mb-1 text-gray-500">First Name</p>
              <input
                className="w-full border py-1 px-2 rounded-md bg-gray-100"
                {...register("firstName", {
                  required: {
                    value: true,
                    message: "* First name required",
                  },
                })}
              />
              <p className="mr-auto text-xs m-0 text-red-700 mt-1"></p>
            </div>
            {/* last name */}
            <div className="inp-field text-sm mb-4 flex flex-col flex-1 ml-5">
              <p className="mb-1 text-gray-500">Last Name</p>
              <input
                className="w-full border py-1 px-2 rounded-md bg-gray-100"
                {...register("lastName", {
                  required: {
                    value: true,
                    message: "* Last name required",
                  },
                })}
              />
              <p className="mr-auto text-xs m-0 text-red-700 mt-1"></p>
            </div>
          </div>
          {/* email */}
          <div className="inp-field text-sm mb-4 flex flex-col">
            <p className="mb-1 text-gray-500">Email Address</p>
            <input
              className="w-full border py-1 px-2 rounded-md bg-gray-100"
              {...register("email", {
                pattern: {
                  value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                  message: "Invalid Email.",
                },
                required: {
                  value: true,
                  message: "* Email required",
                },
              })}
            />
            <p className="mr-auto text-xs m-0 text-red-700 mt-1"></p>
          </div>
          {/* Phone */}
          <div className="inp-field text-sm mb-4 flex flex-col">
            <p className="mb-1 text-gray-500">Phone</p>
            <input
              className="w-full border py-1 px-2 rounded-md bg-gray-100"
              {...register("phone", {
                pattern: {
                  value: /^\d{10}$/, // Regex for exactly 10 digits
                  message: "Phone number must be exactly 10 digits",
                },
                required: {
                  value: true,
                  message: "* Phone number required",
                },
              })}
            />
            <p className="mr-auto text-xs m-0 text-red-700 mt-1"></p>
          </div>
          {/* address */}
          <div className="inp-field text-sm mb-4 flex flex-col">
            <p className="mb-1 text-gray-500">Address</p>
            <input
              className="w-full border py-1 px-2 rounded-md bg-gray-100"
              {...register("address", {
                required: {
                  value: true,
                  message: "* Address required",
                },
              })}
            />
            <p className="mr-auto text-xs m-0 text-red-700 mt-1"></p>
          </div>
          <div className="city-country flex justi">
            {/* city */}
            <div className="inp-field text-sm mb-4 flex flex-col flex-1 mr-5">
              <p className="mb-1 text-gray-500">City</p>
              <input
                className="w-full border py-1 px-2 rounded-md bg-gray-100"
                {...register("city", {
                  required: {
                    value: true,
                    message: "* City required",
                  },
                })}
              />
              <p className="mr-auto text-xs m-0 text-red-700 mt-1"></p>
            </div>
            {/* country */}
            <div className="inp-field text-sm mb-4 flex flex-col flex-1 ml-5">
              <p className="mb-1 text-gray-500">Country</p>
              <input
                value={"Nepal"}
                className="w-full border py-1 px-2 rounded-md bg-gray-100"
                disabled
              />
            </div>
          </div>
          {/* payment method */}
          <p className="text-gray-500 text-md mb-2">Payment Method</p>
          <div className="payment-method mb-2 flex items-center ">
            <input
              type="radio"
              name="payment"
              id="cod"
              checked={paymentmethod === "cod"}
              onChange={() => setpaymentmethod("cod")}
            />
            <label className="mr-2" htmlFor="cod">
              Cash on Delivery
            </label>
            <input
              type="radio"
              id="esewa"
              checked={paymentmethod === "esewa"}
              onChange={() => setpaymentmethod("esewa")}
            />
            <label htmlFor="esewa">E-sewa</label>
          </div>
          <button
            type="submit"
            className="w-full mt-3 bg-gray-400 p-2 rounded-md text-white hover:bg-gray-500 transition-all ease-in-out duration-200"
          >
            Confirm Order
          </button>
        </>
      )}
    </div>
  );
};

export default ContactInformation;
