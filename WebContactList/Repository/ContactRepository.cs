using WebContactList.Models;
using System.Collections.Generic;
using System.Linq;

namespace WebContactList.Repository
{
    public class ContactRepository : IContactRepository<ContactModel>
    {
        private readonly ContactContext _contactContext;

        public ContactRepository(ContactContext contactContext)
        {
            _contactContext = contactContext;
        }

        public void Add(ContactModel entity)
        {
            _contactContext.Contacts.Add(entity);
            _contactContext.SaveChanges();
        }

        public void Delete(ContactModel entity)
        {
            _contactContext.Contacts.Remove(entity);
            _contactContext.SaveChanges();
        }

        public ContactModel Get(int id)
        {
            return _contactContext.Contacts.FirstOrDefault(a => a.Id == id);
        }

        public IEnumerable<ContactModel> GetAll()
        { 
            return _contactContext.Contacts.ToList();
        }

    public void Update(ContactModel dbEntity, ContactModel entity)
    {
        dbEntity.Name = entity.Name;
        dbEntity.Surname = entity.Surname;
        dbEntity.Email = entity.Email;
        dbEntity.Password = entity.Password;
        dbEntity.Category = entity.Category;
        dbEntity.Phone = entity.Phone;
        dbEntity.BirthDate = entity.BirthDate;

        _contactContext.SaveChanges();

    }
}
}
