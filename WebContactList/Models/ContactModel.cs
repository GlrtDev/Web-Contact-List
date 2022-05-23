using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

public enum CategoryEnum { PUBLIC, PRIVATE, OTHER }

namespace WebContactList.Models
{
    [Table("Contacts")]
    public class ContactModel
    {
        [Key]
        public int Id { get; set; }

        public string Name { get; set; }

        public string Surname { get; set; }

        public string Email { get; set; }

        public string Password { get; set; }

        public CategoryEnum Category { get; set; }

        public int Phone { get; set; }

        public DateTime BirthDate { get; set; }

    }
}
