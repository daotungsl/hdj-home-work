using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace hdj_home_work.Models
{
    public class hdj_home_workContext : DbContext
    {
        public hdj_home_workContext (DbContextOptions<hdj_home_workContext> options)
            : base(options)
        {
        }

        public DbSet<hdj_home_work.Models.Info> Info { get; set; }
    }
}
