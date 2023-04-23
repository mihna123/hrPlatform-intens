using System.Collections.Generic;

namespace hrPlatform.Models
{
    public class CandidateSkill
    {   
        public int Id { get; set; } 
        public string SkillName { get; set; }

        public List<Skill_Candidate> skill_Candidates { get; set; }
    }
}
