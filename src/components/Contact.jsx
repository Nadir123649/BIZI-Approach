import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "../assets/css/index.css";

const Contact = () => {
    return (
        <section className=" md:py-20 bg-[#F2F4F7]">
            <Container>
                <Row className="justify-center">
                    <Col md={8} lg={6} className=" p-8 rounded-lg ">
                        <h2 className="font-extrabold text-[#083C87] text-[28px] md:text-[52px] text-center pb-[20px]">Contact Us</h2>
                        <form className="pt-4">
                            {/* First Name and Last Name */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                                <div>
                                    <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">First Name</label>
                                    <input
                                        id="first-name"
                                        type="text"
                                        placeholder="Enter your first name"
                                        className="w-full cursor-pointer px-[12px] py-[10px] mt-1 border border-[#D1D5DB] rounded-[6px] focus:outline-none"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="last-name" className="block text-[14px] font-medium text-[#111827]">Last Name</label>
                                    <input
                                        id="last-name"
                                        type="text"
                                        placeholder="Enter your last name"
                                        className="w-full cursor-pointer px-[12px] py-[10px] mt-1 border border-[#D1D5DB] rounded-[6px] focus:outline-none"
                                    />
                                </div>
                            </div>

                            {/* Phone Number */}
                            <div className="mb-4">
                                <label htmlFor="phone" className="block text-[14px] font-medium text-[#111827]">Phone Number</label>
                                <input
                                    id="phone"
                                    type="text"
                                    placeholder="Enter your phone number"
                                    className="w-full px-[12px] py-[10px] mt-1 border border-[#D1D5DB] rounded-[6px] focus:outline-none"
                                />
                            </div>

                            {/* Email Address */}
                            <div className="mb-4">
                                <label htmlFor="email" className="block text-[14px] font-medium text-[#111827]">Email Address</label>
                                <input
                                    id="email"
                                    type="email"
                                    placeholder="Enter your email address"
                                    className="w-full px-[12px] py-[10px] mt-1 border border-[#D1D5DB] rounded-[6px] focus:outline-none"
                                />
                            </div>

                            {/* Purpose */}
                            <div className="mb-4">
                                <label htmlFor="purpose" className="block text-[14px] font-medium text-[#111827]">Purpose</label>
                                <select
                                    id="purpose"
                                    className="w-full px-[12px] py-[10px] mt-1 border border-[#D1D5DB] rounded-[6px] focus:outline-none"
                                >
                                    <option value="">Select Purpose</option>
                                    <option value="inquiry">Inquiry</option>
                                    <option value="feedback">Feedback</option>
                                    <option value="support">Support</option>
                                </select>
                            </div>

                            {/* Message */}
                            <div className="mb-4">
                                <label htmlFor="message" className="block text-[14px] font-medium text-[#111827]">Message</label>
                                <textarea
                                    id="message"
                                    rows="4"
                                    placeholder="Your message"
                                    className="w-full px-2 py-2 mt-1 border border-[#D1D5DB] rounded-[6px] focus:outline-none"
                                />
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                className=" py-2 px-4 bg-[#083C87] ease-in-out duration-300 hover:bg-[#06528A] text-white font-semibold rounded-[6px]"
                            >
                                Submit
                            </button>
                        </form>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Contact;
