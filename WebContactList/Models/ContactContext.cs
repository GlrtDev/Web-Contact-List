using Microsoft.EntityFrameworkCore;

namespace WebContactList.Models
{
    public class ContactContext : DbContext
    {
        public DbSet<ContactModel> Contacts { get; set; }

        public ContactContext(DbContextOptions options) : base(options)
        {

        }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<ContactModel>().HasData(
                new ContactModel
                {
                    Id = 1,
                    Name = "Audi",
                    Surname = "RS6",
                    Email = "V10 5.2",
                    Password = "V10 5.2",
                    Category = CategoryEnum.PRIVATE,
                    Phone = 120000,
                    BirthDate = new System.DateTime(2010, 3, 24),
                },
                new ContactModel
                {
                    Id = 2,
                    Name = "AWWWdi",
                    Surname = "RTTT6",
                    Email = "V10 5.2",
                    Password = "V10 5.2",
                    Category = CategoryEnum.PRIVATE,
                    Phone = 120000,
                    BirthDate = new System.DateTime(2010, 3, 24),
                }); ;
        }
    }
}
