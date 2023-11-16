import Link from "next/link";
import Image from "next/image";
import Identicons from "react-identicons";
import { useRouter } from "next/router";

export default function ProjectCard({ card, id }) {
  const router = useRouter();

  return (
    <div id="projects" className="rounded-lg shadow-lg bg-white w-64 m-4">
      <Link href={"/project-details/" + id}>
        <Image
          src="https://i.guim.co.uk/img/media/b8490e7a19a0ec8a0ca9411dab813b064ee954c3/0_82_7195_4318/master/7195.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=db759c44590c7acc920c64abd9902d9a"
          alt="project"
          className="rounded-xl h-64 w-full object-cover "
          width={1000}
          height={1000}
        />
        <div className="p-4">
          <h5>Completion of the First Human Robot</h5>
          <div className="flex flex-col">
            <div className="flex justify-between items-center mb-3">
              <Identicons
                className="rounded-full shadow-md"
                string="random"
                size={15}
              />
              <small className="text-gray-700">0x12...347a</small>
            </div>
            <small className="text-gray-500">2 days left</small>
          </div>
          <div className="w-full bg-gray-300">
            <div
              className="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-l-full "
              style={{ width: "50%" }}
            ></div>
          </div>
          <div className="flex justify-between items-center flex-wrap font-bold mt-4 mb-2 text-gray-500">
            <small>{4} Supporters</small>
            <div>
              <small className="text-blue-500">Open</small>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
