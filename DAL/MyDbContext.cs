using hrPlatform.Models;
using Microsoft.EntityFrameworkCore;

namespace hrPlatform.DAL
{
    public class MyDbContext : DbContext
    {
        public MyDbContext(DbContextOptions<MyDbContext> options) : base(options) { }

        public DbSet<jobCandidate> Candidates { get; set; }
        public DbSet<CandidateSkill> Skills { get; set; }

        public DbSet<Skill_Candidate> skill_Candidates { get; set; }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.Entity<Skill_Candidate>()
                .HasOne(sc => sc.Candidate)
                .WithMany(sc => sc.skill_Candidates)
                .HasForeignKey(sc => sc.CandidateId);

            modelBuilder.Entity<Skill_Candidate>()
                .HasOne(sc => sc.Skill)
                .WithMany(sc => sc.skill_Candidates)
                .HasForeignKey(sc => sc.SkillId);

            /*
            modelBuilder.Entity<jobCandidate>()
                .HasKey(jobCandidate => jobCandidate.Id);
            modelBuilder.Entity<CandidateSkill>()
                .HasKey(CandidateSkill => CandidateSkill.Id);
            modelBuilder.Entity<jobCandidate>()
                .HasMany(e => e.Skills)
                .WithMany(j => j.Candidates)
                .UsingEntity(j => j.ToTable("JobSkillCon"));
              */  
        }

    }
}
