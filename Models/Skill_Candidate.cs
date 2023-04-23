namespace hrPlatform.Models
{
    public class Skill_Candidate
    {
        public int Id { get; set; }
        public int SkillId { get; set; }
        public CandidateSkill Skill { get; set; }
        public int CandidateId { get; set; }
        public jobCandidate Candidate { get; set; }

    }
}
