using System;
using System.Collections.Generic;
using System.Text;

namespace Conference.CheckIn.Data.Model
{
    public class Event
    {
        public int Id { get; set; }
        public string Name { get; set; }

        public List<Attendee> Attendees { get; set; }
    }
}