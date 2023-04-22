using hrPlatform.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography.X509Certificates;

namespace hrPlatform.Services
{
    public class CandidateSkillService
    {
        private List<CandidateSkill> skillList = new List<CandidateSkill>();
        private int count = 0;
        public CandidateSkillService()
        {
            skillList.Add(new CandidateSkill { Id = count++, SkillName = "Java programming" });
            skillList.Add(new CandidateSkill { Id = count++, SkillName = "C# programming" });
            skillList.Add(new CandidateSkill { Id = count++, SkillName = "Database design" });
            skillList.Add(new CandidateSkill { Id = count++, SkillName = "English language" });
            skillList.Add(new CandidateSkill { Id = count++, SkillName = "Russian language" });
            skillList.Add(new CandidateSkill { Id = count++, SkillName = "German language" });
        }

        public List<CandidateSkill> GetAll()
        {
            return skillList;
        }

        public CandidateSkill GetId(int id)
        {
            return skillList.Where<CandidateSkill>(skill => skill.Id == id).FirstOrDefault();
        }

        public CandidateSkill Create(CandidateSkill skill)
        {
            CandidateSkill newSkill = new CandidateSkill();
            newSkill.Id = count++;
            newSkill.SkillName = skill.SkillName;
            skillList.Add(newSkill);
            return newSkill;
        }

        public void Update(int id, CandidateSkill skill)
        {
            CandidateSkill toBeUpdated = GetId(id);
            if (toBeUpdated != null)
            {
                toBeUpdated.SkillName = skill.SkillName;
            }
            else
            {
                Console.WriteLine("Id {0} does not exist", id);
            }
        }

        public void Delete(int id)
        {
            skillList.RemoveAll(x => x.Id == id);
            if (id == count - 1)
            {
                count--;
            }
        }
    }
}
