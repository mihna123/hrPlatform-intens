using hrPlatform.Models;
using Microsoft.EntityFrameworkCore;

namespace hrPlatform.DAL
{
    public class MyDbContext : DbContext
    {
        public MyDbContext(DbContextOptions<MyDbContext> options) : base(options) { }

        public DbSet<jobCandidate> JobCandidates { get; set; }
        public DbSet<CandidateSkill> CandidateSkills { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.Entity<jobCandidate>()
                .HasKey(jobCandidate => jobCandidate.Id);
            modelBuilder.Entity<CandidateSkill>()
                .HasKey(CandidateSkill => CandidateSkill.Id);
            modelBuilder.Entity<jobCandidate>()
                .HasMany(e => e.Skills)
                .WithMany("JobCandidates")
                .UsingEntity(j => j.ToTable("JobCandidateSkill"));
                
        }

    }
}
