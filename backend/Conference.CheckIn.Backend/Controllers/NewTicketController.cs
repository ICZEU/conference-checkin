using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Conference.CheckIn.Backend.Hubs;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.SignalR;

namespace Conference.CheckIn.Backend.Controllers
{
    public class NewTicketController : Controller
    {
        private readonly IHubContext<TicketHub, ITicketClient> _ticketHub;

        public NewTicketController(IHubContext<TicketHub, ITicketClient> ticketHub)
        {
            _ticketHub = ticketHub;
        }

        public async Task<IActionResult> Index()
        {
            await _ticketHub.Clients.All.ReceiveTicket("foo");
            return Content("Added new ticket");
        }
    }
}