using MicroArchitecture.Account.Domain.Core.Events;

namespace MicroArchitecture.Account.Domain.Accounts.IntegrationEvents
{
  public class UserCreatedEvent : IntegrationEvent
  {
        public string UserId { get; set; }
        public string Email { get; set; }
        public string PhoneNumber { get; set; }
  }
}