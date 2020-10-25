using API.Entities;
using Microsoft.EntityFrameworkCore;

namespace API.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions options) : base(options)
        {
        }
        public DbSet<MtoUser> Users { get; set; }
        public DbSet<MtoEntry> Entries { get; set; }
    }
}