using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ToDoList.Api.Models
{
    public class ToDoInMemoryContext : DbContext
    {
        public ToDoInMemoryContext(DbContextOptions<ToDoInMemoryContext> options) : base(options)
        {

        }
        public DbSet<ToDo> ToDos { get; set; }
    }
}
