using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebContactList.Repository;
using WebContactList.Models;
using Microsoft.AspNetCore.Authorization;

namespace WebContactList.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ContactController : ControllerBase
    {
        private readonly IContactRepository<ContactModel> _contactRepository;

        public ContactController(IContactRepository<ContactModel> contactRepository)
        {
            _contactRepository = contactRepository;
        }

        // GET: api/Car
        [HttpGet]
        public IActionResult Get()
        {
            IEnumerable<ContactModel> cars = _contactRepository.GetAll();
            return Ok(cars);
        }

        // GET: api/Car/5
        [HttpGet("{id}", Name = "Get")]
        public IActionResult Get(int id)
        {
            ContactModel car = _contactRepository.Get(id);

            if (car == null)
            {
                return NotFound("Brak wpisu w bazie danych!");
            }

            return Ok(car);
        }

        // POST: api/Car
        [HttpPost, Authorize]
        public IActionResult Post([FromBody] ContactModel car)
        {
            if (car == null)
            {
                return BadRequest("Brak danych!");
            }

            _contactRepository.Add(car);
            return CreatedAtRoute(
                "GET",
                new { Id = car.Id },
                car);
        }

        // PUT: api/Car/5
        [HttpPut("{id}"), Authorize]
        public IActionResult Put(int id, [FromBody] ContactModel car)
        {
            if (car == null)
            {
                return BadRequest("Brak danych!");
            }

            ContactModel recordToUpdate = _contactRepository.Get(id);
            if (recordToUpdate == null)
            {
                return NotFound("Brak wpisu w bazie danych");
            }

            _contactRepository.Update(recordToUpdate, car);
            return NoContent();
        }

        // DELETE: api/ApiWithActions/5
        [HttpDelete("{id}"), Authorize]
        public IActionResult Delete(int id)
        {
            ContactModel car = _contactRepository.Get(id);
            if (car == null)
            {
                return NotFound("Brak wpisu w bazie danych");
            }

            _contactRepository.Delete(car);
            return NoContent();
        }
    }
}
