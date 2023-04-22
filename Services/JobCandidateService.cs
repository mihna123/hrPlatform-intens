using hrPlatform.Models;
using System;
using System.Collections.Generic;
using System.Linq;


namespace hrPlatform.Services
{
    public class JobCandidateService
    {
        private List<jobCandidate> jobCandidates;
        private int count = 1;
        public JobCandidateService()
        {
            jobCandidates = new List<jobCandidate>();
            jobCandidates.Add(new jobCandidate
            { 
                ContactNumber = "060-535-8686",
                Name = "Mihailo",
                LastName = "Vojinovic",
                Id = count++,
                DateOfBirth = "2001-14-10",
                Email = "mihailonvojinovic@gmail.com",
                Skills = new List<CandidateSkill>()
            });
            jobCandidates.Add(new jobCandidate
            {
                ContactNumber = "060-5354-686",
                Name = "Anastasija",
                LastName = "Vojinovic",
                Id = count++,
                DateOfBirth = "2000-29-10",
                Email = "anastasija@gmail.com",
                Skills = new List<CandidateSkill>()
            });
        }

        public List<jobCandidate> GetAll()
        {
            return jobCandidates;
        }


        public jobCandidate GetId(int id)
        {
            return jobCandidates.Where<jobCandidate>(jobCandidate => jobCandidate.Id == id).FirstOrDefault();
        }

        public jobCandidate Create(jobCandidate jc)
        {
            jobCandidate newJC = new jobCandidate();
            newJC.Id = count++;
            newJC.Name = jc.Name;
            newJC.LastName = jc.LastName;
            newJC.Email = jc.Email;
            newJC.ContactNumber = jc.ContactNumber;
            newJC.DateOfBirth = jc.DateOfBirth;
            newJC.Skills = jc.Skills;
            jobCandidates.Add(newJC);
            return newJC;
        }
        public void Update(int id, jobCandidate jc)
        {
            jobCandidate toBeUpdated = GetId(id);
            toBeUpdated.Email = jc.Email;
            toBeUpdated.ContactNumber = jc.ContactNumber;
            toBeUpdated.DateOfBirth = jc.DateOfBirth;
            toBeUpdated.LastName = jc.LastName;
            toBeUpdated.Name = jc.Name;
        }

        public List<jobCandidate> Search(string prompt)
        {
            List<jobCandidate> rez = new List<jobCandidate>();
            foreach(jobCandidate jc in jobCandidates)
            {
                if(jc.Name == prompt || jc.LastName == prompt)
                {
                    rez.Add(jc);
                }
            }
            return rez;
        }
        public void Delete(int id)
        {
            jobCandidates.RemoveAll(x => x.Id == id);
            if (id == count - 1)
            {
                count--;
            }
        }

    }
}
