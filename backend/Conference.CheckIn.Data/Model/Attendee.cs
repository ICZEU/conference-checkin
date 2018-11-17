using System;
using System.Collections.Generic;
using System.Text;

namespace Conference.CheckIn.Data.Model
{
    public class Attendee
    {
        public int Id { get; set; }
        public int EventId { get; set; }
        public string TicketId { get; set; }
        public bool CheckedIn { get; set; }
        public DateTime? CheckInTime { get; set; }
        public string LastName { get; set; }
        public string FirstName { get; set; }
        public string Email { get; set; }
        public string Gender { get; set; }
        public string Street { get; set; }
        public string Zip { get; set; }
        public string City { get; set; }
        public string Phone { get; set; }
        public string Comment { get; set; }
        public string Room { get; set; }
        public DateTime? Birthdate { get; set; }
        public DateTime Created { get; set; }

        public Event Event { get; set; }
    }
}