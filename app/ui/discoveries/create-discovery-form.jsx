"use client";
import Image from "next/image";

export default function CreateDiscovery() {
  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const message = formData.get("message");
    console.log(message);
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="text-center">
        <Image
          src="/search.png"
          alt="Search Icon"
          className="w-60 h-60 mb-4 mx-auto m-0"
          width="100"
          height="100"
        />
        <h1 className="text-3xl mb-4 p-2">Create discovery</h1>
        <form onSubmit={handleSubmit}>
          <input
            name="message"
            placeholder="Give me a topic"
            className="border border-gray-300 p-2 rounded-md mb-4"
          ></input>
          <button
            type="submit"
            className="bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 px-4 py-2 rounded-md"
          >
            Discover!
          </button>
        </form>
      </div>
    </div>
  );
}
