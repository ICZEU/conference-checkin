using Conference.CheckIn.Data.Model;
using Microsoft.EntityFrameworkCore;
using System;

namespace Conference.CheckIn.Data
{
    public class ConferenceDbContext : DbContext
    {
        public DbSet<Event> Events { get; set; }
        public DbSet<Attendee> Attendees { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlite("Data Source=conference-checkin.db");
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Attendee>(entity =>
            {
                entity.Property(x => x.TicketId).HasMaxLength(50).IsRequired();
                entity.HasIndex(x => x.TicketId).IsUnique();
                entity.Property(x => x.LastName).IsRequired().HasMaxLength(255);
                entity.Property(x => x.FirstName).IsRequired().HasMaxLength(255);
                entity.Property(x => x.Email).IsRequired().HasMaxLength(255);
                entity.Property(x => x.Gender).HasMaxLength(255);
                entity.Property(x => x.Street).HasMaxLength(255);
                entity.Property(x => x.Zip).HasMaxLength(255);
                entity.Property(x => x.City).HasMaxLength(255);
                entity.Property(x => x.Phone).HasMaxLength(255);
                entity.Property(x => x.Comment);
                entity.Property(x => x.Room).HasMaxLength(255);
            });
            modelBuilder.Entity<Event>(entity =>
            {
                entity.Property(x => x.Name).IsRequired();
            });
        }
    }
}