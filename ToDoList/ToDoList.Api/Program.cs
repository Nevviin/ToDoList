using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ToDoList.Api.Models;

namespace ToDoList.Api
{
    public class Program
    {
        public static void Main(string[] args)
        {
            // CreateHostBuilder(args).Build().Run();

            //Get the IWebhost which will host this application 
            var host = CreateHostBuilder(args).Build();

            //find the service layer with in our scope.
            using (var scope = host.Services.CreateScope())
            {

                //3. Get the instance of ToListInMemoryContext in our services layer
                var services = scope.ServiceProvider;
                //var context = services.GetRequiredService<ToDoInMemoryContext>();
                ToDoInitializer.InitializeData(services);
                host.Run();

            }
        }

        public static IHostBuilder CreateHostBuilder(string[] args) =>
            Host.CreateDefaultBuilder(args)
                .ConfigureWebHostDefaults(webBuilder =>
                {
                    webBuilder.UseStartup<Startup>();
                });
    }
}
