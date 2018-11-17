using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Conference.CheckIn.Backend.Model
{
    public class TicketValidationResult
    {
        public bool IsValid { get; set; }

        public string TicketId { get; set; }

        public string FirstName { get; set; }

        public string LastName { get; set; }
    }
}