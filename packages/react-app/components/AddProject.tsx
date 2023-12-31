import { useState } from "react";
import { FaTimes } from "react-icons/fa";

import Image from "next/image";

import { useContractWrite, usePrepareContractWrite } from "wagmi";
import CrowdyABI from "../../hardhat/artifacts/contracts/Crowdy.sol/Crowdy.json";

import Web3 from "web3";
import { ContractKit } from "@celo/contractkit";

export default function AddProject({ setIsOpen }: any) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [cost, setCost] = useState("");
  const [date, setDate] = useState("");
  const [imageURL, setImageURL] = useState("");

  const toTimestamp = (dateStr: any) => {
    const dateObj = Date.parse(dateStr);
    return dateObj / 1000;
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (!title || !description || !cost || !date || !imageURL) return;

    const params = {
      title,
      description,
      cost,
      expiresAt: toTimestamp(date),
      imageURL,
    };
  };

  const params = {
    title,
    description,
    cost,
    expiresAt: toTimestamp(date),
    imageURL,
  };

  const { config } = usePrepareContractWrite({
    address: "0x77eE1C6f69B8F7A701745fe5a46108e3B7Ac22eB",
    abi: CrowdyABI.abi,
    functionName: "createProject",
    args: [title, description, imageURL, cost, toTimestamp(date)],
  });
  const { write } = useContractWrite(config);

  const onClose = () => {
    setIsOpen(false);
    reset();
  };

  const reset = () => {
    setTitle("");
    setCost("");
    setDescription("");
    setImageURL("");
    setDate("");
  };

  return (
    <div
      className={`fixed top-0 left-0 w-screen h-screen flex
    items-center justify-center bg-black bg-opacity-50
    transform transition-transform duration-300 `}
    >
      <div
        className="bg-white shadow-xl shadow-black
        rounded-xl w-11/12 md:w-2/5 h-7/12 p-6"
      >
        <form
          onSubmit={(e) => {
            e.preventDefault();
            write?.();
          }}
          className="flex flex-col"
        >
          <div className="flex justify-between items-center">
            <p className="font-semibold">Add Project</p>
            <button
              onClick={onClose}
              type="button"
              className="border-0 bg-transparent focus:outline-none"
            >
              <FaTimes />
            </button>
          </div>

          <div className="flex justify-center items-center mt-5">
            <div className="rounded-xl overflow-hidden h-20 w-20">
              <Image
                src={
                  imageURL ||
                  "https://media.wired.com/photos/5926e64caf95806129f50fde/master/pass/AnkiHP.jpg"
                }
                alt="project title"
                className="h-full w-full object-cover cursor-pointer"
                width={100}
                height={100}
              />
            </div>
          </div>

          <div
            className="flex justify-between items-center
          bg-gray-300 rounded-xl mt-5"
          >
            <input
              className="block w-full bg-transparent
            border-0 text-sm text-slate-500 focus:outline-none
            focus:ring-0"
              type="text"
              name="title"
              placeholder="Title"
              onChange={(e) => setTitle(e.target.value)}
              value={title}
              required
            />
          </div>

          <div
            className="flex justify-between items-center
          bg-gray-300 rounded-xl mt-5"
          >
            <input
              className="block w-full bg-transparent
            border-0 text-sm text-slate-500 focus:outline-none
            focus:ring-0"
              type="number"
              step={0.01}
              min={0.01}
              name="cost"
              placeholder="Cost (Celo)"
              onChange={(e) => setCost(e.target.value)}
              value={cost}
              required
            />
          </div>

          <div
            className="flex justify-between items-center
          bg-gray-300 rounded-xl mt-5"
          >
            <input
              className="block w-full bg-transparent
            border-0 text-sm text-slate-500 focus:outline-none
            focus:ring-0"
              type="date"
              name="date"
              placeholder="Expires"
              onChange={(e) => setDate(e.target.value)}
              value={date}
              required
            />
          </div>

          <div
            className="flex justify-between items-center
          bg-gray-300 rounded-xl mt-5"
          >
            <input
              className="block w-full bg-transparent
            border-0 text-sm text-slate-500 focus:outline-none
            focus:ring-0"
              type="url"
              name="imageURL"
              placeholder="Image URL"
              onChange={(e) => setImageURL(e.target.value)}
              value={imageURL}
              required
            />
          </div>

          <div
            className="flex justify-between items-center
          bg-gray-300 rounded-xl mt-5"
          >
            <textarea
              className="block w-full bg-transparent
            border-0 text-sm text-slate-500 focus:outline-none
            focus:ring-0"
              name="description"
              placeholder="Description"
              onChange={(e) => setDescription(e.target.value)}
              value={description}
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="inline-block px-6 py-2.5 bg-blue-600
            text-white font-medium text-md leading-tight
            rounded-full shadow-md hover:bg-blue-700 mt-5"
            disabled={!write}
          >
            Submit Project
          </button>
        </form>
      </div>
    </div>
  );
}
