import { JobCard } from "@/components/job/job.card";
import { JobCreate } from "@/components/job/job.create";

async function getJobs() {
  try {
    const res = await fetch("https://v1.appbackend.io/v1/rows/NXObHC97c8dl", {
      cache: "no-store",
    });
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
    return [];
  }
}

export default async function Page() {
  const { data } = await getJobs();

  return (
    <div className="grid grid-cols-2 p-6">
      <div className="mr-6 grid justify-end space-y-4">
        {data.map((job) => {
          return (
            <JobCard
              key={job._id}
              id={job._id}
              position={job.position}
              company={job.company}
              content={job.content}
            />
          );
        })}
      </div>
      <JobCreate />
    </div>
  );
}
