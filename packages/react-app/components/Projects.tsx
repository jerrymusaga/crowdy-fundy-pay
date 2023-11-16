import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <div className="flex flex-col px-6">
      <div className="flex justify-center items-center flex-wrap">
        {Array(6)
          .fill()
          .map((card, i) => (
            <ProjectCard key={i} />
          ))}
      </div>
    </div>
  );
}
