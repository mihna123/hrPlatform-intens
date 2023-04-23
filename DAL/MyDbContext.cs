using Microsoft.EntityFrameworkCore;

namespace hrPlatform.DAL
{
    public class MyDbContext : DbContext
    {
        public MyDbContext(DbContextOptions<MyDbContext> options) : base(options) { }


    }
}
