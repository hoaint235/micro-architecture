﻿using MediatR;
using MicroArchitecture.API.Domain.Accounts;
using MicroArchitecture.API.Infrastructure.Commons.Models;
using System;
using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;

namespace MicroArchitecture.API.Application.Accounts.Commands
{
    public class UpdateRole
    {
        public class Command : IRequest<ApiResult<Unit>>
        {
            public Guid UserId { get; set; }
            public List<Guid> RoleIds { get; set; }
        }

        public class Handler : IRequestHandler<Command, ApiResult<Unit>>
        {
            private readonly IAccountRepository _accountRepository;

            public Handler(IAccountRepository accountRepository)
            {
                _accountRepository = accountRepository;
            }

            public async Task<ApiResult<Unit>> Handle(Command request, CancellationToken cancellationToken)
            {
                var user = await _accountRepository.GetAsync(request.UserId);
                user.UpdateRoles(request.RoleIds);
                _accountRepository.Update(user);
                await _accountRepository.UnitOfWork.CommitAsync();

                return ApiResult<Unit>.Ok(Unit.Value);
            }
        }
    }
}
