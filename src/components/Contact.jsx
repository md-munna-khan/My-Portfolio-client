import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import emailjs from '@emailjs/browser';

export default function Contact() {
  const form = useRef();
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_jatkb5q",
         "template_9cm39vo",
          form.current, {
        publicKey: "sW3GULe8T7Z0LRlHr"
   } )
      .then(
        () => {
          setStatus("success");
        },
        (error) => {
          setStatus("error", error);
        }
      );
  };

  return (
    <section id="contact" className="py-20 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold ">Contact Me</h2>
          <div className="mt-2 h-1 w-20 bg-blue-600 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <h3 className="text-xl font-semibold ">Get in Touch</h3>
            <p className="">
              Feel free to reach out if you're looking for a developer, have a
              question, or just want to connect.
            </p>

            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <Mail className="w-6 h-6 " />
                <span className="">mk8761174@gmail.com</span>
              </div>
              <div className="flex items-center space-x-4">
                <Phone className="w-6 h-6 " />
                <span className="">(+880)1954288782</span>
              </div>
              <div className="flex items-center space-x-4">
                <MapPin className="w-6 h-6 " />
                <span className="">Gulshan,Badda,Dahaka-1212 , Bangladesh</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <form onSubmit={sendEmail} ref={form} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium ">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="form_name"
                  className="mt-1 block p-2 w-full rounded-md  shadow-sm   border-white bg-gray-400"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="form_email"
                  className="mt-1 p-2 block w-full border-white bg-gray-400 rounded-md shadow-sm  "
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium ">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="mt-1 block w-full p-2 border-white bg-gray-400  rounded-md  "
                  required
                />
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="inline-flex bg-green-500 rounded-lg items-center px-6 py-3 transition-colors"
                disabled={status === "sending"}
              >
                <Send className="w-5 h-5 mr-2" />
                {status === "sending" ? "Sending..." : "Send Message"}
              </motion.button>
              {status === "success" && (
                <p className="text-green-600">Message sent successfully!</p>
              )}
              {status === "error" && (
                <p className="text-red-600">Failed to send message. Please try again.</p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
