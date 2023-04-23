using hrPlatform.DAL;
using hrPlatform.Models;
using System;
using System.Collections.Generic;
using System.Linq;


namespace hrPlatform.Services
{
    public class JobCandidateService
    {
        private readonly MyDbContext _context;
        private List<jobCandidate> jobCandidates;
        private int count = 1;
        public JobCandidateService(MyDbContext context)
        {
            _context = context;/*
            _context.Candidates.Add(new jobCandidate 
            {
                ContactNumber = "060-535-8686",
                CandidateName = "Mihailo",
                LastName = "Vojinovic",
                //Id = count++,
                DateOfBirth = "2001-14-10",
                Email = "mihailonvojinovic@gmail.com",
                Skills = new List<CandidateSkill>()
            });
            _context.Candidates.Add(new jobCandidate
            {
                ContactNumber = "060-5354-686",
                CandidateName = "Anastasija",
                LastName = "Vojinovic",
                //Id = count++,
                DateOfBirth = "2000-29-10",
                Email = "anastasija@gmail.com",
                Skills = new List<CandidateSkill>()
            });
            _context.SaveChanges();
            /*jobCandidates = new List<jobCandidate>();
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
            });*/
        }

        public List<jobCandidate> GetAll()
        {
            return _context.Candidates.ToList();
            //return jobCandidates;
        }


        public jobCandidate GetId(int id)
        {
            return _context.Candidates.Where< jobCandidate > (jobCandidate => jobCandidate.Id == id).FirstOrDefault();
            //return jobCandidates.Where<jobCandidate>(jobCandidate => jobCandidate.Id == id).FirstOrDefault();
        }

        public jobCandidate Create(jobCandidate jc)
        {
            jobCandidate newJC = new jobCandidate();
            //newJC.Id = count++;
            newJC.CandidateName = jc.CandidateName;
            newJC.LastName = jc.LastName;
            newJC.Email = jc.Email;
            newJC.ContactNumber = jc.ContactNumber;
            newJC.DateOfBirth = jc.DateOfBirth;
            _context.Candidates.Add(newJC);
            _context.SaveChanges();
            //jobCandidates.Add(newJC);
            return newJC;
        }
        public void Update(int id, jobCandidate jc)
        {
            jobCandidate toBeUpdated = GetId(id);
            toBeUpdated.Email = jc.Email;
            toBeUpdated.ContactNumber = jc.ContactNumber;
            toBeUpdated.DateOfBirth = jc.DateOfBirth;
            toBeUpdated.LastName = jc.LastName;
            toBeUpdated.CandidateName = jc.CandidateName;
            _context.SaveChanges();
        }

        public jobCandidate AddSkill(int candidateId, CandidateSkill cs)
        {
            jobCandidate jc = GetId(candidateId);
            Skill_Candidate sc = new Skill_Candidate();
            sc.CandidateId = candidateId;
            sc.SkillId = cs.Id;
            if(jc.skill_Candidates == null)
            {
                jc.skill_Candidates = new List<Skill_Candidate>();

            }
            jc.skill_Candidates.Add(sc);
            
            _context.SaveChanges();
            return jc;
        }
        public List<jobCandidate> Search(string prompt)
        {
            List<jobCandidate> rez = new List<jobCandidate>();
            foreach(jobCandidate jc in _context.Candidates.ToList())
            {
                if(jc.CandidateName == prompt || jc.LastName == prompt)
                {
                    rez.Add(jc);
                }
                /*foreach(CandidateSkill cs in jc.Skills)
                {
                    if(cs.SkillName == prompt)
                    {
                        rez.Add(jc);
                        break;
                    }
                }*/
            }
            return rez;
        }
        public void Delete(int id)
        {
            //jobCandidates.RemoveAll(x => x.Id == id);
            _context.Candidates.Remove(GetId(id));
            if (id == count - 1)
            {
                count--;
            }
            _context.SaveChanges();
        }

    }
}
