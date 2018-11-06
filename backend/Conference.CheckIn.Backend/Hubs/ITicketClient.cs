using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Conference.CheckIn.Backend.Hubs
{
    public interface ITicketClient
    {
        Task ReceiveTicket(string message);
    }
}