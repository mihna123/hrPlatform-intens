using hrPlatform.DAL;
using hrPlatform.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography.X509Certificates;

namespace hrPlatform.Services
{
    public class CandidateSkillService
    {
        private MyDbContext _context;
        private List<CandidateSkill> skillList = new List<CandidateSkill>();
        private int count = 1;
        public CandidateSkillService(MyDbContext context)
        {
            _context = context; /*
            _context.Skills.Add(new CandidateSkill { SkillName = "Java programming" });
            _context.Skills.Add(new CandidateSkill { SkillName = "C# programming" });
            _context.Skills.Add(new CandidateSkill { SkillName = "Database design" });
            _context.Skills.Add(new CandidateSkill { SkillName = "English language" });
            _context.Skills.Add(new CandidateSkill { SkillName = "Russian language" });
            _context.Skills.Add(new CandidateSkill { SkillName = "German language" });
            _context.SaveChanges();
            /*
            skillList.Add(new CandidateSkill { Id = count++, SkillName = "Java programming" });
            skillList.Add(new CandidateSkill { Id = count++, SkillName = "C# programming" });
            skillList.Add(new CandidateSkill { Id = count++, SkillName = "Database design" });
            skillList.Add(new CandidateSkill { Id = count++, SkillName = "English language" });
            skillList.Add(new CandidateSkill { Id = count++, SkillName = "Russian language" });
            skillList.Add(new CandidateSkill { Id = count++, SkillName = "German language" });
            */
        }

        public List<CandidateSkill> GetAll()
        {
            return _context.Skills.ToList();
        }

        public CandidateSkill GetId(int id)
        {
            return _context.Skills.Where<CandidateSkill>(skill => skill.Id == id).FirstOrDefault();
        }

        public CandidateSkill Create(CandidateSkill skill)
        {
            CandidateSkill newSkill = new CandidateSkill();
            //newSkill.Id = count++;
            newSkill.SkillName = skill.SkillName;
            //skillList.Add(newSkill);
            _context.Skills.Add(newSkill);
            _context.SaveChanges();
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
            _context.SaveChanges();
        }

        public void Delete(int id)
        {
            //skillList.RemoveAll(x => x.Id == id);
            _context.Skills.Remove(GetId(id));
            if (id == count - 1)
            {
                count--;
            }
            _context.SaveChanges();
        }
    }
}
