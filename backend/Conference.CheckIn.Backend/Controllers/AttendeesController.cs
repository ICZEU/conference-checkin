using Conference.CheckIn.Data;
using Conference.CheckIn.Data.Model;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Conference.CheckIn.Backend.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AttendeesController : ControllerBase
    {
        private readonly ConferenceDbContext _context;

        public AttendeesController(ConferenceDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public IEnumerable<Attendee> GetAttendees()
        {
            return _context.Attendees;
        }
    }
}