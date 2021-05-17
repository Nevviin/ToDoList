using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ToDoList.Api.Models
{
    public class ToDoInitializer
    {
        public static void InitializeData(IServiceProvider serviceProvider)
        {
            using
            (
            var context = new ToDoInMemoryContext(serviceProvider.GetRequiredService<DbContextOptions<ToDoInMemoryContext>>()))
            {
                if (context.ToDos.Any())
                {
                    return;
                }

                context.ToDos.AddRange(
                    new ToDo { Id = 1, IsCompleted = false, Item = "Day out", CreatedDate = DateTime.Today },
                    new ToDo { Id = 2, IsCompleted = false, Item = "Swimming", CreatedDate = DateTime.Today.AddDays(3) },
                    new ToDo { Id = 3, IsCompleted = false, Item = "Biking", CreatedDate = DateTime.Today.AddDays(4) },
                    new ToDo { Id = 4, IsCompleted = true, Item = "Horse Riding", CreatedDate = DateTime.Today.AddDays(5) }
                    );
                context.SaveChanges();
            }
        }
    }
}
