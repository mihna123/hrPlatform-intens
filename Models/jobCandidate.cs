using System.Collections.Generic;

namespace hrPlatform.Models
{
    public class jobCandidate
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string LastName { get; set; }
        public string DateOfBirth { get; set; }
        public string ContactNumber { get; set; }
        public string Email { get; set; }
        public List<CandidateSkill> Skills { get; set; }
        
    }
}
