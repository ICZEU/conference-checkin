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
    public class EventsController : ControllerBase
    {
        private readonly ConferenceDbContext _context;

        public EventsController(ConferenceDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public IEnumerable<Event> GetEvents()
        {
            return _context.Events;
        }
    }
}