using Conference.CheckIn.Data.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Conference.CheckIn.Data
{
    public static class DemoDbInitializer
    {
        public static void AddDemoData(this ConferenceDbContext context)
        {
            if (!context.Events.Any())
            {
                var event1 = new Event { Name = "Konferenz 1" };
                var event2 = new Event { Name = "Konferenz 2" };
                context.Add(event1);
                context.Add(event2);
                context.SaveChanges();

                context.Add(new Attendee
                {
                    EventId = event1.Id,
                    TicketId = "7273838383",
                    FirstName = "Martina",
                    LastName = "Maier",
                    Email = "martina.maier@itsnotabug.de",
                    Gender = "female",
                    Birthdate = new DateTime(1990, 10, 1),
                    Created = new DateTime(2018, 01, 01)
                });
                context.Add(new Attendee
                {
                    EventId = event1.Id,
                    TicketId = "7273838384",
                    FirstName = "Martin",
                    LastName = "Maier",
                    Email = "martin.maier@itsnotabug.de",
                    Gender = "male",
                    Birthdate = new DateTime(1990, 06, 1),
                    Created = new DateTime(2018, 01, 01)
                });
                context.Add(new Attendee
                {
                    EventId = event2.Id,
                    TicketId = "7273838385",
                    FirstName = "Hermann",
                    LastName = "Hait",
                    Email = "hermann.hait@itsnotabug.de",
                    Gender = "male",
                    Birthdate = new DateTime(1960, 03, 1),
                    Created = new DateTime(2018, 01, 05)
                });
                context.SaveChanges();
            }
        }
    }
}