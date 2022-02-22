﻿using MassTransit;
using MicroArchitecture.Account.Domain.Services.UserManager;
using MicroArchitecture.Account.Domain.Accounts.IntegrationEvents;
using System.Threading.Tasks;

namespace MicroArchitecture.Account.Application.Accounts.IntegrationEvents
{
    public class ActivateUserEventConsumer : IConsumer<ActivateUserEvent>
    {
        private readonly IUserManager _userManager;

        public ActivateUserEventConsumer(IUserManager userManager)
        {
            _userManager = userManager;
        }

        public async Task Consume(ConsumeContext<ActivateUserEvent> context)
        {
            var message = context.Message;
            await _userManager.ActivateUserAsync(message.UserName);
        }
    }
}