using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace s_api.Models
{
    public partial class SDBContext : DbContext
    {
        public virtual DbSet<Classes> Classes { get; set; }

        /*protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            #warning To protect potentially sensitive information in your connection string, you should move it out of source code. See http://go.microsoft.com/fwlink/?LinkId=723263 for guidance on storing connection strings.
            optionsBuilder.UseSqlServer(@"data source=.\SQLEXPRESS;Initial Catalog=SDB;Persist Security Info=True;User ID=sa;Password=sa;MultipleActiveResultSets=True;");
        }*/
        public SDBContext(DbContextOptions<SDBContext> options): base(options)
        { }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Classes>(entity =>
            {
                entity.Property(e => e.Name)
                    .IsRequired()
                    .HasMaxLength(50);
            });
        }
    }
}