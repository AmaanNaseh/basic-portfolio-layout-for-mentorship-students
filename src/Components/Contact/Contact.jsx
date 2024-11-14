import React from "react";

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "1090f30c-2052-4b13-a096-2569d28cd74f");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Message Sent Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div name="contact" className="py-20 bg-[#E4E0E1]">
      <h1 className="text-5xl md:text-7xl lg:text-9xl text-center font-bold pb-8">
        Contact
      </h1>
      <form
        onSubmit={onSubmit}
        className="flex flex-col items-center justify-center gap-8 text-xl md:text-2xl"
      >
        <label className="font-semibold">Enter Name</label>
        <input
          className="border-none outline-none rounded-sm text-center bg-[#fff] p-2"
          type="text"
          name="name"
          placeholder="your name"
          required
        />
        <label className="font-semibold">Enter Email</label>
        <input
          className="border-none outline-none rounded-sm text-center bg-[#fff] p-2"
          type="email"
          name="email"
          placeholder="your email"
          required
        />
        <label className="font-semibold">Enter Message</label>
        <textarea
          className="border-none outline-none rounded-sm resize-none min-w-[305px] bg-[#fff] p-2"
          name="message"
          required
          rows={5}
        ></textarea>

        <button
          className="px-4 py-3 font-semibold bg-black text-white rounded-lg hover:scale-[1.15]"
          type="submit"
        >
          Send Message
        </button>
      </form>
      <span>
        <h1
          className={`my-8 text-center text-lg font-semibold ${
            result === "Message Sent Successfully"
              ? "text-green-600"
              : "text-red-600"
          }`}
        >
          {result}
        </h1>
      </span>
    </div>
  );
};

export default Contact;
