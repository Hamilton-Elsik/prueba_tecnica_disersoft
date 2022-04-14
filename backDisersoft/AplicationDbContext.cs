using backDisersoft.Models;
using Microsoft.EntityFrameworkCore;

namespace backDisersoft
{
    public class AplicationDbContext: DbContext 
    {
        public DbSet<Preventico> Preventico { get; set; }

        public AplicationDbContext(DbContextOptions<AplicationDbContext> options) : base(options)
        {

        }
    }
}
