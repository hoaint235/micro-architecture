﻿using AutoMapper;
using MediatR;
using MicroArchitecture.Account.Application.User.Models;
using MicroArchitecture.Account.Domain.Users;
using MicroArchitecture.Account.Infrastructure.Commons.Models;
using System.Threading;
using System.Threading.Tasks;

namespace MicroArchitecture.Account.Application.User.Queries.Handlers
{
    public class GetByIdHandler : IRequestHandler<GetById, ApiResult<UserDto>>
    {
        private readonly IUserRepository _userRepository;
        private readonly IMapper _mapper;

        public GetByIdHandler(IUserRepository userRepository)
        {
            _userRepository = userRepository;
        }

        public async Task<ApiResult<UserDto>> Handle(GetById request, CancellationToken cancellationToken)
        {
            var user = await _userRepository.GetAsync(request.UserId);
            return ApiResult<UserDto>.Ok(_mapper.Map<UserDto>(user));
        }
    }
}