"use client";
import { AiOutlineHome } from "react-icons/ai";
import { GiConfirmed } from "react-icons/gi";
import { useRouter } from "next/navigation";
import { TbFaceIdError } from "react-icons/tb";
import Link from "next/link";
import { CircularProgress } from "@nextui-org/react";
type VerifiedEmailProps = {
  message: string;
  isFailed: boolean;
  isLoading: boolean;
};
const VerifiedEmail = function ({
  message,
  isFailed,
  isLoading,
}: VerifiedEmailProps) {
  return (
    <>
      {isLoading ? (
        <div className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
          <div className="text-center ring-1 rounded-10 ring-dark p-10">
            <CircularProgress aria-label="Loading..." />
          </div>
        </div>
      ) : (
        <div className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
          <div className="text-center ring-1 rounded-10 ring-dark p-10">
            <p className="text-base flex justify-center font-semibold text-indigo-600">
              {isFailed ? (
                <TbFaceIdError className="h-32 w-32 mb-4 text-dark" />
              ) : (
                <GiConfirmed className="h-32 w-32 mb-4 text-dark" />
              )}
            </p>
            <h1 className="mt-4 mb-5 text-3xl font-bold tracking-tight text-dark sm:text-5xl">
              {message}
            </h1>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="/"
                type="button"
                className="rounded-md flex justify-center ring-1 ring-dark text-center items-center gap-2 bg-white text-dark px-3.5 py-2.5 text-sm font-semibold  shadow-sm hover:bg-white hover:ring-1 hover:ring-dark hover:text-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-dark"
              >
                <span> Go to home</span>
                <AiOutlineHome
                  className="-mr-0.5 h-5 w-5 text-dark"
                  aria-hidden="true"
                />
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default VerifiedEmail;
