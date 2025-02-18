import React, { useState } from "react";
import { IoSearchSharp } from "react-icons/io5";
import useGetConversations from "../hooks/useGetConversations";
import toast from "react-hot-toast";
import useConversation from "../../zustand/useConversation";
const SearchInput = () => {
  const [search, setSearch] = useState("");
  const { setSelectedConversation } = useConversation();
  const { conversations } = useGetConversations();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!search) return;
    if (search.length < 3) {
      return toast.error("Search term must be at least 3 characters long");
    }
    const conversation = conversation.find((c) =>
      c.fullname.toLowerCase().includes(search.toLowerCase())
    );
    if (conversation) {
      setSelectedConversation(conversation);
      setSearch("");
    } else toast.error("No such user found!");
  };
  console.log("Search Input rendered successfully");
  return (
    <form className="flex items-center form-control mt-2 me-4 w-fit p-0 m-0  ">
      <input
        type="text"
        placeholder="Search"
        className="input input-bordered rounded-full bg-gray-100 m-3 h-12 mb-0 max-w-[217px]"
      />
      <button
        type="submit"
        className="btn btn-circle bg-emerald-900 size-11 text-white absolute top-5 left-48 m-30"
      >
        <IoSearchSharp className="w-5 outline-none" />
      </button>
      <div className="divider text-success h-0 border border-gray bg-gray-700 mb-1"></div>
    </form>
  );
};
export default SearchInput;
