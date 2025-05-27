import Image from "next/image";
import React from "react";
const avatars = [
  "/images/avatars/a1.jpg",
  "/images/avatars/a2.jpg",
  "/images/avatars/a3.jpg",
  "/images/avatars/a4.jpg",
  "/images/avatars/a5.jpg",
];

const projects = [
  {
    name: "Chakra Soft UI Version",
    logo: "icons/l1.svg",
    members: 5,
    budget: "$14,000",
    completion: 60,
  },
  {
    name: "Add Progress Track",
    logo: "icons/l2.svg",
    members: 2,
    budget: "$3,000",
    completion: 10,
  },
  {
    name: "Fix Platform Errors",
    logo: "icons/l3.svg",
    members: 2,
    budget: "Not Set",
    completion: 100,
  },
  {
    name: "Launch our Mobile App",
    logo: "icons/l4.svg",
    members: 4,
    budget: "$32,000",
    completion: 100,
  },
  {
    name: "Add the New Pricing Page",
    logo: "icons/l5.svg",
    members: 5,
    budget: "$400",
    completion: 25,
  },
  {
    name: "Redesign New Online Shop",
    logo: "icons/l6.svg",
    members: 2,
    budget: "$7,600",
    completion: 40,
  },
];
const Projects = () => {
  return (
    <div className="col-span-12 lg:col-span-8 gradient_bg p-5 rounded-card">
      <h2 className="text-lg font-bold mb-1">Projects</h2>
      <span className="text-[#A0AEC0] text-sm flex items-center gap-1">
        <Image src="/icons/circle.svg" alt="checkmark" width={17} height={17} />{" "}
        30 done this month
      </span>
      <table width={"100%"} className="mt-5">
        <thead className="border-b border-[#56577A]">
          <tr className="text-left text-[10px] text-[#A0AEC0]">
            <th className="py-2">COMPANIES</th>
            <th className="py-2">MEMBERS</th>
            <th className="py-2">BUDGET</th>
            <th className="py-2">COMPLETION</th>
          </tr>
        </thead>
        <tbody className="text-sm">
          {projects.map((project, index) => (
            <tr key={index} className="border-b border-[#56577A]">
              <td className="py-4">
                <div className="flex items-center gap-4">
                  <Image
                    src={project.logo}
                    width={20}
                    height={20}
                    alt={project.name}
                  />
                  <span>{project.name}</span>
                </div>
              </td>
              <td className="py-4 text-green-500">
                <div className="flex items-center">
                  {avatars.slice(0, project.members).map((member, index) => (
                    <Image
                      key={index}
                      alt={`member-${index}`}
                      src={member}
                      width={20}
                      height={20}
                      className={`-ml-[10px] first:ml-0 aspect-square rounded-full border-2 border-[#121241] z-${
                        index + 10
                      }`}
                    />
                  ))}
                </div>
              </td>
              <td className="py-4 font-bold">{project.budget}</td>
              <td className="py-4">
                <label className="block font-bold" htmlFor={project.name}>
                  {project.completion}%
                </label>
                <div className="w-full bg-[#2D2E5F] h-[3px] rounded-full overflow-hidden mt-1">
                  <div
                    className="h-full bg-[#0075FF] transition-all duration-300"
                    style={{ width: `${project.completion}%` }}
                  />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Projects;
