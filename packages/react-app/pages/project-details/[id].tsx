import Identicons from "react-identicons";
import { FaEthereum } from "react-icons/fa";
import Image from "next/image";

const ProjectDetails = () => {
  return (
    <div className="pt-24 mb-5 px-6 flex justify-center">
      <div className="flex justify-center flex-col md:w-2/3">
        <div
          className="flex justify-start items-start
        sm:space-x-4 flex-wrap"
        >
          <Image
            src="https://i.guim.co.uk/img/media/b8490e7a19a0ec8a0ca9411dab813b064ee954c3/0_82_7195_4318/master/7195.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=db759c44590c7acc920c64abd9902d9a"
            alt="title"
            width={1000}
            height={1000}
            className="rounded-xl h-64 object-cover sm:w-1/3 w-full"
          />

          <div className="flex-1 sm:py-0 py-4">
            <div className="flex flex-col justify-start flex-wrap">
              <h5 className="text-gray-900 text-xl font-medium mb-2">
                Completion of the First Human Robot
              </h5>
              <small className="text-gray-500">2days left</small>
            </div>

            <div className="flex justify-between items-center w-full pt-1">
              <div className="flex justify-start space-x-2">
                <Identicons
                  className="rounded-full shadow-md"
                  string={"@Robotics"}
                  size={15}
                />

                <small className="text-gray-700">@Robotics</small>

                <small className="text-gray-500 font-bold">
                  {3} supporters
                </small>
              </div>

              <div className="font-bold">
                <small className="text-red-500">Expired</small>
              </div>
            </div>

            <div>
              <p className="text-sm font-light mt-2">
                Lorem ipsum dolor sit amet consectetur adipiscing elit fames
                scelerisque, aliquet rhoncus volutpat habitasse facilisi ornare
                senectus eget aenean, ac curabitur cursus suscipit mi litora
                condimentum aliquam. Dis eros eu tellus viverra neque gravida
                cubilia torquent natoque,
              </p>
              <div className="w-full overflow-hidden bg-gray-300 mt-4">
                <div
                  className="bg-green-600 text-xs font-medium
              text-green-100 text-center p-0.5 leading-none
              rounded-l-full h-1 overflow-hidden max-w-full"
                  style={{
                    width: `56%`,
                  }}
                ></div>
              </div>

              <div className="flex justify-between items-center font-bold mt-2">
                <small>13 Celo Raised</small>
                <small className="flex justify-start items-center">
                  <FaEthereum />
                  <span>{35} Celo</span>
                </small>
              </div>

              <div className="flex justify-start items-center space-x-2 mt-4">
                <button
                  type="button"
                  className="inline-block px-6 py-2.5 bg-blue-600
              text-white font-medium text-xs leading-tight uppercase
              rounded-full shadow-md hover:bg-blue-700"
                >
                  Support Project
                </button>

                <button
                  type="button"
                  className="inline-block px-6 py-2.5 bg-orange-600
                        text-white font-medium text-xs leading-tight uppercase
                        rounded-full shadow-md hover:bg-orange-700"
                >
                  Payout
                </button>

                <>
                  <button
                    type="button"
                    className="inline-block px-6 py-2.5 bg-gray-600
                          text-white font-medium text-xs leading-tight uppercase
                          rounded-full shadow-md hover:bg-gray-700"
                  >
                    Edit
                  </button>
                  <button
                    type="button"
                    className="inline-block px-6 py-2.5 bg-red-600
                          text-white font-medium text-xs leading-tight uppercase
                          rounded-full shadow-md hover:bg-red-700"
                  >
                    Delete
                  </button>
                </>

                <button
                  type="button"
                  className="inline-block px-6 py-2.5 bg-gray-600
                        text-white font-medium text-xs leading-tight uppercase
                        rounded-full shadow-md hover:bg-gray-700"
                >
                  Project Closed
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
