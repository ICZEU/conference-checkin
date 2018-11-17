using Conference.CheckIn.Data;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Conference.CheckIn.Backend.Controllers
{
    [ApiController]
    public class TicketController : ControllerBase
    {
        private readonly ConferenceDbContext _context;

        public TicketController(ConferenceDbContext context)
        {
            _context = context;
        }

        [Route("api/ticket/validate")]
        public IActionResult ValidateTicket(string ticketId)
        {
        }
    }
}