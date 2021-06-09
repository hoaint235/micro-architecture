﻿using MicroArchitecture.Account.Infrastructure.Database.Models;

namespace MicroArchitecture.Account.Infrastructure.RawQueries
{
    public class RoleQueries
    {
        public static RawQuery GetRoles()
        {
            return new RawQuery
            {
                Query = $@"SELECT r.Id
                                , r.Name
                                , r.Description
                                , r.CreatedDate
                                , r.CreatedBy
                           From Roles r
                           WHERE r.IsDeleted = 0",
            };
        }
    }
}
